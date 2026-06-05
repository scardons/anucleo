import { useEffect, useRef, useState } from "react";
import {
  X,
  Camera,
  Trash2,
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Eye,
  EyeOff,
  Bell,
  Shield,
  Save,
  Check,
  Circle,
} from "lucide-react";

type ActiveTab = "personal" | "preferences" | "security";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ProfileData {
  fullName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  notificationsEnabled: boolean;
  soundEnabled: boolean;
  urgentOnly: boolean;
}

const countries = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "PR", name: "Puerto Rico", flag: "🇵🇷" },
  { code: "DO", name: "Dominican Republic", flag: "🇩🇴" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
];

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>("personal");
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const [form, setForm] = useState<ProfileData>({
    fullName: "",
    lastName: "",
    email: "",
    role: "",
    phone: "",
    country: "US",
    state: "",
    city: "",
    notificationsEnabled: true,
    soundEnabled: true,
    urgentOnly: false,
  });

  const [savedForm, setSavedForm] = useState<ProfileData | null>(null);

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPwd, setShowNewPwd] = useState(false);
  const [showConfirmPwd, setShowConfirmPwd] = useState(false);
  const [savingPwd, setSavingPwd] = useState(false);
  const [savingProfile, setSavingProfile] = useState(false);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  useEffect(() => {
    if (!isOpen) return;
    const saved = localStorage.getItem("empProfileData");
    const savedImg = localStorage.getItem("empProfileImage");
    const name = localStorage.getItem("empName") || "Employee";
    const email = localStorage.getItem("empEmail") || "";
    const role = localStorage.getItem("empRole") || "staff";

    const base: ProfileData = saved
      ? { ...JSON.parse(saved), email, role }
      : { fullName: name, lastName: "", email, role, phone: "", country: "US", state: "", city: "", notificationsEnabled: true, soundEnabled: true, urgentOnly: false };

    setForm(base);
    setSavedForm(base);
    if (savedImg) setProfileImage(savedImg);
    setActiveTab("personal");
    setNewPassword("");
    setConfirmPassword("");
  }, [isOpen]);

  const hasChanges = savedForm && (
    form.fullName !== savedForm.fullName ||
    form.lastName !== savedForm.lastName ||
    form.phone !== savedForm.phone ||
    form.country !== savedForm.country ||
    form.state !== savedForm.state ||
    form.city !== savedForm.city ||
    form.notificationsEnabled !== savedForm.notificationsEnabled ||
    form.soundEnabled !== savedForm.soundEnabled ||
    form.urgentOnly !== savedForm.urgentOnly
  );

  const initials = form.fullName.split(" ").slice(0, 2).map((n) => n[0]).join("").toUpperCase() || "U";

  const handleImageFile = (file: File) => {
    if (!file.type.startsWith("image/")) { showToast("Please select a valid image.", "error"); return; }
    if (file.size > 5 * 1024 * 1024) { showToast("Image must be less than 5MB.", "error"); return; }
    const reader = new FileReader();
    reader.onloadend = () => {
      const data = reader.result as string;
      localStorage.setItem("empProfileImage", data);
      setProfileImage(data);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleImageFile(file);
  };

  const removeImage = () => {
    localStorage.removeItem("empProfileImage");
    setProfileImage(null);
  };

  const saveProfile = () => {
    if (!form.fullName.trim()) {
      showToast("Name is required.", "error");
      return;
    }
    localStorage.setItem("empProfileData", JSON.stringify(form));
    localStorage.setItem("empName", form.fullName);
    setSavedForm({ ...form });
    showToast("Profile updated successfully!", "success");
  };

  const savePassword = () => {
    if (newPassword.length < 6) { showToast("Password must be at least 6 characters.", "error"); return; }
    if (newPassword !== confirmPassword) { showToast("Passwords do not match.", "error"); return; }
    showToast("Password updated successfully (local only).", "success");
    setNewPassword("");
    setConfirmPassword("");
  };

  const passwordReqs = [
    { label: "At least 6 characters", valid: newPassword.length >= 6 },
    { label: "One uppercase letter", valid: /[A-Z]/.test(newPassword) },
    { label: "One lowercase letter", valid: /[a-z]/.test(newPassword) },
    { label: "One number", valid: /[0-9]/.test(newPassword) },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="fixed left-1/2 top-1/2 z-50 flex max-h-[90vh] w-[720px] max-w-[94vw] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl -translate-x-1/2 -translate-y-1/2">
        {toast && (
          <div className={`absolute right-4 top-4 z-50 rounded-xl px-4 py-2.5 text-sm font-semibold text-white shadow-lg ${toast.type === "success" ? "bg-emerald-500" : "bg-red-500"}`}>
            {toast.message}
          </div>
        )}

        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleImageFile(f); }} />

        {/* Header */}
        <div className="relative border-b border-slate-200 px-6 py-5">
          <button onClick={onClose} className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-all">
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`group relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 transition ${isDragging ? "border-dashed border-blue-400 bg-blue-50" : "border-slate-100 bg-slate-100"}`}
            >
              {profileImage ? (
                <img src={profileImage} alt="" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-slate-400">{initials}</div>
              )}
              <div className="absolute inset-0 hidden flex-col items-center justify-center bg-black/50 text-white text-xs font-semibold group-hover:flex">
                <Camera className="w-4 h-4 mb-1" />
                Change
              </div>
            </button>

            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold text-slate-900">{form.fullName} {form.lastName}</h2>
              <p className="mt-0.5 text-sm text-slate-500 capitalize">{form.role} • {form.email}</p>
              <div className="mt-2 flex gap-2">
                <span className="rounded-full bg-blue-50 px-3 py-0.5 text-xs font-semibold text-blue-700 border border-blue-200">Active</span>
                {hasChanges && <span className="rounded-full bg-amber-50 px-3 py-0.5 text-xs font-semibold text-amber-700 border border-amber-200">Unsaved</span>}
              </div>
            </div>

            {profileImage && (
              <button onClick={removeImage} className="rounded-xl border border-red-200 px-3 py-2 text-sm font-semibold text-red-500 hover:bg-red-50 transition-all">
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6">
          {[
            { id: "personal" as const, label: "Personal Info", icon: User },
            { id: "preferences" as const, label: "Preferences", icon: Bell },
            { id: "security" as const, label: "Security", icon: Lock },
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 border-b-2 px-4 py-3.5 text-sm font-semibold transition-all ${activeTab === tab.id ? "border-blue-600 text-blue-700" : "border-transparent text-slate-500 hover:text-blue-600"}`}>
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {activeTab === "personal" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Personal Information</h3>
                <p className="text-sm text-slate-500 mt-1">Update your personal details and contact information.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-600"><User className="w-4 h-4" /></div>
                  <div><p className="font-semibold text-slate-900">Basic Information</p><p className="text-xs text-slate-500">Name, email and role.</p></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> First Name</label>
                    <input type="text" value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><User className="w-3.5 h-3.5 text-slate-400" /> Last Name</label>
                    <input type="text" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><Mail className="w-3.5 h-3.5 text-slate-400" /> Email</label>
                    <input type="email" value={form.email} disabled className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm text-slate-500 outline-none cursor-not-allowed" />
                    <p className="text-xs text-slate-400 mt-1">Email cannot be changed.</p>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><Shield className="w-3.5 h-3.5 text-slate-400" /> Role</label>
                    <input type="text" value={form.role} disabled className="w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-2.5 text-sm text-blue-700 font-semibold outline-none cursor-not-allowed capitalize" />
                    <p className="text-xs text-slate-400 mt-1">Your current access level.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600"><Phone className="w-4 h-4" /></div>
                  <div><p className="font-semibold text-slate-900">Contact Information</p><p className="text-xs text-slate-500">Phone number and location.</p></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><Phone className="w-3.5 h-3.5 text-slate-400" /> Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (973) 000-0000" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Country</label>
                    <select value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all">
                      {countries.map((c) => <option key={c.code} value={c.code}>{c.flag} {c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">State</label>
                    <input type="text" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} placeholder="New Jersey" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-slate-700 mb-1.5 block">City</label>
                    <input type="text" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} placeholder="Woodland Park" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button onClick={onClose} className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-all">Cancel</button>
                <button onClick={saveProfile} disabled={savingProfile || !hasChanges} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  <Save className="w-4 h-4" /> {savingProfile ? "Saving..." : "Save changes"}
                </button>
              </div>
            </div>
          )}

          {activeTab === "preferences" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Preferences</h3>
                <p className="text-sm text-slate-500 mt-1">Configure your notification and sound preferences.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600"><Bell className="w-4 h-4" /></div>
                  <div><p className="font-semibold text-slate-900">Notifications</p><p className="text-xs text-slate-500">Manage alerts and sound behavior.</p></div>
                </div>
                <div className="space-y-3">
                  {[
                    { key: "notificationsEnabled" as const, label: "Enable notifications", desc: "Receive platform alerts and updates." },
                    { key: "soundEnabled" as const, label: "Sound alerts", desc: "Play sound when important updates arrive." },
                    { key: "urgentOnly" as const, label: "Urgent only", desc: "Only notify when the event is marked as urgent." },
                  ].map((item) => (
                    <label key={item.key} className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 bg-white p-4">
                      <div><p className="font-semibold text-slate-900">{item.label}</p><p className="text-sm text-slate-500">{item.desc}</p></div>
                      <input type="checkbox" checked={form[item.key]} onChange={(e) => setForm({ ...form, [item.key]: e.target.checked })} className="h-5 w-5 accent-blue-600 rounded" />
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <button onClick={saveProfile} disabled={!hasChanges} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all">
                  <Save className="w-4 h-4" /> Save preferences
                </button>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Security</h3>
                <p className="text-sm text-slate-500 mt-1">Update your password and account security options.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-200">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 text-red-600"><Shield className="w-4 h-4" /></div>
                  <div><p className="font-semibold text-slate-900">Change Password</p><p className="text-xs text-slate-500">Use a strong password to protect your account.</p></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><Lock className="w-3.5 h-3.5 text-slate-400" /> New Password</label>
                    <div className="relative">
                      <input type={showNewPwd ? "text" : "password"} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                      <button type="button" onClick={() => setShowNewPwd(!showNewPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showNewPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-1.5"><Lock className="w-3.5 h-3.5 text-slate-400" /> Confirm Password</label>
                    <div className="relative">
                      <input type={showConfirmPwd ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all" />
                      <button type="button" onClick={() => setShowConfirmPwd(!showConfirmPwd)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">{showConfirmPwd ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}</button>
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-4">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Password requirements</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {passwordReqs.map((r) => (
                        <div key={r.label} className={`rounded-lg px-3 py-2 text-xs font-semibold ${r.valid ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-500"}`}>
                          {r.valid ? <Check className="w-3 h-3 inline mr-1" /> : <Circle className="w-3 h-3 inline mr-1" />} {r.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button onClick={onClose} disabled={savingPwd} className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:opacity-50 transition-all">Cancel</button>
                <button onClick={savePassword} disabled={savingPwd} className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50 transition-all">
                  <Lock className="w-4 h-4" /> {savingPwd ? "Saving..." : "Update password"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { useState, useMemo } from "react";
import {
  Users,
  Search,
  Building2,
  Laptop,
  FileText,
  Plus,
  ChevronDown,
  RefreshCw,
  ArrowLeft,
  Shield,
  Briefcase,
  UserPlus,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";

type Department = {
  id: string;
  name: string;
  userCount: number;
  laptopCount: number;
};

type AppUser = {
  id: number;
  name: string;
  email: string;
  role: string;
  departmentId: string;
  manager: string;
  broker: string;
};

const departments: Department[] = [
  { id: "ceo", name: "CEO", userCount: 3, laptopCount: 2 },
  { id: "ventas", name: "Ventas", userCount: 0, laptopCount: 0 },
];

const mockUsers: AppUser[] = [
  { id: 1, name: "Servando Velazquez", email: "servando@anucleo.com", role: "admin", departmentId: "ceo", manager: "—", broker: "—" },
];

const allRoles = ["admin", "manager", "staff", "broker"];

export default function ClientsManager() {
  const [search, setSearch] = useState("");
  const [deptFilter, setDeptFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  const filtered = useMemo(() => {
    return mockUsers.filter((u) => {
      if (deptFilter && u.departmentId !== deptFilter) return false;
      if (roleFilter && u.role !== roleFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          u.name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q) ||
          u.role.toLowerCase().includes(q) ||
          u.manager.toLowerCase().includes(q) ||
          u.broker.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, deptFilter, roleFilter]);

  const grouped = useMemo(() => {
    const map: Record<string, AppUser[]> = {};
    for (const u of filtered) {
      const dept = departments.find((d) => d.id === u.departmentId);
      const key = dept?.id || "other";
      if (!map[key]) map[key] = [];
      map[key].push(u);
    }
    return map;
  }, [filtered]);

  const activeFilters = [search, deptFilter, roleFilter].filter(Boolean).length;
  const clearFilters = () => { setSearch(""); setDeptFilter(""); setRoleFilter(""); };

  const stats = {
    users: mockUsers.length,
    departments: departments.length,
    laptops: departments.reduce((s, d) => s + d.laptopCount, 0),
    pendingActa: 2,
  };

  return (
    <div className="space-y-6">
      {/* Back */}
      <Link
        to="/employee/dashboard"
        className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </Link>

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage users by department, review assigned devices, update start dates, birthdays, vacation balances and signed documents.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Users", value: stats.users, icon: Users, color: "text-blue-600 bg-blue-100" },
          { label: "Departments", value: stats.departments, icon: Building2, color: "text-purple-600 bg-purple-100" },
          { label: "Laptops", value: stats.laptops, icon: Laptop, color: "text-emerald-600 bg-emerald-100" },
          { label: "Pending Acta", value: stats.pendingActa, icon: FileText, color: "text-amber-600 bg-amber-100" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
              <div className={`p-2.5 rounded-lg ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
            <p className="text-sm text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm">
        {/* Toolbar */}
        <div className="p-5 pb-0">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-4">
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Users className="text-blue-600" />
                User Directory
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Showing <span className="font-bold text-blue-600">{filtered.length}</span> of{" "}
                <span className="font-bold text-slate-900">{mockUsers.length}</span> users
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="inline-flex h-10 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-5 text-sm font-medium text-white shadow-lg shadow-blue-500/20 hover:from-blue-600 hover:to-blue-700 transition-all">
                <UserPlus className="w-4 h-4" />
                Register
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
                <Plus className="w-4 h-4" />
                New Department
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
                <Shield className="w-4 h-4" />
                New Role
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all">
                <Settings className="w-4 h-4" />
                Manage Roles
              </button>
              <button
                onClick={clearFilters}
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
              >
                <RefreshCw className={`w-4 h-4 ${activeFilters > 0 ? "animate-spin text-blue-600" : ""}`} />
                Refresh
              </button>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
            <div className="grid gap-3 xl:grid-cols-[1fr_auto_auto_auto]">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, email, role, department, manager or broker"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>

              <FilterDropdown
                value={deptFilter}
                placeholder="All Departments"
                options={[
                  { label: "All Departments", value: "" },
                  ...departments.map((d) => ({ label: d.name, value: d.id })),
                ]}
                onChange={setDeptFilter}
              />

              <FilterDropdown
                value={roleFilter}
                placeholder="All Roles"
                options={[
                  { label: "All Roles", value: "" },
                  ...allRoles.map((r) => ({ label: r.charAt(0).toUpperCase() + r.slice(1), value: r })),
                ]}
                onChange={setRoleFilter}
              />

              {activeFilters > 0 && (
                <button
                  onClick={clearFilters}
                  className="h-11 rounded-xl border border-slate-300 bg-white px-4 text-sm font-medium text-slate-600 hover:bg-slate-50 transition-all"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Department Cards */}
        <div className="p-5 space-y-4">
          {departments.map((dept) => {
            const usersInDept = dept.id === deptFilter || !deptFilter
              ? mockUsers.filter((u) => u.departmentId === dept.id)
              : grouped[dept.id] || [];

            const isFiltered = deptFilter && deptFilter !== dept.id;
            if (isFiltered) return null;

            return (
              <div key={dept.id} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
                <div className="flex items-center justify-between px-5 py-4 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white shadow-md">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{dept.name}</h3>
                      <p className="text-xs text-slate-500">
                        {dept.userCount} user{dept.userCount !== 1 ? "s" : ""} registered in this department
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {dept.userCount} users
                    </span>
                    <span className="flex items-center gap-1">
                      <Laptop className="w-3.5 h-3.5" />
                      {dept.laptopCount} laptops
                    </span>
                  </div>
                </div>

                {dept.userCount > 0 && (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-sm">
                      <thead>
                        <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          <th className="px-5 py-3 text-left">User</th>
                          <th className="px-5 py-3 text-left">Email</th>
                          <th className="px-5 py-3 text-left">Role</th>
                          <th className="px-5 py-3 text-left">Status</th>
                          <th className="px-5 py-3 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {(grouped[dept.id] || []).map((user) => (
                          <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                            <td className="px-5 py-4">
                              <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                                  {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()}
                                </div>
                                <span className="font-medium text-slate-900">{user.name}</span>
                              </div>
                            </td>
                            <td className="px-5 py-4 text-slate-600">{user.email}</td>
                            <td className="px-5 py-4">
                              <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-semibold text-blue-700 capitalize">
                                {user.role}
                              </span>
                            </td>
                            <td className="px-5 py-4">
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-semibold text-emerald-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                Active
                              </span>
                            </td>
                            <td className="px-5 py-4 text-center">
                              <button className="rounded-lg bg-blue-50 border border-blue-200 px-4 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-all">
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {dept.userCount === 0 && (
                  <div className="px-5 py-8 text-center">
                    <p className="text-sm text-slate-400">No users registered in this department.</p>
                  </div>
                )}
              </div>
            );
          })}

          {filtered.length === 0 && activeFilters > 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Users className="w-12 h-12 text-slate-300 mb-4" />
              <h3 className="text-lg font-semibold text-slate-900">No users found</h3>
              <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filters.</p>
              <button onClick={clearFilters} className="mt-4 rounded-xl bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-200 transition-all">
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ value, placeholder, options, onChange }: {
  value: string;
  placeholder: string;
  options: { label: string; value: string }[];
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value)?.label || placeholder;

  return (
    <div className="relative h-11 min-w-[160px]">
      <button onClick={() => setOpen(!open)} className={`flex h-11 w-full items-center justify-between gap-2 rounded-xl border ${open ? "border-blue-500 ring-2 ring-blue-500/20" : "border-slate-200"} bg-white px-4 text-sm text-slate-700 transition-all`}>
        <span className="truncate">{selected}</span>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-[calc(100%+4px)] z-50 w-full rounded-xl border border-slate-200 bg-white py-1 shadow-xl">
            {options.map((opt) => (
              <button key={opt.value} onClick={() => { onChange(opt.value); setOpen(false); }} className={`w-full px-4 py-2.5 text-left text-sm transition-all ${opt.value === value ? "bg-blue-50 text-blue-700 font-medium" : "text-slate-600 hover:bg-slate-50"}`}>
                {opt.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

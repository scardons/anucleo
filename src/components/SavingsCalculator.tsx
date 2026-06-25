import { useState } from 'react';
import { Car, Shield, DollarSign, TrendingDown, CheckCircle, XCircle } from 'lucide-react';

const carriers = [
  { name: 'GEICO', multiplier: 1.0 },
  { name: 'Progressive', multiplier: 1.05 },
  { name: 'Allstate', multiplier: 1.12 },
  { name: 'State Farm', multiplier: 0.98 },
];

const anucleoSavingsRate = 0.28;

const breakdownItems = [
  { label: 'Liability Coverage', big: '$420', anucleo: '$302' },
  { label: 'Collision', big: '$380', anucleo: '$274' },
  { label: 'Comprehensive', big: '$210', anucleo: '$151' },
  { label: 'Uninsured Motorist', big: '$150', anucleo: '$108' },
  { label: 'Personal Injury Protection', big: '$240', anucleo: '$173' },
  { label: 'Admin & Overhead Fees', big: '$180', anucleo: '$52' },
];

export default function SavingsCalculator() {
  const [monthlyBudget, setMonthlyBudget] = useState(180);
  const [selectedCarrier, setSelectedCarrier] = useState(0);

  const annualBig = Math.round(monthlyBudget * 12 * carriers[selectedCarrier].multiplier);
  const annualAnucleo = Math.round(annualBig * (1 - anucleoSavingsRate));
  const monthlyAnucleo = Math.round(annualAnucleo / 12);
  const savings = annualBig - annualAnucleo;
  const savingsPercent = Math.round((savings / annualBig) * 100);
  const monthlySavings = Math.round(savings / 12);

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Much Could You Save on Car Insurance?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Most drivers overpay because they stick with one carrier. As an independent agency, we compare rates across multiple insurers to find you the best deal no pressure, just clarity.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Big Carrier Side */}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Going Direct</p>
                  <h3 className="text-lg font-bold text-slate-900">Big Carriers</h3>
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">${annualBig.toLocaleString()}</div>
              <p className="text-sm text-slate-500 mb-6">Estimated annual premium</p>

              <div className="space-y-3 mb-6">
                {breakdownItems.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-medium text-slate-900">{item.big}</span>
                  </div>
                ))}
              </div>

              <div className="bg-red-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-red-700">Select your carrier</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {carriers.map((c, i) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedCarrier(i)}
                      className={`text-xs font-medium px-3 py-2 rounded-lg border transition-all ${
                        i === selectedCarrier
                          ? 'bg-red-500 text-white border-red-500'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-red-300'
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Anucleo Side */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Independent Agent</p>
                  <h3 className="text-lg font-bold text-slate-900">Anucleo Insurance</h3>
                </div>
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">${annualAnucleo.toLocaleString()}</div>
              <p className="text-sm text-slate-500 mb-6">Estimated annual premium</p>

              <div className="space-y-3 mb-6">
                {breakdownItems.map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-slate-600">{item.label}</span>
                    <span className="font-medium text-green-700">{item.anucleo}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">
                    You save <span className="text-lg">${savings.toLocaleString()}</span> / year
                  </span>
                </div>
                <div className="mt-2 h-2 bg-green-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full transition-all" style={{ width: `${savingsPercent}%` }} />
                </div>
                <p className="text-xs text-green-600 mt-1">Save {savingsPercent}% vs going direct</p>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="px-8 py-6 bg-slate-50 border-t border-slate-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-slate-500" />
                <span className="text-sm font-medium text-slate-700">
                  Adjust your estimated monthly premium
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-slate-400">${monthlyBudget}</span>
                <span className="text-lg font-bold text-blue-600">${monthlyBudget}</span>
                <span className="text-xs text-slate-400">/mo</span>
              </div>
            </div>
            <input
              type="range"
              min={80}
              max={500}
              step={10}
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-1">
              <span>$80/mo</span>
              <span>$500/mo</span>
            </div>
          </div>

          {/* Savings Summary */}
          <div className="px-8 py-6 bg-blue-600 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wide">Monthly Savings</p>
                <p className="text-2xl font-bold">${monthlySavings}</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wide">Yearly Savings</p>
                <p className="text-2xl font-bold">${savings.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wide">Your Rate (Anucleo)</p>
                <p className="text-2xl font-bold">${monthlyAnucleo}/mo</p>
              </div>
              <div>
                <p className="text-blue-200 text-xs uppercase tracking-wide">Savings</p>
                <p className="text-2xl font-bold">{savingsPercent}%</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-400 text-center mt-4">
          * Estimates based on NJ market averages. Actual savings vary by driver profile, coverage level, and location.
        </p>
      </div>
    </section>
  );
}

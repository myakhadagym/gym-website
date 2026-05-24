import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Activity, Target } from 'lucide-react';

export default function BmiCalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('gain');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const calculateBmi = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setError('Please enter valid height and weight.');
      return;
    }

    // BMI Calculation
    const heightInMeters = h / 100;
    const bmi = w / (heightInMeters * heightInMeters);
    
    let status = '';
    let simpleStatus = '';
    let colorClass = '';
    let gaugePercentage = 0;

    // Gauge calculation (min 15, max 35 for visual scale)
    gaugePercentage = Math.min(Math.max(((bmi - 15) / 20) * 100, 0), 100);

    if (bmi < 18.5) {
      status = 'Underweight';
      simpleStatus = 'Bad';
      colorClass = 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      status = 'Healthy Weight';
      simpleStatus = 'Good';
      colorClass = 'text-[#00FF41] drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]';
    } else if (bmi >= 25 && bmi < 29.9) {
      status = 'Overweight';
      simpleStatus = 'Average';
      colorClass = 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]';
    } else {
      status = 'Obese';
      simpleStatus = 'Bad';
      colorClass = 'text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]';
    }

    // Macro Calculation
    const protein = w * 2.2; // grams
    const proteinCals = protein * 4;
    let totalCals, carbs, fats;

    if (goal === 'gain') {
      // 30% P, 40% C, 30% F
      totalCals = proteinCals / 0.30;
      carbs = (totalCals * 0.40) / 4;
      fats = (totalCals * 0.30) / 9;
    } else {
      // 35% P, 40% C, 25% F
      totalCals = proteinCals / 0.35;
      carbs = (totalCals * 0.40) / 4;
      fats = (totalCals * 0.25) / 9;
    }

    setResult({ 
      value: bmi.toFixed(1), 
      status, 
      simpleStatus,
      colorClass,
      gaugePercentage,
      macros: {
        calories: Math.round(totalCals),
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats),
        pPct: goal === 'gain' ? 30 : 35,
        cPct: 40,
        fPct: goal === 'gain' ? 30 : 25
      }
    });
  };

  return (
    <div className="bg-[#1A1A1A] border border-[#0080FF] rounded-2xl p-6 shadow-[0_0_15px_rgba(0,128,255,0.2)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,128,255,0.4)] flex flex-col h-full font-mono">
      <div className="flex items-center gap-3 mb-6 border-b border-[#0080FF]/30 pb-4">
        <div className="p-2 bg-[#0080FF]/20 rounded-lg border border-[#0080FF]/50 shadow-[0_0_10px_rgba(0,128,255,0.3)]">
          <Activity className="w-6 h-6 text-[#00FF41]" />
        </div>
        <h3 className="text-2xl font-bold text-[#00FF41] m-0 tracking-wider drop-shadow-[0_0_5px_rgba(0,255,65,0.5)] uppercase">
          Neural BMI Sync
        </h3>
      </div>

      <form onSubmit={calculateBmi} className="space-y-5 flex-1 flex flex-col">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="height" className="text-[#0080FF] uppercase tracking-wider text-xs font-bold">Height (cm)</Label>
            <Input
              id="height"
              type="number"
              placeholder="175"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="mt-1 bg-black/50 border-[#0080FF]/50 text-[#00FF41] placeholder:text-[#0080FF]/30 focus-visible:ring-[#00FF41] focus-visible:border-[#00FF41] transition-all"
            />
          </div>
          
          <div>
            <Label htmlFor="weight" className="text-[#0080FF] uppercase tracking-wider text-xs font-bold">Weight (kg)</Label>
            <Input
              id="weight"
              type="number"
              placeholder="70"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1 bg-black/50 border-[#0080FF]/50 text-[#00FF41] placeholder:text-[#0080FF]/30 focus-visible:ring-[#00FF41] focus-visible:border-[#00FF41] transition-all"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="goal" className="text-[#0080FF] uppercase tracking-wider text-xs font-bold flex items-center gap-2">
            <Target className="w-3 h-3" /> Primary Directive
          </Label>
          <select
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="mt-1 w-full h-10 px-3 rounded-md bg-black/50 border border-[#0080FF]/50 text-[#00FF41] focus:outline-none focus:ring-2 focus:ring-[#00FF41] transition-all appearance-none"
          >
            <option value="gain">Mass Acquisition (Gain Weight)</option>
            <option value="lose">Chassis Optimization (Lose Weight)</option>
          </select>
        </div>

        {error && <p className="text-sm text-red-500 mt-2 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]">{error}</p>}

        <div className="mt-auto pt-4">
          <Button 
            type="submit" 
            className="w-full bg-[#0080FF]/20 border border-[#0080FF] text-[#00FF41] hover:bg-[#00FF41] hover:text-black hover:border-[#00FF41] transition-all duration-300 font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,128,255,0.3)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]"
          >
            Initialize Scan
          </Button>
        </div>
      </form>

      {result && (
        <div className="mt-6 space-y-6 animate-fade-in">
          {/* BMI Result & Gauge */}
          <div className="p-5 bg-black/60 border border-[#0080FF]/40 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-[#00FF41] to-red-500 opacity-20" />
            
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-xs text-[#0080FF] uppercase tracking-widest mb-1">System Status</p>
                <p className={`text-3xl font-black ${result.colorClass}`}>{result.value}</p>
              </div>
              <div className="text-right">
                <p className={`text-xl font-bold uppercase tracking-wider ${result.colorClass}`}>
                  {result.simpleStatus}
                </p>
                <p className="text-xs text-white/50 uppercase">{result.status}</p>
              </div>
            </div>

            {/* Visual Gauge */}
            <div className="relative h-3 bg-black rounded-full border border-[#0080FF]/30 overflow-hidden mt-2">
              <div className="absolute top-0 left-0 h-full w-full flex">
                <div className="h-full w-[17.5%] bg-red-500/40" /> {/* < 18.5 */}
                <div className="h-full w-[32%] bg-[#00FF41]/40" /> {/* 18.5 - 24.9 */}
                <div className="h-full w-[25%] bg-yellow-400/40" /> {/* 25 - 29.9 */}
                <div className="h-full w-[25.5%] bg-red-500/40" /> {/* >= 30 */}
              </div>
              <div 
                className="absolute top-0 h-full w-1 bg-white shadow-[0_0_8px_rgba(255,255,255,1)] transition-all duration-1000 ease-out"
                style={{ left: `${result.gaugePercentage}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] text-[#0080FF]/60 mt-1 px-1">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>35+</span>
            </div>
          </div>

          {/* Macro Recommendations */}
          <div className="p-5 bg-black/60 border border-[#0080FF]/40 rounded-xl">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xs text-[#0080FF] uppercase tracking-widest">Daily Fuel Protocol</p>
              <p className="text-sm font-bold text-[#00FF41] drop-shadow-[0_0_5px_rgba(0,255,65,0.5)]">
                {result.macros.calories} KCAL
              </p>
            </div>

            {/* Macro Bar */}
            <div className="flex h-4 rounded-full overflow-hidden mb-4 border border-[#0080FF]/30">
              <div style={{ width: `${result.macros.pPct}%` }} className="bg-[#0080FF] hover:brightness-125 transition-all" title="Protein" />
              <div style={{ width: `${result.macros.cPct}%` }} className="bg-[#00FF41] hover:brightness-125 transition-all" title="Carbs" />
              <div style={{ width: `${result.macros.fPct}%` }} className="bg-purple-500 hover:brightness-125 transition-all" title="Fats" />
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="bg-[#0080FF]/10 rounded p-2 border border-[#0080FF]/20">
                <p className="text-[10px] text-[#0080FF] uppercase mb-1">Protein</p>
                <p className="text-sm font-bold text-white">{result.macros.protein}g</p>
                <p className="text-[9px] text-white/40">{result.macros.pPct}%</p>
              </div>
              <div className="bg-[#00FF41]/10 rounded p-2 border border-[#00FF41]/20">
                <p className="text-[10px] text-[#00FF41] uppercase mb-1">Carbs</p>
                <p className="text-sm font-bold text-white">{result.macros.carbs}g</p>
                <p className="text-[9px] text-white/40">{result.macros.cPct}%</p>
              </div>
              <div className="bg-purple-500/10 rounded p-2 border border-purple-500/20">
                <p className="text-[10px] text-purple-400 uppercase mb-1">Fats</p>
                <p className="text-sm font-bold text-white">{result.macros.fats}g</p>
                <p className="text-[9px] text-white/40">{result.macros.fPct}%</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';

const Booking: React.FC = () => {
    // Basic state for the calendar purely for visual effect
    const [selectedDate, setSelectedDate] = useState<number | null>(24);
    
    // Calendar days helper
    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    return (
        <div className="flex flex-col py-8 px-4 md:px-10 lg:px-20 xl:px-40 bg-secondary dark:bg-dark min-h-screen">
            <div className="flex flex-col max-w-[1200px] mx-auto w-full flex-1">
                {/* Header */}
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Check Availability & Request Care</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">Select a start date to see available consultation times and plan your support journey.</p>
                    </div>
                    {/* Progress Bar */}
                    <div className="flex flex-col gap-2 w-full max-w-md">
                        <div className="flex gap-6 justify-between items-end">
                            <p className="text-slate-900 dark:text-white text-sm font-semibold leading-normal">Booking Step 1 of 3</p>
                            <span className="text-xs text-slate-400 font-medium">33% Completed</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-700 w-full overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: '33%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Calendar */}
                    <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
                        <div className="flex flex-col rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">October 2023</p>
                                <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors text-slate-600 dark:text-slate-300">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </div>
                            {/* Week Header */}
                            <div className="grid grid-cols-7 gap-y-2 mb-2">
                                {['S','M','T','W','T','F','S'].map(d => (
                                    <div key={d} className="text-slate-400 text-xs font-bold text-center py-2">{d}</div>
                                ))}
                                {/* Empty days */}
                                <div className="aspect-square"></div>
                                <div className="aspect-square"></div>
                                <div className="aspect-square"></div>
                                {/* Days */}
                                {days.map(day => (
                                    <button 
                                        key={day} 
                                        onClick={() => setSelectedDate(day)}
                                        className={`aspect-square flex items-center justify-center rounded-full text-sm transition-colors
                                            ${selectedDate === day 
                                                ? 'bg-primary text-white font-bold shadow-md shadow-blue-200 dark:shadow-none' 
                                                : 'text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-700'
                                            }`}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                                <p className="text-sm font-semibold mb-3 dark:text-white">Available Times for Oct {selectedDate}th:</p>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">9:00 AM</button>
                                    <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-primary bg-primary/10 text-primary transition-all">11:30 AM</button>
                                    <button className="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary hover:text-primary transition-all">2:00 PM</button>
                                </div>
                            </div>
                        </div>

                        {/* Selected Package Summary */}
                         <div className="flex flex-col gap-4 rounded-xl bg-white dark:bg-dark-surface p-4 shadow-sm border border-slate-200 dark:border-slate-700">
                            <div className="flex items-start gap-4">
                                <div className="w-20 h-20 rounded-lg bg-cover bg-center shrink-0" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh2hOJ90NZvOwCA0U6B8DAkzlBeTR6l2TiMFs96ATfrZ1pfb8NBs9iCz5zyA2Q_Fl-Lc7BKw2Y56U4SCN-amKsdjjoD8hocgsD1Nc2juZGYn2T80yKwbWvWk15lZldPtoz-ngkG8858gH88vTZfbtb__Uhtp3rS8HwDAV_5uArqDarmaVtxRPDixv7PuM5i06pS4NdlzNz4xOIj1TMDGbmXf6qYkjIBZnduVP4aVE9Uo45f-0H9P2Em8q3iexaS9yJ7Ih24wCJGzE")' }}></div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">Postpartum Package</h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-normal">Complete support for mother and baby</p>
                                    <p className="text-primary text-sm font-semibold mt-1">Est. Cost: $450</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30">
                                <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wide">Selected Date</span>
                                    <span className="text-sm font-bold text-slate-900 dark:text-white">Oct {selectedDate}th, 2023 at 11:30 AM</span>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Right Column: Intake Form */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                            {/* Contact Section */}
                            <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
                                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-sm">person</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Details</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                                        <input type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="Jane"/>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="Doe"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                                        <input type="email" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="jane@example.com"/>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                                        <input type="tel" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="(555) 000-0000"/>
                                    </div>
                                </div>
                            </div>

                             {/* Pregnancy Section */}
                             <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
                                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-sm">child_care</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Care Details</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated Due Date</label>
                                        <input type="date" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary"/>
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Location (City/Neighborhood)</label>
                                        <input type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="e.g. Portland, East Side"/>
                                    </div>
                                </div>
                             </div>

                             {/* Support Needs Section */}
                             <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3 border-b border-slate-100 dark:border-slate-700 pb-4">
                                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary">
                                        <span className="material-symbols-outlined text-sm">favorite</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Support Needs</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {['Breastfeeding / Chestfeeding', 'Newborn Sleep Patterns', 'Meal Preparation & Nutrition', 'Sibling Transition Support', 'Overnight Care', 'Emotional Recovery'].map((item, i) => (
                                        <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 cursor-pointer hover:border-primary/50 transition-colors">
                                            <input type="checkbox" className="form-checkbox text-primary rounded border-slate-300 dark:border-slate-500 focus:ring-primary h-5 w-5" />
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                                        </label>
                                    ))}
                                </div>
                             </div>

                             {/* Submit Button */}
                             <div className="flex flex-col gap-4 mt-2">
                                <button type="submit" className="w-full py-4 px-6 bg-primary hover:bg-primary-hover text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-200 dark:shadow-none transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01]">
                                    <span>Schedule Consultation</span>
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <p className="text-center text-sm text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-sm">info</span>
                                    We typically respond within 24-48 hours.
                                </p>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

const Booking: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<number | null>(24);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dueDate: '',
        location: '',
        supportNeeds: [] as string[]
    });

    const days = Array.from({ length: 31 }, (_, i) => i + 1);

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Checkboxes
    const handleCheckbox = (item: string) => {
        setFormData(prev => ({
            ...prev,
            supportNeeds: prev.supportNeeds.includes(item)
                ? prev.supportNeeds.filter(i => i !== item)
                : [...prev.supportNeeds, item]
        }));
    };

    // Handle Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // "bookings" must match your Supabase table name exactly
            const { error } = await supabase
                .from('bookings')
                .insert([
                    {
                        client_name: `${formData.firstName} ${formData.lastName}`,
                        client_email: formData.email,
                        requested_date: `2023-10-${selectedDate}`, // Note: You'll want to fix the year/month logic eventually
                        requested_time: '11:30 AM',
                        location: formData.location,
                        support_needs: formData.supportNeeds,
                        status: 'pending'
                    }
                ]);

            if (error) throw error;

            alert('Booking request received! I will be in touch shortly.');
            navigate('/');
        } catch (error) {
            console.error('Error booking:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col py-8 px-4 md:px-10 lg:px-20 xl:px-40 bg-secondary dark:bg-dark min-h-screen">
            <div className="flex flex-col max-w-[1200px] mx-auto w-full flex-1">
                {/* Header */}
                <div className="flex flex-col gap-6 mb-8">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Check Availability & Request Care</h1>
                        <p className="text-slate-500 dark:text-slate-400 text-base font-normal leading-normal max-w-2xl">Select a start date to see available consultation times and plan your support journey.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Calendar UI (Visual Only for now) */}
                    <div className="lg:col-span-5 flex flex-col gap-6 sticky top-24">
                        <div className="flex flex-col rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700 p-6">
                            <div className="flex items-center justify-between mb-4">
                                <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight">October 2023</p>
                            </div>
                            <div className="grid grid-cols-7 gap-y-2 mb-2">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => (
                                    <div key={d} className="text-slate-400 text-xs font-bold text-center py-2">{d}</div>
                                ))}
                                <div className="aspect-square"></div><div className="aspect-square"></div><div className="aspect-square"></div>
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
                        </div>
                    </div>

                    {/* Right Column: Intake Form linked to Supabase */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            {/* Personal Details */}
                            <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Your Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                                        <input required name="firstName" onChange={handleChange} value={formData.firstName} type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input required name="lastName" onChange={handleChange} value={formData.lastName} type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                                        <input required name="email" onChange={handleChange} value={formData.email} type="email" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                                        <input name="phone" onChange={handleChange} value={formData.phone} type="tel" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Care Details */}
                            <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Care Details</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Estimated Due Date</label>
                                        <input name="dueDate" onChange={handleChange} value={formData.dueDate} type="date" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Location</label>
                                        <input name="location" onChange={handleChange} value={formData.location} type="text" className="form-input rounded-lg border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:border-primary focus:ring-primary" placeholder="e.g. Portland" />
                                    </div>
                                </div>
                            </div>

                            {/* Support Needs */}
                            <div className="flex flex-col gap-5 p-6 rounded-xl bg-white dark:bg-dark-surface shadow-sm border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Support Needs</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {['Breastfeeding / Chestfeeding', 'Newborn Sleep Patterns', 'Meal Preparation', 'Sibling Transition Support', 'Overnight Care', 'Emotional Recovery'].map((item, i) => (
                                        <label key={i} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 cursor-pointer hover:border-primary/50 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={formData.supportNeeds.includes(item)}
                                                onChange={() => handleCheckbox(item)}
                                                className="form-checkbox text-primary rounded border-slate-300 dark:border-slate-500 focus:ring-primary h-5 w-5"
                                            />
                                            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 mt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-primary hover:bg-primary-hover disabled:opacity-50 text-white text-lg font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? 'Sending...' : 'Schedule Consultation'}
                                    {!isSubmitting && <span className="material-symbols-outlined">arrow_forward</span>}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
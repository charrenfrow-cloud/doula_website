import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const Contact: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        services: [] as string[],
        dueDate: '',
        babyName: '',
        goals: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckbox = (service: string) => {
        setFormData(prev => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service]
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const { error } = await supabase.from('contacts').insert([{
                first_name: formData.firstName,
                last_name: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: {
                    line1: formData.address1,
                    city: formData.city,
                    state: formData.state,
                    zip: formData.zip
                },
                services_interested: formData.services,
                due_date: formData.dueDate || null,
                baby_names: formData.babyName,
                goals: formData.goals
            }]);

            if (error) throw error;
            alert("Message sent successfully!");
            // Reset form or redirect here
        } catch (error) {
            console.error(error);
            alert("Error sending message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative w-full">
            {/* Background Graphic and Header */}
            <div className="w-full bg-secondary h-48 absolute top-0 left-0 z-0 overflow-hidden">
                {/* ... (Keep your SVG here) ... */}
                <svg className="absolute bottom-0 w-full h-16 text-white dark:text-dark fill-current" preserveAspectRatio="none" viewBox="0 0 1440 320">
                    <path d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,218.7C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" fillOpacity="1"></path>
                </svg>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16 pt-8">
                    <h1 className="font-serif text-4xl md:text-5xl text-slate-900 dark:text-white mb-4">Let’s <span className="underline decoration-primary decoration-2 underline-offset-4">work together</span></h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        Interested in working together? Fill out some info and we will be in touch shortly!
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    {/* Sticky Image */}
                    <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
                        <div className="overflow-hidden rounded-xl shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border-4 border-white dark:border-slate-800">
                            <div className="aspect-[3/4] bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDwpjvHigfaVK4taU2brm-L1Jtp3ycAVMeI6Fx5BKCpyRue5JRJDlJpVu_iISuXRa_o5W2n22B1bwvWNm2o_cuoWveMUfKqM8u4HgPd5oVffkZNzUZkQGL159EydCcQvykUpL4Td06kY0V24XKNSYLnst6_VZ-LJG3KMGYMjGyR4HUQ1y09z5_2jhvAn5ldiexomrRoo6l6WNhDbQwYO77ePENmY8zEZzJf_vvKmfH_jj7J8HPmlbuk6s_z15Qr36vq1mgA9oPwXko")' }}></div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="w-full lg:w-2/3 bg-white dark:bg-dark-surface p-8 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
                        <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                            {/* Mother's Info */}
                            <div className="flex flex-col gap-6">
                                <div className="border-b border-slate-100 dark:border-slate-700 pb-2">
                                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">Mother's Information</h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                                        <input name="firstName" onChange={handleChange} required type="text" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                                        <input name="lastName" onChange={handleChange} required type="text" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                    </div>
                                </div>
                            </div>

                            {/* Contact Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-slate-800 dark:text-white">Email</h3>
                                    <input name="email" onChange={handleChange} required type="email" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-slate-800 dark:text-white">Phone</h3>
                                    <input name="phone" onChange={handleChange} type="tel" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                </div>
                            </div>

                            {/* Services Interest */}
                            <div className="flex flex-col gap-3 border-t border-slate-100 dark:border-slate-700 pt-8">
                                <h3 className="text-base font-bold text-slate-800 dark:text-white">What services are you interested in?</h3>
                                <div className="flex flex-col gap-2">
                                    {['Postpartum Doula Services', 'Sibling Doula', 'Prenatal Nesting'].map((s, i) => (
                                        <label key={i} className="inline-flex items-center">
                                            <input type="checkbox" onChange={() => handleCheckbox(s)} className="form-checkbox text-primary border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:ring-primary rounded" />
                                            <span className="ml-2 text-sm text-slate-600 dark:text-slate-300">{s}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Due Date & Baby Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-100 dark:border-slate-700 pt-8">
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-slate-800 dark:text-white">Estimated Due Date</h3>
                                    <input name="dueDate" onChange={handleChange} type="date" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-base font-bold text-slate-800 dark:text-white">Name(s) of Baby</h3>
                                    <input name="babyName" onChange={handleChange} type="text" className="form-input w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5" />
                                </div>
                            </div>

                            {/* Goals */}
                            <div className="flex flex-col gap-1 border-t border-slate-100 dark:border-slate-700 pt-8">
                                <h3 className="text-base font-bold text-slate-800 dark:text-white">What are your primary goals for having a postpartum doula?</h3>
                                <textarea name="goals" onChange={handleChange} rows={4} className="form-textarea w-full rounded border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 focus:border-primary focus:ring-primary text-sm p-2.5"></textarea>
                            </div>

                            <div className="pt-4">
                                <button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold py-3 px-8 rounded shadow-md transition-all duration-200 uppercase tracking-wider text-sm w-full md:w-auto">
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
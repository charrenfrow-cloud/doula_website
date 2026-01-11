import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
       {/* Hero Section */}
      <div className="relative py-16 bg-white dark:bg-dark-surface">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10 pointer-events-none"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAszREzD166fC4YKZm0Xg4eVtuuiEVdgRnuOPSIsl0xJKhYjjlM5SIWFj9krnjOCPBxYCLRbtAP1lOHLK09pxyP3w3S8eKm1yywuBg-2sBBqevl6il1vPQQ1TXBtmfW0g3ypePfOvyez1X3s8o5u_T8ZWMk0ZH46ZN-DoKbROzrZ-BDO_jNNwe-bSRc2AcHtazdSKBeAPVNQANTNxDT4QbSYUlGKOtKF8adMksPzm6t2ylaDCv6eVeSw8dgNc7iyEmQp6yqMGe1aIQ")' }}
        ></div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Support Packages & Pricing</h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">Investing in your recovery and transition to parenthood is invaluable. Find the support package that fits your family's unique needs during the fourth trimester.</p>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="py-20 px-4 bg-secondary dark:bg-dark">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-primary font-bold tracking-wider uppercase text-sm mb-2">Transparent Pricing</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Choose Your Support Level</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Daytime Card */}
             <div className="flex flex-col rounded-2xl bg-white dark:bg-dark-surface p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Daytime Support</h3>
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">$45</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">/ hour</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">4 hour minimum per visit</p>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-700 w-full mb-6"></div>
                <ul className="flex-1 space-y-4 mb-8">
                    {['Breastfeeding & bottle feeding support', 'Nutritious meal preparation', 'Newborn care education', 'Light housekeeping & laundry', 'Sibling transition support'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                             <span className="material-symbols-outlined text-primary text-xl">check</span>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <Link to="/booking" className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold text-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    Request Daytime
                </Link>
             </div>

             {/* Overnight Card */}
             <div className="flex flex-col rounded-2xl bg-white dark:bg-dark-surface p-8 shadow-md hover:shadow-xl transition-all border-2 border-primary relative overflow-hidden transform md:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Overnight Support</h3>
                        <span className="bg-slate-800 text-white text-xs font-bold px-3 py-1 rounded-full">Limited</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">$55</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">/ hour</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">8 hour minimum per visit</p>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-700 w-full mb-6"></div>
                <ul className="flex-1 space-y-4 mb-8">
                    {['Night feeding assistance', 'Sleep conditioning tips', 'Maximum rest for parents', 'Quiet laundry & kitchen tidying', 'Emotional check-ins'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                             <span className="material-symbols-outlined text-primary text-xl">check</span>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <Link to="/booking" className="w-full py-3 rounded-xl bg-primary text-white font-bold text-center hover:bg-primary-hover transition-colors shadow-lg shadow-blue-200/50 dark:shadow-none">
                    Request Overnight
                </Link>
             </div>

             {/* Virtual Card */}
             <div className="flex flex-col rounded-2xl bg-white dark:bg-dark-surface p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200 dark:border-slate-700">
                <div className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Virtual Consults</h3>
                    </div>
                    <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-slate-900 dark:text-white">$150</span>
                        <span className="text-slate-500 dark:text-slate-400 font-medium">per session</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Flat fee, 90 minute call</p>
                </div>
                <div className="h-px bg-slate-100 dark:bg-slate-700 w-full mb-6"></div>
                <ul className="flex-1 space-y-4 mb-8">
                    {['Video call sessions', 'Unlimited text support for 1 week', 'Resource planning & referrals', 'Prenatal planning'].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                             <span className="material-symbols-outlined text-primary text-xl">check</span>
                             <span>{item}</span>
                        </li>
                    ))}
                </ul>
                <Link to="/booking" className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white font-bold text-center hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    Request Virtual
                </Link>
             </div>
          </div>
          
          <div className="mt-12 text-center">
             <p className="text-slate-500 dark:text-slate-400">Don't see exactly what you need? <Link to="/contact" className="text-primary font-bold hover:underline">Contact me for a custom package.</Link></p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-20 bg-white dark:bg-dark-surface">
        <div className="max-w-[960px] mx-auto px-4 text-center">
             <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Postpartum Support?</h2>
             <p className="text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">The early days of parenthood are a transformative time. Having professional, compassionate support can make all the difference in your recovery and confidence.</p>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { icon: 'menu_book', title: 'Evidence-Based Care', desc: 'Up-to-date information on newborn care, feeding, and recovery practices.'},
                    { icon: 'volunteer_activism', title: 'Non-Judgmental Support', desc: 'Support that respects your unique parenting choices, values, and intuition.'},
                    { icon: 'spa', title: 'Holistic Recovery', desc: 'Focusing on physical, emotional, and mental healing after birth.'}
                ].map((feature, i) => (
                    <div key={i} className="p-6 rounded-xl border border-slate-100 dark:border-slate-700 bg-secondary dark:bg-dark hover:-translate-y-1 transition-transform">
                        <div className="inline-flex p-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-primary mb-4">
                            <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                    </div>
                ))}
             </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-secondary dark:bg-dark">
        <div className="max-w-[800px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    { q: "Do you take insurance?", a: "While I do not bill insurance directly, I can provide you with a detailed superbill that you can submit to your insurance provider for potential reimbursement. Many FSA and HSA accounts can also be used for doula services." },
                    { q: "When should I book your services?", a: "It's best to reach out during your second or third trimester to ensure availability around your due date. However, I often have last-minute openings, so don't hesitate to contact me even if your baby has already arrived." },
                    { q: "What safety precautions do you take?", a: "I am fully vaccinated (including Tdap, Flu, and COVID-19) and certified in infant CPR. I adhere to strict hygiene protocols, including mask-wearing upon request and frequent hand washing." },
                    { q: "Can you help with twins or multiples?", a: "Absolutely! I have specialized experience supporting families with multiples. We can discuss specific strategies for feeding and sleep routines for twins during our consultation." }
                ].map((faq, i) => (
                    <details key={i} className="group rounded-xl bg-white dark:bg-dark-surface p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer shadow-sm">
                        <summary className="flex items-center justify-between gap-1.5 text-slate-900 dark:text-white font-bold text-lg">
                            <h3>{faq.q}</h3>
                            <span className="material-symbols-outlined transition group-open:-rotate-180">expand_more</span>
                        </summary>
                        <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300 text-sm">
                            {faq.a}
                        </p>
                    </details>
                ))}
            </div>
        </div>
      </div>

    </div>
  );
};

export default Services;
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
        <section className="w-full py-16 md:py-24 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1 relative">
                    <div className="aspect-[4/5] w-full max-w-md mx-auto rounded-t-full rounded-b-[3rem] overflow-hidden shadow-2xl shadow-slate-200 dark:shadow-none border-[6px] border-white dark:border-slate-800 relative z-10">
                        <img alt="Sarah - Postpartum Doula" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMJWLBDXp-2t3II1NPYDgwjrYLlG0Z1sLD94SWUtgh8coiaSbteML7TqPpeebQRked_V-6UTlamzawc8xv4G9sVO-atKgEjSaZaOCy16Haxpgvzm1PEjCzsoTurYzHJvuKl3NYzFnKkr29vNg4jTJWJbf9kxUS7FmSsQzzp2anztkf3V9RmtqVRYHynf12idIqYfDYidMv0msHcVXGv_lTXPzv-IoR3SHSs2bWKlk0UXYg4gaelVRyrM7q7ajVgBDRgEQ80UwWJbk"/>
                    </div>
                    <div className="absolute top-10 -left-10 w-full h-full bg-secondary dark:bg-dark-surface rounded-t-full rounded-b-[3rem] -z-0 hidden md:block"></div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Hello & Welcome</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-slate-900 dark:text-white leading-[1.1]">
                            Nurturing your transition into parenthood.
                        </h1>
                    </div>
                    <div className="space-y-4 text-lg text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                        <p>
                            I'm Sarah, a certified postpartum doula dedicated to providing compassionate, non-judgmental support to growing families in the Portland area.
                        </p>
                        <p>
                            My journey began over a decade ago when I realized that while there is so much emphasis on birth, the tender weeks that follow are often overlooked. My goal is to help you rest, recover, and bond with your baby during the precious fourth trimester, ensuring you feel confident and cared for.
                        </p>
                    </div>
                    <div className="pt-4 flex flex-wrap gap-4">
                        <Link to="/services" className="px-8 py-3 rounded-xl bg-slate-800 dark:bg-slate-700 text-white font-medium hover:bg-slate-700 dark:hover:bg-slate-600 transition-colors shadow-lg shadow-slate-200 dark:shadow-none">
                            View My Services
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="w-full bg-secondary/50 dark:bg-dark-surface py-20 px-4 md:px-10 lg:px-20 border-y border-slate-100 dark:border-slate-800">
            <div className="max-w-4xl mx-auto flex flex-col gap-10 text-center">
                <div className="flex justify-center">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <span className="material-symbols-outlined text-4xl">favorite</span>
                    </div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 dark:text-white leading-tight">
                    "I believe that when parents feel supported and cared for, they are better able to care for their babies."
                </h2>
                <div className="w-16 h-1.5 bg-primary mx-auto rounded-full opacity-60"></div>
                <div className="grid md:grid-cols-2 gap-8 text-left text-lg font-light text-slate-600 dark:text-slate-300">
                    <p>
                        My philosophy is rooted in the belief that the postpartum period is a sacred time of healing and discovery. In our modern world, the "village" is often missing. I strive to be that village for you—bringing calm presence, evidence-based knowledge, and practical help right to your doorstep.
                    </p>
                    <p>
                        There is no one "right" way to parent. I am here to support your unique goals, whether that means exclusive breastfeeding, bottle feeding, sleep shaping, or simply finding time to shower. I hold space for you to navigate this transformation with grace.
                    </p>
                </div>
            </div>
        </section>

        <section className="w-full py-20 px-4 md:px-10 lg:px-20 max-w-7xl mx-auto">
            <div className="flex flex-col gap-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-700 pb-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 dark:text-white">Education & Certifications</h2>
                        <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">Continuous learning to provide the safest, most up-to-date care.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        { icon: "school", title: "Certified Postpartum Doula", sub: "DONA International", desc: "Completed comprehensive training on newborn care, breastfeeding support, maternal recovery, and family adjustment." },
                        { icon: "local_hospital", title: "Certified Lactation Counselor", sub: "ALPP", desc: "Trained to assess latch, address common breastfeeding challenges, and support your feeding goals with evidence-based practices." },
                        { icon: "medical_services", title: "CPR & First Aid", sub: "Red Cross", desc: "Current certification in Adult and Pediatric CPR/AED and First Aid, ensuring safety and peace of mind for your family." }
                    ].map((cert, i) => (
                        <div key={i} className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-3xl">{cert.icon}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-serif text-slate-900 dark:text-white mb-1">{cert.title}</h3>
                                <p className="text-xs text-primary font-bold uppercase tracking-widest">{cert.sub}</p>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  );
};

export default About;
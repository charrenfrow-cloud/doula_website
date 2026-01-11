import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAbsB4OEY-eGXrLq2hDMUqWc4U_muTUBE4W49AimJxgFdXWCAAzwz-jVon4JD1XKDs5pR47jJx9jaxQy1kmDvZ2DmA2c_22u_XDgNeNSzzWzWLpXrGwwmH_TfQyDLa-Pb0MAqViERrdp-xaNYGIEIYArr9woJsbQ0FIxImjCszXI0uAPi1D4Z2NMtngD0SYC1ErkrI0g6lDKV7Ve_awQna4KquFenIUGvph-TYX3O__bXD1iO4ifJ24IgnGFumvWDvphoRmaMpPyFs")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/40 dark:from-dark/95 dark:to-dark/60"></div>
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-10 py-24 md:py-32 lg:py-40">
          <div className="max-w-[640px] flex flex-col gap-6">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-primary text-xs font-bold tracking-wide w-fit border border-blue-200 dark:border-blue-800">
              POSTPARTUM CARE SPECIALIST
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
              Nurturing Support for Your Fourth Trimester
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Compassionate postpartum care designed to help you rest, recover, and bond with your new baby. You don't have to do it alone.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/services" className="h-12 px-6 flex items-center justify-center rounded-full bg-primary text-white font-bold text-base shadow-lg shadow-blue-200/50 dark:shadow-none hover:bg-primary-hover transition-all transform hover:-translate-y-0.5">
                View Services
              </Link>
              <Link to="/contact" className="h-12 px-6 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-base hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                Let's Chat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Badges */}
      <section className="py-8 bg-white dark:bg-dark-surface border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-lg dark:text-slate-300">
            <span className="material-symbols-outlined">verified</span> DONA International
          </div>
          <div className="flex items-center gap-2 font-bold text-lg dark:text-slate-300">
            <span className="material-symbols-outlined">medical_services</span> CPR Certified
          </div>
          <div className="flex items-center gap-2 font-bold text-lg dark:text-slate-300">
            <span className="material-symbols-outlined">school</span> Lactation Educator
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary dark:bg-dark">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-10">
          <div className="bg-white dark:bg-dark-surface rounded-2xl p-6 md:p-12 shadow-xl shadow-slate-200/50 dark:shadow-none flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/2 aspect-[4/5] md:aspect-square relative rounded-xl overflow-hidden shrink-0 group">
              <div 
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBxmMWk97OFtxNGw0bssT-2EMih9NHJjOzyAGYYoLFZFEb7hAGsiiBJuAIbx21S7shwDSZFEt8BMXbmeNRsEAimvtyJJ5W0Wjb80OVc_4TioD-Zwr9mJeL0x_avAHOeFrLtAfW3Dg0ujW6GzR5JELc6tlXIpDhNwLQxYdXaoxu5a8b6rABMHH0BV0g07xE5cLPMGRSzpg-XYhZPKMjM5xQBQsek5M9e_XfLJvaUzbU8BmELwAfUv2ASKvJ8pHYa-JrPs2yiU_ugAgc")' }}
              ></div>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Hi, I'm Tina</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                I am a certified postpartum doula dedicated to helping families transition into parenthood with confidence and calm. 
                <br/><br/>
                My approach is evidence-based, empathetic, and entirely non-judgmental. Whether you need sleep support, feeding guidance, or simply a chance to shower, I'm here to nurture the nurturer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/about" className="bg-primary/10 hover:bg-primary/20 text-primary dark:text-blue-300 dark:hover:bg-blue-900/30 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2 w-fit">
                  Read My Story
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-dark-surface">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white leading-tight">Holistic Postpartum Care</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400 text-lg">Tailored support designed to meet the unique needs of your growing family.</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-1 text-primary font-bold hover:underline">
              View full service menu <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <Link to="/services" className="group bg-secondary dark:bg-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">bedtime</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Overnight Support</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Get the deep, restorative rest you need while your baby is in safe, experienced hands through the night.
              </p>
              <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Learn more</span>
            </Link>
            {/* Service 2 */}
            <Link to="/services" className="group bg-secondary dark:bg-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">sunny</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Daytime Guidance</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Confidence-building hands-on support for breastfeeding, soothing techniques, and newborn care during the day.
              </p>
              <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Learn more</span>
            </Link>
            {/* Service 3 */}
            <Link to="/services" className="group bg-secondary dark:bg-dark p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 hover:shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-none transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-teal-100 dark:bg-teal-900/20 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">video_camera_front</span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Virtual Consulting</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                Expert advice and emotional support available wherever you are, perfect for quick questions and reassurance.
              </p>
              <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Learn more</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary dark:bg-dark">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Love Notes from Families</h2>
            <p className="text-slate-600 dark:text-slate-400">Hearing from past clients is the best way to understand the impact of doula support.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                </div>
                <p className="text-slate-900 dark:text-gray-200 italic mb-6">"Hiring Tina was the best decision we made for our postpartum recovery. She anticipated our needs before we even knew them ourselves."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA5xlvIlXaqfHVkLE_YpMlDiSYMXYSdinE_5BZ7DxTP8_YY7xp4tnQVRqiCvS7oJVlqh1H0H7ODm53gW-Z5WiHOMlA3xd0Xedl31p9j-Dix7Gjgh4fXyA6xv1ZL5eBbfuWGzlRWh82sArx1IcOhBi-kaar5gbgqK9c8l5RbW-VdQ-vh6FtlCk9Rqfn1eCYx8RYbCCUV2CzwlA94tTbzbiNZ_DYIdzlinYZxGU2kFD-kxxjEwMrmPXyd4hDjNCN8oBPWwYH2zMj0UCE")' }}></div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Sarah Jenkins</p>
                  <p className="text-xs text-slate-500">First-time Mom</p>
                </div>
              </div>
            </div>
             <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                </div>
                <p className="text-slate-900 dark:text-gray-200 italic mb-6">"Her gentle presence and vast knowledge about breastfeeding saved our journey. We felt so cared for and supported."</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBhZCodijM5tjWOsA_XI8iW8BGsJkLCFn6gufO7DLJPuFx9WbhAkLeL65nBWs-UW2AIkP8YLN9wJKtKSjGuowwrc2v33M8zj5GQKnQ7hZHYZV9hQqNqSgmSHLoOvbdilAgnYsRuSt-V5LI9H3hNXs_4MOHM3_VY9BNFY0CLSSVl0kQvqbYfus4HH3vhtoUtzxpj-pCe_vrG13ynaWkSO8fqQDXYq3y9j4BFKNSFLBv2KDV-0f_lLcTyt7P1UEEW7kBdfzcPMEO9D-c")' }}></div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Mark Thompson</p>
                  <p className="text-xs text-slate-500">Father of two</p>
                </div>
              </div>
            </div>
             <div className="bg-white dark:bg-dark-surface p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex text-yellow-400 mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined fill-current">star</span>)}
                </div>
                <p className="text-slate-900 dark:text-gray-200 italic mb-6">"The overnight support was a game changer. We finally got sleep and felt human again. Highly recommend!"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-700 pt-4">
                <div className="w-10 h-10 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLB89_ejOFvJGtZ6zhzsfCpYSxqoFvmYIFgX9Mik1a5_opvSukkNoDX7ybbPiK0Jq-DSTCJqr5Dcp_LXvug8XuAYIoNLoZeqhh8pAELN7eMDEU9dYxmNn_iRwSQiVU0ZoxU0pH300sAiPdLECvzeNqUsd_SxZMhrRkQNPA_qmjCZ2MjvEzUt23HLyrHchX4-En4Vzv_XsTC1j9-ktf4LovyY_uCppi-zlcMHYKSk6z6r275LndTTmLpgKBxXoKOfo71Y3lfiQ57w0")' }}></div>
                <div>
                  <p className="font-bold text-sm text-slate-900 dark:text-white">Emily Chen</p>
                  <p className="text-xs text-slate-500">Mother of twins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto bg-primary dark:bg-blue-900 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your village?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-lg mx-auto">Book a free 15-minute consultation to discuss your needs and see if we're the right fit for your family.</p>
            <Link to="/booking" className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-full shadow-lg hover:bg-slate-100 transition-all transform hover:scale-105">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
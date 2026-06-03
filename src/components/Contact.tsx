'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedback, setFeedback] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);
        setFeedback(null);

        const form = event.currentTarget;
        const formData = new FormData(form);

        const payload = {
            fullName: String(formData.get('fullName') ?? ''),
            phoneNumber: String(formData.get('phoneNumber') ?? ''),
            emailAddress: String(formData.get('emailAddress') ?? ''),
            procedureOfInterest: String(formData.get('procedureOfInterest') ?? ''),
            message: String(formData.get('message') ?? ''),
            newsletter: formData.get('newsletter') === 'on',
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json().catch(() => null);

            if (!response.ok) {
                throw new Error(result?.message ?? 'Something went wrong.');
            }

            setFeedback('Thank you. Your consultation request has been sent, and a confirmation email should arrive shortly.');
            form.reset();
        } catch (error) {
            setFeedback(error instanceof Error ? error.message : 'Something went wrong.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="pt-10 pb-10 md:py-16 relative overflow-hidden bg-light">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/art/46-gradient-background.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-8 md:gap-10 relative z-10">

                {/* Left Column: Mission */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <div className="mb-10 md:mb-4 w-full max-w-[280px] md:max-w-md relative h-28 md:h-44">
                        <Image
                            src="https://zpcxjvbgxvfrcnlixnrb.supabase.co/storage/v1/object/public/site-assets/art/47-where-science-meets-art.png"
                            alt="Where Science Meets Art"
                            fill
                            className="object-contain object-left"
                        />
                    </div>
                    <div className="w-full h-1 bg-primary mb-10" />

                    <p className="text-dark text-[16px] font-medium leading-relaxed mb-10 font-sans">
                        Guided by precision, compassion, and decades of expertise, Dr. James Gordon approaches every patient with a philosophy instilled by his father, an ophthalmologist: <span className="italic font-semibold font-sans text-primary">&quot;Treat every patient like your mother.&quot;</span>
                    </p>
                    <p className="text-dark text-[16px] font-medium leading-relaxed mb-0 font-sans">
                        With this deeply personal standard, Dr. Gordon prioritizes listening, offers honest and thoughtful guidance, and tailors every treatment to the individual — so patients achieve the best possible results. His goal is simple and unwavering: to help every patient see great, look natural, and feel like the best version of themselves.
                    </p>
                </motion.div>

                {/* Right Column: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 bg-white/95 backdrop-blur-sm p-8 md:p-12 shadow-2xl border-t-4 border-primary relative"
                >
                    <h3 className="text-2xl font-bold uppercase mb-8 text-dark">Ask Us Anything!</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Full Name*</label>
                                <input name="fullName" type="text" autoComplete="name" required className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors bg-transparent" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Phone Number*</label>
                                <input name="phoneNumber" type="tel" autoComplete="tel" inputMode="tel" required className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors bg-transparent" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email Address*</label>
                                <input name="emailAddress" type="email" autoComplete="email" inputMode="email" required className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors bg-transparent" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Procedure of Interest*</label>
                                <input name="procedureOfInterest" type="text" placeholder="e.g. Eyelid Surgery, Dermal Fillers..." required className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors bg-transparent placeholder:text-xs" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">How can we assist your medical/aesthetic needs?</label>
                            <textarea name="message" className="w-full border-b border-gray-300 py-2 focus:border-primary outline-none transition-colors h-24 resize-none bg-transparent"></textarea>
                        </div>

                        <div className="flex items-start gap-3">
                            <input name="newsletter" type="checkbox" className="mt-1" />
                            <p className="text-xs font-bold uppercase text-gray-500 leading-tight">
                                Opt in for Gordon Eye &amp; Face Newsletter
                            </p>
                        </div>

                        <p className="text-xs text-dark leading-relaxed">
                            By submitting this you agree to be contacted by Gordon Eye &amp; Face via text, call or email. Standard rates may apply. For more details, read our <span className="text-primary underline cursor-pointer">Privacy Policy</span>.
                        </p>

                        <div className="pt-4 pb-0">
                            <p className="text-lg font-semibold font-sans uppercase tracking-tight text-primary mb-0">Call or Text:</p>
                            <a href="tel:914-820-0000" className="text-[18px] md:text-[23px] lg:text-[34px] font-bold font-sans uppercase tracking-tight text-primary hover:text-dark transition-colors leading-none whitespace-nowrap">914-820-0000</a>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="block w-full bg-primary text-white font-bold py-4 uppercase tracking-widest hover:bg-[#2A2E37] transition-colors mt-4 rounded-full text-center disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'SENDING...' : 'REQUEST CONSULTATION'}
                        </button>

                        {feedback && (
                            <p className="text-sm font-medium text-primary" aria-live="polite">
                                {feedback}
                            </p>
                        )}
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;

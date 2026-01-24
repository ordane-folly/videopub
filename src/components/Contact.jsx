import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
    const whatsappNumber = "1234567890"; // Replace with actual number
    const emailAddress = "contact@example.com"; // Replace with actual email

    return (
        <section id="contact" className="pt-24 pb-12 bg-white relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                    Contactez-moi dès maintenant
                </h2>

                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Envoyez simplement vos photos ou vos questions et obtenez votre vidéo publicitaire professionnelle rapidement.
                </p>

                <div className="flex flex-col items-center gap-8 mb-16">
                    {/* WhatsApp Button */}
                    <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white text-lg font-bold rounded-full shadow-lg hover:bg-[#20bd5a] hover:shadow-green-500/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto min-w-[300px]"
                    >
                        <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
                        <span>Discuter sur WhatsApp</span>

                        {/* Glossy effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                    </a>

                    {/* Email Link */}
                    <a
                        href={`mailto:${emailAddress}`}
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
                    >
                        <Mail size={18} />
                        <span>{emailAddress}</span>
                    </a>
                </div>

            </div>
        </section>
    );
}

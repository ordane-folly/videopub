import heroVideo from '../assets/hero-video.mp4';

export default function Hero() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in-up max-w-5xl leading-tight">
                    Des vidéos publicitaire qui boostent vos ventes
                </h1>

                <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <a
                        href="#services"
                        className="inline-block px-10 py-4 bg-secondary text-white text-lg font-semibold rounded-full shadow-lg hover:bg-orange-600 hover:shadow-orange-500/50 hover:-translate-y-1 transition-all duration-300"
                    >
                        Nos Services
                    </a>
                </div>
            </div>
        </div>
    );
}

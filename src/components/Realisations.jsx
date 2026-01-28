import { useState } from 'react';
import { X } from 'lucide-react';
import vid1 from '../assets/Video1.mp4';
import vid2 from '../assets/Video2.mp4';
import vid3 from '../assets/Video3.mp4';
import vid4 from '../assets/Video4.mp4';
import vid5 from '../assets/Video5.mp4';
import vid6 from '../assets/Video6.mp4';

export default function Realisations() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const portraitVideos = [
        { src: vid1, title: "Cuisinière", benefit: "Imaginez votre produit captivant l'attention instantanément." },
        { src: vid2, title: "Chaussures", benefit: "Transformez vos visiteurs en acheteurs fidèles." },
        { src: vid3, title: "Ordinateur", benefit: "Une présentation dynamique qui sublime votre offre." },
    ];

    const landscapeVideos = [
        { src: vid4, title: "Sac à dos", benefit: "Expliquez votre valeur ajoutée en quelques secondes." },
        { src: vid5, title: "Mixeur", benefit: "Créez une connexion émotionnelle avec votre audience." },
        { src: vid6, title: "Ecouteur bluetooth", benefit: "Boostez vos conversions grâce à un visuel impactant." },
    ];

    const VideoCard = ({ video, aspect }) => {
        const [isLoaded, setIsLoaded] = useState(false);

        return (
            <div
                className="group relative cursor-pointer"
                onClick={() => setSelectedVideo(video)}
            >
                <div className={`relative ${aspect} rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] bg-gray-100`}>

                    {/* Loader */}
                    <div className={`absolute inset-0 z-10 flex items-center justify-center bg-gray-100 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <div className="w-10 h-10 border-4 border-gray-200 border-t-secondary rounded-full animate-spin"></div>
                    </div>

                    <video
                        src={video.src}
                        className={`w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onLoadedData={() => setIsLoaded(true)}
                    />
                    {/* Overlay on hover indicating click action */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                            <span className="text-white font-bold">Agrandir</span>
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-center">
                    <h3 className="font-bold text-lg text-gray-900">{video.title}</h3>
                    <p className="text-sm text-gray-500 italic mt-1">{video.benefit}</p>
                </div>
            </div>
        );
    };

    return (
        <section id="realisations" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-secondary font-bold tracking-wide uppercase text-4xl mb-2 block">
                        NOS RÉALISATIONS
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 uppercase tracking-tight mb-4">
                        Nos vidéos publicitaires en action
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nous transformons vos produits en vidéos qui captent l’attention et boostent vos ventes.
                    </p>
                </div>

                {/* Video Grid */}
                <div className="space-y-12">

                    {/* Portrait Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portraitVideos.map((video, index) => (
                            <VideoCard key={`portrait-${index}`} video={video} aspect="aspect-[9/16]" />
                        ))}
                    </div>

                    {/* Landscape Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {landscapeVideos.map((video, index) => (
                            <VideoCard key={`landscape-${index}`} video={video} aspect="aspect-video" />
                        ))}
                    </div>

                </div>

                {/* CTA Section - Minimal */}
                <div className="mt-12 text-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-orange-600 transition-colors shadow-lg hover:shadow-orange-500/30"
                        >
                            Contactez-moi
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-secondary font-bold rounded-full border-2 border-secondary hover:bg-orange-50 transition-colors"
                        >
                            Voir nos services
                        </a>
                    </div>
                </div>

            </div>

            {/* Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                        >
                            <span className="text-sm font-medium">Fermer</span>
                            <X size={32} />
                        </button>

                        {/* Video Player */}
                        <div className="w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
                            <video
                                src={selectedVideo.src}
                                className="max-w-full max-h-[80vh] mx-auto"
                                controls
                                autoPlay
                            />
                        </div>

                        {/* Modal Footer Info */}
                        <div className="mt-4 text-white text-center">
                            <h3 className="text-xl font-bold">{selectedVideo.title}</h3>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

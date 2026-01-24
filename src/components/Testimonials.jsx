import { useState } from 'react';
import { Quote, ChevronDown } from 'lucide-react';

export default function Testimonials() {
    const reviews = [
        {
            name: "Marie",
            role: "E-commercante",
            text: "Avec votre expertise, mes produits se vendent beaucoup plus vite ! Les vidéos attirent vraiment l’attention de mes clients et mes ventes ont augmenté dès la première semaine."
        },
        {
            name: "Thomas",
            role: "Entrepreneur",
            text: "Avec votre aide, je n’avais jamais pensé qu’on pouvait créer une vidéo à partir de simples photos. Mes publicités Facebook convertissent enfin !"
        },
        {
            name: "Sophie",
            role: "Boutique en ligne",
            text: "Avec votre accompagnement, mes produits sont mis en valeur comme jamais. J’ai gagné du temps et mes clients passent plus facilement à l’achat."
        },
        {
            name: "Alex",
            role: "Dropshipper",
            text: "Avec votre service, mes produits ont l’air beaucoup plus professionnels. Les vidéos ont boosté mes ventes et captivé mes clients."
        },
        {
            name: "Julie",
            role: "Créatrice de marque",
            text: "Avec votre travail, je n’ai plus à me casser la tête pour créer des vidéos. Mes produits se vendent mieux et mes publicités sont efficaces."
        },
        {
            name: "Pierre",
            role: "Startup",
            text: "Avec votre soutien, mes vidéos ont complètement transformé mes publicités. J’ai vu mes ventes augmenter et mes produits se démarquer."
        }
    ];

    const [visibleCount, setVisibleCount] = useState(3);

    const showMore = () => {
        setVisibleCount(reviews.length);
    };

    return (
        <section id="testimonials" className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Ce que nos clients disent de nous
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Découvrez comment nos vidéos publicitaires ont boosté les ventes de nos clients.
                    </p>
                </div>

                {/* Static Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.slice(0, visibleCount).map((review, index) => (
                        <div
                            key={`${index}-${review.name}`}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300 animate-in fade-in slide-in-from-bottom-4 duration-500"
                        >
                            <div className="mb-6 text-secondary opacity-30">
                                <Quote size={32} />
                            </div>

                            <div className="flex-grow">
                                <p className="text-gray-600 italic leading-relaxed mb-6">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center pt-4 border-t border-gray-50">
                                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold text-lg mr-3">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                                    <p className="text-xs text-secondary font-medium uppercase tracking-wide">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {visibleCount < reviews.length && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={showMore}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
                        >
                            <span>Voir plus d'avis</span>
                            <ChevronDown size={20} />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}

import { Zap, Wand2, Smartphone, TrendingUp, Image } from 'lucide-react';

export default function Services() {
    const steps = [
        {
            icon: <Zap size={40} className="text-secondary" />,
            title: "Création de contenu percutant avec l’IA",
            description: "Nous analysons votre produit ou services et grace à l'IA nous vous créons un acrroche visuel qui attire immédiatement l’attention. Les premières secondes de la vidéo sont conçues pour stopper le scroll de vos clients et montrer le bénéfice de votre produit.",
            benefit: "Vous captez l’attention dès les premières secondes et vos produits se démarquent."
        },
        {
            icon: <Wand2 size={40} className="text-secondary" />,
            title: "Montage et optimisation sur Canva",
            description: "Montage vidéo professionnel réalisé sur Canva, incluant images, textes dynamiques, animations et transitions fluides pour un rendu impeccable.",
            benefit: "Vous obtenez une vidéo prête à publier, esthétique et professionnelle qui  donnent confiance à vos clients."
        },
        {
            icon: <Image size={40} className="text-secondary" />,
            title: "Vos vidéos à partir de vos photos",
            description: "Pas besoin de filmer ! Nous créons des vidéos publicitaires professionnelles directement à partir des photos de vos produits. Rapide, simple et prêt à vendre.",
            benefit: "Envoyez simplement vos photos et recevez une vidéo professionnelle prête à captiver vos clients et booster vos ventes"
        },
        {
            icon: <Smartphone size={40} className="text-secondary" />,
            title: "Formats réseaux sociaux",
            description: "Adaptation de vos vidéos en formats portrait (9:16), paysage (16:9) ou carré (1:1) pour Facebook, Instagram et TikTok.",
            benefit: "Prêtes à publier partout, vos vidéos touchent plus de clients et boostent vos ventes."
        },
        {
            icon: <TrendingUp size={40} className="text-secondary" />,
            title: "Stratégie et CTA intégré",
            description: "Intégration stratégique d'appels à l'action (CTA) clairs pour guider le spectateur vers l'achat.",
            benefit: "Chaque vidéo incite vos clients à acheter et augmente vos ventes rapidement."
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <span className="text-secondary font-boldtracking-wide uppercase text-4xl">Service</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                        Boostez vos ventes avec des vidéos publicitaires percutantes
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Nous aidons les e-commerçants et entreprises à augmenter leurs ventes grâce à des vidéos publicitaires percutantes, créées avec l’IA et optimisées sur Canva, réalisées uniquement à partir des photos de leurs produits.
                    </p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-start"
                        >
                            <div className="bg-orange-50 p-4 rounded-2xl mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 mb-6 text-sm flex-grow">
                                {step.description}
                            </p>
                            <div className="mt-auto pt-4 border-t border-gray-100 w-full">
                                <p className="text-primary text-sm font-semibold">
                                    "{step.benefit}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

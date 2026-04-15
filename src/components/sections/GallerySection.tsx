const images = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq-Fc0Xe4FqYVLGMI2v1Le90pnctV2k7xc90w6d6-G0C3-tGB4LR2xDr65U1erM51RuWIbI02VqdXe1Ur2t8UKgFAqWqWYTEpMdway0GCiUAb5m78yFs3BRiQ8ct2ZHA2J7DFF_rInnwaY1OQu2rSbtKJfezqoXBbqlGKONgJu0hrJBSLmZ3N_EiAyFLEuDLPUovR_HMVYeggnvhs8loFClwqIw59rxJcstTn2jrv8ozYOic5OWDT35O6_KEp7IAAL46oXfR1ayik',
    alt: 'Dental equipment with golden reflections',
    offset: false,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAYLh0kfTCKP7YsJ-te-E8yxaEqBg_avGJTD8_GTJuVRDOWew4E6aYqAJwZwm8KL_R-HS1rnvj7pufsUBbrzo9P6ys6Bs91IBJ_ZevnE_iRgFWk6C-FBYxgNpDTfrhguoVzppPdIofooIacAxXgxL51V_rtzYwZKGnAccq-wgswHmVBONiVeP2jW3LNPmmcbeYY2mGAgoiQiwMKNd4j7NO42quno3qtrZthcPericSluE5t-SNmbJrtjgVS4tZd2OibnMV2_EYlGM',
    alt: 'High-end dental examination room',
    offset: true,
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuXty6m6cIEgzasy3vydux_OmLUke20uOedcOr3CfmfHJTPCmrZFkhGc9KjS6ncD0nzI37s88cml3aaDz02d8BqKB554y69heOt0df-La0RFVXCs6jrRcTPSdavzs49rKPPtjdcpvyaQdIkxIP-F9-2EH6p1ah9g-eqgBJlZVfQ2Unl-j9zJJ-Ah6msWjg6XasXDSZ8-0dOhf8yfJjAPWfF_Qhk6OnrLh1gMuvTERPRP7OB1G5VUmlCER1TFrHn79vIauvfn4K8dw',
    alt: 'Dental procedure under warm professional lighting',
    offset: false,
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[var(--color-surface-lowest)] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div data-reveal className="text-center mb-16">
          <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Our Space
          </p>
          <h2 className="text-4xl font-bold text-white">The Atelier Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {images.map(({ src, alt, offset }, i) => (
            <div
              key={alt}
              data-reveal
              style={{ '--reveal-delay': `${i * 0.12}s` } as React.CSSProperties}
              className={`group overflow-hidden rounded-2xl bg-[var(--color-surface-3)] ${
                offset ? 'md:mt-10' : ''
              }`}
            >
              <img
                src={src}
                alt={alt}
                className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

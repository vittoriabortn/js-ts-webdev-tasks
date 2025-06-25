import './hero.css';

export const Hero = () => {
  return `
    <section class="hero">
      <h1 class="hero__title">
        FIND ANYTHING <br /> THAT MATCHES <br /> YOUR STYLE <br />
      </h1>

      <p class="hero__description">Browse through our diverse range of meticulously crafted garments, <br /> designed to bring out your individuality and cater to your sense of style.</p>

      <a class="hero__cta" href="#/catalog">Shop Now</a>

    <div class="stats">
  <div class="stat-item">
    <div class="stat-value">200+</div>
    <div class="stat-label">International Brands</div>
  </div>
  <div class="divider"></div>
  <div class="stat-item">
    <div class="stat-value">2,000+</div>
    <div class="stat-label">High-Quality Products</div>
  </div>
  <div class="divider"></div>
  <div class="stat-item">
    <div class="stat-value">30,000+</div>
    <div class="stat-label">Happy Customers</div>
  </div>
</div>

  <div class="brand-strip-inner">
    <img src="/public/assets/icons/brands/versace.svg" alt="Versace" />
    <img src="/assets/brands/zara.svg" alt="Zara" />
    <img src="/assets/brands/gucci.svg" alt="Gucci" />
    <img src="/assets/brands/prada.svg" alt="Prada" />
    <img src="/assets/brands/calvin-klein.svg" alt="Calvin Klein" />
  </div>
</section>
    
    `;
};

import { getIconBrandUrl } from '@/utils/utils';
import { brands } from './constants';

import './hero.css';

export const Hero = () => {
  return `
    <section class="hero">
      <div class="hero__container">
       
      <div class="hero__content">
          

<h1 class="hero__title">
  FIND <span class="underline">ANYTHING</span> <br/> THAT MATCHES <br/> YOUR STYLE
</h1>
          <p class="hero__description">
            Browse through our diverse range of meticulously crafted garments, <br/>
            designed to bring out your individuality and cater to your sense of style.
          </p>

          <a class="hero__cta" href="#/catalog">Shop Now</a>

<div class="stats-wrapper">
  <div class="stats">
    <div class="stat">
      <div class="stat-value">200+</div>
      <div class="stat-label">International Brands</div>
    </div>
    <div class="divider"></div>
    <div class="stat">
      <div class="stat-value">2,000+</div>
      <div class="stat-label">High-Quality Products</div>
    </div>
    <div class="divider"></div>
    <div class="stat">
      <div class="stat-value">30,000+</div>
      <div class="stat-label">Happy Customers</div>
    </div>
  </div>
</div>
          
        </div>
        <div class="hero_desktop"></div>
      </div>

      <ul class="brand-strip-inner">
        ${brands
          .map(
            (brand) =>
              `<li><img src="${getIconBrandUrl(brand.name)}" alt="${
                brand.alt
              }" /></li>`
          )
          .join('')}
      </ul>
    </section>
  `;
};

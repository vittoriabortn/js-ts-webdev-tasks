import './cards.css';
import { CardItem } from './card-item/card-item.ts';
import { type Product } from '../../types';

export const Cards = (title: string, data: Product[]): string => {
  return `
    <section class="cards">
    <div class="cards__wrapper">
      <h2 class="cards__title">${title}</h2>
      <a class="cards__link" href="#">See All</a>
      <div class="cards__row">
            <div class="arrow arrow-left">
              <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M11.5664 0.674363C12.1445 1.24018 12.1445 2.15755 11.5664 2.72337L4.32367 9.8125L11.5664 16.9016C12.1445 17.4675 12.1445 18.3848 11.5664 18.9506C10.9884 19.5165 10.0511 19.5165 9.47303 18.9506L1.18356 10.837C0.60548 10.2712 0.60548 9.35382 1.18356 8.788L9.47303 0.674363C10.0511 0.108546 10.9884 0.108545 11.5664 0.674363Z" fill="white"/>
              </svg>
            </div>
           ${data.map((item) => CardItem(item)).join('')}
           <div class="arrow arrow-right">
             <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M0.433559 19.3256C-0.144519 18.7598 -0.144519 17.8425 0.43356 17.2766L7.67633 10.1875L0.433561 3.09836C-0.144517 2.53255 -0.144518 1.61518 0.433559 1.04936C1.01164 0.483544 1.94889 0.483544 2.52697 1.04936L10.8164 9.163C11.3945 9.72881 11.3945 10.6462 10.8164 11.212L2.52697 19.3256C1.94889 19.8915 1.01164 19.8915 0.433559 19.3256Z" fill="white"/>
              </svg>
           </div>
      </div>
      <div class="cards__circles">
        <div class="card__circle"></div>
        <div class="card__circle"></div>
        <div class="card__circle"></div>
      </div>
    </div>
    </section>
    `;
};

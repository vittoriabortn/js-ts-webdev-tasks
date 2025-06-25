import type { Product, RatingStar } from '../../types';

const createStarSVG = (fill: string): string => `
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.7264 0.199129C6.82103 -0.0663765 7.17897 -0.0663763 7.27359 0.199129L8.87925 4.70445C8.9203 4.81963 9.023 4.89792 9.1401 4.90329L13.7202 5.11326C13.9901 5.12564 14.1007 5.48281 13.8893 5.65927L10.3015 8.65369C10.2098 8.73025 10.1706 8.85691 10.2019 8.97542L11.4269 13.6105C11.4991 13.8837 11.2095 14.1044 10.9842 13.948L7.16121 11.2933C7.06347 11.2254 6.93653 11.2254 6.83879 11.2933L3.01579 13.948C2.7905 14.1044 2.50092 13.8837 2.57311 13.6105L3.79809 8.97542C3.82941 8.85691 3.79018 8.73025 3.69846 8.65369L0.11073 5.65927C-0.100701 5.48281 0.00990903 5.12564 0.27982 5.11326L4.8599 4.90329C4.977 4.89792 5.07969 4.81963 5.12075 4.70445L6.7264 0.199129Z" fill="${fill}"/>
  </svg>
`;

const createRatingItem = (star: RatingStar): string => `
  <li class="rating__item">
    <a href="#" class="rating__link">
      ${createStarSVG(star.fill)}
    </a>
  </li>
`;

const renderRating = (rating: number): string => {
  const fullStars: number = Math.floor(rating);
  const hasHalfStar: boolean = rating % 1 >= 0.5;
  let stars: string = '';

  for (let i = 0; i < fullStars; i++) {
    stars += createRatingItem({ fill: '#FFD700' });
  }

  if (hasHalfStar) {
    stars += createRatingItem({ fill: '#DFE1E3' });
  }

  const emptyStars: number = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars += createRatingItem({ fill: '#DFE1E3' });
  }

  return stars;
};

export const ProductComponent = (product: Product): string => {
  const { id, title, description, thumbnail, price, rating } = product;

  return `
    <article class="product">
        <div class="img-wrapper">
            <img class="product__image" src="${thumbnail}" alt="${title}" />
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.371865 8.59832C-0.701135 5.24832 0.552865 1.41932 4.06987 0.286322C5.91987 -0.310678 7.96187 0.0413219 9.49987 1.19832C10.9549 0.0733218 13.0719 -0.306678 14.9199 0.286322C18.4369 1.41932 19.6989 5.24832 18.6269 8.59832C16.9569 13.9083 9.49987 17.9983 9.49987 17.9983C9.49987 17.9983 2.09787 13.9703 0.371865 8.59832Z" fill="#B0A6BD"/>
            </svg>
        </div>

        <div class="product__content">
            <a class="product__title" href="#/catalog/${id}">${title}</a>

            <p class="product__description">
                ${description}
            </p>
            <div class="rating">
                <ol class="rating__list">
                    ${renderRating(rating)}
                </ol>
                <div class="rating__stat">
                    (${rating.toFixed(1)})
                </div>
            </div>
            <p class="product__price">$${price.toFixed(2)}</p>

            <button class="product__cta">Add to Bag</button>
        </div>
    </article>
  `;
};

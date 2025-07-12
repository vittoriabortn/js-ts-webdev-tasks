import './header.css';
import { getIconUrl } from '../../utils/utils';

const CART_ICON_URL: string = getIconUrl('cart-icon.svg');
const ACCOUNT_ICON_URL: string = getIconUrl('account-icon.svg');

// 💡 Отдельно промо-баннер
const BANNER_TEMPLATE: string = `
  <div class="promo-banner" id="promo-banner">
    <p>
      Sign up and get 20% off to your first order.
      <a href="#" class="highlighted">Sign Up Now</a>
    </p>
    <button class="close-btn" id="close-banner-btn">✕</button>
  </div>
`;

// 💡 Шапка отдельно
const TEMPLATE: string = `
  <a class="logo" href="#/">
    <span class="color--black">SHOP.CO</span>
  </a>

  <div class="icon-container desktop-hidden" id="menu">
    <div class="icon">
      <div class="burger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>

  <div class="action-bar">
    <div class="icon-container mobile-hidden"></div>
    <div class="icon-container mobile-hidden">
      <div class="icon">
        <img src="${ACCOUNT_ICON_URL}" alt="Account Icon Image"/>
      </div>
    </div>
    <div class="icon-container">
      <div class="icon">
        <img src="${CART_ICON_URL}" alt="Cart Icon Image"/>
      </div>
    </div>
  </div>
`;

export function onMenuBurgerClicked(): void {
  const headerElement = document.getElementsByTagName('header')[0];
  if (headerElement) {
    headerElement.classList.toggle('opened');
  }
}

export const Header = (): HTMLElement => {
  const container = document.createElement('div');

  const bannerWrapper = document.createElement('div');
  bannerWrapper.innerHTML = BANNER_TEMPLATE;

  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = TEMPLATE;

  container.appendChild(bannerWrapper.firstElementChild!);
  container.appendChild(header);

  return container;
};

// 💡 Закрытие баннера
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('close-banner-btn');
  const banner = document.getElementById('promo-banner');

  if (closeBtn && banner) {
    closeBtn.addEventListener('click', () => {
      banner.style.display = 'none';
    });
  }
});

import './header.css';
import { getIconUrl } from '../../utils/utils';

const CART_ICON_URL: string = getIconUrl('cart-icon.svg');
const ACCOUNT_ICON_URL: string = getIconUrl('account-icon.svg');

const TEMPLATE: string = `
    <div class="icon-conteiner desktop-hidden" id="menu">
      <div class="icon">
        <div class="burger-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
    </div>
    <div class="icon-container"></div>

    <a class="logo" href="#/">
        <span class="color--black">SHOP.CO</span>
    </a>


    <div class="action-bar">
      <div class="icon-container mobile-hidden">
             </div>
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
  const headerElement: HTMLElement | null =
    document.getElementsByTagName('header')[0];
  if (headerElement) {
    headerElement.classList.toggle('opened');
  }
}

export const Header = (): HTMLElement => {
  const headerElement: HTMLElement = document.createElement('header');
  headerElement.classList.add('header');
  headerElement.innerHTML = TEMPLATE;
  return headerElement;
};

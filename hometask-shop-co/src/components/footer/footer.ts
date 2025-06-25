import './footer.css';
import { getIconUrl } from '../../utils/utils.ts';

const facebookIconUrl: string = getIconUrl('facebook.svg');
const instagramIconUrl: string = getIconUrl('instagram.svg');
const pinterestIconUrl: string = getIconUrl('pinterest.svg');
const telegramIconUrl: string = getIconUrl('telegram.svg');
const twitterIconUrl: string = getIconUrl('twitter.svg');

export const Footer = (): HTMLElement => {
  const footer: HTMLElement = document.createElement('footer');
  footer.classList.add('footer');

  footer.innerHTML = `
  <div class="footer__wrapper">
    <div class="footer__icons">
      <img class="footer__icon" src="${facebookIconUrl}" alt="Facebook" />
      <img class="footer__icon" src="${instagramIconUrl}" alt="Instagram" />
      <img class="footer__icon" src="${pinterestIconUrl}" alt="Pinterest" />
      <img class="footer__icon" src="${telegramIconUrl}" alt="Telegram" />
      <img class="footer__icon" src="${twitterIconUrl}" alt="Twitter" />
    </div>
    <div class="footer__content">
      <div class="footer__logo__wrap">
        <div class="footer__logo">
          <span>Bloom</span> Beauty
          <div class="logo__discription">
            FIND ANYTHING THAT MATCHES YOUR STYLE
          </div>
        </div>
        <div class="logo__phone">
          <img
            src="src/assets/icons/logo1 phone.svg"
            alt="logo phone"
            height="12"
          />
          <a href="#">+ 38 050 123 45 67</a>
        </div>
        <div class="logo__email">
          <img
            src="src/assets/icons/logo2 email.svg"
            alt="logo email"
            height="12"
          />
          <a href="mailto:bloombt@kmail.com">bloombt@kmail.com</a>
        </div>
        <div class="logo__local">
          <img
            src="src/assets/icons/logo3 local.svg"
            alt="logo local"
            height="12"
          />
          Kiyv, Ukraine
        </div>
      </div>
      <div class="footer__links">
        <div class="help__links">
          <ul>
            <li class="list__title">Help</li>
            <li>Contact us</li>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
          </ul>
        </div>
        <div class="account__links">
          <ul>
            <li class="list__title">MY ACCOUNT</li>
            <li>Addresses</li>
            <li>Order Status</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div class="customer__links">
          <ul>
            <li class="list__title">CUSTOMER CARE</li>
            <li>About us</li>
          </ul>
        </div>
      </div>
      <div class="email__links">
        <ul>
          <li class="email__list__title">SIGN UP FOR EMAILS</li>
          <li>Stay informed, subscribe to our newsletter now!</li>
          <li></li>
          <form>
            <input placeholder="Email" type="email" required />
            <button class="subscribe__button" type="submit">
              Subscribe →
            </button>
          </form>
        </ul>
      </div>
    </div>
    <div class="footer__line"></div>
    <div class="footer__data">
      <p>© 2023 Bloom Beauty</p>
      <div class="footer__first">
        <p>Privacy Policy</p>
        <p>terms and conditions</p>
      </div>
    </div>
  </div>
  `;

  return footer;
};

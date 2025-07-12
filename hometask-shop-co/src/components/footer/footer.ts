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
          <div class="footer__logo">SHOP.CO</div>
        </div>

        <div class="footer__links">
          <div class="help__links">
            <ul>
              <li class="list__title">Company</li>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div class="account__links">
            <ul>
              <li class="list__title">Help</li>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div class="customer__links">
            <ul>
              <li class="list__title">FAQ</li>
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>
          <div class="resources__links">
            <ul>
              <li class="list__title">Resources</li>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>

        <div class="email__links">
          <ul>
            <li class="email__list__title">STAY UPTO DATE ABOUT OUR LATEST OFFERS</li>
            <li>
              <form>
                <input type="email" placeholder="Enter your email address" required />
                <button class="subscribe__button" type="submit">
                  Subscribe to Newsletter
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer__line"></div>
      <div class="footer__data">
        <p>© 2023 SHOP.CO</p>
        <div class="footer__first">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  `;

  return footer;
};
import './footer.css';
import { getIconUrl } from '../../utils/utils';
import { SubscribeForm } from "./subscribeForm";

import visa from '../../assets/icons/visa.svg';
import mastercard from '../../assets/icons/mastercard.svg';
import paypal from '../../assets/icons/paypal.svg';
import applepay from '../../assets/icons/applepay.svg';
import googlepay from '../../assets/icons/googlepay.svg';


const facebookIconUrl = getIconUrl('facebook.svg');
const instagramIconUrl = getIconUrl('instagram.svg');
const pinterestIconUrl = getIconUrl('pinterest.svg');
const telegramIconUrl = getIconUrl('telegram.svg');
const twitterIconUrl = getIconUrl('twitter.svg');

export const Footer = (): HTMLElement => {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  const subscribeForm = SubscribeForm();

  footer.innerHTML = `
    <div class="footer__top"></div>
    <div class="footer__main">
      <div class="footer__brand">
        <div class="footer__logo">SHOP.CO</div>
        <p class="footer__description">
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>
        <div class="footer__socials">
          <img src="${twitterIconUrl}" alt="Twitter" />
          <img src="${facebookIconUrl}" alt="Facebook" />
          <img src="${instagramIconUrl}" alt="Instagram" />
          <img src="${pinterestIconUrl}" alt="Pinterest" />
          <img src="${telegramIconUrl}" alt="Telegram" />
        </div>
      </div>
      <div class="footer__links">
        <div class="footer__column">
          <div class="footer__heading">COMPANY</div>
          <ul>
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__heading">HELP</div>
          <ul>
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__heading">FAQ</div>
          <ul>
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>
        <div class="footer__column">
          <div class="footer__heading">RESOURSES</div>
          <ul>
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to – Blog</li>
            <li>Youtube Playlist</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <p>Shop.co © 2000–2023, All Rights Reserved</p>
<div class="footer__payments">
  <img src="${visa}" alt="Visa" />
  <img src="${mastercard}" alt="MasterCard" />
  <img src="${paypal}" alt="PayPal" />
  <img src="${applepay}" alt="ApplePay" />
  <img src="${googlepay}" alt="GooglePay" />
</div>

    </div>
  `;

  footer.querySelector('.footer__top')?.appendChild(subscribeForm);

  return footer;
};

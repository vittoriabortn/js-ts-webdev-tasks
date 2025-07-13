import './subscribeForm.css';

export const SubscribeForm = (): HTMLElement => {
  const formWrap = document.createElement('div');
  formWrap.className = 'subscribe';

  formWrap.innerHTML = `
    <div class="subscribe__title">STAY UPTO DATE ABOUT <br> OUR LATEST OFFERS</div>
    <form class="subscribe__form">
      <input class="subscribe__input" type="email" placeholder="Enter your email address" required />
      <button class="subscribe__button" type="submit">Subscribe to Newsletter</button>
    </form>
  `;

  return formWrap;
};

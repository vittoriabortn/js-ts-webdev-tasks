import { onMenuBurgerClicked } from "../components/header/header";

export const Controller = (): void => {
  const menuButtonElement: HTMLElement | null = document.querySelector('#menu');
  const menuItems: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-list li');

  if (menuButtonElement) {
    menuButtonElement.addEventListener('click', onMenuBurgerClicked);
  }

  menuItems.forEach((item: HTMLElement) => {
    item.addEventListener('click', onMenuBurgerClicked);
  });
}; 
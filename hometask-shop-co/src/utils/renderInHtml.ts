import { Footer } from '@/components/footer/footer';
import { Header } from '@/components/header/header';
import { Controller } from './controller';

export const renderInHtml = async (
  template: () => string | Promise<string>,
  renderId: string
): Promise<void> => {
  const container: HTMLElement = document.getElementById(renderId)!;

  const header = Header();
  const footer = Footer();

  container.innerHTML = await template();

  container.prepend(header);
  container.append(footer);

  await Controller();
};

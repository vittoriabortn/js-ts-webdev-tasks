import Router from 'yourrouter';
import { renderInHtml } from '../utils/renderInHtml';
import { HomePage } from '../pages/HomePage.ts';
import { CatalogPage } from '../pages/CatalogPage.ts';
import { ProductPage } from '../pages/ProductPage.ts';
import { CartPage } from '../pages/CartPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { OrderConfirmationPage } from '../pages/OrderConfirmationPage';

const router = Router.create({
  renderId: '#app',
  path404: '/notFound',
});

router.addRoute('/', async () => {
  await renderInHtml(HomePage, 'app');
});

router.addRoute('/catalog', async () => {
  await renderInHtml(CatalogPage, 'app');
});

router.addRoute('/catalog/:id', async () => {
  await renderInHtml(ProductPage, 'app');
});

router.addRoute('/', async () => {
  await renderInHtml(CartPage, 'app');
});

router.addRoute('/', async () => {
  await renderInHtml(CheckOutPage, 'app');
});

router.addRoute('/', async () => {
  await renderInHtml(OrderConfirmationPage, 'app');
});

export default router;

import { Product } from '@/types';
import { ProductComponent } from '../product/product';
import './product-grid.css';

export const ProductGrid = (products: Product[]) => {
  return `
    <section class="products">
      ${products.map((product) => ProductComponent(product)).join('')}
    </section>
  `;
};

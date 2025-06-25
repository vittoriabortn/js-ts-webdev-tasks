import { getProducts } from '../api/products';
import { ProductGrid } from '../components/product-grid/product-grid';
import { Layout } from '../layout/Layout';

export const CatalogPage = async (): Promise<string> => {
  const products = await getProducts();

  return Layout(`
    <section class="products">
      ${ProductGrid(products)}
    </section>
  `);
};

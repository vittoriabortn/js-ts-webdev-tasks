import { getProducts } from '../api/products';
import { ProductGrid } from '../components/product-grid/product-grid';
import { Layout } from '../layout/Layout';
import { SidebarFilter } from '../components/sidebar-filter/sidebar-filter';
import '../components/sidebar-filter/sidebar-filter.css';

export const CatalogPage = async (): Promise<string> => {
  const products = await getProducts();

  return Layout(`
    <div class="catalog">
      ${SidebarFilter()}
      <section class="products">
        ${ProductGrid(products)}
      </section>
    </div>
  `);
};

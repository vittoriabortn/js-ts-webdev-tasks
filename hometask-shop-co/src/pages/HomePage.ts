import { Hero } from '../components/hero/hero.ts';
import { Layout } from '../layout/Layout';
import { CategoryGrid } from '@/components/category-grid/category-grid.ts';

export const HomePage = async () => {

  return Layout(`
    ${Hero()}
    ${await CategoryGrid()}
  `);
};

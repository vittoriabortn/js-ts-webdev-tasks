import { getCategories } from "@/api/categories";
import { CategoryCard } from "./category-сard/category-card";
import './category-grid.css';

export type Category = {
    name: string;
    slug: string;
  };
  
  export const CategoryGrid = async () => {
    const categories = await getCategories(12);
  
    return (`
      <div class="category-grid">
        <h3>Categories</h3>
  
        <div class="category-grid-items">
          ${categories
            .map(
                (category: Category) => {return `<div>${CategoryCard(category.name, category.slug)}</div>`;
          })
            .join('')}
        </div>
      </div>
    `);
  }
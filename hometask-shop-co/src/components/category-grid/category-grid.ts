import { getCategories } from "@/api/categories";
import { CategoryCard } from "./сategory-сard/сategory-сard";

export const CategoryGrid = async () => {
    const categories = await getCategories();
console.log(categories)

    return `
  <div
  class="category-grid">
  <h3>
  Categories
  </h3>

  <div
  class="category-grid-items">

  ${categories
            .map(
              (category) => {return `<div>${CategoryCard(category.name)}</div>`}
              
)}

  </div>
  

  </div>
  `;
  };
import './category-card.css';

export const CategoryCard = (text: string, slug: string) => {
  return `
<div class="category-card">
${text}
</div>
`;
};

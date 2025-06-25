import './pagination.css'

export const Pagination = () => {
    return `
    <div class='paginator'>
    <span class='blog_showmore'>Show more &darr;</span>
      <div class='paginator_pages'>
        <div class='pagination__icon left_icon'></div>
        <div class='pages_list'>
            <span >1</span>
            <span>2</span>
            <span>...</span>
            <span>7</span>
        </div>

        <div class='pagination__icon right_icon'></div>
      </div>
    </div>
  `;
};

const NAVIGATION_LIST_ITEMS = [
  "Jackets & Coats",
  "Hoodies",
  "T-shirts & Vests",
  "Shirts",
  "Blazers & Suits",
  "Jeans",
  "Trousers",
  "Shorts",
  "Underwear",
  "Gift Sets",
];

const PRODUCTS = {
  "T-shirts & Vests": [
    {
      id: "product-1",
      imgSrc: "assets/1.jpg",
      title: "Slub Jersey T-Shirt",
      price: "$12.99",
    },
    {
      id: "product-2",
      title: "Printed T-Shirt",
      price: "$12.99",
      imgSrc: "assets/2.jpg",
    },
    {
      id: "product-3",
      title: "Cotton T-Shirt",
      price: "$12.99",
      imgSrc: "assets/3.jpg",
    },
    {
      id: "product-4",
      title: "T-shirt With a Motif",
      price: "$12.99",
      imgSrc: "assets/4.jpg",
    },
    {
      id: "product-5",
      title: "Cotton T-shirt Regular Fit",
      price: "$12.99",
      imgSrc: "assets/5.jpg",
    },
    {
      id: "product-6",
      title: "Slub Jersey T-Shirt",
      price: "$12.99",
      imgSrc: "assets/6.jpg",
    },
  ],
};

// Category list
function createCategoryList() {
  const categoryListContainer = document.getElementById("category-list");
  const fragment = document.createDocumentFragment();

  // Creating a list of categories
  NAVIGATION_LIST_ITEMS.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    listItem.classList.add("category-item");

    // Click handler for selecting a category
    listItem.addEventListener("click", () => {
      handleCategoryClick(listItem);
      updateProductList(item);
    });

    fragment.appendChild(listItem);
  });

  // Creating a structural container for categories
  const ul = document.createElement("ul");
  ul.classList.add("category-list");
  ul.appendChild(fragment);

  categoryListContainer.appendChild(ul);
}

// Updating the list of products
function updateProductList(category) {
  createProductList(category);
}

// Creating a product list
function createProductList(category) {
  const productListContainer = document.getElementById("product-list");
  productListContainer.innerHTML = ""; // Clear the current list of products

  const products = PRODUCTS[category] || []; // Get products for the selected category

  const fragment = document.createDocumentFragment();

  // Creating a list of products
  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.src = product.imgSrc;
    productImg.alt = product.title;
    productCard.appendChild(productImg);

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;
    productCard.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    const button = document.createElement("button");
    button.textContent = "Add to bag";
    productCard.appendChild(button);

    fragment.appendChild(productCard);
  });

  productListContainer.appendChild(fragment);
}
// Highlighting the selected category
function handleCategoryClick(selectedCategory) {
  // Remove selection from all categories
  const allCategories = document.querySelectorAll(".category-item");
  allCategories.forEach((category) => {
    category.classList.remove("active");
  });

  // Add the active class to the selected category
  selectedCategory.classList.add("active");
}

createCategoryList();

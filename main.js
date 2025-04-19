const CARDS_DATA = [
  {
    title: "Startup Framework",
    description:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    button: "Explore",
    bgClass: "card-bg-grey ",
  },
  {
    title: "Web Generator",
    description:
      "Startup is a powerful tool for quick and convenient proto-typing of your projects. It will fit most projects because it contains up-to-date and modern web elements.",
    button: "Explore",
    bgClass: "card-bg-white ",
  },
  {
    title: "Slides 4",
    description:
      "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    button: "Explore",
    bgClass: "card-bg-violet card-text-light",
    textStyle: "light",
  },

  {
    title: "Postcards",
    description:
      "All of these components are made in the same style, and can easily be inegrated into projects, allowing you to create hundreds of solutions for your future projects.",
    button: "Explore",
    bgClass: "card-bg-img card-text-light",
    textStyle: "light",
    imageUrl: "assets/Postcards.jpeg",
    fullImage: true,
  },
];

//Header
const header = document.createElement("header");
header.className = "page-header";

const h1 = document.createElement("h1");
h1.textContent = "Last works";

const headerButton = document.createElement("button");
headerButton.className = "showcase-btn";
headerButton.textContent = "Explore Showcase";

//Header container
header.append(h1, headerButton);
document.body.prepend(header);

//Cards container
const cardsContainer = document.createElement("div");
cardsContainer.className = "cards-grid";
document.body.append(cardsContainer);

//Cards
const fragment = document.createDocumentFragment();

CARDS_DATA.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.className = `card ${card.bgClass}`;
  cardElement.dataset.textStyle = card.textStyle;

  const titleElement = document.createElement("h2");
  titleElement.className = "card-title";
  titleElement.textContent = card.title;

  const descElement = document.createElement("p");
  descElement.className = "card-desc";
  descElement.textContent = card.description;

  const buttonElement = document.createElement("button");
  buttonElement.className = "card-btn";
  buttonElement.textContent = card.button;

  // Cards without image
  if (card.fullImage && card.imageUrl) {
    const contentWrapper = document.createElement("div");
    contentWrapper.className = "card-content";
    contentWrapper.append(titleElement, descElement, buttonElement);

    cardElement.append(contentWrapper);

    cardElement.style.backgroundImage = `url(${card.imageUrl})`;
    cardElement.style.backgroundSize = "cover";
    cardElement.style.backgroundPosition = "center";

    const overlay = document.createElement("div");
    overlay.className = "card-overlay";
    cardElement.prepend(overlay);
  }
  // Cards with image
  else {
    if (card.imageUrl) {
      const imgElement = document.createElement("img");
      imgElement.src = card.imageUrl;
      imgElement.alt = card.title;
      imgElement.className = "card-img";
      cardElement.append(imgElement);
    }
    cardElement.append(titleElement, descElement, buttonElement);
  }

  fragment.append(cardElement);
});

cardsContainer.append(fragment);

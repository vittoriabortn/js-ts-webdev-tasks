export function getProductImageUrl(img: string): string {
  return new URL(`/src/assets/images/products/${img}`, import.meta.url).href;
}

export function getPostImageUrl(img: string): string {
  return new URL(`/src/assets/images/posts/${img}`, import.meta.url).href;
}

export function getIconUrl(icon: string): string {
  return new URL(`/src/assets/icons/${icon}`, import.meta.url).href;
}

export function getBlossomedImageUrl(img: string): string {
  return new URL(`/src/assets/images/blossomed/${img}`, import.meta.url).href;
}

export function getCardImageUrl(img: string): string {
  return new URL(`/src/assets/images/cards/${img}`, import.meta.url).href;
} 
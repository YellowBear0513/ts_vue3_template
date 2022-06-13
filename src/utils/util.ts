// eslint-disable-next-line import/prefer-default-export
export const getImageUrl = (name: string): string => {
  return new URL(`./../assets/${name}`, import.meta.url).href
}

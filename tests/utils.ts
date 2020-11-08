export const getByHeading = (container: HTMLElement, text: string) => {
  const h1 = container.querySelector("h1");
  if (h1?.innerHTML === text) return h1;
  throw new Error('Заголовок с текстом "' + text + '" не найден');
};

export const getByQuery = (container: HTMLElement, query: string) => {
  const el = container.querySelector(query);
  if (el) return el;
  throw new Error('Элемент "' + query + '" не найден');
};

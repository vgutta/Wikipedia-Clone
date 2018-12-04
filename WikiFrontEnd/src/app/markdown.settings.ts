import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

const renderer = new MarkedRenderer();

renderer.link = (href, title, text) => {
  const outsideRegex = /^https?:\/\//;
  if (outsideRegex.test(href)) {
    return `<a href='${href}' title='${title}' target='_blank'>${text}</a>`;
  } else {
    return `<a class='convert-link' href='#' data-href='${href}' title='${title || ''}'>${text}</a>`;
  }
};

export const MARKDOWN_SETTINGS: MarkedOptions = {
  renderer: renderer
};

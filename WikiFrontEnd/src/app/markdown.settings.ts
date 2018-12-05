import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

const outsideRegex = /^https?:\/\//;

const renderer = new MarkedRenderer();

renderer.link = (href, title, text) => {
  if (outsideRegex.test(href)) {
    return `<a href='${href}' title='${title}' target='_blank'>${text}</a>`;
  } else {
    return `<a class='convert-link' href='#' data-href='${href}' title='${title || ''}'>${text}</a>`;
  }
};

renderer.image = (href, title, text) => {
  let url = href;
  if (!outsideRegex.test(href)) {
    url = `http://localhost:3542/api/images/${href}`;
  }
  return `<figure><img src='${url}' title='${title || ''}' /><figcaption>${text}</figcaption></figure>`;
};

export const MARKDOWN_SETTINGS: MarkedOptions = {
  renderer: renderer
};

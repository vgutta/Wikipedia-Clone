const { Page } = require('../models/page');
const summarizer = require('nodejs-text-summarizer');

function isValidPageName(pageName) {
  return (
    pageName &&
    pageName.length > 0
  );
}
function isValidPageData(pageData) {
  return (
    pageData &&
    isValidPageName(pageData.name) &&
    isValidSections(pageData.sections)
  );
}
function isValidSections(sections) {
  return (
    sections &&
    sections.every instanceof Function &&
    sections.every(isValidSection)
  );
}
function isValidSection(section) {
  return (
    section &&
    section.title &&
    section.title.length > 0 &&
    section.content
  )
}

function internalServerError(res) {
  // internalServerError returns an anonymous function.
  // The function will, using the res argument to internalServerError,
  // send a 500 response with the anonymous argument toString.
  return err => res.status(500).send(err.toString());
}

async function getListing(res) {
  const pages = await Page.find({}, {name: true, pagevisits: true})
    .catch(internalServerError(res));

  return res.json(pages);
}

async function getPage(res, pageName) {
  if (!isValidPageName(pageName)) return res.status(400).send();

  const page = await Page.findOne({ name: pageName })
    .catch(internalServerError(res));

  if(!page.pagevisits){
    page.pagevisits = 1;
  } else {
    page.pagevisits++;
  }
  
  await page.save()
    .catch(internalServerError(res));

  if (page === null) return res.status(404).send();
  return res.json(page);
}

//Summary will happen here
async function putPage(res, pageName, pageData) {
  if (!isValidPageName(pageName) || !isValidPageData(pageData) || pageData.name !== pageName) return res.status(400).send();

  const page = await Page.findOne({ name: pageName })
    .catch(internalServerError(res));

  if (page === null) return res.status(404).send();
  Object.assign(page, pageData);
  await page.save()
    .catch(internalServerError(res));

  //Iterates through sections
  page.sections.forEach(function(content){
    page.summary += summarizer(content);
  });

  return res.status(204).send();
}

//Summary will happen here
async function postPage(res, pageData) {
  if (!isValidPageData(pageData)) return res.status(400).send();

  const preexisting = await Page.findOne({ name: pageData.name })
    .catch(internalServerError(res));

  if (preexisting !== null) return res.status(409).send();
  const newPage = new Page();
  Object.assign(newPage, pageData);
  const err = await newPage.save()
    .catch(internalServerError(res));

  //Iterates through sections
  page.sections.forEach(function(content){
    page.summary += summarizer(content);
  });

  res.status(201).send();
}

async function deletePage(res, pageName) {
  if (!isValidPageName(pageName)) return res.status(400).send();

  const pageToRemove = await Page.findOne({ name: pageName })
    .catch(internalServerError(res));

  if (pageToRemove === null) return res.status(404).send();

  await pageToRemove.remove()
    .catch(internalServerError(res));

  res.status(204).send();
}

module.exports = {
  getListing: getListing,
  getPage: getPage,
  putPage: putPage,
  postPage: postPage,
  deletePage: deletePage
};

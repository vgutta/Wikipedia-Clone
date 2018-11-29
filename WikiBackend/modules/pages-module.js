const { Page } = require('../models/page');

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


function getListing(res) {
  Page.find({}, {name: true}, (err, pages) => {
    if (err) return res.status(500).send(err.toString());
    return res.json(pages.map(x => x.name));
  });
}

function getPage(res, pageName) {
  if (!isValidPageName(pageName)) return res.status(400).send();

  Page.findOne({ name: pageName }, (err, page) => {
    if (err) return res.status(500).send(err.toString());
    if (page === null) return res.status(404).send();
    return res.json(page);
  })
}

function putPage(res, pageName, pageData) {
  if (!isValidPageName(pageName) || !isValidPageData(pageData) || pageData.name !== pageName) return res.status(400).send();

  Page.findOne({ name: pageName }, (err, page) => {
    if (err) return res.status(500).send(err.toString());
    if (page === null) return res.status(404).send();
    Object.assign(page, pageData);
    page.save(err => {
      if (err) return res.status(500).send(err.toString());
      res.status(204).send();
    });
  })
}

function postPage(res, pageData) {
  if (!isValidPageData(pageData)) return res.status(400).send();

  const newPage = new Page();
  Object.assign(newPage, pageData);
  newPage.save(err => {
    if (err) res.status(500).send(err.toString());
    console.log('done');
    res.status(201).send();
  });
}

function deletePage(res, pageName) {
  if (!isValidPaegName(pageName)) return res.status(400).send();

  res.status(204).send();
}

module.exports = {
  getListing: getListing,
  getPage: getPage,
  putPage: putPage,
  postPage: postPage,
  deletePage: deletePage
};

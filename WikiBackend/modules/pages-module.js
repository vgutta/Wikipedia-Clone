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
  res.send(JSON.stringify(['test-page']));
}

function getPage(res, pageName) {
  if (!isValidPageName(pageName)) return res.status(400).send();

  res.json({
    name: pageName,
    sections: [
      {
        title: 'Intro',
        content: '<h1>Test Page!</h1><p>This is a test page.</p>'
      }, {
        title: 'Another Section',
        content: '<p>Here\'s another section.</p>'
      }, {
        title: 'Yet another',
        content: '<p>And another.</p>'
      }
    ]
  });
}

function putPage(res, pageName, pageData) {
  if (!isValidPageName(pageName) || !isValidPageData(pageData)) return res.status(400).send();

  res.status(204).send();
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

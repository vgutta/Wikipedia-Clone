Routes:
=====

```
PUSH /api/pages
- Create a new page
GET  /api/pages
- List all pages
GET /api/pages?search=blah
- Search for a page named "blah"
GET /api/pages/blah
- Get the page named "blah"
PUT /api/pages/blah
- Update the page named "blah"
DELETE /api/pages/blah
- Delete the page named "blah"

PUSH /api/images
- Upload a new image
- Returns the id of the image
GET  /api/images
- Get a list of all image ids
GET  /api/images/5
- Get the image data of image 5
DELETE /api/images/5
- Delete the image
```

Models (typescript):
=====

```
interface Section {
  title: string;
  html: string;
}

interface Page {
  name: string;
  sections: Section[];
}

type Image = string;
// Image does not have a model; all it is is the id string.
// To display an image, use <img src="/api/images/{{id}}"></img>
```
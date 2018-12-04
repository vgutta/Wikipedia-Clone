const bodyParser = require('body-parser');
const PagesModule = require('./modules/pages-module');
const ImagesModule = require('./modules/images-module');

module.exports.addRoutes = (app) => {

  app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Methods', '*');
    next()
  });

  // Automatically parse JSON from http body
  app.use(bodyParser.json({ extended: false}));

  app.get('/', (req, res) => {
    res.send('WikiBackend, v0.1\n');
  });

  /* ===== pages ===== */
  app.get('/api/pages', (req, res) => PagesModule.getListing(res));
  app.post('/api/pages', (req, res) => PagesModule.postPage(res, req.body) );
  app.get('/api/pages/:name', (req, res) => PagesModule.getPage(res, req.params.name));
  app.put('/api/pages/:name', (req, res) => PagesModule.putPage(res, req.params.name, req.body) );
  app.delete('/api/pages/:name', (req, res) => PagesModule.deletePage(res, req.params.name) );

  /* ===== images ===== */
  app.post('/api/images', bodyParser.raw({ type: () => true, limit: '15MB' }), (req, res) => ImagesModule.postImage(res, req.headers.contenttype, req.body));
  app.get('/api/images', (req, res) => ImagesModule.getAllImages(res) );
  app.get('/api/images/:id', (req, res) => ImagesModule.getImage(res, req.params.id) );
  app.delete('/api/images/:id', (req, res) => ImagesModule.deleteImage(res, req.params.id) );
}
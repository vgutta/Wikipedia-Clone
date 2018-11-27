module.exports.addRoutes = (app) => {

  app.all('/api/pages/:name', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
  app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });
  app.get('/', (req, res) => {
    res.send('WikiBackend, v0.1\n');
  });

  /* ===== pages ===== */
  app.get('/api/pages', (req, res) => {
    res.send(JSON.stringify(['test-page']));
  });
  app.post('/api/pages', (req, res) => res.send() );
  app.get('/api/pages/:name', (req, res) => {
    res.send(JSON.stringify({
      name: req.params.name,
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
    }));
  });
  app.put('/api/pages/:name', (req, res) => res.send() );
  app.delete('/api/pages/:name', (req, res) => res.send() );

  /* ===== images ===== */
  app.post('/api/images', (req, res) => res.send());
  app.get('/api/images', (req, res) => {
    res.send(JSON.stringify([
      '1ab23c4d5e6f',
      '6f5e4d3c2b1a'
    ]));
  });
  app.get('/api/images/:id', (req, res) => {
    res.sendFile(__dirname + '/testimage.png');
  });
}
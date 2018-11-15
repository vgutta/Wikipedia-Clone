function isValidImage(image) {
  return image && image.length > 0;
}

function postImage(res, imageData) {
  res.set('Content-Type', 'text/plain')
    .status(201).send('1a2b3c4d5e6f');
}

function getAllImages(res) {
  res.json([
    '1ab23c4d5e6f',
    '6f5e4d3c2b1a'
  ]);
}

function getImage(res, image) {
  if (!isValidImage(image)) return res.status(400).send();

  res.sendFile(__dirname + '/testimage.png');
}

function deleteImage(res, image) {
  if (!isValidImage(image)) return res.status(400).send();

  res.status(204).send();
}

module.exports = {
  postImage: postImage,
  getAllImages: getAllImages,
  getImage: getImage,
  deleteImage: deleteImage
};

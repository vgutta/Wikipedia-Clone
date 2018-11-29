const { Image } = require('../models/image');

function isValidImage(image) {
  return image && image.length > 0;
}

function internalServerError(res) {
  // internalServerError returns an anonymous function.
  // The function will, using the res argument to internalServerError,
  // send a 500 response with the anonymous argument toString.
  return err => res.status(500).send(err.toString());
}

async function postImage(res, contentType, imageData) {
  const img = new Image();
  img.contentType = contentType;
  img.data = imageData;
  await img.save()
    .catch(internalServerError(res));
  
  res
    .set('Content-Type', 'text/plain')
    .status(201)
    .send(img._id);
}

async function getAllImages(res) {
  const list = await Image.find({},  {_id: true})
    .catch(internalServerError(res));

  res.json(list.map(x => x._id));
}

async function getImage(res, imageId) {
  if (!isValidImage(imageId)) return res.status(400).send();

  const img = await Image.findOne({_id: imageId})
    .catch(internalServerError(res));

  if (img === null) return res.status(404).send();

  res.contentType(img.contentType).send(img.data);
}

async function deleteImage(res, imageId) {
  if (!isValidImage(imageId)) return res.status(400).send();

  const img = await Image.findOne({_id: imageId})
    .catch(internalServerError(res));

  if (img === null) return res.status(404).send();

  await img.remove()
    .catch(internalServerError(res));

  res.status(204).send();
}

module.exports = {
  postImage: postImage,
  getAllImages: getAllImages,
  getImage: getImage,
  deleteImage: deleteImage
};

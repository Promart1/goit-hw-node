const authenticate = require("./authenticate");
const checkBody = require("./checkBody");
const ctrlWrapper = require("./ctrlWrapper");
const isValidId = require("./isValidId");
const validateBody = require("./validateBody");
const upload = require("./upload");

module.exports = {
  authenticate,
  checkBody,
  ctrlWrapper,
  isValidId,
  validateBody,
  upload,
};

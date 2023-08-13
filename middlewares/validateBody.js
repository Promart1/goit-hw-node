const { HttpError } = require("../helpers");

const validateBody = (contactSchema) => {
  const func = (req, res, next) => {
    const { error } = contactSchema.validate(req.body);

    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;

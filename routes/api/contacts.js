const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const contactSchema = require("../../schemas/contact");
const checkBody = require("../../middlewares/checkBody");
const { addSchema, updateFavoriteSchema } = require("../../models/contact");
const isValidId = require("../../middlewares/isValidId");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", checkBody, validateBody(addSchema), addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put(
  "/:contactId",
  checkBody,
  validateBody(addSchema),
  isValidId,
  updateContact
);

router.patch(
  "/:id/favorite",
  validateBody(updateFavoriteSchema),
  isValidId,
  updateStatusContact
);

module.exports = router;

const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");

const contactSchema = require("../../schemas/contact");

const { addSchema, updateFavoriteSchema } = require("../../models/contact");

const {
  authenticate,
  checkBody,
  isValidId,
  validateBody,
} = require("../../middlewares");

const router = express.Router();

router.get("/", authenticate, listContacts);

router.get("/:contactId", authenticate, isValidId, getContactById);

router.post("/", authenticate, checkBody, validateBody(addSchema), addContact);

router.delete("/:contactId", authenticate, isValidId, removeContact);

router.put(
  "/:contactId",
  authenticate,
  checkBody,
  validateBody(addSchema),
  isValidId,
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  validateBody(updateFavoriteSchema),
  isValidId,
  updateStatusContact
);

module.exports = router;

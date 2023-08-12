const express = require("express");

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../../controllers/contacts");
const validateBody = require("../../middlewares/validateBody");
const contactSchema = require("../../schemas/contact");
const checkBody = require("../../middlewares/checkBody");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", checkBody, validateBody(contactSchema), addContact);

router.delete("/:contactId", removeContact);

router.put(
  "/:contactId",
  checkBody,
  validateBody(contactSchema),
  updateContact
);

module.exports = router;

const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getContacts);

router.get("/:id", ctrl.getContactById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:id", ctrl.updateById);

router.put("/:id", validateBody(schemas.putSchema), ctrl.updateById);

module.exports = router;

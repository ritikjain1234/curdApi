const express = require("express");
const router = express.Router();
const CurdOperation = require("../controllers/services")

router.route("/info").post(CurdOperation.postData);
router.route("/info").get(CurdOperation.getData);
router.route("/info/:id").get(CurdOperation.getByIdData);
router.route("/info/:id").patch(CurdOperation.patchData);
router.route("/info/:id").delete(CurdOperation.deleteData);

module.exports = router;
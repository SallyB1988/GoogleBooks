const router = require("express").Router();
const bookssController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(bookssController.findAll)
  .post(bookssController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(bookssController.findById)
  .put(bookssController.update)
  .delete(bookssController.remove);

module.exports = router;

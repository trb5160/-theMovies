const movieController = require("../../controllers/movieController");

// Matches with "/api/books"
router.route("/")
  .get(movieController.findAll)
  .post(movieController.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(movieController.findOne)
  .delete(movieController.remove);

module.exports = router;
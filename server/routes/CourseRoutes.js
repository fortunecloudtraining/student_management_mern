const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createCourse, getCourses} = require("../controllers/CourseController");

router.post("/",auth,role("admin"),createCourse);
router.get("/",auth,getCourses);

module.exports = router;
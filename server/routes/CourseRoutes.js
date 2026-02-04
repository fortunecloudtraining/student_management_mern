const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const {createCourse, getCourses} = require("../controllers/CourseController");

router.post("/",auth,role("admin"),createCourse);

// admin + staff
router.get("/",auth,getCourses);

module.exports = router;
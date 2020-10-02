const express = require("express");
const { body, check } = require("express-validator/check");

const router = express.Router();

const internship = require("../controllers/internship");
const User = require("../models/User");

// GET => /internship/getinternships?query=value
router.get("/getinternships", internship.getInternships);

// POST => /internships
router.post(
  "/addInternship",
  [
    check("vacancy").isNumeric(),
    check("skillsReq").isString(),
    check("title").isString(),
    check("description").trim().isString(),
    check("stipend").isString(),
    check("internshipPeriod").isString(),
    check("companyName").isString(),
    check("internshipType").isString(),
    check("applyBy").isString(),
    check("startDate").isString(),
  ],
  internship.addInternships
);

router.get("/view/allinternships", internship.allinternships);

// GET => /view/:internshipId
router.get("/view/:internshipId", internship.viewinternship);
router.post("/apply", internship.applyinternship);

router.get("/resume/:userId", internship.viewresume);
router.get("/search");

module.exports = router;

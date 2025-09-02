import express from "express";
const router = express.Router();

// get profile
router.get("/me", (req, res) => {
  res.send(req.params.id);
});
// update profile
router.put("/me", (req, res) => {
  res.send(req.params.id);
});
// get my stats
router.get("/me/stats", (req, res) => {
  res.send(req.params.id);
});

export default router;

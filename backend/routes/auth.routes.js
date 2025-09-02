import express from "express";
const router = express.Router();

// register user
router.post("/register", (req, res) => {});
// login user
router.post("/login", (req, res) => {});
// google auth
router.post("/google", (req, res) => {});
// forget password
router.post("/forgot-password", (req, res) => {});
// reset password
router.post("/register", (req, res) => {});
// sign out user
router.post("/reset-password/:t", (req, res) => {
  res.send(req.params.t);
});

export default router;

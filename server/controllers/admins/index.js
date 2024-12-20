import express from "express";
import adminModel from "../../models/Admins/Admins.js";

const router = express.Router();
router.get("/getalladmins", (req, res) => {
  try {
    console.log("get all users");
    res.status(200).json({ msg: "get all users" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.post("/registeralladmins", (req, res) => {
  try {
    let userData = req.body;
    console.log(userData);
    res.status(200).json(userData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

router.put("/updateadmin/:email", async (req, res) => {
  try {
    let userphone = req.params.email;
    console.log(userphone);
    await adminModel.findOneAndUpdate({ phone: "9999999999" });
    res.status(200).json({ msg: "user updated successfully " });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

export default router;

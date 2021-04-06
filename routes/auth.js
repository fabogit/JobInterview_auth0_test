const router = require("express").Router();

// @/authorize
router.post("/authorize", (req, res) => {
  res.send("Authorized")
})

// @/token
router.post("/token", (req, res) => {
    res.send("token")
  })

module.exports = router;
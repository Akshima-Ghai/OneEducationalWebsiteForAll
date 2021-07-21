const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  //Get token from header
  const token = req.headers.authorization?.split(" ")[1];

  //Check if no token
  if (!token) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(500).json({
      error: err.message.match("jwt expired")
        ? "Token expires"
        : "Server error",
    });
  }
};

module.exports = auth;

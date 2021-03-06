module.exports = function (req, res, next) {
  console.log(req.user);

  if (!req.user) {
    var err = new Error("You are not authenticated!");
    err.status = 403;
    next(err);
  } else {
    next();
  }
};

// function (req, res, next) {
//   console.log(req.session);

//   if (!req.session.user) {
//     var err = new Error("You are not authenticated!");
//     err.status = 403;
//     return next(err);
//   } else {
//     if (req.session.user === "authenticated") {
//       next();
//     } else {
//       var err = new Error("You are not authenticated!");
//       err.status = 403;
//       return next(err);
//     }
//   }
// };

// function (req, res, next) {
//   console.log(req.session);

//   if (!req.session.user) {
//     var authHeader = req.headers.authorization;
//     if (!authHeader) {
//       var err = new Error("You are not authenticated!");
//       res.setHeader("WWW-Authenticate", "Basic");
//       err.status = 401;
//       next(err);
//       return;
//     }
//     var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
//       .toString()
//       .split(":");
//     var user = auth[0];
//     var pass = auth[1];
//     if (user == "admin" && pass == "password") {
//       req.session.user = "admin";
//       next(); // authorized
//     } else {
//       var err = new Error("You are not authenticated!");
//       res.setHeader("WWW-Authenticate", "Basic");
//       err.status = 401;
//       next(err);
//     }
//   } else {
//     if (req.session.user === "admin") {
//       console.log("req.session: ", req.session);
//       next();
//     } else {
//       var err = new Error("You are not authenticated!");
//       err.status = 401;
//       next(err);
//     }
//   }
// };

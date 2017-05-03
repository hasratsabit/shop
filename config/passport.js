const passport = require("passport");
const localStrategy = require("passport-local");

passport.serializeUser(function(user, done) {
	done(null, user.id)
})

passport.deserializeUser(function(id, done) {
	User.
})

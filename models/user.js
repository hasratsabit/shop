const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: { type: String, required: true},
	password: { type: String, required: true}
})

// This hashes the password
UserSchema.methods.encryptPassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null)
}

// This matches the encrypted password with password coming form use
UserSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.password)
}

module.exports = mongoose.model("User", UserSchema);

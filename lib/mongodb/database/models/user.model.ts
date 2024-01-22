import {Schema, models, model} from "mongoose";

const UserSquema = new Schema({
	clerkId:{type: String, required: true, unique: true},
	email:{type: String, required: true, unique: true},
	username:{type: String, required: true, unique: true},
	firstName:{type: String, required: true},
	lastName:{type: String, required: true},
	photo:{type: String, required: true},
});

const User = models.User || model('User', UserSquema);

export default User;
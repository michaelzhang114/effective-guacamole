import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			unique: true,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

//If the User collection does not exist create a new one.
export default models.User || model("User", userSchema);

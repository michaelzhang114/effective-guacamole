import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		desc: {
			type: String,
			required: true,
		},
		img: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

//If the Post collection does not exist create a new one.
export default models.Post || model("Post", postSchema);

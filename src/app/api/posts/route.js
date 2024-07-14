import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (req, res) => {
	try {
		await connect();
		console.log("Database connection successful");

		const posts = await Post.find();
		console.log(`Successfully retrieved ${posts.length} posts`);

		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		console.error("Error in GET request:", error);

		let errorMessage = "An unexpected error occurred";
		let statusCode = 500;

		if (error.name === "MongoNetworkError") {
			errorMessage = "Unable to connect to the database";
		} else if (error.name === "ValidationError") {
			errorMessage = "Data validation error";
			statusCode = 400;
		}
		return new NextResponse(JSON.stringify({ error: errorMessage }), {
			status: statusCode,
			headers: { "Content-Type": "application/json" },
		});
	}
};

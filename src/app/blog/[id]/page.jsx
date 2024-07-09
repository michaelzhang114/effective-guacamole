import { notFound } from "next/navigation";
import React from "react";

async function getData(id) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{
			cache: "no-store",
		}
	);

	if (!res.ok) {
		return notFound();
	}
	return res.json();
}

const BlogPost = async ({ params }) => {
	const data = await getData(params.id);
	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		</div>
	);
};

export default BlogPost;

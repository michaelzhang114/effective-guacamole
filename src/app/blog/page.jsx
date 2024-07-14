import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
	//TODO - this is bad. I'm hardcoding local url and fetching api from a server component - i shouldn't even need to make an API call
	const res = await fetch("http://localhost:3000/api/posts", {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const Blog = async () => {
	const data = await getData();
	console.log(data);

	return (
		<div className={styles.mainContainer}>
			{data.map((i) => (
				<Link
					href={`/blog/${i._id}`}
					className={styles.container}
					key={i.id}
				>
					<div className={styles.imageContainer}>
						<Image
							src={i.img}
							alt=""
							width={400}
							height={250}
							className={styles.image}
						/>
					</div>
					<div className={styles.content}>
						<h1 className={styles.title}>{i.title}</h1>
						<p className={styles.desc}>{i.body}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Blog;

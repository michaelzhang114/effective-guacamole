import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
}

const Blog = async () => {
	const data = await getData();

	return (
		<div className={styles.mainContainer}>
			{data.map((i) => (
				<Link href={`/blog/${i.id}`} className={styles.container}>
					<div className={styles.imageContainer}>
						<Image
							src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg"
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

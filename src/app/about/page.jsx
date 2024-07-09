import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg"
					fill={true}
					alt=""
					className={styles.img}
				/>
				<div className={styles.textContainer}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgText}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Necessitatibus, totam!
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.textTitle}>Who are we</h1>
					<p className={styles.textDescription}>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Eum mollitia fugiat eius debitis perferendis
						consequatur suscipit commodi, minus non maiores eligendi
						nam adipisci consectetur hic vitae impedit, praesentium
						eos earum!
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.textTitle}>Who are we</h1>
					<p className={styles.textDescription}>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Eum mollitia fugiat eius debitis perferendis
						consequatur suscipit commodi, minus non maiores eligendi
						nam adipisci consectetur hic vitae impedit, praesentium
						eos earum!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;

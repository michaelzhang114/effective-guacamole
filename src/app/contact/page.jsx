import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Contact = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Let's keep in touch</h1>
			<div className={styles.content}>
				<div className={styles.content}>
					<div className={styles.imgContainer}>
						<Image
							src="/contact.png"
							alt=""
							fill={true}
							className={styles.image}
						></Image>
					</div>
					<form className={styles.form}>
						<input
							type="text"
							placeholder="name"
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="email"
							className={styles.input}
						/>
						<textarea
							className={styles.textArea}
							placeholder="message"
							cols="30"
							rows="10"
						></textarea>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

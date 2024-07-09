import Image from "next/image";
import Hero from "../../public/hero.png";
import styles from "./page.module.css";

// import Hero from "public/hero.png";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>
					Better design for your digital products
				</h1>
				<p className={styles.description}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quos nam accusamus, nemo saepe ad dignissimos maxime dolorem
					vero laborum aut.
				</p>
				<button className={styles.button}>See Our Work</button>
			</div>
			<div className={styles.item}>
				<Image src={Hero} alt="" className={styles.img} />
			</div>
			{/* <Image
				src="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg"
				width={500}
				height={500}
			></Image> */}
		</div>
	);
}

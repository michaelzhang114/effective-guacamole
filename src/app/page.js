import Image from "next/image";
import Hero from "../../public/hero.png";
// import Hero from "public/hero.png";

export default function Home() {
	return (
		<div>
			<Image src={Hero} alt=""></Image>
		</div>
	);
}

import type { TProductItem } from "@/ui/types";
import {ProductList} from "@/ui/organisms/ProductList";

const products: TProductItem[] = [
	{
		id: "1",
		category: "shirt",
		name: "T-shirt czarny",
		price: 2327,
		imageCover: {
			src: "/black.jpg",
			alt: "czarny t-shirt",
		},
	},
	{
		id: "2",
		category: "shirt",
		name: "T-shirt niebieski",
		price: 2327,
		imageCover: {
			src: "/blue.jpg",
			alt: "niebieski t-shirt",
		},
	},
	{
		id: "3",
		category: "shirt",
		name: "T-shirt brązowy",
		price: 2327,
		imageCover: {
			src: "/brown.jpg",
			alt: "brązowy t-shirt",
		},
	},
	{
		id: "4",
		category: "shirt",
		name: "T-shirt zielony",
		price: 2327,
		imageCover: {
			src: "/green.jpg",
			alt: "zielony t-shirt",
		},
	},
];

export default function Home() {
	return (
		<section className="mx-auto max-w-screen-2xl p-12">
			<ProductList products={products} />
		</section>
	);
}

import { type ProductResponseItem } from "@/ui/types";

export const getProductsList = async () => {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	return productsResponse.map((product) => ({
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		imageCover: {
			alt: product.title,
			src: product.image,
		},
	}));
};

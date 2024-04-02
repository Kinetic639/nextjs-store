export type TProductItem = {
	id: string;
	category: string;
	name: string;
	price: number;
	imageCover: {
		src: string;
		alt: string;
	};
};
export type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

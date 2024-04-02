import React from "react";
import { ProductsList } from "@/ui/organisms/ProductsList";
import { getProductsList } from "@/api/products";

const ProductsPage = async () => {
	const products = await getProductsList();
	return <ProductsList products={products} />;
};
export default ProductsPage;

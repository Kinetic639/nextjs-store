import { ProductItem } from "../molecules/ProductItem";
import type { TProductItem } from "@/ui/types";

export const ProductList = ({ products }: { products: TProductItem[] }) => {
	return (
		<ul
			data-testid="products-list"
			className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => {
				return <ProductItem key={product.id} product={product} />;
			})}
		</ul>
	);
};

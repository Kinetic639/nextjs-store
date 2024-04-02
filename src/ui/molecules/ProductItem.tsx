import { ProductCoverImage } from "@/ui/atoms/ProductcoverImage";
import { ProductItemDescription } from "@/ui/atoms/ProductItemDescription";
import type { TProductItem } from "@/ui/types";

type ProductItemProps = {
	product: TProductItem;
};

export const ProductItem = ({ product }: ProductItemProps) => {
	return (
		<li className="cursor-pointer">
			<article>
				<ProductCoverImage src={product.imageCover.src} alt={product.imageCover.alt} />
				<ProductItemDescription product={product} />
			</article>
		</li>
	);
};

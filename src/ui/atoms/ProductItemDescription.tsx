import type { TProductItem } from "@/ui/types";
import {formatPrice} from "@/utils/formatPrice";

type ProductItemDescriptionProps = {
	product: TProductItem;
};

export const ProductItemDescription = ({
	product: { category, name, price },
}: ProductItemDescriptionProps) => {
	return (
		<div className="mt-3 flex justify-between pl-3 pr-3">
			<div>
				<h3 className="text-sm font-semibold text-gray-400">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria:</span> {category}
				</p>
			</div>
			<p className="text-sm font-medium text-gray-400">
				<span className="sr-only">Cena:</span> {formatPrice(price / 100)}
			</p>
		</div>
	);
};
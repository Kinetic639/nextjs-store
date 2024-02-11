import React from "react";

export const ProductCoverImage = ({ alt, src }: { alt: string; src: string }) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md  bg-slate-800 hover:bg-slate-800">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
			/>
		</div>
	);
};

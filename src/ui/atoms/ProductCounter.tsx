"use client";
import React, { useState } from "react";

export const ProductCounter = () => {
	const [counter, setCounter] = useState(0);
	return (
		<div className="flex gap-2">
			<button onClick={() => setCounter(counter - 1)}>-</button>
			<input
				readOnly
				value={counter}
				className="max-w-14 border-slate-200 pr-1 text-center text-black"
			/>
			<button onClick={() => setCounter(counter + 1)}>+</button>
		</div>
	);
};

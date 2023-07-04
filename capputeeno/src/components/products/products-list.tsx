"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProductProps {

}

export function Products(props: ProductProps) {
	const {data} = useProducts();
	return(
		<>
		<div>
			<p></p>
		</div>
		</>
	)
}
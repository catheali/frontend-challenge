"use client"
import { useProducts } from "@/hooks/useProducts"

interface ProductProps {

}

export function Products(props: ProductProps) {
	const {data} = useProducts();
	console.log(data)
	return(
		<>
		</>
	)
}
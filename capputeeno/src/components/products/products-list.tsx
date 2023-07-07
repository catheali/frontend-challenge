"use client"
import { useProducts } from "@/hooks/useProducts"
import { styled } from "styled-components";
import { ProductCard } from "./product-card";


const ListContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(256px, auto));
    grid-gap: 32px;
    max-width: 100%;
    margin-top: 32px;

`
export function Products() {
	const {data} = useProducts();
	return(
	<ListContainer>{data?.map(prod => 
	<ProductCard
		id={prod.id}
		key={prod.id}
		title={prod.name}
		price={prod.price_in_cents}
		image={prod.image_url}
		/>
		)}
	</ListContainer>
	)
}
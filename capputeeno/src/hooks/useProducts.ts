import { FilterType } from "@/types/filter/filter-types";
import { ProductsResponse } from "@/types/products/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import { useFilter } from "./useFilter";
import { getCategoryType, getFieldPriority } from "@/utils/graphql-filters"; 
import { PriorityTypes } from "@/types/filter/priority-types";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; //GARANTINDO AO TS que é uma string

const mountQuery = (type: FilterType, priority: PriorityTypes) => {
	if(type === FilterType.ALL && PriorityTypes.POPULARITY) return `
	query {
		allProducts(sortField: "sales", sortField: "DSC") {
		id
		name
		image_url
		price_in_cents
		}
	  }
	`
	const sortSettings = getFieldPriority(priority);
	const categoryFilter = getCategoryType(type);
	return `
	query {
		allProducts(
			sortField: "${sortSettings.field}",
			sortOrder: "${sortSettings.order}",
			${categoryFilter ? `
			filter: {
				category: "${categoryFilter}"}
			` : ''}
			) {
		id
		name
		image_url
		price_in_cents
		}
	  }
	`
}


//todas requisições para uma api graph ql sao de post, onde vc manda a query no corpo da req
const fetcher = (query: string): AxiosPromise<ProductsResponse> => {
	return axios.post(API_URL, {query})
}

export function useProducts(){
	const {type, priority, search} = useFilter();
	const searchDeffered= useDeferredValue(search)
	const query = mountQuery(type, priority);
	const {data} = useQuery({
		queryFn: ()=> fetcher(query),
		queryKey: ['products', type, priority]
	})

	const products = data?.data?.data?.allProducts;
	const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) )

	return {
		data: filteredProducts
	}
}
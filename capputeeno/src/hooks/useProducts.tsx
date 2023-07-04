import { ProductsResponse } from "@/types/products/products-response";
import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL as string; //GARANTINDO AO TS que é uma string

//todas requisições para uma api graph ql sao de post, onde vc manda a query no corpo da req
const fetcher = (): AxiosPromise<ProductsResponse> => {
	return axios.post(API_URL, {
		query: `query {
				allProducts {
				id
				name
				price_in_cents
				}
		 	 }
		 `
	})
}

export function useProducts(){
	const {data} = useQuery({
		queryFn: fetcher,
		queryKey: ['products']
	})

	return {
		data: data?.data?.data?.allProducts
	}
}
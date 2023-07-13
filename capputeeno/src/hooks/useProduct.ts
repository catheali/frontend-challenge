import { useQuery } from "@tanstack/react-query";
import axios, {AxiosPromise} from "axios";
import { ProductFetchResponse } from "@/types/products/product-type";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string; //GARANTINDO AO TS que é uma string
const fetcher = (prodId: string): AxiosPromise<ProductFetchResponse> => {
	return axios.post(API_URL, {
		query:` query {
			Product(id: "${prodId}"){
				  name
				  image_url
				  description
				  price_in_cents
				  category
				}
			}
		`
	})
}


export function useProduct(id: string) {
	const {data} = useQuery({
		queryFn: ()=> fetcher(id),
		queryKey: ['product', id],
		enabled: !!id,
		staleTime: 1000*60*5 // a cada 1 minuto vai disparar a requisição
	}); // quando o id tiver um valor dentro, ele faz a requisição
	return {
		data: data?.data?.data?.Product
	}
}
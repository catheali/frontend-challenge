import { ProductType } from './product-type';
export interface ProductsResponse {
	"data": {
		"allProducts": ProductType[]
		}
}

export interface ProductInCart extends ProductType {
	quantity: number
}
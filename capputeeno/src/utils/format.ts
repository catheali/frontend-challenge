import {ProductInCart} from "@/types/products/products-response";

export function formatPrice(valueInCents: number) {
    const formattedValue = valueInCents / 100;
    return formattedValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function totalItems(value: ProductInCart[]) {
	return value.reduce((sum,item)=> sum += (item.quantity), 0)
}

export function calculateTotal(value: ProductInCart[]) {
	return value.reduce((sum,item)=> sum += (item.price_in_cents * item.quantity), 0)
}
"use client"
import { DefaultPageLayout } from "@/components/provider/default-page-layout";
import { styled } from "styled-components";
import { BackButton } from "@/components/products/back-button";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { formatPrice, calculateTotal, totalItems } from "@/utils/format";
import { ProductInCart } from "@/types/products/products-response";
import { ProductCart } from "@/components/cart/product-cart";
import { Divider } from "@/components/provider/default-divider";


const Container = styled.div`
	display:flex;
	justify-content: center;
	flex-direction: column;
	gap: 32px;

	@media(min-width: ${props => props.theme.desktopBreakpoint}){
		flex-direction: row;
	}
`
const CartListContainer = styled.div`
	
	h3 {
		color: var(--text-darker);
		font-size: 24px;
		font-weight: 500;
		line-height: 150%;
		text-transform: uppercase; 
		margin-top: 24px;
	}

	p {
		font-weight: 300,
		font-size: 16px;
		line-height: 150%;
		color: var(--text-darker);

		span {
			font-weight: 600;
		}
	}

`
const CardList = styled.ul`
	display: flex;
	justify-content: center;
	flex-direction: column;
	
	gap: 16px;
	margin-top: 24px;
`

const CartResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	min-width:352px;
	padding: 16px 24px;

	background: #fff; 

	h3 {
		font-weight: 600px;
		font-sixe: 12px;
		color: var(--text-darker);
		text-transform: uppercase;
		margin-bottom: 30px;
	}
`

const TotalItem = styled.div<{isBold: boolean}>`
	display:flex;
	align-items:center;
	justify-content: space-between;
	width: 100%;
	font-size: 16px;
	font-weight: ${props=> props.isBold ? '600' : '400'};
	line-height: 150%;

	margin-botom: 12px;
`
const ShopBtn = styled.button`
	color: #fff;
	border-radius: 4px;
	background: var(--success-color);
	padding: 12px;
	text-align: center;
	width: 100%;
	border: none;
	margin-top: 40px;
	cursor: pointer;
	text-transform: uppercase;
`

export default function CartPage(){
	const {value, updateLocalStorage} = useLocalStorage<ProductInCart[]>("cart-items",[]) ;
	const cartTotal = totalItems(value);
	const totalPrice = formatPrice(calculateTotal(value));
	const defaultShipping = 4000;

	const handleUpdateQuantity = (id: string, quantity:number) => {
		const newValue = value.map(item => {
			if(item.id !== id) return item
			return {...item, quantity:quantity}
		})
		updateLocalStorage(newValue)
	}
	
	const handleDelete = (id:string) => {
		const newValue = value.filter(item => {
			if(item.id !== id) return item
		})
		updateLocalStorage(newValue)
	}

	const Price = calculateTotal(value) + defaultShipping;
	return( 
		<DefaultPageLayout>
			<Container>
				<CartListContainer>
				<BackButton navigate="/" />
					<h3>Seu carrinho</h3>
					<p>
						Total {cartTotal} produtos
						<span> {totalPrice}</span>
					</p>
					<CardList >
						{value.map(item => 
						<ProductCart 
						product={item} 
						key={item.id}
						handleUpdateQuantity={handleUpdateQuantity}
						handleDelete={handleDelete}
						/>)}
					</CardList>
				</CartListContainer>
				<CartResultContainer>
							<h3>Resumo do pedido</h3>
							<TotalItem isBold={false}>
								<p>Subtotal dos Produtos</p>
								<p>{totalPrice}</p>
							</TotalItem>
							<TotalItem isBold={false}>
								<p>Entrega</p>
								<p>{formatPrice(defaultShipping)}</p>
							</TotalItem>
							<Divider/>
							<TotalItem isBold={true}>
								<p>Total</p>
								<p>{formatPrice(Price)}</p>
							</TotalItem>
							<ShopBtn> Finalizar Compra</ShopBtn>
				</CartResultContainer>
			</Container>
		</DefaultPageLayout>
	)
}
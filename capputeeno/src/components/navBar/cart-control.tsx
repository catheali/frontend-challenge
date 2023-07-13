import { useLocalStorage } from "@/hooks/useLocalStorage";
import {styled} from "styled-components";
import {CartIcon} from "../icons/cart-icon";

const CartCount = styled.span`
	width: 17px;
	height: 17px;
	border-radius: 17px;
	background: var(--others-red);
	color: white;
	position: absolute;
	top: 50%;
	left:15px;
	text-align: center;
	font-size: 10px;
	font-family: inherit;
	font-style: normal;
	font-weight: 500;
	line-height: 17px;
`
const Container = styled.div`
	position: relative;
`

export function CartControl(){
	const { value } = useLocalStorage('cart-items', [])

	return (
		<Container>
			<CartIcon/>
			{value.length > 0 && <CartCount>{value.length}</CartCount>}
		</Container>
	)
}
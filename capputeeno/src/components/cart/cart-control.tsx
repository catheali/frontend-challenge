import { useLocalStorage } from "@/hooks/useLocalStorage";
import {styled} from "styled-components";
import {CartIcon} from "../icons/cart-icon";
import { useRouter } from "next/navigation";
import { totalItems } from "@/utils/format";


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
	cursor: pointer;
`

interface CartControlProps {
	navigate: string
}

export function CartControl(props: CartControlProps){
	const { value } = useLocalStorage('cart-items', [])
	const router = useRouter()
	const handleNavigate = () => {
        router.push(props.navigate)
    }
	const total = totalItems(value)
	return (
		<Container onClick={handleNavigate} >
			<CartIcon/>
			{value.length > 0 && <CartCount>{total}</CartCount>}
		</Container>
	)
}
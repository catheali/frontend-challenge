import { ProductInCart } from "@/types/products/products-response"
import { formatPrice } from "@/utils/format"
import { styled } from "styled-components"
import { DeleteIcon } from "../icons/delete-icon"
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

interface ProductCartProps {
	product: ProductInCart,
	handleUpdateQuantity(id: string, quantity:number):void,
	handleDelete(id:string):void
}

const Item = styled.li`
	display: flex;
	align-items:center;
	justify-content: center;
	height: 210px; 
	border-radius: 8px;
	background-color: #fff;
	
	
	img {
		max-height: 100%;
		width: 256px;	 
		border-radius: 8px 0 0 8px;
	}
	
	> div {
		display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        padding: 16px 24px;
        line-height: 150%;
		color: var(--text-darker);

		button{
			border: none;
			background: transparent;
			cursor: pointer;
		}

		h4 {
			font-size: 20px;
			font-weight: 300;
		} 
	
		p{
			font-size: 12px;
			font-style: normal;
			font-weight: 400;
			max-height: 50%;
			overflow: hidden;
			text-overflow: elipses;
		}
		div {
			display:flex;
			align-items:center;
			justify-content: space-between;
			width:100%;

			span {
				color: var(--shapes-dark);
				font-size: 16px; 
				font-weight: 600; 
			}
		}
	}
`

const SelectQtty = styled.select`
	padding: 8px;
	border: 1.5px solid var(--border-color);
	border-radius: 8px;
	background-color: var(--bg-secondary);
	color: var(--text-dark);
	font-weight: 400;
	font-size: 16px;
`


export function ProductCart({product, handleUpdateQuantity, handleDelete} : ProductCartProps){
	const router = useRouter()
	const handleNavigate = (value: string) => {
      router.push("/product?id=" + value)
	//   onClick={handleNavigate(product.id)}
    }
	const handleChange = ( e: ChangeEvent<HTMLSelectElement>)=> {
		handleUpdateQuantity(product.id, Number(e.target.value))
	}

	return(
		<Item >
			<img src={product.image_url} alt="" />
			<div>	
				<div>
					<h4  >{product.name}</h4>
					<button aria-label="Deletar" onClick={() => handleDelete(product.id)}>
					<DeleteIcon />
					</button>
				</div>
				<p>{product.description}</p>
				<div>
				<SelectQtty value={product.quantity} onChange={handleChange}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</SelectQtty>
				<span>{formatPrice(product.price_in_cents)}</span>
				</div>	
			</div>
		</Item>
	)
}
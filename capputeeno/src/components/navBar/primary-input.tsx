import { InputHTMLAttributes } from "react"
import {styled} from "styled-components"
import { SearchIcon } from "./search-loupe"

export const PrimaryInput = styled.input`
	width: 352px;
	padding: 10px 16px;
	border-radius: 8px;
	border: none;
	background-color: var(--bg-secondary);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	font-size: 14px;
	font-family: inherit;
	font-weight: 400;
	line-height: 22px;
	color: var(--text-dark);
`

const InputContainer = styled.div`
	position: relative;
	width: 352px;

	svg{
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}
`
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
	value: string,
	handleChange:(value: string) => void
} // importando todos os atributos que um input normal recebe usando o generics HTMLInputElement

export function PrimaryInputSearchIcon(props: InputProps){
	return (
	<div>
		<InputContainer>
		 <PrimaryInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleChange(event.target.value)} {...props}/>{/*destrutura todas as props passadas e envia para o input */}
			<SearchIcon/>
		</InputContainer>
	</div>
	)
}

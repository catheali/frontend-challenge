"use client"

import { InputHTMLAttributes } from "react"
import {styled} from "styled-components"
import { SearchIcon } from "../icons/search-loupe"

export const PrimaryInput = styled.input`
	width: 100%;
	padding: 10px 16px;
	border-radius: 8px;
	border: none;
	background-color: var(--bg-secondary);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	font-size: 12px;
	font-family: inherit;
	font-weight: 400;
	line-height: 20px;
	color: var(--text-dark);

	@media(min-width:${props => props.theme.desktopBreakpoint}){
		font-size: 14px;
		line-height: 22px;
	}
`

const InputContainer = styled.div`
	position: relative;
	width: 240px;

	svg{
		position: absolute;
		right: 20px;
		top: 50%;
		transform: translateY(-50%);
	}

	@media( min-width:768px){
		width: 352px;
	}
`
interface InputProps extends InputHTMLAttributes <HTMLInputElement>{
	value: string,
	handleChange:(value: string) => void
} // importando todos os atributos que um input normal recebe usando o generics HTMLInputElement

export function PrimaryInputSearchIcon(props: InputProps){
	const handleChange= (event:any)=>{
		props.handleChange(event.target.value)
	}

	return (
	<div>
		<InputContainer>
		 <PrimaryInput onChange={handleChange}
		  {...props}/>{/*destrutura todas as props passadas e envia para o input */}
			<SearchIcon/>
		</InputContainer>
	</div>
	)
}

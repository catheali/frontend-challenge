"use client"

import { styled } from "styled-components";
import { Saira_Stencil_One } from 'next/font/google' // biblioteca do next das fontes do google
import { PrimaryInputSearchIcon } from "./primary-input";
import { CartControl } from "../cart/cart-control";
import { useFilter } from "@/hooks/useFilter";
import { usePathname} from "next/navigation";

const sairaStencil = Saira_Stencil_One({ 
	weight: ['400'],
	subsets: ['latin'] }) // importando weight e subsets

interface HeaderProps {

}
const TagHeader = styled.header`
	display: flex;
	align-items:center;
	justify-content: space-between;
	padding: 12px 24px;

	> div {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 24px;
	}

	@media(min-width:${props => props.theme.desktopBreakpoint}){
		padding: 20px 160px;
	}
`
const Logo = styled.a`
	color: var(--logo-color);
	font-weight: 400;
	font-size: 20px;
	line-height:150%;
	text-decoration: none;

	@media(min-width:${props => props.theme.tabletBreakpoint}){
		font-size: 24px;
	}

	@media(min-width: ${props => props.theme.desktopBreakpoint}){
		font-size:40px;
	}
`

export function Header(props: HeaderProps) {
	const {setSearch, search} = useFilter();
	const local  = usePathname(); // aparece a barra de pesquisa apenas se estiver na pagina inicial
	return(
			<TagHeader>
				<Logo href="/" className={sairaStencil.className}>Capputeeno</Logo>
				<div> 
					{ local === '/' && <PrimaryInputSearchIcon
					value={search}
					handleChange={setSearch}
					placeholder="Procurando por algo específico?"/> }
					<CartControl 
					navigate="/cart"
					/>
				</div>
		    </TagHeader>
		
	)
}
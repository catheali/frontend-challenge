"use client"
import { FilterBar } from '@/components/filtersOptions/filter-bar'
import { Products } from '@/components/products/products-list'
import { styled } from 'styled-components'


const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-color: var(--bg-primary);
	padding: 12px 24px;

	@media(min-width:${props => props.theme.desktopBreakpoint}){
		padding: 34px 160px;
	}
`


export default function Home() {
  return (
		<PageWrapper>
			<FilterBar/> 
			<Products/>
		</PageWrapper>
  )
}

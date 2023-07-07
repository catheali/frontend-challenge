"use client"
import { FilterBar } from '@/components/filtersOptions/filter-bar'
import { Products } from '@/components/products/products-list'
import { styled } from 'styled-components'
import { DefaultPageLayout } from '@/components/provider/default-page-layout'


const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
`

export default function Home() {
  return (
	<DefaultPageLayout>
		<PageWrapper>
			<FilterBar/> 
			<Products/>
		</PageWrapper>
	</DefaultPageLayout>	
  )
}

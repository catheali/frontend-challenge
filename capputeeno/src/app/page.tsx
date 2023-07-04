"use client"
import { FilterBar } from '@/components/filtersOptions/filter-bar'
import { Products } from '@/components/products/products-list'
import { QueryClient ,QueryClientProvider} from '@tanstack/react-query'
import styles from './page.module.css'

export default function Home() {
	const client = new QueryClient();
  return (
	<QueryClientProvider client={client}>
		<main className={styles.main}>
			<FilterBar/> 
			<Products/>
		</main>
	</QueryClientProvider>
  )
}

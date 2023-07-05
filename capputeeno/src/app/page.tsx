"use client"
import { FilterBar } from '@/components/filtersOptions/filter-bar'
import { Products } from '@/components/products/products-list'
import styles from './page.module.css'

export default function Home() {
  return (
		<main className={styles.main}>
			<FilterBar/> 
			<Products/>
		</main>
  )
}

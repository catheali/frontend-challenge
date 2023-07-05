import './globals.css'
import { Saira } from 'next/font/google' // biblioteca do next das fontes do google
import { Header } from '@/components/navBar/header'
import DefaultProviders from '@/components/provider/default-providers'


const saira = Saira({ 
	weight: ['300', '400','500', '600'],
	subsets: ['latin'] }) // importando weight e subsets

export const metadata = {
  title: 'CAPPUTEENO',
  description: 'PROJECT ROCKETSEAT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
		<DefaultProviders>
			<Header/>
			{children}
		</DefaultProviders>
	  </body>
    </html>
  )
}

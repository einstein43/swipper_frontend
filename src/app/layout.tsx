import { NavBar } from '@/components/organisms/navBar.organism'
import './globals.css'
import { Inter} from 'next/font/google'
import { Footer } from '@/components/organisms/footer.organism'

 
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Swipper',
  description: 'Swipe to find an animal!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body>
        <NavBar/>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

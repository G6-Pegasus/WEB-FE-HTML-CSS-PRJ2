import { Location, useLocation } from "react-router-dom"
import Header from "./Header"
import Breadcrumb from './Breadcrumb'
import PromotionalImage from '../home/PromotionalImage';
import Footer from "./Footer"

interface MainProps {
    children: React.ReactNode
}

const promotionalImages = [
    { imageUrl: 'https://i.postimg.cc/0NZpjkw7/prom1.png' },
    { imageUrl: 'https://i.postimg.cc/Dz7r7J82/prom2.png' },
  ];

const Main = ({ breadcrumbPages, children } : MainProps) => {
    const location: Location = useLocation()
    const pages: string[] = location.pathname.split("/").slice(1)
  
    return <>
        <Header />
        <main className='bg-[#ffffff]'>
            {pages[0] !== '' && <Breadcrumb pages={pages} />}
            {children}
        </main>
        <PromotionalImage PromotionalIMG={promotionalImages} />
        
        <Footer />
    </>
}

export default Main;
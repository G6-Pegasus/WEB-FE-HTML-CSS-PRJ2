import Header from "./Header"
import Breadcrumb from './Breadcrumb'
import PromotionalImage from '../home/PromotionalImage';
import Footer from "./Footer"

interface MainProps {
    breadcrumbPages: string[],
    children: React.ReactNode
}

const promotionalImages = [
    { imageUrl: 'https://i.postimg.cc/0NZpjkw7/prom1.png' },
    { imageUrl: 'https://i.postimg.cc/Dz7r7J82/prom2.png' },
  ];

const Main = ({ breadcrumbPages, children } : MainProps) => {
    return <>
        <Header />
        <main className='bg-red-400'>
            <Breadcrumb pages={breadcrumbPages} />
            {children}
        </main>
        <PromotionalImage PromotionalIMG={promotionalImages} />
        
        <Footer />
    </>
}

export default Main;
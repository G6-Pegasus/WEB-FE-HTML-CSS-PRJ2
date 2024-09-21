import Header from "./Header"
import Breadcrumb from './Breadcrumb'
import Footer from "./Footer"
import BannerImage from '../home/Banner';

interface MainProps {
    breadcrumbPages: string[],
    children: React.ReactNode
}

const Main = ({ breadcrumbPages, children } : MainProps) => {
    return <>
        <Header />
        <main className='bg-red-400'>
            <Breadcrumb pages={breadcrumbPages} />
            {children}
        </main>
        <BannerImage bannerUrl="https://i.postimg.cc/YC6Ncf2n/banner.png" />
        <Footer />
    </>
}

export default Main;
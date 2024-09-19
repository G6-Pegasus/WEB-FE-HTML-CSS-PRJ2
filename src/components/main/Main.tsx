import Header from "./Header"
import Breadcrumb from './Breadcrumb'
import Footer from "./Footer"

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
        <Footer />
    </>
}

export default Main;
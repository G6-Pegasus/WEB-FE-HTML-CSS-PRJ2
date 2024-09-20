import { Location, useLocation } from "react-router-dom"
import Header from "./Header"
import Breadcrumb from './Breadcrumb'
import Footer from "./Footer"

interface MainProps {
    children: React.ReactNode
}

const Main = ({ children } : MainProps) => {
    const location: Location = useLocation()
    const pages: string[] = location.pathname.split("/").slice(1)

    return <>
        <Header />
        <main className='bg-red-400'>
            {pages[0] !== '' && <Breadcrumb pages={pages} />}
            {children}
        </main>
        <Footer />
    </>
}

export default Main;
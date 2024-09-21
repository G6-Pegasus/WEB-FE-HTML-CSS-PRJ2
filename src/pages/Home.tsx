import Main from "../components/main/Main"
import FeaturedProduct from "../components/home/FeaturedProduct"

const Home = () => {
    return <Main breadcrumbPages={[]}>
        <FeaturedProduct/>
    </Main> 
}

export default Home
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    pages: string[]
}

const Breadcrumb = ({ pages } : BreadcrumbProps) => {
    return <section className="">
        <ul className="">
            <li className=""><Link to="/">Inicio</Link></li>
            {pages.map((page, index, arr) => {
                if (index < arr.length - 1) {
                    return <li key={index} className=""><Link to={"/" + arr.slice(0, index + 1).join("/")}>{page}</Link></li>
                }
                return <li key={index} className="" aria-current="page">{page}</li>
            })}
        </ul>
    </section>
}

export default Breadcrumb
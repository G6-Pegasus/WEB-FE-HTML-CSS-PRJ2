import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    pages: string[];
}

const Breadcrumb = ({ pages }: BreadcrumbProps) => {
    return <section className="sm:ml-5 ml-2 py-4">
        <ul className="flex flex-wrap">
            {["Inicio"].concat(pages).map((page, index, arr) => <li key={index} className='flex items-center'>
                {index < arr.length - 1 ? (
                    <>
                        <Link className='text-blue-600' to={"/" + arr.slice(1, index + 1).join("/")}>{page}</Link>
                        <span className="text-blue-600 mx-2">/</span>
                    </>
                ) : (
                    <span className='text-gray-500' aria-current="page">{page}</span>
                )}
            </li>)}
        </ul>
    </section>
}

export default Breadcrumb;

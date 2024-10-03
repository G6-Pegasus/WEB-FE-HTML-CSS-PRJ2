import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const pages = pathname.split('/').filter(page => page);

  return (
    <section aria-label="breadcrumb" className="sm:ml-5 ml-2 py-4">
      <ul className="flex flex-wrap">
        {pages.length === 0 ? (
          <li className='flex items-center'>
            <span className='text-gray-500' aria-current="page">Inicio</span>
          </li>
        ) : (
          ["Inicio"].concat(pages).map((page, index, arr) => (
            <li key={index} className='flex items-center'>
              {index < arr.length - 1 ? (
                <>
                  <Link className='text-[#726fad]' to={"/" + arr.slice(1, index + 1).join("/")}>{decodeURIComponent(page)}</Link>
                  <span className="text-[#726fad] mx-2">/</span>
                </>
              ) : (
                <span className='text-gray-500' aria-current="page">{decodeURIComponent(page)}</span>
              )}
            </li>
          ))
        )}
      </ul>
    </section>
  );
};

export default Breadcrumb;
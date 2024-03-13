"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";


export default function Paginate({ link }) {
    const pathname = usePathname();
    const router = useRouter();
    const searchParam = useSearchParams();


   function handlePage(page){
    const params= new URLSearchParams(searchParam)
    params.set('page',page)
    router.replace(`${pathname}?${params.toString()}`)
    
    }


  return (
    <nav className="d-flex justify-content-center mt-5">
      <ul className="pagination">
        {link.slice(1,-1).map((pages , index) => (
          <li key={index}  className={pages.active ? "page-item active" : "page-item"}>
            <button onClick={() => handlePage(pages.label)} className="page-link">{pages.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

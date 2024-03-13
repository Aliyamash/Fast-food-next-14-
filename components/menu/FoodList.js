"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function FoodList({ categories }) {
  const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();


   function handleFoodList(id ){
    const params= new URLSearchParams(searchParams)
    params.set('category', id)
    params.delete('page')
    router.replace(`${pathname}?${params.toString()}`)
    }
  return (
    <div className="filter-list">
      <div className="form-label">دسته بندی</div>
      <ul>
        {categories.map((categori) => (
          <li key={categori.id}
          onClick={() => handleFoodList(categori.id)}
          className={searchParams.has('category') && searchParams.get('category') == categori.id ? "my-2 filter-list-active" : "my-2 cursor-pointer"}
          >
            {categori.name}
            </li>
        ))}
      </ul>
    </div>
  );
}

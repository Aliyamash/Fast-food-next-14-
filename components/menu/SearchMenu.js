"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchMenu() {
  const [valueSearch, setValueSearch] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const serachParam = useSearchParams();
  function handleSearch(remove) {
    const params = new URLSearchParams(serachParam);
    params.delete("page");
    if (remove) {
      params.delete("search");
      setValueSearch('')
    } else {
      params.set("search", valueSearch);
    }
    router.replace(`${pathname}?${params.toString()}`);
    console.log(valueSearch);
  }

  return (
    <div>
      <label className="form-label">جستجو</label>

      {serachParam.has("search") && (
        <span
          onClick={() => handleSearch(true)}
          className="text-danger fs-4 cursor-pointer"
        >
          <i className="bi bi-x"></i>
        </span>
      )}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="نام محصول ..."
          onChange={(e) => setValueSearch(e.target.value)}
          value={valueSearch}
        />
        <button
          onClick={() => valueSearch !== "" && handleSearch()}
          className="input-group-text"
        >
          <i className="bi bi-search"></i>
        </button>
      </div>
     {serachParam.has("category") || serachParam.has("sortBy") ? <Link href="/menu"  className="fs-6 cursor-pointer f-primary text-danger">حذف فیلتر ها
     <i className="bi bi-sort-down text-dark fs-3 mx-2"></i>
     </Link> : ''}
    </div>
  );
}

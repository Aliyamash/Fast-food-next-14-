"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Sort() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParam = useSearchParams();

  function handleClick(type) {
    const params = new URLSearchParams(searchParam);
    params.set("sortBy", type);
    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <label className="form-label">مرتب سازی</label>
      <div className="form-check my-2">
        <input
          onClick={() => handleClick("max")}
          checked={
            searchParam.has("sortBy") && searchParam.get("sortBy") == "max"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">بیشترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          onClick={() => handleClick("min")}
          checked={
            searchParam.has("sortBy") && searchParam.get("sortBy") == "min"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">کمترین قیمت</label>
      </div>
      <div className="form-check my-2">
        <input
          onClick={() => handleClick("bestseller")}
          checked={
            searchParam.has("sortBy") &&
            searchParam.get("sortBy") == "bestseller"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">پرفروش ترین</label>
      </div>
      <div className="form-check my-2">
        <input
          onClick={() => handleClick("sale")}
          checked={
            searchParam.has("sortBy") && searchParam.get("sortBy") == "sale"
          }
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
        />
        <label className="form-check-label cursor-pointer">با تخفیف</label>
      </div>
    </div>
  );
}

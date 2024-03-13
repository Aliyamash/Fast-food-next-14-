import About from "@/components/About";
import Feature from "@/components/Features";
import Contact from "@/components/contact/Contact";
import ProductsTab from "@/components/products/producsTab";
import { getFetch } from "@/utils/fetch";


export default async function Home() {
  const productsTab = await getFetch('/products/products-tabs');
  //  console.log(productsTab.tabList);

  return (
    <>
      <Feature/>
      <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel} />
      <About />
      <Contact/>
    </>
  )
}
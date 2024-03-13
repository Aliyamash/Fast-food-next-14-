

  import { getFetch } from "@/utils/fetch";
        import FoodList from "../../components/menu/FoodList";
        import CardFood from "../../components/menu/CardsFood";
import { Suspense } from "react";
import Loading from "@/components/menu/Loading";
import SearchMenu from "@/components/menu/SearchMenu";
import Sort from "@/components/menu/Sort";

      
        export default async function MenuSection({ searchParams }) {
          const categories = await getFetch("/categories");
          const params= new URLSearchParams(searchParams)
          return (
            <section className="food_section layout_padding">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-lg-3">
                   <SearchMenu/>
                    <hr />
                    <FoodList categories={categories} />
                    <hr />
                   <Sort/>
                  </div>
                  <div className="col-sm-12 col-lg-9">
                    <Suspense key={params.toString()} fallback={<Loading/>}>
                    <CardFood  params={params.toString()} />
                    </Suspense>
                  </div>
                </div>
              </div>
            </section>
          );
        }
    

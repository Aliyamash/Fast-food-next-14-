"use client";
import ProductCard from "./productCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function ProductTab({ tabList, tabPanel }) {
  return (
    <section className="food_section layout_padding-bottom">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>منو محصولات</h2>
        </div>

        <Tabs selectedTabClassName={'active'}>

          <TabList >
            <ul className="filters_menu">
              {tabList.map((list, index) => (
                <Tab key={index}>{list}</Tab>
              ))}
            </ul>
          </TabList>


          <div className="filters-content">
            {tabPanel.map((panel, index) => (
              <TabPanel key={index} >
              <div className="row grid">
                {panel.map((product) => (
                  <div key={product.id} className="col-sm-6 col-lg-4">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              </TabPanel>
            ))}
          </div>
        </Tabs>

        <div className="btn-box">
          <a href="">مشاهده بیشتر</a>
        </div>
      </div>
    </section>
  );
}

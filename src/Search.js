import React, { useState } from "react";
import data from "./data";

const Search = () => {
  const [filter, setFilter] = useState("");
  const [productNameFilter, setProductNameFilter] = useState("");

  const searchText = (event) => {
    setFilter(event.target.value);
  };

  const handleProductNameFilter = (event) => {
    setProductNameFilter(event.target.value);
  };

  let dataSearch = data.cardData.filter((item) => {
    return (
      item.title.toLowerCase().includes(filter.toLowerCase()) &&
      (productNameFilter === "" || item.title.toLowerCase().includes(productNameFilter.toLowerCase()))
    );
  });

  const uniqueProductNames = [...new Set(data.cardData.map((item) => item.title))];

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12 mb-5">
          <div className="mb-3 col-4 mx-auto text-center">
            <label className="form-lable h4">Search</label>
            <input
              type="text"
              className="from-control"
              value={filter}
              onChange={searchText}
            />
            <select value={productNameFilter} onChange={handleProductNameFilter}>
              <option value="">All Products</option>
              {uniqueProductNames.map((productName) => (
                <option key={productName} value={productName}>
                  {productName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {dataSearch.map((item, index) => {
          return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" key={index}>
              <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={item.img} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                  <p className="card-text">{item.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;

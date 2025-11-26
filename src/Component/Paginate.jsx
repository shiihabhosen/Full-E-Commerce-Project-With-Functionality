import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import PropsCard from "./PropsCard";
import { useSelector } from "react-redux";
import AllShopCart from "../ProductsPage/AllShopCart";

const Paginate = ({ itemsPerPage = 6, allproduct }) => {
  const products = useSelector((state) => state.product.product) || [];
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.length > 0 ? (
        currentItems.map((phone) => (
          <div key={phone.id} className="mb-10">
            <AllShopCart
            productDetails={phone}
            id={phone.id}
            img={phone.thumbnail}
            discounttext={phone.discountPercentage}
            productName={phone.title}
            price={phone.price}
            oldprice={Math.floor(phone.price / (1 - phone.discountPercentage / 100))}
            reviwretting={phone.reviews?.[0]?.rating || 0}
            rating={phone.rating}
            />
          </div>
        ))
      ) : (
        <p className="text-center mt-10">No products found</p>
      )}

      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          previousLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="flex gap-3 justify-center mt-8"
          pageClassName="w-[40px] h-[40px] flex items-center justify-center bg-black text-white text-[16px] font-semibold rounded cursor-pointer"
          activeClassName="bg-white !text-black border-2 border-black"
          previousClassName="hidden"
          nextClassName="hidden"
        />
      )}
    </>
  );
};

export default Paginate;

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropsCard from './PropsCard';
import { useSelector } from 'react-redux';

const Paginate = ({ itemsPerPage = 6 }) => {
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
        currentItems.map((item) => (
          <div key={item.id} className="mb-10">
            <PropsCard 
            id ={item.id}
              img={item.thumbnail} 
              discounttext={item.discountPercentage}
              productName={item.title}
              price={item.price}
              oldprice={Math.floor(item.price / (1 - item.discountPercentage / 100))}
              reviwretting={item.reviews?.[0]?.rating || 0}
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

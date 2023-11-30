import React from 'react'

function ProductCard({ courseType, Title, Description, price, discountPrice, addShoppingCart }) {
  return (
    <section className="w-[290px]">
      <div className='bg-[#152A46] flex flex-row rounded-t-[20px]'>
        <img src="/img/person.png" className='w-[70px] h-[110px] mt-[16px] ml-[15px]' />
        <div className="ml-[15px] mr-[15px] mt-[27px]">
          <p className="font-bold md:text-[#FFCD29] sm:text-red-600 xl:text-[#FFCD29]-600 text-sm">
            {courseType}
          </p>
          <p className="font-bold text-[#FFFF] text-md mt-[9px] text-md">
            {Title}
          </p>
          <p className="font-normal text-[#FFFF] text-xs">
            ({Description})
          </p>
        </div>
      </div>
      <div className="rounded-b-[20px] px-[24px] shadow-md">
        <p className="font-extrabold text-[#000000] text-lg mt-[9px]">
          {Title}
        </p>
        <p className="font-normal text-[#000000] text-normal text-sm">
          {Description}
        </p>
        <div className="mt-[12px] pb-[12px] flex flex-row justify-end">
          { discountPrice ? (
            <span className='p-0 m-0'>
              <s className="font-bold text-gray-400 text-normal">
                Rp. {price}
              </s>
              <p className="font-bold text-[#0ACF83] text-lg">
                Rp. {discountPrice}
              </p>
            </span>
          ) : null }
        </div>
        <hr></hr>
        <button className='bg-[#118f31] text-white w-full text-sm p-2 mb-5 mt-2 rounded-md' onClick={() => addShoppingCart({courseType, Title, Description, price, discountPrice})}>Add Cart</button>
      </div>
    </section>
  )
}

export default ProductCard
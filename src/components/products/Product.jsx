import React, { useState } from 'react';
import productData from './ProductsData';
import SVG from '../../assets/images/downloadSVG.svg'
import logo from '../../assets/images/teamSvg.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Products = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-5 border-red-500">
      {/* Centered Title */}
      <div id='product-section' className="flex justify-center items-center mt-5 mb-10">
        <h1 className="text-center p-1 px-3 border border-[#C0C0C0] rounded-full text-black font-semibold">
          Our Products
        </h1>
      </div>

      {/* Swiper Container */}
      <Swiper
        spaceBetween={20} // Adjust spacing between slides
        slidesPerView={1.2} // Show part of the next/previous slides
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        pagination={{
          clickable: true,
          el: '.custom-pagination', // Custom class for pagination
        }}
        modules={[Navigation, Pagination]}
        className="pb-16"
      >
        {productData.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1782C51A] relative md:w-[80%] mx-auto md:flex justify-between items-center shadow-md px-4 pt-2 rounded-lg border border-[#1782C5]">
              <img
                src={logo}
                alt="logo"
                className="hidden md:flex absolute w-[48px] h-[34px] top-4 right-5"
              />
              <div className="order-2 md:w-1/2 md:p-8 md:py-10 ">
                {/* 1st Div: Name & Title */}
                <div className="mb-4 text-center md:text-start">
                  <h2 className="text-2xl m-2 py-2 md:m-0 md:text-4xl font-bold">{product.name}</h2>
                  <h3 className="text-md text-gray-600 ">
                    {product.title.split(' ').map((word, index) => (
                      <span
                        key={index}
                        className={`${product.italics && product.italics.includes(word) ? "italic font-semibold text-[#1782C5]" : ""}`}
                      >
                        {word}{' '}
                      </span>
                    ))}
                  </h3>
                </div>
                <div className="hidden  md:flex flex-row items-center gap-6 mb-3">
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg border"
                  />
                  <img
                    src={product.img3}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg"
                  />
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg"
                  />
                </div>

                {/* 2nd Div: Description */}
                <div className="mb-4">
                  <p className={`text-center mb-2 md:text-sm md:text-start ${!isExpanded && "line-clamp-2"}`}>
                    {product.description1}
                  </p>
                  <p className={`text-center md:text-sm md:text-start ${!isExpanded && "line-clamp-2"}`}>
                    {product.description2}
                  </p>
                  <button
                    onClick={toggleReadMore}
                    className="text-blue-500 text-sm  mt-2 block mx-auto md:mx-0"
                  >
                    {isExpanded ? "Read Less" : "Read More..."}
                  </button>
                </div>

                {/* 3rd Div: Buttons */}
                <div className="mb-4 flex flex-col justify-center items-center gap-3 md:flex-row md:justify-start space-x-4">
                  <button className="bg-[#1782C5] text-white px-4 py-2 rounded-full hover:bg-black">
                    Buy Now
                  </button>
                  <button className="px-4 py-2 text-sm flex items-center gap-2 rounded-full border border-[#7A7A7A] hover:bg-[#1782C5] hover:text-white">
                    Download Brochure
                    <img src={SVG} alt="" className='' />
                  </button>
                </div>
              </div>

              {/* 4th Div: Images */}
              <div className="flex flex-col justify-center items-center order-1  border-black mb-5">
                <div className="md:w-full flex justify-center items-center">
                  <img
                    src={product.img1}
                    alt="Product Image 1"
                    className="w-[220px] h-[250px] md:w-[400px] md:h-[458px] object-cover rounded-lg  border-green-600"
                  />
                </div>
                <div className=" h-auto md:hidden pl-2  flex justify-between items-center gap-5">
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px]  object-cover rounded-lg border"
                  />
                  <img
                    src={product.img3}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px]  object-cover rounded-lg"
                  />
                  <img
                    src={product.img2}
                    alt="Product Image 2"
                    className="w-[69px] h-[69px] object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Products;

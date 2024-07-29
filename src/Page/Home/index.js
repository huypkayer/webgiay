import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.module.css";

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="container w-4/5">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src="./img/slide1.jpg" />
          </div>
          <div>
            <img src="./img/slide2.jpg" />
          </div>
          <div>
            <img src="./img/slide3.jpg" />
          </div>
        </Slider>
      </div>
      <div className="Frame1142 w-96 h-11 px-5 py-2 bg-white border-l-4 border-black justify-start items-start inline-flex mt-10 ml-10">
        <div className=" grow shrink basis-0 text-black text-xl font-bold font-['Noto Sans'] leading-loose">
          Sản phẩm nổi bật
        </div>
      </div>
      <div>
        <div className="Row w-11/12 h-52 justify-start items-start gap-4 inline-flex mt-10 ml-10">
          <div className="Paper grow shrink basis-0 bg-white rounded-sm shadow flex-col justify-start items-start inline-flex h-60">
            <div className="CardElements self-stretch h-52 rounded-sm flex-col justify-start items-start flex">
              <div className="PlaceholderImage w-3/4 h-36 py-4 justify-center items-center inline-flex object-cover">
                <div className="Photooutlined w-16 h-16 relative flex-col justify-start items-start flex" />
                <img src="./img/giay/nike1.jpg" />
              </div>
              <div className="Cardcontent self-stretch h-28 p-2 flex-col justify-start items-start flex">
                <div className="CustomBlogPost self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                  <div className="Frame60 flex-col justify-start items-start gap-0.5 flex">
                    <div className="Name  text-black text-base font-bold font-['Noto Sans'] leading-normal">
                      NIKE AIR MAX EXCEE
                    </div>
                    <div className="Frame410 justify-start items-start gap-0.5 inline-flex">
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" self-stretch text-stone-500 text-sm font-normal font-['Noto Sans'] leading-tight">
                    1,000,000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Paper grow shrink basis-0 bg-white rounded-sm shadow flex-col justify-start items-start inline-flex h-60">
            <div className="CardElements self-stretch h-52 rounded-sm flex-col justify-start items-start flex">
              <div className="PlaceholderImage w-3/4 h-36 py-4 justify-center items-center inline-flex ">
                <div className="Photooutlined w-16 h-16 relative flex-col justify-start items-start flex" />
                <img src="./img/giay/nike2.jpeg" />
              </div>
              <div className="Cardcontent self-stretch h-28 p-2 flex-col justify-start items-start flex">
                <div className="CustomBlogPost self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                  <div className="Frame60 flex-col justify-start items-start gap-0.5 flex">
                    <div className="Name  text-black text-base font-bold font-['Noto Sans'] leading-normal">
                      NIKE TERMINATOR 
                    </div>
                    <div className="Frame410 justify-start items-start gap-0.5 inline-flex">
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" self-stretch text-stone-500 text-sm font-normal font-['Noto Sans'] leading-tight">
                    2,000,000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Paper grow shrink basis-0 bg-white rounded-sm shadow flex-col justify-start items-start inline-flex h-60">
            <div className="CardElements self-stretch h-52 rounded-sm flex-col justify-start items-start flex">
              <div className="PlaceholderImage w-3/4 h-36 py-4 bg-neutral-100 justify-center items-center inline-flex">
                <div className="Photooutlined w-16 h-16 relative flex-col justify-start items-start flex" />
                <img src="./img/giay/nike3.jpeg" />
              </div>
              <div className="Cardcontent self-stretch h-28 p-2 flex-col justify-start items-start flex">
                <div className="CustomBlogPost self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                  <div className="Frame60 flex-col justify-start items-start gap-0.5 flex">
                    <div className="Name w-36 text-black text-base font-bold font-['Noto Sans'] leading-normal">
                      NIKE PEGASUS 40
                    </div>
                    <div className="Frame410 justify-start items-start gap-0.5 inline-flex">
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" self-stretch text-stone-500 text-sm font-normal font-['Noto Sans'] leading-tight">
                    3,000,000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Paper grow shrink basis-0 bg-white rounded-sm shadow flex-col justify-start items-start inline-flex h-60">
            <div className="CardElements self-stretch h-52 rounded-sm flex-col justify-start items-start flex">
              <div className="PlaceholderImage w-3/4 h-36 bg-neutral-100 justify-center items-center inline-flex">
                <div className="Photooutlined w-16 h-16 relative flex-col justify-start items-start flex" />
                <img src="./img/giay/nike4.jpeg" />
              </div>
              <div className="Cardcontent self-stretch h-28 p-2 flex-col justify-start items-start flex">
                <div className="CustomBlogPost self-stretch h-24 flex-col justify-start items-start gap-2 flex">
                  <div className="Frame60 flex-col justify-start items-start gap-0.5 flex">
                    <div className="Name w-36 text-black text-base font-bold font-['Noto Sans'] leading-normal">
                      NIKE CORTEZ
                    </div>
                    <div className="Frame410 justify-start items-start gap-0.5 inline-flex">
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                      <div className="Star w-4 h-4 justify-center items-center flex">
                        <div className="Starfilled w-4 h-4 relative flex-col justify-start items-start flex" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M8.00004 11.8467L12.12 14.3334L11.0267 9.64669L14.6667 6.49335L9.87337 6.08669L8.00004 1.66669L6.12671 6.08669L1.33337 6.49335L4.97337 9.64669L3.88004 14.3334L8.00004 11.8467Z"
                            fill="#F1BD02"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className=" self-stretch text-stone-500 text-sm font-normal font-['Noto Sans'] leading-tight">
                    4,000,000đ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CenterMode;

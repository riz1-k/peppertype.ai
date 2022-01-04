import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import './index.css';

import SwiperCore, { Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Autoplay, EffectFade]);

function App() {
  return (
    <>
      <div className='grid grid-cols-hero1 font-monteserrat h-screen '>
        <div className='w-[95%] mx-auto '>
          <header className='h-[70px] items-center flex '>
            <svg
              viewBox='0 0 481 78'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ width: 180, height: 30 }}
            >
              <path
                d='M105.477 60h8.457V47.031h7.109c9.199 0 14.551-5.488 14.551-13.476 0-7.95-5.254-13.555-14.336-13.555h-15.781v40zm8.457-19.746v-13.34h5.703c4.883 0 7.246 2.656 7.246 6.64 0 3.965-2.363 6.7-7.207 6.7h-5.742zM154.119 60.586c7.422 0 12.422-3.613 13.594-9.18l-7.695-.508c-.84 2.286-2.989 3.477-5.762 3.477-4.16 0-6.797-2.754-6.797-7.227v-.02h20.43v-2.284c0-10.196-6.172-15.235-14.102-15.235-8.828 0-14.551 6.27-14.551 15.528 0 9.511 5.645 15.449 14.883 15.449zm-6.66-18.613c.176-3.418 2.773-6.153 6.465-6.153 3.613 0 6.113 2.578 6.133 6.153h-12.598zM173.318 71.25h8.321V55.195h.254c1.152 2.5 3.671 5.293 8.515 5.293 6.836 0 12.168-5.41 12.168-15.449 0-10.312-5.566-15.43-12.148-15.43-5.02 0-7.422 2.989-8.535 5.43h-.372V30h-8.203v41.25zM181.463 45c0-5.352 2.266-8.77 6.308-8.77 4.122 0 6.309 3.575 6.309 8.77 0 5.234-2.226 8.867-6.309 8.867-4.003 0-6.308-3.515-6.308-8.867zM208.123 71.25h8.32V55.195h.254c1.153 2.5 3.672 5.293 8.516 5.293 6.836 0 12.168-5.41 12.168-15.449 0-10.312-5.567-15.43-12.149-15.43-5.019 0-7.421 2.989-8.535 5.43h-.371V30h-8.203v41.25zM216.268 45c0-5.352 2.265-8.77 6.308-8.77 4.121 0 6.309 3.575 6.309 8.77 0 5.234-2.227 8.867-6.309 8.867-4.004 0-6.308-3.515-6.308-8.867zM256.6 60.586c7.421 0 12.421-3.613 13.593-9.18l-7.695-.508c-.84 2.286-2.988 3.477-5.762 3.477-4.16 0-6.797-2.754-6.797-7.227v-.02h20.43v-2.284c0-10.196-6.172-15.235-14.101-15.235-8.829 0-14.551 6.27-14.551 15.528 0 9.511 5.644 15.449 14.883 15.449zm-6.661-18.613c.176-3.418 2.774-6.153 6.465-6.153 3.614 0 6.114 2.578 6.133 6.153h-12.598zM275.799 60h8.32V43.027c0-3.691 2.695-6.23 6.367-6.23 1.153 0 2.735.195 3.516.45v-7.384a12.482 12.482 0 00-2.617-.293c-3.36 0-6.114 1.953-7.207 5.664h-.313V30h-8.066v30zM315.765 30h-5.645v-7.188h-8.32V30h-4.102v6.25h4.102v15.625c-.039 5.879 3.965 8.79 10 8.535 2.148-.078 3.672-.508 4.512-.781l-1.309-6.191c-.41.078-1.289.273-2.07.273-1.661 0-2.813-.625-2.813-2.93V36.25h5.645V30zM326.321 71.25c6.192 0 9.473-3.164 11.172-8.008l11.66-33.203-8.808-.039-6.27 22.031h-.312L327.552 30h-8.75l10.761 30.86-.488 1.269c-1.094 2.812-3.183 2.95-6.113 2.05l-1.875 6.212c1.191.507 3.125.859 5.234.859zM353.411 71.25h8.32V55.195h.254c1.153 2.5 3.672 5.293 8.516 5.293 6.836 0 12.168-5.41 12.168-15.449 0-10.312-5.566-15.43-12.148-15.43-5.02 0-7.422 2.989-8.536 5.43h-.371V30h-8.203v41.25zM361.556 45c0-5.352 2.265-8.77 6.308-8.77 4.121 0 6.309 3.575 6.309 8.77 0 5.234-2.227 8.867-6.309 8.867-4.004 0-6.308-3.515-6.308-8.867zM401.888 60.586c7.422 0 12.422-3.613 13.593-9.18l-7.695-.508c-.84 2.286-2.988 3.477-5.762 3.477-4.16 0-6.796-2.754-6.796-7.227v-.02h20.429v-2.284c0-10.196-6.172-15.235-14.101-15.235-8.828 0-14.551 6.27-14.551 15.528 0 9.511 5.644 15.449 14.883 15.449zm-6.66-18.613c.175-3.418 2.773-6.153 6.464-6.153 3.614 0 6.114 2.578 6.133 6.153h-12.597zM425.95 60.508c2.5 0 4.668-2.09 4.688-4.688-.02-2.558-2.188-4.648-4.688-4.648-2.578 0-4.707 2.09-4.687 4.648-.02 2.598 2.109 4.688 4.687 4.688zM446.023 60.566c4.434 0 7.305-1.933 8.77-4.726h.234V60h7.891V39.766c0-7.149-6.055-10.157-12.734-10.157-7.188 0-11.914 3.438-13.067 8.907l7.695.625c.567-1.993 2.344-3.457 5.333-3.457 2.832 0 4.453 1.425 4.453 3.886v.117c0 1.934-2.051 2.188-7.266 2.696-5.937.547-11.27 2.539-11.27 9.238 0 5.938 4.239 8.945 9.961 8.945zm2.383-5.742c-2.558 0-4.394-1.191-4.394-3.476 0-2.344 1.933-3.496 4.863-3.907 1.816-.254 4.785-.683 5.781-1.347v3.183c0 3.145-2.597 5.547-6.25 5.547zM469.373 60h8.32V30h-8.32v30zm4.18-33.867c2.48 0 4.511-1.895 4.511-4.219 0-2.305-2.031-4.2-4.511-4.2-2.461 0-4.492 1.895-4.492 4.2 0 2.324 2.031 4.219 4.492 4.219z'
                fill='#0D0B1D'
              ></path>
              <path
                d='M78 39C78 17.46 60.54 0 39 0S0 17.46 0 39s17.46 39 39 39 39-17.46 39-39z'
                fill='#2E22E6'
              ></path>
              <path
                d='M57.471 12.892c-18.733 0-34.141 15.055-35.774 34.187 3.52-4.99 7.428-9.694 11.686-14.07a.89.89 0 011.3-.014.995.995 0 01.013 1.361c-.717.762-1.445 1.554-2.176 2.355-.418.456-.827.911-1.229 1.357l-.221.25c-5.883 6.58-10.088 12.308-13.142 19.421a.982.982 0 00.463 1.273.884.884 0 00.884-.072.922.922 0 00.336-.41 53.579 53.579 0 013.769-7.167 35.761 35.761 0 0030.728-19.726 1.007 1.007 0 00-.02-.95.921.921 0 00-.792-.469h-3.414l6.12-3.654a.956.956 0 00.415-.522 38.921 38.921 0 001.975-12.187.943.943 0 00-.921-.963z'
                fill='#fff'
              ></path>
              <path
                d='M58.703 60.355H21.047a1.108 1.108 0 100 2.215h37.656a1.108 1.108 0 100-2.215z'
                fill='url(#peppertype-logo-blue-black-text_svg__paint0_linear)'
              ></path>
              <defs>
                <linearGradient
                  id='peppertype-logo-blue-black-text_svg__paint0_linear'
                  x1='20.936'
                  y1='61.462'
                  x2='81.86'
                  y2='61.462'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#82E7B5'></stop>
                  <stop
                    offset='1'
                    stopColor='#82E6E7'
                    stopOpacity='0.941'
                  ></stop>
                </linearGradient>
              </defs>
            </svg>
          </header>
          <div className='flex h-[100vh] w-[68%] mx-auto '>
            <div className='h-[430px] w-full  my-auto   flex flex-col   '>
              <h2 className='text-[1.75rem]  '>Hi Siva 👋</h2>
              <h1 className='text-4xl font-bold tracking-wide mt-2'>
                Welcome to Peppertype.ai
              </h1>
              <h3 className='font-normal text-base mt-6'>
                Congratulations on taking your first step towards creating
                content, the modern way!
              </h3>
              <h3 className='font-normal text-base mt-8'>
                Help us tailor an amazing experience for you by answering these
                three questions
              </h3>
              <div className='flex mt-5 '>
                <button className='bg-gray-100 mx-1 font-semibold hover:bg-gray-50 text-[rgb(129,129,155)] rounded-[4px] w-24 h-10   flex justify-center items-center '>
                  Skip for now
                </button>
                <button className='bg-[#4227F2] hover:bg-[#4932df] mx-1 font-semibold text-white rounded-[4px] w-24 h-10 flex justify-center items-center '>
                  Continue
                </button>
              </div>
              <h4 className='text-slate-400 text-sm font-semibold mt-5 '>
                Get the most out of it -{' '}
                <span className='text-gray-400 underline transition-all  hover:text-indigo-600 cursor-pointer font-bold'>
                  Book a live demo
                </span>{' '}
              </h4>
            </div>
          </div>
        </div>
        <div className='h-screen hidden lg:flex justify-center items-center bg-[#FBF9F4]'>
          <div className='w-[80%] mx-auto text-center h-[370px]'>
            <h1 className='text-2xl '>
              A few clicks away from an awesome writing experience
            </h1>
            <div className='flex justify-center mt-12  relative'>
              <img
                src='https://app.peppertype.ai/assets/onboarding/highlights-bg.svg'
                alt='svg'
                className='scale-x-125'
              />
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                speed={1000}
                loop={true}
                slidesPerView={1}
                className='text-black mySwiper absolute z-10'
              >
                <SwiperSlide>
                  <div className='flex  flex-col text-center justify-center'>
                    <h1 className='font-bold'>35+</h1>
                    <p>content types</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col text-center justify-center'>
                    <h1 className='font-medium'>
                      Rated <span className='font-bold'>4.8★</span>
                    </h1>
                    <p>with 50K+ users</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col text-center justify-center'>
                    <h1 className='font-medium'>
                      100M+ <span className='font-bold'>words generated</span>
                    </h1>
                    <p>with 50K+ users</p>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className='flex flex-col text-center justify-center'>
                    <h1 className='font-bold'>
                      50K+ {''} {''} {''}
                      <span className='font-medium'>{''}peppertypers</span>
                    </h1>
                    <p>trust us with their content</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='flex flex-col text-center justify-center'>
                    <h1 className='font-medium'>
                      Saving <span className='font-bold'>10hrs</span>
                    </h1>
                    <p>every week</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

"use client";

import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './slick-theme.css';
import GamingMonitor from '@/public/home/products/gaming_monitor.svg'
import Image from 'next/image';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { VscHeart } from 'react-icons/vsc' 
import { TbRefresh, TbTruckDelivery } from 'react-icons/tb';
import { ProductRating } from '@/src/components/product/ProductRating';
import Link from 'next/link';
import { SectionTag } from '@/src/components/Home/SectionTag';
import { RelatedItemsSlider } from '@/src/components/product/relatedItemsSlider/RelatedItemsSlider';


export default function page() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [counter, setCounter] = useState(1);
  const inStock = true;
  const hasSizes = false;

  function increase() {
    if (counter < 99) {
      setCounter(counter + 1)
    }
  }
  function decrease() {
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <div className="flex gap-2 mt-20 text-xs ml-3 lg:text-sm lg:gap-3 lg:w-5/6 lg:mx-auto">
        <Link href="#" className="opacity-50">
          Home
        </Link>
        <span className="opacity-50">
          /
        </span>
        <Link href="#" className="opacity-50">
          Products
        </Link>
        <span className="opacity-50">
          /
        </span>
        <span className="font-medium cursor-default">
          ProductName
        </span>
      </div>
      <section className="w-full pl-4 mx-auto lg:w-5/6 lg:pl-0">
        <div className='grid grid-cols-[36%_64%] mt-20 mb-36 md:grid-cols-[26%_74%] xl:grid-cols-[18%_42%_auto] 2xl:grid-cols-[15%_45%_auto] 3xl:grid-cols-[12%_48%_auto]'>
          <Slider
            asNavFor={nav1}
            ref={(slider2) => setNav2(slider2)}
            slidesToShow={3.99}
            verticalSwiping={true}
            swipeToSlide={true}
            focusOnSelect={true}
            infinite={false}
            vertical={true}
            arrows={false}
            dots={false}
          >
            <div className='w-[180px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded'>
              <Image src={GamingMonitor} alt='' width={121} height={114} quality={100} className='mx-auto h-[71px] md:h-[115px] xl:h-[139.8px] 2xl:h-[134.8px] w-auto my-auto' />
            </div>

          </Slider>
          <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
            arrows={false}
            dots={false}
            slidesToShow={0.99}
          >
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]'>
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]' >
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]'>
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]' >
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]'>
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
            <div className='w-[170px] bg-[#f3f3f3] rounded h-[312px] md:h-[488px] xl:h-[587px] 2xl:h-[567px]' >
              <Image src={GamingMonitor} alt='' width={446} height={315} quality={100} className='mx-auto h-full w-auto my-auto' />
            </div>
          </Slider>
          <div className='flex flex-col w-screen mt-20 pr-10 lg:w-[845px] xl:mt-0 xl:pr-0 xl:w-auto xl:ml-10 2xl:ml-[70px] 2xl:pr-4'>
            <h2 className='font-inter font-semibold text-2xl mb-3'>IPS LCD Gaming Monitor</h2>
            <div className='flex mb-3'>
              <ProductRating />
              {inStock
                ? <span className='-ml-16 text-green-400'><span className='text-exclusive-text-2'>|</span> In Stock</span>
                : <span className='-ml-16 text-red-400'><span className='text-exclusive-text-2'>|</span> Out of stock</span>}
            </div>
            <div className='mb-6'>
              <span className='font-inter text-2xl'>$192.00</span>
            </div>
            <div className='border-b border-black/40 pb-6 mb-6'>
              <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime a beatae minus officia ipsum suscipit magni dolorum, ipsa voluptatibus cupiditate.</p>
            </div>
            {
              hasSizes
                ? <form className='mb-6 flex items-center gap-6' id='sizesForm'>
                  <span className='font-inter text-xl'>Size:</span>
                  <div className="flex flex-row gap-4 items-center">
                    <div>
                      <input type="radio" name="option" id="1" className="peer hidden" required />
                      <label
                        htmlFor="1"
                        className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                      >XS</label>
                    </div>

                    <div>
                      <input type="radio" name="option" id="2" className="peer hidden" />
                      <label
                        htmlFor="2"
                        className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                      >S</label>
                    </div>

                    <input type="radio" name="option" id="3" className="peer hidden" />
                    <label
                      htmlFor="3"
                      className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                    >M</label>

                    <div>
                      <input type="radio" name="option" id="4" className="peer hidden" />
                      <label
                        htmlFor="4"
                        className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                      >L</label>
                    </div>
                    <div>
                      <input type="radio" name="option" id="5" className="peer hidden" />
                      <label
                        htmlFor="5"
                        className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none cursor-pointer peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none'
                      >XL</label>
                    </div>
                  </div>
                </form>
                : <div className='mb-6 flex items-center gap-6 opacity-40'>
                  <span className='font-inter text-xl'>Size:</span>
                  <div className="flex flex-row gap-4 items-center">
                    <div>
                      <input type="radio" name="option" id="1" className="peer hidden" disabled />
                      <label
                        htmlFor="1"
                        className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none cursor-not-allowed'
                      >XS</label>
                    </div>

                    <div>
                      <input type="radio" name="option" id="2" className="peer hidden" disabled />
                      <label
                        htmlFor="2"
                        className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none cursor-not-allowed'
                      >S</label>
                    </div>

                    <input type="radio" name="option" id="3" className="peer hidden" disabled />
                    <label
                      htmlFor="3"
                      className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none cursor-not-allowed'
                    >M</label>

                    <div>
                      <input type="radio" name="option" id="4" className="peer hidden" disabled />
                      <label
                        htmlFor="4"
                        className='outline outline-black/40 outline-1 rounded py-2 px-3 text-sm select-none peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none cursor-not-allowed'
                      >L</label>
                    </div>
                    <div>
                      <input type="radio" name="option" id="5" className="peer hidden" disabled />
                      <label
                        htmlFor="5"
                        className='outline outline-black/40 outline-1 rounded p-2 text-sm select-none peer-checked:bg-exclusive-secondary peer-checked:text-exclusive-text-1 peer-checked:outline-none cursor-not-allowed'
                      >XL</label>
                    </div>
                  </div>
                </div>
            }

            <div className='flex items-center gap-3'>
              <div className='flex items-center border border-black/40 w-fit rounded'>
                <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-s hover:text-exclusive-text-1' onClick={decrease}>
                  <AiOutlineMinus size={24} />
                </button>
                <span className='py-2 border-l border-r border-black/40 w-14 text-center font md:w-16 2xl:w-20'>{counter}</span>
                <button className='px-2 py-2 hover:bg-exclusive-secondary rounded-e hover:text-exclusive-text-1' onClick={increase}>
                  <AiOutlinePlus size={24} />
                </button>
              </div>
              {hasSizes
                ? <button
                  type='submit'
                  form='sizesForm'
                  className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium py-[0.55rem] px-6 rounded md:text-base lg:px-11 xl:px-12"
                >
                  Buy Now
                </button>
                : <button
                  className="bg-exclusive-secondary hover:bg-exclusive-secondary-hover duration-200 text-exclusive-text-1 text-sm font-medium py-[0.55rem] px-6 rounded md:text-base lg:px-11 xl:px-12"
                >
                  Buy Now
                </button>
              }
              <button className='border p-[0.55rem] rounded border-black/40'>
                <VscHeart size={20} />
              </button>
            </div>
            <div className='w-[19.4rem] md:w-[20.4rem] mt-10 lg:w-[23rem] xl:w-[23.5rem] 2xl:w-[24.5rem]'>
              <div className='flex items-center gap-4 p-4 w-full border border-black/40 rounded-t'>
                <TbTruckDelivery size={40} />
                <div className='flex flex-col'>
                  <span className='font-medium'>Free Delivery</span>
                  <span className='font-medium text-xs'>Enter your postal code for Delivery Availability</span>
                </div>
              </div>
              <div className='flex items-center gap-4 p-4 border border-black/40 w-full rounded-b'>
                <TbRefresh size={40} />
                <div className='flex flex-col'>
                  <span className='font-medium'>Return Delivery</span>
                  <span className='font-medium text-xs'>Free 30 Days Delivery Returns. Details</span>
                </div>
              </div>
            </div>
          </div>
        </div >
      </section>
      <section className='w-11/12 mx-auto lg:w-5/6 mb-36'>
        <div className='mb-16'>
          <SectionTag content="Related Item" />
        </div>
        <div className='xl:-mr-3'>
          <RelatedItemsSlider />
        </div>
      </section>
    </>
  )
}
import GiddaaButton from '@/components/neutral/buttons/GiddaaButton';
import Image from 'next/image';
import React from 'react';
import { FaCircleArrowDown } from 'react-icons/fa6';
import FloatingAd from './FloatingAd';

const gallery: string[] = ["/images/hero6.png", "/images/hero2.jpeg", "/images/hero1.jpeg", "/images/hero3.jpeg", "/images/hero4.jpeg", "/images/hero5.jpeg"]

export default function Hero() {


    return (
        <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center space-y-5">

            <div className='w-full lg:max-w-[819px] space-y-4'>
                <div className='flex justify-center gap-3 bg-giddaa-500/20 text-giddaa-500 rounded-full px-4 py-2 text-[10px] w-fit mx-auto font-semibold'>
                    <p className='uppercase'>We serve Nigerians across the globe</p>
                    <p>|</p>
                    <p className='uppercase'>👀 10,000 people have seen this</p>
                </div>

                <div className='space-y-4'>
                    <h1 className="text-[48px] font-bold text-center">Find a Home to Buy In Nigeria On Various <span className='text-giddaa-500'>Purchase Plans.</span></h1>
                    <p className='text-center'>We have taken real estate beyond <span className='underline'>mere listings</span>. Conduct secure real estate transactions on our platform trusted by more than <span className='font-semibold'>4,000 customers, and 30+ companies</span></p>
                    <div className='text-center'>
                        <GiddaaButton text='Explore Our Products' afterIcon={<FaCircleArrowDown />} className='py-6' />
                    </div>

                </div>
            </div>


            <div
                className="w-full max-w-[1187px] flex  overflow-x-auto"
                style={{ whiteSpace: 'nowrap', scrollBehavior: 'smooth' }}

            >
                {gallery.map((img, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 md:w-96 w-full h-64 p-2 flex justify-center items-center"

                    >
                        <Image
                            src={img}
                            alt={`Gallery item ${i}`}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover rounded-xl'
                        />
                    </div>
                ))}
            </div>

<FloatingAd />


        </section>
    );
}

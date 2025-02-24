import GiddaaButton from '@/components/neutral/buttons/GiddaaButton';
import React from 'react';
import { FaCircleArrowDown } from 'react-icons/fa6';
import FloatingAd from './FloatingAd';
import ImageGallery from './ImageGallery';

export default function Hero() {
    return (
        <section className="relative min-h-[80vh] w-full flex flex-col items-center justify-center space-y-5 py-10">

            <div className='w-full lg:max-w-[750px] space-y-4'>
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


            <ImageGallery />


            <FloatingAd />


        </section>
    );
}

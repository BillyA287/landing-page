import { priceData } from '@/lib/priceData';
import React from 'react';
import FeaturesCard from '../FeatureCard/FeaturesCard';

const PriceCard = () => {
  return (
    <div className='price-cards flex flex-row flex-wrap justify-center'>
      <div className='flex flex-col gap-2.5 justify-center items-center md:flex-row lg:flex-row sm:mt-10'>
        {priceData.packages.map((packageItem) => (
          <div className='border border-gray-300 shadow-sm rounded p-3 flex flex-col w-full md:w-auto' key={packageItem.name}>
            <h2 className='text-sm font-bold text-umbrl-blue'>{packageItem.name}</h2>
            <p className='text-[45px] font-bold'>${packageItem.price}<span className='text-sm font-normal'> / month</span></p> 
            <p className='sm:text-sm font-extralight '>{packageItem.billing_frequency}</p>

            <ul className='text-base mt-2.5'>
              {packageItem.features.map((feature, index) => (
                <li className='flex mb-1 ' key={index}>
                  {packageItem.name === 'STARTER' && index < 3 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-green-500 mt-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                  ) : packageItem.name === 'STANDARD' && index < 5 ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-green-500 mt-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                  ) : packageItem.name === 'PREMIUM' ? (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-green-500 mt-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
                    </svg>
                  ) : (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-4 w-4 text-gray-500 mt-1'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  )}
                  <p className='sm:text-xs font-normal lg:text-base'>{feature} </p>
                </li>
              ))}
            </ul>
            <button className='flex flex-row gap-1.5 items-center bg-violet-200 border-0 py-2 px-4 text-white rounded w-max hover:text-#473BF0 transition-colors duration-300'>
  <p className='text-xs text-umbrl-blue'>Start Free Trial </p>
  <div>
    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.4668 2L15.0001 8.06667L8.4668 14.1333" stroke="#473BF0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"/>
      <path d="M1 7.81663H14.0667" stroke="#473BF0" strokeWidth="2" strokeLinecap="square" strokeLinejoin="bevel"/>
    </svg> 
  </div>              
</button>

 <p className='text-sm font-light mt-2'>no credit card required</p>
          </div>
        ))}
      </div>

      <div className='md:flex flex-col justify-center items-center '>
        <div className='items-center mt-12 mb-12 flex flex-col '>
          <h2 className=' sm:mb-3 md:text-[48px] font-bold'>Check our features</h2>
          <p className='md:text-base font-light sm:text-sm lg:text-[19px] lg:w-[67%] text-center'>
            With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.
          </p>
        </div>

        <FeaturesCard featureInfo={priceData} />
      </div>
    </div>
  );
};

export default PriceCard;

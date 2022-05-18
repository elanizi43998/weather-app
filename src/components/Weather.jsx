import React from 'react';
import Search from './Search';

function Weather() {
  return (
    <>
      <div className='flex flex-col space-y-10 rounded-xl p-6 w-auto  bg-slate-100 items-center justify-center font-sans'>
        <div className='basis-3/5 '>
          <p className='font-extrabold text-5xl'>Weather App</p>
        </div>
        <Search />
        <div className='basis-2/5 '>
          <p className='col-span-2'>Made by Me</p>
        </div>
      </div>
    </>
  );
}

export default Weather;

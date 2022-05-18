import React from 'react';

function SearchCard({ data, name, img }) {
  const { wind, weather, main } = data;
  const {  description } = weather[0];
  // const weatherIcon = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <>
      <div
        className='grid grid-cols-1 rounded-xl  bg-slate-300 p-9 bg-cover text-white shadow-lg shadow-gray-300 h-full  w-72 sm:w-96   min-h-56 grid-cols-3'
        style={{ backgroundImage: `url(${img})` }}
      >
        <p className='col-span-2 font-bold'>{name.toUpperCase()}</p>
        <div className='grid grid-cols-1 col-span-1 sm:grid-cols-2 col-span-3 font-medium rounded-xl bg-gray-50 p-2 text-slate-900 shadow-lg shadow-neutral-600'>
          <p>Temperature :</p>
          <p>{main.temp} ºC</p>
          <p>Wind :</p>
          <p>{wind.speed} Km/h</p>
          <p>Clouds :</p>
          <p>{description.toUpperCase()}</p>
        </div>
      </div>
    </>
  );
}

export default SearchCard;

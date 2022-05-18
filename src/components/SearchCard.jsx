import React from 'react';
import { Fade } from 'react-awesome-reveal';
function SearchCard({ data, name, img }) {
  const { wind, weather, main } = data;
  const { icon, description } = weather[0];
  const weatherIcon = `http://openweathermap.org/img/w/${icon}.png`;
  return (
    <>
      <div
        className='grid grid-cols-3 rounded-xl bg-slate-300 w-full h-70 p-10 bg-cover text-white shadow-lg shadow-gray-300 w-96 h-56 max-h-96 min-h-56'
        style={{ backgroundImage: `url(${img})` }}
      >
        <p className='col-span-2 font-bold'>{name.toUpperCase()}</p>
        <div className='grid grid-cols-2 col-span-3 font-medium rounded-xl bg-gray-50 p-2 text-slate-900 shadow-lg shadow-neutral-600'>
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

import React from 'react';
import Search from './Search';
import { Link } from 'react-router-dom';
import {Fade} from 'react-awesome-reveal'

function Weather() {
  return (
    <Fade>
      <div className='basis-3/5 '>
        <p className='font-extrabold text-5xl'>Weather App</p>
      </div>
      <Search />
      <div className='basis-2/5'>
        <p className='col-span-2'>
          Made by{' '}
          <Link to='/aboutme' className='text-cyan-400 underline'>
            Elanizi
          </Link>
        </p>
      </div>
    </Fade>
  );
}

export default Weather;

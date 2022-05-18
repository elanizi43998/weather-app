import { useState,  } from 'react';
import SearchCard from './SearchCard';
import { Fade } from 'react-awesome-reveal';

function Search() {
  const [search, setSearch] = useState();
  const [searchErr, setSearchErr] = useState();
  const [data, setData] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [imgErr, setImgErr] = useState();

  const handleChange = (ev) => {
    if(ev.target.value.trim()===''){
      setData();
    }
    setSearch(ev.target.value);
  };
  const handleKey = (ev) => {
    if (ev.code === 'Enter') {
      handleSearch();
    }
  };
  const handleSearch = () => {
    console.log(process.env.REACT_APP_PIXBAY_API);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric`
    )
      .then((results) => {
        if (results.ok) {
          return results.json();
        } else {
          setSearchErr(`The ${search} city might not exist, check again.`);
          setData();
          throw new Error('Something went wrong');
        }
      })
      .then((CityWeather) => {
        setData(CityWeather);
        setSearchErr();
      })
      .catch((err) => console.log(err));

    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXBAY_API}&q=${search}&image_type=photo`
    )
      .then((results) => {
        if (results.ok) {
          return results.json();
        } else {
          setImgErr('No Image have been found.');
          throw new Error('Something went wrong');
        }
      })
      .then((data) => setImgUrl(data.hits[1].largeImageURL))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center basis-2/5 p-2 rounded-xl gap-3'>
        <div className='grid grid-cols-1 w-full sm:grid-cols-2  gap-3 '>
          <input
            type='text'
            placeholder='Weather in your city'
            onChange={handleChange}
            onKeyDown={handleKey}
            className='rounded-xl p-1'
          />
          <button
            className='font-medium text-lg rounded-xl bg-orange-300 text-center cursor-pointer p-1'
            onClick={handleSearch}
          >
            Search
          </button>
          {searchErr && <p className='text-red-700'>{searchErr}</p>}
        </div>
        <Fade>
          {data && <SearchCard data={data} name={search} img={imgUrl} />}
        </Fade>
        {imgErr && <p className='bg-red-700'>{imgErr}</p>}
      </div>
    </>
  );
}

export default Search;

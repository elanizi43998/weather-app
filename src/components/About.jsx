import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


function About() {
  return (
    <>
      <Fade>
        <div className='flex flex-col gap-2 p-2 items-center justify-center w-full sm:grid grid-cols-4 items-stretch	'>
          <div className='flex flex-col gap-2 p-2 items-center justify-center sm:col-span-1'>
            <div
              className='bg-center bg-cover w-40 sm:rounded-xl bg-no-repeat bg-center bg-cover h-80 w-full'
              style={{ backgroundImage: 'url(./images/Me.JPG)' }}
            ></div>
            {/* <img src="./images/Me.JPG" alt="Me" className='h-60 w-full rounded-xl cover-fit' /> */}
          </div>
          <div className='m-2 sm:col-span-3'>
            <p className='font-extrabold text-3xl '>Hello I'm Abderrahmane:</p>
            <p className=''>
              Passionate about web development, and eager to learn new things
              everyday. Driven by my ambition, I try to push myself to new
              places, where i can find different challenges every time , I'm
              taking this journey as challenge to make things better. You Want
              to talk ?<br />
              My{' '}
              <a
                className='text-orange-400 underline'
                href='https://github.com/elanizi43998/'
                target='_blank'
                rel='noreferrer'
              >
                Github.
              </a>{' '}
              <br />
              My{' '}
              <a
                className='text-orange-400 underline'
                href='https://www.linkedin.com/in/abderrahmane-elanizi-ba118a19b/'
                target='_blank'
                rel='noreferrer'
              >
                LinkedIn.
              </a>{' '}
              <br />
              <Link to='/'>
                <button class='bg-orange-300 mt-2 text-white font-bold py-2 px-4 rounded-xl'>
                  Home
                </button>
              </Link>
            </p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default About;

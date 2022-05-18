import Weather from './components/Weather';
import{ BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';

function App() {
  return (
    <Router>
      <div className='container h-full my-10 drop-shadow'>
        <div className='flex flex-col space-y-10 rounded-xl p-6 w-auto  bg-slate-100 items-center justify-center font-sans'>
          <Routes>
            <Route exact path='/' element={<Weather />} />
            <Route exact path='/aboutme' element={<About/>} />
          </Routes>
          
        </div>
      </div>
    </Router>
  );
}

export default App;

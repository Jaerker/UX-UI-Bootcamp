import { useEffect, useState } from 'react';
import HoverButton from '../components/Transition/HoverButton/HoverButton';
import SlideInMenu from '../components/Transition/SlideInMenu/SlideInMenu';
import './app.css';


import Home from './Home/Home';
import HoveringPage from './HoveringButton/HoveringPage';
import RainbowPage from './RainbowCards/RainbowPage';
import SlidingMenuPage from './SlidingMenu/SlidingMenuPage';
import FourCornersPage from './FourCorners/FourCornersPage';
import SpinnerPage from './Spinner/SpinnerPage';
import StopwatchPage from './Stopwatch/StopwatchPage';
import StarwarsScrollPage from './StarwarsScroll/StarwarsScrollPage';
import FlipACardPage from './FlipACard/FlipACardPage';
import TheCubePage from './TheCube/TheCubePage';

const App = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [mainVisible, setMainVisible] = useState(true);
  const [finalCurrentPage, setFinalCurrentPage] = useState(currentPage);
  useEffect(() => {
    setMenuIsOpen(false);
    if(currentPage !== finalCurrentPage){
      setMainVisible(false);
    
      setTimeout(() => {
        setMainVisible(true);
        setFinalCurrentPage(currentPage);
      }, 300);

    }

  },[currentPage]);
  const page = [
    <Home />,
    <HoveringPage />,
    <SlidingMenuPage />,
    <RainbowPage />,
    <FourCornersPage />,
    <SpinnerPage />,
    <StopwatchPage />,
    <StarwarsScrollPage />,
    <FlipACardPage />,
    <TheCubePage />
  ]


  return (
    <>
      <HoverButton 
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        menuIsOpen={menuIsOpen} />
      <aside className='menu-section'>
        <SlideInMenu 
          isOpen={menuIsOpen}
          setCurrentPage={setCurrentPage}/>
      </aside>
      <main className={`main-section main-section--${mainVisible ? 'visible' : 'invisible'}`}>
        {page[finalCurrentPage]}
      </main>
    </>
  )
}

export default App

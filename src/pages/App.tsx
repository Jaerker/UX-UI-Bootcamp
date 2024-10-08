import { useState } from 'react';
import HoverButton from '../components/Transition/HoverButton/HoverButton';
import SlideInMenu from '../components/Transition/SlideInMenu/SlideInMenu';
import './app.css';




function App() {

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

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
      <main className='main-section'>

      </main>
    </>
  )
}

export default App

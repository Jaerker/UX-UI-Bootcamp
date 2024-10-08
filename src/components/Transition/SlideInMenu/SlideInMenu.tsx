import MenuItem from './MenuItem/MenuItem';
import './slide-in-menu.css';
type Props = {
    isOpen: boolean,
    setCurrentPage: (pageIndex: number) => void,
}
const SlideInMenu = ({isOpen, setCurrentPage}: Props) => {
    return (
        <section className={`menu-wrapper menu-wrapper--${isOpen ? 'open' : 'closed'}`}>
            <ol className='menu-list'>
                <MenuItem 
                    content='Home'
                    onClick={() => setCurrentPage(0)}
                    />
                <MenuItem 
                    content='Hovering Button'
                    onClick={() => setCurrentPage(1)}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage(2)}
                    />
                <MenuItem 
                    content='"Rainbow cards'
                    onClick={() => setCurrentPage(3)}
                    />
                <MenuItem 
                    content='Four Corners'
                    onClick={() => setCurrentPage(4)}
                    />
                <MenuItem 
                    content='Spinner'
                    onClick={() => setCurrentPage(5)}
                    />
                <MenuItem 
                    content='Stopwatch'
                    onClick={() => setCurrentPage(6)}
                    />
                <MenuItem 
                    content='Starwars crawler'
                    onClick={() => setCurrentPage(7)}
                    />
                <MenuItem 
                    content='Flip A Card'
                    onClick={() => setCurrentPage(8)}
                    />
                <MenuItem 
                    content='The Cube'
                    onClick={() => setCurrentPage(9)}
                    />          
            </ol>
        </section>
    );
}

export default SlideInMenu;
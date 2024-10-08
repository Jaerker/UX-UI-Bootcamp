import MenuItem from './MenuItem/MenuItem';
import './slide-in-menu.css';
type Props = {
    isOpen: boolean,
    setCurrentPage: (pageName: string) => void,
}
const SlideInMenu = ({isOpen, setCurrentPage}: Props) => {
    return (
        <section className={`menu-wrapper menu-wrapper--${isOpen ? 'open' : 'closed'}`}>
            <ol className='menu-list'>
                <MenuItem 
                    content='Home'
                    onClick={() => setCurrentPage('home')}
                    />
                <MenuItem 
                    content='Hovering Button'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                <MenuItem 
                    content='"Slide in" menu'
                    onClick={() => setCurrentPage('hover')}
                    />
                                
            </ol>
        </section>
    );
}

export default SlideInMenu;
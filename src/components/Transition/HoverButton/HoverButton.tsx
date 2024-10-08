import './hover-button.css'

type Props = {
    onClick: () => void,
    menuIsOpen: boolean,
}

const HoverButton = ({onClick, menuIsOpen}: Props) => {
    return (
        <button className={`hover-btn${menuIsOpen ? ' hover-btn--open' : ''}`} onClick={onClick}>
            <section className='hover-btn__content'>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                <span className='hamburger-line'></span>
                </section>
            
        </button>
    );
}

export default HoverButton;
import './menu-item.css'
type Props = {
    content: string,
    onClick: () => void
}

const MenuItem = ({content, onClick}: Props) => {
    return (
        <li className={`menu-list__item`}>
            <button className='menu-button' onClick={onClick}>
                <p className='item-content'>{content}</p>
            </button>
        </li>
    );
}

export default MenuItem;
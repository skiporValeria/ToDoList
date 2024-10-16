
import { Link, useLocation } from 'react-router-dom'

const Header = ({deleteList}) => {
    const location = useLocation()

    return (
        <div>
            <header >
                <button>
                    <Link to='/'>
                        <span>TO DO | YOUR LISTS</span>
                    </Link>
                    
                </button>
                <div className="header-btn">
                    {location.pathname === '/'&& ( 
                        <button className='add-div'>
                        <Link to="/List">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"  ><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z" fill='#ad6361' stroke='#ad6361' stroke-width='4'></path></svg>
                            <p>Add List</p>
                        </Link>
                    </button>
                    )}
                    {location.pathname === '/List' && (
                        <div className='list-btn'>
                            <button className='delete-div' onClick={deleteList}>
                                <Link>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" fill='#ad6361' stroke='#ad6361' stroke-width='4'></path></svg>
                                    <p>Delete List</p>
                                </Link>
                            </button>
                            
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Header
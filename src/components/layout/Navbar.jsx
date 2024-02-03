import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className='navBar' style={{backgroundColor:'black'}}>
            <div>
                <img className='brand' src='https://res.cloudinary.com/dcu5e0sym/image/upload/v1706998716/Recurso_2_v931kc.png' alt='' />
            </div>
            <div>
                <ul className='itemsBar'>
                    <li>Home</li>
                    <li>Remeras</li>
                    <li>Hoddies</li>
                    <li>Pantalones</li>
                </ul>
            </div>
        </nav>
    )
}
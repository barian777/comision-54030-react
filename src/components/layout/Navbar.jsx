import './Navbar.css'
import CartWidget from '../common/cartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className='navBar' style={{backgroundColor:'black'}}>
                <div>
                    <Link to=""><img className='brand' src='https://res.cloudinary.com/dcu5e0sym/image/upload/v1706998716/Recurso_2_v931kc.png' alt='' /></Link>
                </div>
                <div>
                    <ul className='itemsBar'>
                        <li><Link style={{color:'white', fontWeight: '500'}} to="/">Home</Link></li>
                        <li><Link style={{color:'white', fontWeight: '500'}} to="/category/male">Male</Link></li>
                        <li><Link style={{color:'white', fontWeight: '500'}} to="/category/famale">Famale</Link></li>
                        <li><Link style={{color:'white', fontWeight: '500'}} to="/category/unisex">Unisex</Link></li>
                        <li><Link to="/cart"><CartWidget/></Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
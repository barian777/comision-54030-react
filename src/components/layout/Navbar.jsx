import './Navbar.css'
import CartWidget from '../common/CartWidget'

export const Navbar = () => {
    return (
        <nav className='navBar' style={{backgroundColor:'black'}}>
            <div>
                <a href=""><img className='brand' src='https://res.cloudinary.com/dcu5e0sym/image/upload/v1706998716/Recurso_2_v931kc.png' alt='' /></a>
            </div>
            <div>
                <ul className='itemsBar'>
                    <li><a style={{color:'white', fontWeight: '500'}} href="">Home</a></li>
                    <li><a style={{color:'white', fontWeight: '500'}} href="">Remeras</a></li>
                    <li><a style={{color:'white', fontWeight: '500'}} href="">Hoddies</a></li>
                    <li><a style={{color:'white', fontWeight: '500'}} href="">Pantalones</a></li>
                    <a style={{fontWeight:'300'}} href=""><CartWidget/></a>
                </ul>
            </div>
        </nav>
    )
}
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <nav>
            <h3>Bebidas </h3>
            <div>
                <button>Fernet</button>
                <button>Cerveza</button>
                <button>Gancia</button>
                <button>Vino</button>

            </div>
            <CartWidget />
        </nav>
    ) 

    }
 export default NavBar
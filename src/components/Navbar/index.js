import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    h1Style,
  } from './NavElements';
  
  const Navbar = () => {
  
    return (
      <>
        <Nav>
        
        <h1 style={h1Style}>Localiza</h1>      
          <Bars />
          <NavMenu>
          <NavLink to='/' activestyle>
              Home
            </NavLink>
          <NavLink to='/Contato' activestyle>
              Contato
            </NavLink>
            <NavLink to='/Sobre' activestyle>
              Sobre
            </NavLink>
            <NavLink to='/Produtos' activestyle>
                Produtos
            </NavLink>
            </NavMenu>
            <NavBtn>
          </NavBtn>
        </Nav>
      </>
    );
    
  };
  
  export default Navbar;
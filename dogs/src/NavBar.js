import React from "react"
import {NavLink} from "react-router-dom"

function NavBar({dogs}) {
    const links = dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name}`}>
            {dog.name}
        </NavLink>
        // where does dogs come from here? not imported from anywhere
        // what does key do?
    ));
    return (
        <nav>
          <NavLink exact to="/dogs">Home</NavLink>
          {links}
        </nav>
      );
}

export default NavBar;
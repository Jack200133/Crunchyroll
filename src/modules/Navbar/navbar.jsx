import React from 'react'
import './navbar.css'
import Search from '../../../assets/search.svg'
import Bookmark from '../../../assets/bookmark.svg'
import Flecha from '../../../assets/flecha.svg'

const Navbar = () => (

  <div className="header-container">
    <div className="header-logo">
      <div className="a" />
    </div>
    <div className="header-left">
      <div className="Explorar">
        Explorar
        <Flecha className="down" />
      </div>
      <div className="Manga">Manga</div>
      <div className="Juegos">Juegos</div>
      <div className="Noticias">
        Noticias
        <Flecha className="down" />
      </div>

    </div>
    <div className="header-right">
      <div className="Search">
        <Search className="s" />
      </div>
      <div className="Bookmark">
        <Bookmark className="b" />
      </div>
      <div className="Perfil">
        <div className="p" />
        <Flecha className="down" />
      </div>
    </div>
  </div>

)

export default Navbar

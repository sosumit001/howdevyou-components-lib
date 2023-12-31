import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

type THeader = {
  header_width?: string
  site_logo_width?: string
  margin_top?:string
  logo_src: string
  site_description: string
  site_nav_links: Array<{ name: string; loc: string }>
}

const Header = ({ logo_src, site_description, site_nav_links, header_width, site_logo_width, margin_top }: THeader) => {
  return (
    <header style={{ width: header_width, marginTop: margin_top}} id='masthead' className='site-header' role='banner'>
      <div className='site-container'>
        {/* site branding */}
        <div className='site-branding bg-black'>
          {/* site logo */}
          <a href='/' className='custom-logo-link' rel='home' aria-current='page'>
            <img width={site_logo_width} src={logo_src} alt='Sumit So' />
          </a>

          {/* site description */}
          <div className='site-description'>
            <span className='site-description-text'>{site_description + ''}</span>
          </div>
        </div>

        {/* site navigation */}
        <nav id='site-navigation' className='main-navigation'>
          <ul className='nav-menu'>
            {site_nav_links.map((item, key) => {
              return (
                <li key={key}>
                <Link to={item.loc}>
                  {item.name}
                </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

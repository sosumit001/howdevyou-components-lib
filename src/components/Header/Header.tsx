import React from 'react'
import './Header.css'

type THeader = {
  logo_src: string
  site_description: string
  site_nav_links: Array<{ name: string; loc: string }>
}

const Header = ({ logo_src, site_description, site_nav_links }: THeader) => {
  return (
    <header id='masthead' className='site-header' role='banner'>
      <div className='site-container'>
        {/* site branding */}
        <div className='site-branding bg-black'>
          {/* site logo */}
          <a href='/' className='custom-logo-link' rel='home' aria-current='page'>
            <img height={'80px'} src={logo_src} alt='Sumit So' />
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
                <li className='nav-item' key={key}>
                  <a href={item.loc}>{item.name}</a>
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

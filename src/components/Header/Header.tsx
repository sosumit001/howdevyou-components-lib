
import React from "react"


type THeader = {
	logo_src : string,
	site_title : string,
	site_description : string,
	site_nav_links : Array<{name: string, loc: string}>
}

const Header = ({logo_src, site_title, site_description, site_nav_links}: THeader) => {
	return (
		<header id="masthead" className="site-header bg-black" role="banner">

		<div className="container">

			{/* site branding */}
			<div className="site-branding bg-black">
				{/* site logo */}
				<a href="/" className="custom-logo-link" rel="home" aria-current="page">
					<img width="500" height="80" src="" className={logo_src} alt="Sumit So"/>
				</a>

				{/* site title */}
				<h1 className="site-title site-title--large">
					<a href="/" rel="home">
						{site_title}
					</a>
				</h1>

				{/* site description */}
				<div className="site-description">
					<span className="site-description-text">
						{site_description + ""}
					</span>
				</div>
			</div>

			<nav id="site-navigation" className="main-navigation">
		     	<ul className="nav-menu">
					{
						site_nav_links.map(item => {
							return <li className="nav-item" ><a href={item.loc}>{item.name}</a></li>
						})
					}
				 </ul>
			</nav>
		</div>

		</header>
	)
}

export default Header
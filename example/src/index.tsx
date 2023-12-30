import React from 'react'
import ReactDOM from 'react-dom/client'
// import {Header} from '../../src'
// import {Header} from '../../src/index'
import {Header} from 'howdevyou'
// import {MyCounter} from '../../dist/esm'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    {/* <Header
      site_title='Sumit So'
      site_description='Welcome to Sumo Web asd'
      logo_src='#'
      site_nav_links={[
        {
          name:"Home",
          loc: "/"
        },
        {
          name: "Blogs",
          loc: "/blogs"
        }
      ]}

    /> */}
    <Header
        logo_src={site_logo}
        site_description='this is how waterfalls are made'
        site_title='Waterfalls'
        site_nav_links={[{name:"home", loc:"/"}, {name:"blog", loc: "/blog"}]}
    />
    <div>we gonna import text here</div>
  </React.StrictMode>,
)

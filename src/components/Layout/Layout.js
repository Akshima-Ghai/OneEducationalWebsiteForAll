import React,{ useState } from 'react'

import Header from './../Header/Header'
import SideDrawer from './../SideDrawer/SideDrawer'

const Layout = (props) => {
    const [showDrawer,setShowDrawer] = useState(false)

    return (
        <React.Fragment>
            <SideDrawer showSD={showDrawer} toggleSD={() => setShowDrawer(prev => !prev)} />
            <Header toggleSD={() => setShowDrawer(prev => !prev)} />
            <main>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
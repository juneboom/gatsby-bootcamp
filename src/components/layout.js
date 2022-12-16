import React from "react";

import Header from "./header";
import Footer from "./footer";
import '../styles/index.scss';
import * as layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return ( 
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header></Header>
                {props.children}
            </div>
            <Footer></Footer>
        </div>
     );
}
 
export default Layout;
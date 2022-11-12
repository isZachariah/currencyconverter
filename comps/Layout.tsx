import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className='content'>
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;
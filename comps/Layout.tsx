import Navbar from "./Navbar";
import Footer from "./Footer";




const Layout = ({ children }) => {
    return (
        <div className='content'>
            {/*<Background />*/}
            <Navbar />
            { children }
            <Footer />
        </div>
    )
}

export default Layout;
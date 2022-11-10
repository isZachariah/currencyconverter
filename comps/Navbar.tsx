import Link from 'next/link'
import styles from '../styles/Navbar.module.css';
import "@fontsource/montserrat";

/** NAVBAR
 *       <section className="header">
 *         <nav>
 *           <ul>
 *             <li className="brand">Xe Clone</li>
 *             <li className="send">Send Money</li>
 *             <li className="convert">Converter</li>
 *             <li className="api">Currency API</li>
 *             <li className="tools">Tools</li>
 *             <li className="signIn">Sign In</li>
 *             <li className="register">Register</li>
 *           </ul>
 *           <div className="registerButton"></div>
 *         </nav>
 */
const Navbar = () => {
    return (
        <div className={styles.background}>
            <nav className={styles.navigator}>
                <a className={styles.brand}>Xe Clone</a>
                <div/>
                <Link href={''} className={styles.link}>Send Money</Link>
                <Link href={''} className={styles.link}>Converter</Link>
                <Link href={''} className={styles.link}>Currency API</Link>
                <Link href={''} className={styles.link}>Tools</Link>
                <div />
                <a className={styles.link}>Sign In</a>
                <div className={styles.register}>
                    <Link href={''} className={styles.link}>Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
import Link from 'next/link'
// import styles from '../styles/Navbar.module.css';
import "@fontsource/montserrat";
import Background from "./Background";

const Navbar = () => {
    return (
        <header className="bg-gradient-to-t h-96 from-blue-600 to-blue-900 text-white mx-auto px-0 max-w-full flex flex-col">
            <div className='flex flex-row justify-between align-middle px-12 py-6'>
                <div>
                    <p className='text-4xl'>Xe Clone</p>
                </div>
                <nav className='flex flex-col justify-center align-center'>
                    <ul className='flex flex-row justify-between align-middle m-0 p-0 gap-x-12'>
                        <li>
                            <Link href={''} className='text-lg hover:text-gray-300'>Send Money</Link>
                        </li>
                        <li>
                            <Link href={''} className='text-lg hover:text-gray-300'>Converter</Link>
                        </li>
                        <li>
                            <Link href={''} className='text-lg hover:text-gray-300'>Currency API</Link>
                        </li>
                        <li>
                            <Link href={''} className='text-lg hover:text-gray-300'>Tools</Link>
                        </li>
                    </ul>
                </nav>
                    <div className='flex flex-row justify-between align-center m-0 p-0 gap-x-4'>
                        <button >Sign In</button>
                        <button className='bg-sky-500 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-blue-900'>Register</button>
                    </div>
            </div>
        </header>
    )
}

export default Navbar;
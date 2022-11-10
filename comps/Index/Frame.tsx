import {useState} from "react";
import Link from 'next/link';
import styles from '/styles/Frame.module.css';


/** FRAME
 * <div className="frame">
 *         <nav>
 *           <ul className='frame-tabs'>
 *             <li className='convert-tab'>Convert</li>
 *             <li className='send-tab'>Send</li>
 *             <li className='charts'>Charts</li>
 *             <li className='alerts'>Alerts</li>
 *           </ul>
 *         </nav>
 *         <div className='convert-bg'></div>
 *         <form className="converter" onSubmit={e => submit(e)}>
 *           <label className='amount'>Amount</label>
 *           <input className='value'/>
 *           <label className='from'>From</label>
 *           <select id="currency-from"</select>
 *           <button className='swap-bg' onClick={() => swap()}></button>
 *           <img className='swap' src='/images/swap.png' alt='swap currencies'></img>
 *           <label className='to'>To</label>
 *           <select id="currency-to"></select>
 *           <button className='convert-btn'>Convert</button>
 *         </form>
 *         <p className='conversion'></p>
 *       </div>
 */
export function Frame() {
    const [toggleTab, setToggleTab] = useState(1);


    return (
        <>
            <div className={styles.frame}>
                <nav className={styles.tab_row}>
                    <Link href={'/'} className={styles.tab}>
                        Convert
                    </Link>
                    <Link href={'/'} className={styles.tab}>
                        Send
                    </Link>
                    <Link href={'/'} className={styles.tab}>
                        Charts
                    </Link>
                    <Link href={'/'} className={styles.tab}>
                        Alerts
                    </Link>
                </nav>
            </div>
        </>
    )
}
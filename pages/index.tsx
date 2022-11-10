
import {Frame} from "../comps/Index/Frame";
import {Conversions} from "../comps/Index/Conversions";
import styles from '../styles/Home.module.css';
import '@fontsource/montserrat';


/** Outline for tsx
 * Header
 * TITLE
 *      <h1 className="title">Currency Converter</h1>
 * Frame
 * Conversions
 */

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Currency Converter</h1>
      <Frame/>
      <Conversions/>
    </div>
  )
}

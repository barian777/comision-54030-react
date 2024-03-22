import { Link } from "react-router-dom"
import styles from "./NotFound.module.css"

export const NotFound = () => {
  return (
    <>
    <div>
        <img className={styles.imgNtFd} src="https://res.cloudinary.com/dcu5e0sym/image/upload/v1711059929/And_you_re_it_Sorry_we_can_t_find_the_page_too._h2dep1.jpg" alt="" />
        <Link to="/">
            <button className={styles.btnHmBck}>VOLVER AL HOME</button>
        </Link>
    </div>
    </>
  )
}

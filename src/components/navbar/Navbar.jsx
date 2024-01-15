import Link from "next/link"
import Links from "./Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";


const Navbar = async () => {

  const session = await auth();
  
 
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Yogesh Blogs</Link>
      <div>
        <Links session={session}/>
      </div>
    </div>
  )
}

export default Navbar

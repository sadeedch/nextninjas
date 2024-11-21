import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>  
     <Head>
      <title> SADDY's APP</title>

     </Head>
  <div>

   <h1 className={styles.title}>Homepage</h1>
    <p className={styles.text}> Pariatur esse ea sint cupidatat ex qui magna culpa magna incididunt consectetur. Ad fugiat cillum occaecat duis labore ex sunt. Laborum Lorem in duis velit cillum dolore laborum duis velit irure adipisicing. Ut occaecat anim irure anim tempor labore ea. Sit ut laboris voluptate laborum consectetur ad laborum labore ex eiusmod Lorem.
      Dolor laborum labore veniam id sunt ullamco fugiat excepteur do. Non fugiat officia incididunt nostrud. Ea sint excepteur excepteur est. Excepteur cupidatat anim esse aliqua nisi consequat labore consectetur eiusmod anim. Occaecat ea consequat labore eu. Sit cupidatat eiusmod irure dolore magna aute officia in irure.
      Ea adipisicing velit do adipisicing reprehenderit dolore nostrud et ipsum dolor nostrud occaecat. Nulla in nisi exercitation nisi qui quis velit voluptate dolor. Sit cillum pariatur reprehenderit qui consequat ullamco deserunt. Commodo enim officia culpa et reprehenderit. Ea ullamco occaecat sunt ut occaecat. Id officia exercitation labore dolore est veniam ad sit cupidatat aliquip in cupidatat esse.
      Cupidatat consectetur sit anim aliquip proident ea enim. Lorem incididunt incididunt sint veniam occaecat dolore ad Lorem cillum adipisicing labore elit. Laboris cillum occaecat labore non excepteur.</p>
    
    <Link href="/"> <a className={styles.btn}> Click Here</a></Link>
  </div>
  </>

  )
}

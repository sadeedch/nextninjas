
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
          //router.back();
          router.push('/')   /// redirects back to the home page using Use Router. 
        }, 3000)

     })
     

    return ( 
        <div className="not-found">

            <h1> OOOPSSSS..... GO BACK </h1>
            <h2>There is nothing here</h2>
            <p>Here is the door to go back <Link href='/'>HomePage</Link> </p>
        </div>

     );
}
 
export default NotFound;
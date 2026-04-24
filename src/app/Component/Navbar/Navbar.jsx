'use client'
import { useRouter } from "next/navigation"


export const Navbar = ()=>{
    const router = useRouter();

    return (
        <div className="navbar">
        <ul>
            <li><button onClick={()=>{router.push('/')}}>GET</button></li>
            <li><button onClick={()=>{router.push('/send-productos')}}>POST</button></li>
            <li><button onClick={()=>{router.push('/update-producto')}}>PUT</button></li>
            <li><button onClick={()=>{router.push('/delete-producto')}}>DELETE</button></li>
        </ul>
        </div>
    )
}
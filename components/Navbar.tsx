'use client'
import { useRef } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const navRef = useRef()
    const openRef = useRef()
    const closeRef = useRef()
    const breadCrumbRef = useRef()

    function toggleNav() {
        navRef.current?.classList.toggle('hidden')
        openRef.current?.classList.toggle('hidden')
        closeRef.current?.classList.toggle('hidden')
    }

    return (
        <nav className="flex flex-col sm:flex-row sm:text-xl sm:block">
            <div className="flex items-center justify-between px-5 border-b-2 border-b-eight">
                <h1 className="text-2xl p-2">Anurag</h1>
                <svg ref={openRef} onClick={toggleNav} className="sm:hidden fill-eight w-10 h-10 p-2 transition-all duration-100" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.75 24.75"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path> </g> </g></svg>
                <svg ref={closeRef} onClick={toggleNav} className="sm:hidden fill-eight w-10 h-10 p-2 hidden" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z" fillRule="evenodd"></path> </g></svg>
            </div>
            <div ref={navRef} className="flex bg-one hidden sm:flex z-20 sm:z-0 flex-col sm:flex-row absolute w-full top-14 items-center sm:static border-b-2 border-b-six">
                <Link href="/" className="p-2 hover:bg-six w-full text-center border-b-2 border-six sm:border-none">Home</Link>
                <Link href="/about" className="p-2 hover:bg-six w-full text-center border-b-2 border-six sm:border-none">About</Link>
                <Link href="/contact" className="p-2 hover:bg-six w-full text-center border-b-2 border-six sm:border-none">Contact</Link>
                <Link href="/projects" className="p-2 hover:bg-six w-full text-center sm:border-none">Projects</Link>
            </div>
        </nav>
    )
}

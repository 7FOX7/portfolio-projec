"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { sections } from "@/app/lib/data"

export default function Header() {
	const [isVisible, setIsVisible] = useState(false); 
	return (
	<header>
		<nav className="bg-transparent text-primary-color text-lg">
		<div className="min-w-36 flex flex-wrap items-center justify-between p-4 md:p-6 lg:p-8">
			<Link href="/" className="flex items-center">
				<Image 
					width={60}
					height={60}
					src="/fox-logo.webp" alt="7FOX7 Logo" 
				/>
			</Link>
			<div className="block md:hidden">
			<button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:ring-2 focus:ring-hover-color" aria-controls="mobile-menu-2" aria-expanded={isVisible} onClick={() => setIsVisible((prev) => !prev)}>
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
			</button>
			</div>
			<div id="mobile-menu-2" className={`${isVisible ? "block" : "hidden"} w-full md:block md:w-auto`}>
				<ul className="flex flex-col border-2 border-primary-color rounded-lg md:border-none md:flex-row font-semibold md:space-x-8 mt-4 md:mt-0">
				{
					sections.map((section) => (
						<li key={section.id}>
						<Link href={`/${section.path}`} 
							className="block py-2 px-3 rounded hover:hover-color md:border-0 md:hover:text-hover-color md:p-0">
							{section.name}
						</Link>
						</li>
					))
				}
				</ul>
			</div>
		</div>
		</nav>     
	</header>
  )
} 
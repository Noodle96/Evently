// rafce
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Header = () => {
  return (
	<header className=' w-full border-b '>
		<div className="wrapper flex flex-row items-center justify-between">
			<Link href="/" className=' w-36'>
				<Image
					src="/assets/images/logo.svg"
					alt='evently logo'
					width={128}
					height={38}	
				/>
			</Link>
			<SignedIn>
				{/* con hidden el display:none
					pero con md:flex-between el display es flex,
				*/}
				<nav className='md:flex-between hidden w-full max-w-xs'>
					<NavItems></NavItems>
				</nav>
			</SignedIn>
			<div className='flex w-32 justify-end  gap-3' >
				<SignedIn>
					<UserButton afterSignOutUrl='/'/>
					<MobileNav></MobileNav>
				</SignedIn>
				<SignedOut>
					<Button asChild className=' rounded-full' size="lg">
						<Link href="/sign-in">
							Login
						</Link>
					</Button>
				</SignedOut>
			</div>
		</div>
	</header>
  )
}

export default Header
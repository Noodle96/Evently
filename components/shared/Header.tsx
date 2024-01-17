// rafce
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
			<div className='flex w-32 justify-end  gap-3' >
				Login
			</div>
		</div>
	</header>
  )
}

export default Header
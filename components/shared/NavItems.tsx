
import {headerLinks} from '@/constants';
import Link from 'next/link';
const NavItems = () => {
	return (
		<ul className="md:flex-between flex w-full md:flex-row flex-col items-start gap-5">
			{headerLinks.map((item) => {
				return (
					<li>
						<Link href={item.route}>{item.label}</Link>
					</li>
				);
			})}
		</ul>
	)
}

export default NavItems

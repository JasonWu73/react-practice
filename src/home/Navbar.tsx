import { GetStarted } from '@/home/GetStarted'

export function Navbar() {
  const navItems = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

  return (
    <nav className="relative container flex justify-between items-center mx-auto mb-4 p-4">
      <div>
        <img src="/img/logo.svg" alt="Logo"/>
      </div>

      <ul className="hidden md:flex md:gap-4">
        {navItems.map(item => <NavItem key={item} text={item}/>)}
      </ul>

      <div className="hidden md:inline-block ">
        <GetStarted/>
      </div>
    </nav>
  )
}

type NavItemProps = {
  text: string
}

function NavItem({ text }: NavItemProps) {
  return (
    <li><a href="#" className="hover:text-gray-500">{text}</a></li>
  )
}

export function Navbar() {
  const navItems = ['Pricing', 'Product', 'About Us', 'Careers', 'Community']

  return (
    <nav className="relative flex justify-between items-center container mx-auto mb-4 p-4">
      <div>
        <img src="/img/logo.svg" alt="Logo"/>
      </div>

      <ul className="hidden md:flex md:gap-4">
        {navItems.map(item => <NavItem key={item} text={item}/>)}
      </ul>

      <Button/>
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

function Button() {
  return (
    <button
      className="hidden md:inline-block px-2 py-1 bg-orange-500 text-white rounded-full hover:bg-orange-500/90"
    >
      Get Started
    </button>
  )
}

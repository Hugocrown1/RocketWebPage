import Link from "next/link"
const links = [{
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Productos',
    route: '/products'
  },
  {
    label: 'Colaboraciones',
    route: '/collabs'
  }
  ]
export function Navigation () {
    return(
        <header >
        <nav className="mb-8 text-start bg-[#fffffc] py-3 border-b border-transparent transition duration-200 ease-in-out hover:border-[#e5e5e5]">
          
            {links.map(({label, route})=> (
                <Link className="mx-4 hover:underline" key={route} href={route}>
                    
                    <b>{label} </b>
                </Link>
            ))}
          
        </nav>
        </header>
    )
}
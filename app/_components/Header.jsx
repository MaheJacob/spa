import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {

  const Menu =[
    {id:1,
      name: 'Home',
      path: '/'
    },
    
    {id:2,
      name: 'Explore',
      path: '/'
    },
    
    {id:1,
      name: 'Contact Us',
      path: '/'
    }
    
  ]
  return (
    <div className='flex items-center justify-between padding-4 shadow-sm'>

      <div className='flex items-center gap-10'>
      <img src="/Images/netric.png" alt="logo" 
      width={100} height={80}/>
      
     <ul className='md:flex gap-8 hidden'>
   
      {Menu.map((item,index) => (
           <Link href={item.path}>
        <li className='hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
        </Link> 
      )) }
     </ul>
     </div>
         <Button>Get Started</Button>
    </div>
  )
}

export default Header

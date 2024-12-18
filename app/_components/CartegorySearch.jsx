import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'
const CartegorySearch = () => {
  return (
    <div className='mb-10 items-center flex flex-col gap-4'>
      <h1 className='font-bold text-4xl tracking-wide'>Search <span className='text-primary'> Spa Therapist</span></h1>
      <h2 className='text-gray-500 text-xl'>search your Therapist and book an appointment in one click </h2>

      <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search" />
      <Button type="Search"> <Search className='h-4 w-4 mr-2'/> Search </Button>
    </div>
    </div>
  )
}

export default CartegorySearch

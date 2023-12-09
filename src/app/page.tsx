import { Metadata } from 'next'  
import FindaWife from './home-data'
import GuestLayout from '@/components/layouts/GuestLayout'




export const metadata: Metadata = {
  title: 'First Match | Home Page.',
  description: 'Welcome to RendaHealth you can start ordering  your  drugs today.',
}

export default function FirstMatch() {
  return (
    <GuestLayout >
      <div className="w-full">
        < FindaWife/>
      </div>
    </GuestLayout>
  )
}

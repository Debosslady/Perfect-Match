import { Metadata } from 'next'   
import GuestLayout from '@/components/layouts/GuestLayout'
import ContactUs from './contact-data'




export const metadata: Metadata = {
  title: 'First Match | Home Page.',
  description: 'Welcome to RendaHealth you can start ordering  your  drugs today.',
}

export default function FirstMatch() {
  return (
    <GuestLayout >
      <div className="w-full">
        <ContactUs/>
      </div>
    </GuestLayout>
  )
}

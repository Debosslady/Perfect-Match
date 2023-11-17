import { Metadata } from 'next' 
import Biz from './first-match-data';




export const metadata: Metadata = {
  title: 'First Match | Home Page.',
  description: 'Welcome to RendaHealth you can start ordering  your  drugs today.',
}

export default function FirstMatch() {
  return (
    < >
      <div className="w-full">
        < Biz/>
      </div>
    </>
  )
}

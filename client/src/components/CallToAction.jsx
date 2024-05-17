import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Unlock the World of Cryptocurrencies: Your Comprehensive Guide to Digital Assets
            </h2>
            <p className='text-gray-500 my-2'>
            </p>

           
<Button className='text-xs sm:text-sm text-orange-500 font-bold hover:underline rounded-tl-xl rounded-bl-none bg-gradient-to-r from-black to-yellow-500' gradientDuoTone='purpleToPink'>
    <a href="https://vinay-112.github.io/cc/" target='_blank' rel='noopener noreferrer'>
        CRYPTO CURRIENCIES
    </a>
</Button>


        </div>
        <div className="p-7 flex-1">
            <img src="https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
    </div>
  )
}
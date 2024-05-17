import { Button } from 'flowbite-react';

export default function CallToAction3() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            Fee Clarity at Your Fingertips: Use Our Brokerage Calculator
            </h2>
            <p className='text-gray-500 my-2'>
            </p>

           
<Button className='text-xs sm:text-sm text-orange-500 font-bold hover:underline rounded-tl-xl rounded-bl-none bg-gradient-to-r from-black to-yellow-500' gradientDuoTone='purpleToPink'>
    <a href="https://vinay-112.github.io/cryptocalculator/" target='_blank' rel='noopener noreferrer'>
        CRYPTO CONVERTER
    </a>
</Button>


        </div>
        <div className="p-7 flex-1">
            <img src="https://cdn.pixabay.com/photo/2023/07/28/08/07/bitcoin-8154779_1280.jpg" />
        </div>
    </div>
  )
}
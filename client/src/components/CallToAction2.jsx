import { Button } from 'flowbite-react';

export default function CallToAction2() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
            "Gain a Competitive Edge: Elevate Your Trading Strategy with Our Stock Prediction Tools"
            </h2>
            <p className='text-gray-500 my-2'>
            </p>

           
<Button className='text-xs sm:text-sm text-orange-500 font-bold hover:underline rounded-tl-xl rounded-bl-none bg-gradient-to-r from-black to-yellow-500' gradientDuoTone='purpleToPink'>
    <a href="" target='_blank' rel='noopener noreferrer'>
          STOCK PREDICTION  <br></br> (COMING SOON)
    </a>
</Button>


        </div>
        <div className="p-7 flex-1">
            <img src="https://img.freepik.com/premium-photo/creative-glowing-forex-chart-with-map-dark-blue-background-trade-finance-concept-3d-rendering_670147-11936.jpg?w=826" />
        </div>
    </div>
  )
}
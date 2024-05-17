import CallToAction from '../components/CallToAction';
import CallToAction2 from '../components/CallToAction2';
import CallToAction3 from '../components/CallToAction3';

export default function Projects() {
  return (


<div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
{/* <h1 className='text-3xl font-semibold text-orange-500 mb-1'>Advanced Trading Realm</h1> */}
<div className="border border-orange-500 rounded-lg p-3">
  <h1 className='text-3xl font-semibold text-orange-500 mb-1'>Advanced Trading Realm</h1>
</div>

{/* <p className='text-white'>Our services and apps</p> */}
<p className='text-teal-300 text-lg font-semibold'>Use our services and apps</p>


<CallToAction />
<CallToAction3 />
<CallToAction2 />
</div>

  )
}



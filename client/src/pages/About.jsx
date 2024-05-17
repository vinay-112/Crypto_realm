export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          {/* <h1 className='text-3xl font font-semibold text-center my-7'>
            About Algorithmic Trading
          </h1> */}
<div className="border-2 border-orange-500 rounded-lg p-4">
  <h1 className='text-3xl font-semibold text-center my-7 text-orange-500'>
    <span className="block bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
      About Crypto Realm
    </span>
  </h1>
</div>

<br></br>
          {/* <div className='text-md text-gray-500 flex flex-col gap-6'> */}
          <div className='text-md text-maroon-500 flex flex-col gap-6'>
            <p>
            Welcome to Crypto Realm, your premier destination for navigating the world of cryptocurrencies effortlessly. We provide real-time data insights, empowering you to make informed investment decisions with confidence. Our platform offers comprehensive graphs and charts, allowing you to track market trends and seize opportunities as they arise.
            </p>

            <p>
            At Crypto Realm, convenience is key. Seamlessly convert between traditional fiat currencies and cryptocurrencies using our intuitive tools. Whether you're diversifying your portfolio or exploring new assets, we ensure a smooth transition every step of the way.
            </p>

            <p>
            But Crypto Realm is more than just a data hub – it's a vibrant community space. Engage with our curated posts, join real-time discussions, and connect with fellow enthusiasts. Together, we're shaping the future of finance in the exciting realm of cryptocurrencies. Join us and embark on your journey today at Crypto Realm.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

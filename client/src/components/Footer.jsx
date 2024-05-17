import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'
            >
              {/* <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              MarketWave Analytics
              </span> */}
             <span className='px-2 py-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 rounded-lg text-black'>
             Crypto Realm 
             </span>




             
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6'>
            {/* <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='link of page'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  100 JS Projects
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Sahand's Blog
                </Footer.Link>
              </Footer.LinkGroup>
            </div> */}
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                {/* <Footer.Link
                  href='https://www.github.com/vinay112'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                 
                </Footer.Link> */}
                <Footer.Link href='#'>Facebook</Footer.Link>
                <Footer.Link href='#'>Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal Space' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
     
      </div>
    </Footer>
  );
}

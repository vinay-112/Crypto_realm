import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        
        <h1 className='text-3xl font-bold lg:text-6xl text-orange-500'>Explore the Future of CRYPTO</h1>

        <p className='text-white-700 text-xs sm:text-base'>
        Welcome to Crypto Realm, where we're dedicated to simplifying every aspect of your cryptocurrency experience. Whether you're a seasoned trader navigating volatile markets or a curious newcomer, our platform is your trusted ally in the world of digital assets. At Crypto Realm, we empower you with innovative tools and insights to enhance your trading journey. Our mission is to streamline your path to success by providing real-time data, seamless conversion services, and a vibrant community space where knowledge meets engagement.


        <br></br>
        <br></br>
        
Join us in our digital sanctuary, where empowerment and guidance converge to elevate your cryptocurrency endeavors. Explore, learn, and thrive with Crypto Realm as your trusted companion on the path to financial freedom. Welcome to a realm where your journey is our priority. Welcome to Crypto Realm.


        </p>
        <Link
          to='/search'
          className='text-xs sm:text-base text-orange-500 font-bold hover:underline' 
        >
          View all the articles
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              
              className='text-xs sm:text-base text-orange-500 font-bold hover:underline'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

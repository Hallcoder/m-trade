import * as React from 'react';
import Sidebar from './Sidebar';
import SingleCard from './SingleCard';
import men from '../assets/pc-men-shoes-banner.jpg';
import women from '../assets/pc-women-shoes-banner.webp' ;
import accessories from '../assets/pc-use-cate-banner.jpg';
import phone from '../assets/pc-phone-banner.jpg';
import TrendingSlideShow from './TrendingSlideShow';
import RightSidebar from './RightSidebar';
const HomeMain: React.FC = () => {
    return <main className='flex flex-col w-9/12 m-auto'>
      <div id="intro" className='flex w-full h-full'>
        <Sidebar />
        <div className='w-8/12'>
            <TrendingSlideShow />
            <article className='flex  flex-wrap'>
                <SingleCard imageSource={men}/>
                <SingleCard imageSource={women}/>
                <SingleCard imageSource={phone}/>
                <SingleCard imageSource={accessories}/>
            </article>
        </div>
        <RightSidebar />
      </div>
    </main>
}
export default HomeMain;
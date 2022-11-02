import * as React from 'react';
import TopDeal from './TopDeal';
import vest from '../assets/vest.jpg';
const TopDeals : React.FC = () => {
return <section className='flex flex-wrap justify-center w-full'>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
    <TopDeal name='Airpods' image={vest} price={10000}/>
</section>
}

export default TopDeals;
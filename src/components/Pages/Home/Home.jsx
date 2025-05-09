import React from 'react';
import Banner from '../Banner/Banner';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    // console.log(data);
    
    return (
        <div>
            <Banner></Banner>
            <Book data={data}></Book>
        </div>
    );
};

export default Home;
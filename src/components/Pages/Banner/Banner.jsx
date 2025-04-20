import React from 'react';
import bookImg from '../../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            {/* daisy hero */}
            <div className="hero  bg-base-200 min-h-screen rounded-2xl ">
                <div className="hero-content lg:flex-row-reverse gap-32">
                    <img
                        src={bookImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div className=''>
                        <h1 className="text-2xl font-semibold mb-10">Books to freshen up your bookshelf</h1>
                        <button className="btn btn-success">View The List</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;
import React, { use } from 'react';
import { RiStarSLine } from "react-icons/ri";
const SingleBook = ({book}) => {
    // const data = use(bookPromice);
    // console.log(data);
    // console.log(book);
    const{bookName,image,author,category,rating,tags}=book;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-4 ">
        <figure className='bg-gray-200 p-4 w-2/3 mx-auto'>
          <img className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title badge  "> {tags}  </h2>
          <h3 className='font-semibold text-2xl'>{bookName}</h3>
          <p className='font-medium text-[16px]'>By: {author}</p>
          <div className="card-actions justify-between">
            <div className="font-medium text-xl">{category}</div>
            <div className="flex gap-4 items-center font-medium text-xl">{rating} <RiStarSLine /> </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBook;
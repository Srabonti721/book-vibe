// import React, { use } from 'react';
import { RiStarSLine } from "react-icons/ri";
import { Link } from "react-router";
const SingleBook = ({book}) => {
    // const data = use(bookPromice);
    // console.log(data);
    // console.log(book);
    const{bookName,bookId,image,author,category,rating,tags,yearOfPublishing}=book;
    return (
   <Link to={`/bookDetalis/${bookId}`}>
        <div className="card bg-base-100 w-96 shadow-sm border p-4 ">
        <figure className='bg-gray-200 p-4 w-2/3 mx-auto'>
          <img className='h-[166px]'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body ">
      <div className="flex gap-8">
        {
              tags.map((tag)=><button key={tag} tag={tag}>{tags}</button>)
        }
      </div>
      <div className="flex gap-4">
      <h3 className='font-semibold text-2xl'>{bookName}</h3>
        <button className="badge badge-primary">{yearOfPublishing}</button>
        </div>
        
          <p className='font-medium text-[16px]'>By: {author}</p>
          <div className="card-actions justify-between border-t-1 border-dashed">
            <div className="font-medium text-xl ">{category}</div>
            <div className="flex gap-4 items-center font-medium text-xl">{rating} <RiStarSLine /> </div>
          </div>
        </div>
      </div>
   </Link>
    );
};

export default SingleBook;
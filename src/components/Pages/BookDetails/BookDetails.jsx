import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../../Uilitys/AddToDB';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)
// react tostify  import
import { ToastContainer, toast } from 'react-toastify';

const BookDetails = () => {
    const { id } = useParams();
    // console.log(typeof id);
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    // console.log(singleBook);
    const { tags, category, rating, image, author, totalPages, bookName, review, yearOfPublishing, publisher } = singleBook || {};

    const handleRead = (id)=>{

        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        //   });

        toast("Wow so easy!");

      addToStoreDB(id)
    }


    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl bg-gray-200"
                />
                <div className='m-4'>
                    <h1 className="text-4xl font-bold">{bookName}</h1>
                    <ToastContainer />
                    <h3 className='my-5 text-2xl font-medium'>By : {author}</h3>
                    <h4 className='font-normal border-t border-b border-gray-300 m-2 p-2 '>{category}</h4>
                    <p className="py-6"><span className='font-normul text-2xl'>review:</span>{review}  </p>

                    <div className="flex gap-8 border-b border-b-gray-300 p-3">
                        {
                            tags.map((tag) => <button key={tag} tag={tag}> <span className='font-normul '>tag :</span> {tags}</button>)
                        }
                    </div>
                    <div className='grid gap-4'>
                        <h2 className='text-xl font-normul '> <span className='text-xl font-normul text-gray-400 mr-30'>Number of Pages : </span>{totalPages}</h2>
                        <h2 className='text-xl font-normul'><span className='text-xl font-normul text-gray-400 mr-30'>Publisher: </span>{publisher}</h2>
                        <h2 className='text-xl font-normul'> <span className='text-xl font-normul text-gray-400 mr-30'>Year of Publishing: </span>{yearOfPublishing}</h2>
                        <h2 className='text-xl font-normul'><span className='text-xl font-normul text-gray-400 mr-60'>Rating: </span>{rating}</h2>
                    </div>
                    <button onClick={()=>handleRead(id)} className="btn bg-[#FFFFFF] border-red-300 m-2">Read</button>
                    <button className="btn bg-[#50B1C9] m-2">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails; <h1>details</h1>
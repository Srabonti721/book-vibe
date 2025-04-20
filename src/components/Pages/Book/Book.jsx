import React, { Suspense,} from 'react';
import SingleBook from '../SingleBook/SingleBook';

const Book = ({ data }) => {
    // const [allBooks, setAllBooks] = useState([]);
    // API fetch korer rools ---1
    // useEffect(()=>{
    //     fetch('BookData.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         // setAllBooks(data)
    //         console.log(data);

    //     })
    // },[])
    // rools---2
    // const bookPromice = fetch('BookData.json').then(res => res.json())
    // react loder used kore----3

    return (
        <div>
            <h1 className='text-4xl text-center p-5'>Books</h1>
            <Suspense fallback={<h2>data lode...</h2>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((book) => <SingleBook key={book.bookId} book={book}></SingleBook>)
                    }
                </div>
            </Suspense>

        </div>
    );
};

export default Book;
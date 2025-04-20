import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Book from '../Book/Book';
import SingleBook from '../SingleBook/SingleBook';
import { getStoredBook } from '../../../Uilitys/AddToDB';

const Read = ({book}) => {
    const [sort,setSort] = useState("");
    const [read,setRead] = useState([])
    const data = useLoaderData();
    // console.log(data);

const handleSort =(type)=>{
setSort(type)
if(type==='pagges'){
const sortByPages = [...read].sort((a,b) => a.totalPages - b.totalPages)
setRead(sortByPages)
}
if(type==='ratings'){
    const sortByratings = [...read].sort((a,b) => a.rating - b.rating)
    setRead(sortByratings)
    }
}

    useEffect(()=>{
const storeBookData = getStoredBook();
const convertedStoredBooks = storeBookData.map(id=>parseInt(id));
// console.log(convertedStoredBooks);

const MyReadList =data.filter(book=>convertedStoredBooks.includes(book.bookId))
setRead(MyReadList);

    },[])


    
    return (
        <div>
{/* drop down */}
<div className="dropdown my-4 ">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] text-white">Sort By : {sort?sort:''}</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort('pages')}>pages</a></li>
    <li><a onClick={()=>handleSort('ratings')}>ratings</a></li>
  </ul>
</div>
{/* card details */}
           <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>read list 1 :{read.length}</h2>
      {
        read.map(b=><SingleBook key={b.bookId} book={b}></SingleBook>)
      }
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Read;
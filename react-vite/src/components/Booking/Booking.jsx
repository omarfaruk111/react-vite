import { useEffect, useState } from 'react'
// import Book from './Book';

const Booking = () => {
    const [bookHotel, setBookHotel]= useState([]);

    useEffect(() => {
        const url = "https://hotels-api-4ltr.onrender.com/api/hotels";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                setBookHotel(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

  return (
    <div className='booking container m-auto grid grid-cols-3 gap-4'>
            {bookHotel.map((book, i) =>{
                return (
                    <div className='w-full bg-slate-900 p-5 text-white' key={i}>
                        <div className='item'>
                            <h2>{book.name}</h2>
                            <p>{book.address}</p>
                            <h4>{book.pricePerNight}</h4>
                            <div className='images'>
                                {book.images.map((nestedImg, index)=> <img key={index} src={nestedImg.img} />)}
                            </div>
                        </div>
                    </div>
                )
            })}
    </div>
  )
}

export default Booking
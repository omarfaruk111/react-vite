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
    <div className='booking'>
            {bookHotel.map((book, i) =>{
                return (
                    <div key={i}>
                        <h2>{book.name}</h2>
                    </div>
                )
            })}
    </div>
  )
}

export default Booking
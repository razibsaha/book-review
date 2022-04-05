import React from 'react';
import image404 from '../Images/image_processing20200112-10992-q08hj1.png'

const NotFound = () => {
    return (
        <div>
        <div className='container flex justify-center items-center mx-auto my-20 p-5'>
            <h1 className='author text-center text-9xl text-red-500'>404 <br /> Not Found</h1>
            
            
        </div>

        <div className='container'>
        <h1 className='book text-center text-2xl text-slate-900'>More of Murakami's book</h1>
        <div className='container flex flex-wrap justify-center items-center mx-auto my-5 m-40'>
            <img className='p-5 m-5' src={image404} width="300px"  alt="" />
            <img className='p-5 m-5' src={image404} width="300px" alt="" />
            <img className='p-5 m-5' src={image404} width="300px" alt="" />
            </div>
            </div>
        </div>
    );
};

export default NotFound;
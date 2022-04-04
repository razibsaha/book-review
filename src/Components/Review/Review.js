import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {

    const {age,id,image,rating,review,name} = props.review;
    return (
        <div className='container mx-auto p-5 py-10 md:flex'>
                <div className='profile-container pr-5 mt-12'>
                    <img className='w-.25/3' width="150px" src={image} alt="" />
                    <p className='book font-bold 3xl'>{name}</p>
                    <span>Id: {id} || Age: {age}</span>
                </div>
                <div className='review-container mt-5 w-4/5'>
                    <p>{rating === 5? <span className='orange'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span> : <span className='orange'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>}</p>
                    <p>{review}</p>
                </div>
            </div>
    );
};

export default Review;
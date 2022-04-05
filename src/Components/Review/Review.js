import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Review = (props) => {

    const {age,id,image,rating,review,name} = props.review;
    return (
        
        <div className='flex justify-center items-center'>
                <div className="mx-auto p-5 py-10">
                <div className="profile-container pr-5 mt-0">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4"></div>
                    <div class="flex flex-col items-center pb-10">
                      <img className='h-[400px] rounded-lg mb-5 -mt-5 object-cover' src={image} alt={image} />
                      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {name}
                      </h5>
                      <span class="mb-1 text-md text-slate-400 font-medium  dark:text-white">
                        {" "}
                        Age : {age} || Id : {id}
                      </span>
                      <span>
                        <p>
                          {rating === 5 ? (
                            <span>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                            </span>
                          ) : (
                            <span className="orange">
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon>
                              <FontAwesomeIcon icon={faStar} className="text-red-500"></FontAwesomeIcon><FontAwesomeIcon icon={faStar} className="text-slate-400"></FontAwesomeIcon>
                            </span>
                          )}
                        </p>
                      </span>
                      <span class="text-sm text-gray-500 dark:text-gray-400 p-5">
                        {review.slice(0, 300)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
        </div>

    );
};

export default Review;
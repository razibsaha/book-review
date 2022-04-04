import React from "react";
import useReviews from "../Hooks/useReviews";
import heroImage from "../Images/norwegian-wood-cover.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [reviews] = useReviews();
  let shortReview = reviews.slice(0, 3);

  return (
    <div>
      <div>
        <div className="container mx-auto md:flex justify-center items-center  mt-5 box-border">
          <div className="w-50 mx-auto m-10 w-3/5">
            <h1 className="text-5xl font-bold text-red-500 book">
              Norweigian Wood
            </h1>
            <h1 className="-mt-5">
              A novel by{" "}
              <span className="text-6xl font-medium text-violet-900 author">
                Haruki Murakami
              </span>
            </h1>
            <p className="mt-5 text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              maxime animi tempore. Dolore dolor nam sit soluta atque
              repudiandae, numquam ipsam illum. Labore earum optio placeat dolor
              ex omnis voluptates.
            </p>
            <button className="rounded-full border-2 border-red-500 hover:bg-red-500 text-xl pl-8 pr-8 pt-2 pb-2 text-red-500 hover:text-slate-100 mt-5 ">
              Buy Now
            </button>
          </div>

          <div className="w-25 mx-auto m-10 md:w-1/5 w-3/5 ml-20">
            <img
              className="container flex justify-center items-center"
              src={heroImage}
              alt={heroImage}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="m-10 w-5/5">
          {shortReview.map((reviw) => {
            return (
              <div className="container mx-auto p-5 py-10 md:flex">
                <div className="profile-container pr-5 mt-0">
                  <img
                    className="rounded-full w-3/3"
                    width="100px"
                    height="100px"
                    src={reviw.image}
                    alt=""
                  />
                  <p>{reviw.name}</p>
                </div>
                <div className="review-container mt-0 w-4/5">
                  <p>
                    {reviw.rating === 5 ? (
                      <span className="orange">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </span>
                    ) : (
                      <span className="orange">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </span>
                    )}
                  </p>
                  <p>{reviw.review.slice(0, 250) + "..."}</p>
                </div>
              </div>
            );
          })}
          <div>
        <div className=" flex justify-center items-center mx-auto mb-20">
        <a className="rounded-full border-2 border-red-500 hover:bg-red-500 text-xl pl-8 pr-8 pt-2 pb-2 text-red-500 hover:text-slate-100 mt-5 " href="/reviews">All Reviews</a>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

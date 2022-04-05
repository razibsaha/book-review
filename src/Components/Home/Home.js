import React from "react";
import useReviews from "../Hooks/useReviews";
import heroImage from "../Images/norwegian-wood-cover.png";
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [reviews] = useReviews();
  let shortReview = reviews.slice(0, 3);

  return (
    <div>
      <div>
        <div className="container mx-auto md:flex justify-center items-center mt-5 box-border">
          <div className="w-50 mx-auto m-10 w-3/5">
            <h1 className="text-5xl font-bold text-red-500 book">
              Norwegian Wood
            </h1>
            <h1 className="-mt-5">
              A novel by{" "}
              <span className="text-6xl font-medium text-[#374151] author">
                Haruki Murakami
              </span>
            </h1>
            <p className="mt-5 text-gray-700">
              Norwegian Wood is about Toru Watanabe who hears the song
              "Norwegian Wood" by the Beatles and is suddenly transported back
              to the 1960s when he was a university student and in love with a
              girl named Naoko. The novel centers around their relationship and
              how Watanabe is forced to choose between first love Naoko and the
              new exciting rebellious Midori, who quite literally marches into
              his life. Haruki Murakami is a brilliant writer and perfectly
              captures an honest depiction of love in a way that is not cheesy
              or overly romantic.
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
        <div>
          <div className="container mx-auto flex justify-center items-center mt-5 mb-20">
            <h1 className="book text-4xl text-red-500 mx-auto">
              Some selected Reviews ({shortReview.length})
            </h1>
          </div>
        </div>
        <div className=" container md:flex">
          {shortReview.map((reviw) => {
            return (
              <div className="container mx-auto p-5 py-10 flex">
                <div className="profile-container pr-5 mt-0">
                  <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div class="flex justify-end px-4 pt-4"></div>
                    <div class="flex flex-col items-center pb-10">
                      <img
                        className="-mt-5 rounded-lg mb-5"
                        src={reviw.image}
                        alt={reviw.image}
                      />
                      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {reviw.name}
                      </h5>
                      <span class="mb-1 text-md text-slate-400 font-medium dark:text-white">
                        {" "}
                        Age : {reviw.age}
                      </span>
                      <span>
                        <Rating
                          initialRating={reviw.rating}
                          emptySymbol={<FontAwesomeIcon icon={faStar} />}
                          fullSymbol={
                            <FontAwesomeIcon
                              style={{ color: "#ef4444" }}
                              icon={faStar}
                            />
                          }
                          readonly
                        ></Rating>
                      </span>
                      <span class="text-sm text-gray-500 dark:text-gray-400 p-5">
                        {reviw.review.slice(0, 300)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
      <div className=" flex justify-center items-center mx-auto mb-20">
        <a
          className="rounded-full border-2 border-red-500 hover:bg-red-500 text-xl pl-8 pr-8 pt-2 pb-2 text-red-500 hover:text-slate-100 mt-5 "
          href="/reviews"
        >
          All Reviews
        </a>
      </div>
    </div>
  );
};

export default Home;

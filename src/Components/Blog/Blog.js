import React from "react";
import contextApi from "../Images/Context-API-Hooks.png";
import semanticTag from "../Images/HTML5-Semantic-Elements.jpg";
import cssElements from "../Images/inline-block-inline-block.png";

const Blog = () => {
  return (
    <div className="container mx-20 my-20">
      <div className="container mx-auto flex justify-center items-center -mt-20 mb-20">
        <h1 className="author text-9xl text-red-500 mx-auto">Blog</h1>
      </div>
      <div className="flex flex-wrap mx-20 left-20">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 mx-5 my-5  shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[250px] object-fit" src={contextApi} alt=""></img>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                What is context API?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Context Api is a system for react to declare global scope. It replaces the old props drilling. Previously it took a lot of value passing through the children. Now with context Api it's no more needed. With context Api it became it easier to pass data between parent and children.
            </p>
            <a href='https://reactjs.org/docs/context.html'
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 mx-5 my-5 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[250px] object-fit" src={semanticTag} alt=""></img>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                What is semantic tag?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              HTML semantic tags helps in dividing the section of the website in different portion with appropriate tags. HTML5 introduce semantic tags. Some popular semantic tags are Header, Footer, Navigation.  
            </p>
            <a href='https://www.w3schools.com/html/html5_semantic_elements.asp'
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 mx-5 my-5 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <img className="rounded-t-lg h-[250px] object-fit" src={cssElements} alt=""></img>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Block elements, Inline elements and Inline-Block elements
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Block elements take the whole space it is entitled to, basically the whole width. Inline elements only take the space required for it's content. Inline-Block elements gives user the options to set height and width.
            </p>
            <a href='https://www.w3schools.com/css/css_inline-block.asp'
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-red-500 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

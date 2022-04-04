import React from 'react';
import authorImage from "../Images/murakami-haruki-217x300.jpg";

const About = () => {
    return (
        <div>
            <div className="container mx-auto md:flex justify-center items-center  mt-5 box-border">
          <div className="w-50 mx-auto m-10 w-3/5">
            
            <p className="mt-5 text-slate-500">
            Haruki Murakami is a Japanese writer. His novels, essays, and short stories have been bestsellers in Japan as well as internationally, with his work translated into 50 languages and selling millions of copies outside Japan. <br />
            What do you do if you’re a self-confessed loner, recluse and a reluctant talker, who also happens to have sold millions of novels worldwide and has a matching number of ardent fans desperate to gain access to you?<br />
            It’s clearly a conundrum that Haruki Murakami has been considering for some time. Now, Japan’s most successful living author has spoken: “After so long, I want to exchange emails with readers,” he told his publisher, who told the press, who told us.<br />
            Murakami’s Japanese publisher, Shinchosha Publishing announced yesterday that the writer will answer questions from fans submitted through a new website “Murakami-san no tokoro” or “Mr. Murakami’s place”. What’s more, according to a spokesman, Murakami will “receive questions of any kind”, and in a number of languages.
            </p>
            
          </div>

          <div className="mx-auto m-10 sm:w-1/5 ml-20">
            <img
              className="container flex justify-center items-center"
              src={authorImage}
              alt={authorImage}
              
            />
          </div>
        </div>
      </div>
    );
};

export default About;
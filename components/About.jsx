import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            My name is Yevhen. I am a refugee from Kyiv, Ukraine. Now, my family
            and I are living here in Budapest. I have a temporary residence
            permit with the right to work here in Hungary. At home, in Kyiv, I
            was co-founder and CEO of a local company that practiced land
            surveying, cadastral works, and legal consulting in land
            relationships.
          </p>

          <p className="py-2 text-gray-600">
            {" "}
            The main source of leads and clients for our company was our website
            zemlevporyadnik.com.ua, which I created and supported. It was
            created on a clean HTML, CSS, and jQuery stack. It is quite fast and
            lightweight, with valuable and relevant content. It has leading
            positions in its niche and up to 6500 unique users per day of
            organic Google traffic.
          </p>

          <p className="py-2 text-gray-600">
            By now, I have learned up-to-date frontend development stack (HTML,
            CSS, JavaScript, React.js). What I can do now:
          </p>
          <ul className="py-2 text-gray-600">
            <li className="cursor-default">
              - write basic react markup structure of React SPA;
            </li>
            <li className="cursor-default py-2">
              - write different forms (sign-in, signups, text, select,
              multi-select, radio, etc. inputs), use React hooks to handle data
              from it, and store data in different storages;
            </li>
            <li className="cursor-default py-2">
              - fetch data from APIs, use appropriate hooks, and use objects and
              arrays to display that data in the application interface;
            </li>
            <li className="cursor-default py-2">
              - create sorting, filtering, and searching functionality for
              fetched data;
            </li>
            <li className="cursor-default py-2">
              - do other useful things with React and JavaScript.
            </li>
          </ul>
          <p className="py-2 text-gray-600">
            I am ready to take part in the creation of stunning web
            applications, that could add significant value to company business
            products.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Let`s see my latest works
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

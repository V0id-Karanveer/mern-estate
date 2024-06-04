import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About GharKhojo</h1>
      <p className='mb-8 text-slate-700'>
        I am <span className='font-semibold'>Karanveer Singh Kalsi</span> , a student at MIT Manipal, I developed GharKhojo, a real estate platform that combines cutting-edge technologies to provide a seamless experience for buyers, sellers, and property managers alike.
        <br/><br/>
        At the core of GharKhojo lies the robust MERN (MongoDB, Express, React, Node.js) stack, ensuring a powerful and efficient foundation. To ensure secure user authentication and authorization, I implemented JSON Web Tokens (JWT), Firebase, and Google OAuth, allowing users to access their accounts with confidence.
        To manage the application's state effectively, I leveraged Redux Toolkit, which enabled smooth and efficient client and backend functionalities. GharKhojo's CRUD operations, built on MongoDB, empower users to create, read, update, and delete property listings with ease.
        Recognizing the importance of user experience, I integrated user-friendly features like image uploads and dynamic property listing management, simplifying the process of showcasing and managing properties. Furthermore, the advanced search functionality allows users to navigate and find their desired properties efficiently.
      
        GharKhojo is hosted on the reliable Render Platform, ensuring scalability and high performance, catering to users worldwide.
        By combining these technologies, GharKhojo offers a comprehensive solution for the real estate industry, streamlining the process of buying, selling, and managing properties. As the developer, I'm excited to continue enhancing GharKhojo with new features and updates, driven by a commitment to innovation and user satisfaction.
      </p>

      <div>
        <a href='https://v0id-karanveer.github.io/KaranveerSinghKalsi-Portfolio/' target='_blank' rel='noopener noreferrer' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Visit my Portfolio Site
        </a>
      </div>
    </div>
  );
}

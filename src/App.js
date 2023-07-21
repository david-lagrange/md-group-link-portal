import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-5 bg-gray-100">
      <h1 className="text-3xl font-bold mb-10 text-center">Select your preferred event manager</h1>
      <div className="flex flex-col max-w-2xl w-full">
        <a href="https://www.meetup.com/milwaukee-meditation-dyads/" target="_blank" rel="noopener noreferrer" className="group">
          <div className="md:flex bg-white border-2 border-gray-200 rounded-lg shadow-lg mb-5 p-5 cursor-pointer hover:opacity-75 transition-opacity duration-200">
            <div className="md:w-1/4 w-full">
              <img
                className="rounded-lg w-full h-full object-cover"
                src="https://i.imgur.com/p8Wu44u.png"
                alt="Meetup"
              />
            </div>
            <div className="md:w-3/4 md:pl-4 w-full">
              <h2 className="text-2xl font-bold mb-2 group-hover:underline">Milwaukee Meditations and Dyads - Meetup</h2>
              <p className="text-gray-700">Description for the Meetup event goes here.</p>
            </div>
          </div>
        </a>
        <a href="https://www.facebook.com/groups/662442865407823" target="_blank" rel="noopener noreferrer" className="group">
          <div className="md:flex bg-white border-2 border-gray-200 rounded-lg shadow-lg p-5 cursor-pointer hover:opacity-75 transition-opacity duration-200">
            <div className="md:w-1/4 w-full">
              <img
                className="rounded-lg w-full h-full object-cover"
                src="https://i.imgur.com/nhCIwFz.png"
                alt="Facebook"
              />
            </div>
            <div className="md:w-3/4 md:pl-4 w-full">
              <h2 className="text-2xl font-bold mb-2 group-hover:underline">Milwaukee Meditations and Dyads - Facebook</h2>
              <p className="text-gray-700">Description for the Facebook event goes here.</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default App;

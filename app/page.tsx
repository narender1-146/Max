import { useState } from 'react';

export default function Home() {

  const [likes, setLikes] = useState(0);

 
  const handleLike = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleLike}
      >
        Like ({likes})
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-semibold">{profile.name}</h2>
            {/* Additional profile information here */}
          </div>
        ))}
      </div>
    </div>
  );
} use client

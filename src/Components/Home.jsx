import React from 'react';

function Home() {
  const cards = [
    {
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Game 1',
      points: 100,
    },
    {
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Game 2',
      points: 200,
    },
    {
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Game 3',
      points: 300,
    },
    {
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      title: 'Game 4',
      points: 400,
    },
  ];

  return (
    <div className="p-8">
      <div className="grid grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 h-70 w-60 flex flex-col items-center"
          >
            <img src={card.image} alt={card.title} className="h-32 w-full object-cover rounded" />
            <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
            <p className="mt-2 text-gray-700">Points: {card.points}</p>
            <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Let's Play
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

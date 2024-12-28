
import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4 italic">About Aqua Smart!</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          Save the Drop is an interactive game designed to teach young people about groundwater conservation. We aim to spread awareness and engage users with fun scenarios that highlight the importance of preserving our water resources for a sustainable future.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">How the Game Works</h2>
        <p className="mt-2">
          In Save the Drop, players navigate through different scenarios such as droughts, surplus rainfall, contamination, and more. By making informed choices, players can contribute to groundwater conservation and earn points or rewards for adopting sustainable practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Features</h2>
        <ul className="list-disc ml-6 mt-2">
          <li>Interactive learning through various scenarios</li>
          <li>Incorporation of water-smart interventions</li>
          <li>Scoring system to incentivize good practices</li>
          <li>Leaderboard and player achievements</li>
          <li>Certification for water-smart decision-makers</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Join Us!</h2>
        <p className="mt-2">
          Become a water-smart hero today! Sign up, start playing, and help make a difference in groundwater conservation.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 flex-1 rounded hover:bg-blue-700">
          Save the Drop now!
        </button>
      </section>
    </div>
  );
}



export default AboutUs
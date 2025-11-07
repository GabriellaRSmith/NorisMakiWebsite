import React from 'react';

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is placeholder text for now.</p>
      <p>Additional sections will go here (shop, about, join, etc.).</p>
      <h1>First we'll have the video here</h1>

      <section className="about">
        <h2 className="aboutTitle">Message from Noris Maki</h2>
        <p className="aboutText">
          "This album has been near and dear to my heart. I really focused my craft and am proud of what I've created. 
          <em> Broken Heart Club</em>, has been my focus for the last year combining pop and ballads. I hope you enjoy it as much I have enjoyed making it."
        </p>
      </section>
    </main>
  );
}

export default Home;

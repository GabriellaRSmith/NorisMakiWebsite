import React from "react";
import SignUpSection from "../components/SignUpSection";
import Merchandise from "../components/Merchandise";
import TitleSequence from "../components/TitleSequence";
function Home() {
  return (
    <main className="home-page">

      {/*Title Sequence Block*/}
      <TitleSequence />

      {/*Merchandise Block*/}
      <Merchandise />

    <section className="about">
        <h2 className="aboutTitle">Message from Noris Maki</h2>
        <p className="aboutText">
          "This album has been near and dear to my heart. I really focused my craft and am proud of what I've created. 
          <em> Broken Heart Club</em>, has been my focus for the last year combining pop and ballads. I hope you enjoy it as much I have enjoyed making it."
        </p>
      </section>

      {/* Sign-Up block */}
      <SignUpSection />
    </main>
  );
}

export default Home;

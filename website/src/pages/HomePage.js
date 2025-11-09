import React from "react";
import SignUpSection from "../components/SignUpSection";
import Merchandise from "../components/Merchandise";
import TitleSequence from "../components/TitleSequence";
function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is placeholder text for now.</p>
      <p>Additional sections will go here (shop, about, join, etc.).</p>

      {/*Title Sequence Block*/}
      <TitleSequence />

      {/*Merchandise Block*/}
      <Merchandise />

      {/* Sign-Up block */}
      <SignUpSection />
    </main>
  );
}

export default Home;

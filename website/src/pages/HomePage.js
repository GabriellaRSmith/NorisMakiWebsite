import React from "react";
import SignUpSection from "../components/SignUpSection";

function Home() {
  return (
    <main className="home-page">
      <h1>Welcome to the Home Page</h1>
      <p>This is placeholder text for now.</p>
      <p>Additional sections will go here (shop, about, join, etc.).</p>

      {/* Sign-Up block */}
      <SignUpSection />
    </main>
  );
}

export default Home;

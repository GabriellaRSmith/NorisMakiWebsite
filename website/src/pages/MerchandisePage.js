import React, {useEffect, useState} from "react";
import SignUpSection from "../components/SignUpSection";
import AllMerch from "../components/AllMerch";

function MerchandisePage() {
    
  return (
    <main>
        <AllMerch />
        {/* Sign-Up block */}
        <SignUpSection />
    </main>
   
  );
}

export default MerchandisePage;
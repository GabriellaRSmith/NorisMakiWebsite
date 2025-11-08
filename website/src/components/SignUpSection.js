import React from "react";
import "./SignUpSection.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
  faYoutube,
  faApple,
  faSpotify,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function SignUpSection() {
  return (
    <section className="signup-section" role="region" aria-label="Sign up">
      <div className="signup-container">
        {/* LEFT: NM + two-column links */}
        <div className="stay-posted">
          <div className="info-grid">
            {/* NM monogram */}
            <div className="seal" aria-hidden="true">
              <div className="monogram">NM</div>
            </div>

            {/* Two slim link columns */}
            <div className="menu-columns">
              <ul>
                <li>Merch</li>
                <li>Music</li>
                <li>Collections</li>
                <li>Watch</li>
                <li>Homebody</li>
                <li>Listen</li>
                <li>Tour</li>
              </ul>
              <ul>
                <li>Help & Support</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Do not sell my personal info</li>
                <li>Cookie Choices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: form */}
        <div className="signup-form">
          <h2 className="form-title">Sign up for updates from Noris Maki</h2>

          <form onSubmit={(e) => e.preventDefault()}>
            <label className="checkbox">
              <input
                type="checkbox"
                defaultChecked
                aria-label="Join the list Noris Maki"
              />
              <span>Join the list: Noris Maki</span>
            </label>

            <div className="stack">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="email-input"
                aria-label="Email"
              />

              <select
                className="country-select"
                aria-label="Country or region"
                defaultValue="United States"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Other</option>
              </select>

              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="signup-footer">
        <div className="social-icons" aria-label="Social links">
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faApple} />
          <FontAwesomeIcon icon={faSpotify} />
          <FontAwesomeIcon icon={faTiktok} />
        </div>
        <p>© 2025 Noris Maki Official Store</p>
      </footer>
    </section>
  );
}

export default SignUpSection;

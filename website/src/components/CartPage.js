// src/pages/CartPage.js
import React from "react";
import "./CartPage.css";
import hoodieImg from "../assets/images/WM_BLK_V_COLOR_ALBUM_300_300.png";
function CartPage() {
  return (
    <main className="checkout-page">
      <div className="checkout-wrapper">
        <section className="checkout-main">
          <div className="express-checkout">
            <h2>Express checkout</h2>
            <div className="express-buttons">
              <button className="express-btn shop">Shop</button>
              <button className="express-btn paypal">PayPal</button>
              <button className="express-btn amazon">Amazon&nbsp;Pay</button>
              <button className="express-btn google">Google&nbsp;Pay</button>
            </div>
            <div className="divider">
              <span>OR</span>
            </div>
          </div>

          {/* Contact */}
          <div className="checkout-section">
            <h3>Contact</h3>
            <input type="email" className="field" placeholder="Email" />
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Sign up to receive updates from Noris Maki</span>
            </label>
          </div>

          {/* Delivery */}
          <div className="checkout-section">
            <h3>Delivery</h3>

            <select className="field">
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Other</option>
            </select>

            <div className="field-row">
              <input className="field" placeholder="First name" />
              <input className="field" placeholder="Last name" />
            </div>

            <input className="field" placeholder="Address" />
            <input
              className="field"
              placeholder="Apartment, suite, etc. (optional)"
            />

            <div className="field-row field-row--city">
              <input className="field" placeholder="City" />
              <input className="field" placeholder="State" />
              <input className="field" placeholder="ZIP code" />
            </div>

            <input className="field" placeholder="Phone" />
          </div>

          {/* Payment */}
          <div className="checkout-section">
            <h3>Payment</h3>
            <p className="small-note">
              All transactions are secure and encrypted.
            </p>

            <div className="payment-method-tabs">
              <button className="payment-tab active">Credit card</button>
              <button className="payment-tab">PayPal</button>
              <button className="payment-tab">Shop&nbsp;Pay</button>
            </div>

            <input className="field" placeholder="Card number" />

            <div className="field-row">
              <input
                className="field"
                placeholder="Expiration date (MM / YY)"
              />
              <input className="field" placeholder="Security code" />
            </div>

            <input className="field" placeholder="Name on card" />

            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Use shipping address as billing address</span>
            </label>
          </div>

          {/* Remember me / pay button */}
          <div className="checkout-section">
            <h3>Remember me</h3>
            <label className="checkbox-row">
              <input type="checkbox" defaultChecked />
              <span>Save my information for a faster checkout next time</span>
            </label>

            <button className="pay-now-btn">Pay now</button>
          </div>
        </section>

        {/* RIGHT COLUMN – ORDER SUMMARY */}
        <aside className="checkout-summary">
          <div className="summary-item">
            <div className="summary-thumb">
              <img src={hoodieImg} alt="Noris Maki merch" />
              <span className="summary-qty">1</span>
            </div>

            <div className="summary-info">
              <p className="summary-name">Soft Hoodie</p>
              <p className="summary-meta">L • Black</p>
            </div>

            <p className="summary-price">$100.00</p>
          </div>

          <div className="summary-discount">
            <input className="field" placeholder="Discount code or gift card" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>$100.00</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span className="muted">Enter shipping address</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <div>
              <span className="currency">USD</span>
              <span className="total-amount">$100.00</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CartPage;

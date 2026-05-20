"use client";

import { useState } from "react";

function DemoForm({ type }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="fields"
      >
        {type === "sell" && (
          <>
            <input className="field" placeholder="Your name" required />
            <input className="field" placeholder="Email or phone" required />
            <input className="field" placeholder="Item type" required />
            <input className="field" placeholder="Asking price" required />
            <input className="field" placeholder="Neighborhood" required />
            <input className="field" placeholder="Approx. dimensions" />
            <textarea className="textarea" placeholder="Condition, pickup timing, and any details buyers should know." required />
          </>
        )}

        {type === "request" && (
          <>
            <input className="field" placeholder="What are you looking for?" required />
            <input className="field" placeholder="Budget" required />
            <input className="field" placeholder="Area of Miami" required />
            <input className="field" placeholder="Needed by" required />
            <textarea className="textarea" placeholder="Style, size, or delivery notes." />
          </>
        )}

        {type === "delivery" && (
          <>
            <input className="field full" placeholder="Paste the Marketplace / OfferUp listing link" required />
            <input className="field" placeholder="Pickup area" required />
            <input className="field" placeholder="Delivery area" required />
            <input className="field" placeholder="Item type" required />
            <input className="field" placeholder="Preferred timing" required />
            <textarea className="textarea" placeholder="Stairs, elevator, seller timing, verification request, etc." />
          </>
        )}

        <button className="button dark full" type="submit">
          {type === "sell" && "Submit furniture listing"}
          {type === "request" && "Submit buyer request"}
          {type === "delivery" && "Request delivery quote"}
        </button>
      </form>

      {submitted && (
        <div className="formNote">
          Prototype submitted. The next version can send this directly to your email or database.
        </div>
      )}
    </>
  );
}

export default function Page() {
  return (
    <>
      <header className="nav">
        <div className="container navInner">
          <a className="logo" href="#top">
            <div className="logoMark">R</div>
            <div>
              <div className="logoTitle">Relay Miami</div>
              <div className="logoSub">Secondhand furniture, made easier.</div>
            </div>
          </a>

          <nav className="navLinks">
            <a href="#browse">Browse</a>
            <a href="#why">Why Relay</a>
            <a href="#sell">Sell</a>
            <a href="#delivery">Delivery</a>
          </nav>

          <div className="navButtons">
            <a className="button light" href="#sell">List an item</a>
            <a className="button dark" href="#browse">Shop now</a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container heroGrid">
            <div>
              <div className="eyebrow">Trusted resale + delivery</div>
              <h1>Buy secondhand furniture without the usual hassle.</h1>
              <p>
                Relay Miami makes secondhand furniture shopping simpler, safer, and more convenient.
                Discover trusted local finds, avoid the uncertainty of random resale sites, and get
                delivery whether you shop through Relay or find the piece somewhere else.
              </p>

              <div className="heroButtons">
                <a className="button dark" href="#browse">Browse furniture →</a>
                <a className="button light" href="#delivery">Found it elsewhere?</a>
              </div>

              <div className="statRow">
                <div className="stat">
                  <strong>Search</strong>
                  <span>Cleaner than group chats</span>
                </div>
                <div className="stat">
                  <strong>Trust</strong>
                  <span>Curated local listings</span>
                </div>
                <div className="stat">
                  <strong>Delivery</strong>
                  <span>The revenue engine</span>
                </div>
              </div>
            </div>

            <div className="heroCard">
              <div className="listingPreview">
                <div className="previewImage">
                  <div className="previewPanel">
                    <div className="previewPanelTop">
                      <div>
                        <small>Featured local listing</small>
                        <h3>Apartment Sofa — Brickell</h3>
                      </div>
                      <div className="price">$220</div>
                    </div>
                  </div>
                </div>
                <div className="previewActions">
                  <div>Ask</div>
                  <div>Offer</div>
                  <div>Deliver</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="container bandGrid">
            <div className="bandItem">✓ Trusted local listings</div>
            <div className="bandItem">✓ Ask questions and negotiate</div>
            <div className="bandItem">✓ Delivery for Relay items</div>
            <div className="bandItem">✓ Delivery for outside finds</div>
          </div>
        </section>

        <section className="section" id="browse">
          <div className="container">
            <div className="sectionTop">
              <div>
                <div className="kicker">Marketplace preview</div>
                <h2>A cleaner way to browse secondhand furniture.</h2>
                <p className="sectionCopy">
                  The pilot marketplace can begin with a curated set of local listings while Relay
                  manually manages buyer questions, offers, and delivery requests.
                </p>
              </div>
            </div>

            <div className="cards">
              <article className="card">
                <div className="itemImage img1" />
                <div className="cardBody">
                  <div className="itemMeta"><small>Desk</small><strong>$85</strong></div>
                  <h3>Walnut Writing Desk</h3>
                  <div className="muted">Coral Gables · Excellent condition · Delivery available</div>
                  <div className="chips"><span className="chip">Apartment-ready</span><span className="chip">Popular</span></div>
                  <div className="cardButtons"><button className="miniButton">Ask</button><button className="miniButton">Offer</button><button className="miniButton fill">Deliver</button></div>
                </div>
              </article>

              <article className="card">
                <div className="itemImage img2" />
                <div className="cardBody">
                  <div className="itemMeta"><small>Couch</small><strong>$220</strong></div>
                  <h3>Cream Two-Seat Sofa</h3>
                  <div className="muted">Brickell · Very good condition · Delivery available</div>
                  <div className="chips"><span className="chip">Best value</span><span className="chip">Move-in favorite</span></div>
                  <div className="cardButtons"><button className="miniButton">Ask</button><button className="miniButton">Offer</button><button className="miniButton fill">Deliver</button></div>
                </div>
              </article>

              <article className="card">
                <div className="itemImage img3" />
                <div className="cardBody">
                  <div className="itemMeta"><small>Table</small><strong>$145</strong></div>
                  <h3>Dining Table + 2 Chairs</h3>
                  <div className="muted">Coconut Grove · Good condition · Delivery available</div>
                  <div className="chips"><span className="chip">Bundle</span><span className="chip">Small-space</span></div>
                  <div className="cardButtons"><button className="miniButton">Ask</button><button className="miniButton">Offer</button><button className="miniButton fill">Deliver</button></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="container" id="why">
          <div className="darkSection">
            <div>
              <div className="kicker" style={{color:"#b4f0d8"}}>Why Relay</div>
              <h2>Own the transaction, not just the truck ride.</h2>
              <p className="sectionCopy">
                Relay is intentionally both a marketplace and a delivery service. The marketplace
                creates a trusted, differentiated supply of furniture. Delivery generates revenue
                immediately and can also serve people who find items on Facebook Marketplace or OfferUp.
              </p>
            </div>
            <div className="points">
              <div className="point">
                <span>Marketplace</span>
                <h3>Better discovery</h3>
                <p>Furniture is searchable and organized instead of buried in messy chats.</p>
              </div>
              <div className="point">
                <span>Trust</span>
                <h3>Less uncertainty</h3>
                <p>Relay can review listings and remain involved in buyer-seller coordination.</p>
              </div>
              <div className="point">
                <span>Delivery</span>
                <h3>Immediate revenue</h3>
                <p>Pickup and delivery solve the biggest friction and create a monetizable service.</p>
              </div>
              <div className="point">
                <span>Growth</span>
                <h3>Outside listings too</h3>
                <p>Relay can earn before inventory is deep by delivering third-party resale finds.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="sell">
          <div className="container">
            <div className="sectionTop">
              <div>
                <div className="kicker">Pilot forms</div>
                <h2>Collect supply, measure demand, and quote delivery.</h2>
                <p className="sectionCopy">
                  These forms are already built into the website prototype. The next step is connecting
                  them to email notifications or a database so submissions become operational.
                </p>
              </div>
            </div>

            <div className="formGrid">
              <div className="formCard">
                <div className="kicker">For sellers</div>
                <h3>List furniture</h3>
                <p>Collect local resale inventory from trusted communities.</p>
                <DemoForm type="sell" />
              </div>

              <div className="formCard">
                <div className="kicker">For buyers</div>
                <h3>Request an item</h3>
                <p>Learn what people want before you have perfect inventory.</p>
                <DemoForm type="request" />
              </div>

              <div className="formCard wide" id="delivery">
                <div className="kicker">Delivery revenue</div>
                <h3>Found it somewhere else? Relay can deliver it.</h3>
                <p>Capture demand from Facebook Marketplace, OfferUp, or other local resale channels.</p>
                <DemoForm type="delivery" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="sectionTop">
              <div>
                <div className="kicker">Key decisions</div>
                <h2>The strategy is baked into the website.</h2>
              </div>
            </div>
            <div className="faq">
              <div className="faqItem">
                <h3>Can buyers negotiate?</h3>
                <p>Yes. The early version can route questions and offers through Relay instead of immediately exposing sellers’ direct contact information.</p>
              </div>
              <div className="faqItem">
                <h3>Is Relay more marketplace or delivery service?</h3>
                <p>Delivery is the revenue engine. The marketplace is the differentiator that can create trust, supply, and long-term defensibility.</p>
              </div>
              <div className="faqItem">
                <h3>Why start with a website instead of an app?</h3>
                <p>A website lets you test real transactions quickly. You can build the app later once you know which workflows customers actually use.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container">
          <div className="cta">
            <div>
              <div className="kicker" style={{color:"#b4f0d8"}}>Relay pilot</div>
              <h2>Get real listings. Get real delivery requests. Close the first transaction.</h2>
              <p>
                This deployable website is ready to go live. Once the forms are connected,
                it becomes a real pilot site for Relay Miami.
              </p>
            </div>
            <div className="heroButtons">
              <a className="button light" href="#sell">Start with sellers</a>
              <a className="button light" href="#delivery">Test delivery demand</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footerInner">
          <p>Relay Miami — secondhand furniture, made easier.</p>
          <p>Prototype website ready for deployment.</p>
        </div>
      </footer>
    </>
  );
}

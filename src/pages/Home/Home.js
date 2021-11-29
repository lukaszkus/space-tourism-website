import * as React from "react";

import "./Home.scss";

export default function Home() {
  return (
    <>
      <main className="home grid-container">
        <div className="col-left">
          <h1 className="title">
            So, you want to travel to
            <span className="title--decoration">Space</span>
          </h1>
          <p className="home__txt">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div class="col-right">
          <a href="/" className="cta">
            Explore
          </a>
        </div>
      </main>
    </>
  );
}

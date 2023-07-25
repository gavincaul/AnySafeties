import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="container">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        crossOrigin="anonymous"
      />
      <title>Any Safeties?</title>
      <nav className="d-flex justify-content-center">
        <div className="row">
          <div className="col">
            <Link to="/" className="nav-item nav-link" id="home">
              Home
            </Link>
          </div>
          <div className="col">
            <Link to="/about" className="nav-item nav-link" id="about">
              About
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "50vh", textAlign: "center", fontFamily: "Tahoma", fontSize: "50px" }}
      >
        Have there been any safeties this week?
      </div>
      <div style={{position: 'fixed', left: '200px', top: '130px'}}>
          <img src="https://c.tenor.com/Ihbu3iBTjGcAAAAM/better-call-saul-loop.gif" />
        </div>
        <div style={{position: 'fixed', right: '200px', top: '130px'}}>
          <img src="https://c.tenor.com/Ihbu3iBTjGcAAAAM/better-call-saul-loop.gif" />
        </div>
        <div style={{position: 'fixed', left: '200px', top: '320px'}}>
          <img src="https://c.tenor.com/Ikt7sU8aaJMAAAAM/thrust-dance.gif" />
        </div>
        <div style={{position: 'fixed', right: '200px', top: '320px'}}>
          <img src="https://c.tenor.com/Ikt7sU8aaJMAAAAM/thrust-dance.gif" />
        </div>
      <div style={{ height: "100vh", textAlign: "center", fontFamily: "Tahoma", fontSize: "30px" }}>no</div>
    </div>
  );
}

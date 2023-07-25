import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossOrigin="anonymous" />
        <title>Any Safeties?</title>
        <nav className="d-flex justify-content-center">
            <Link to="/" className="nav-item nav-link" id="home">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link" id="about">
              About
            </Link>
        </nav>
        <div style={{position: 'static', textAlign: 'center', fontFamily: 'Tahoma', fontSize: '50px'}}>
          About the page and me.
        </div>
        <br></br>
        <div className="mx-auto" style={{width: '1000px', textAlign: 'center', fontFamily: 'Tahoma', fontSize: '19px'}}>
          <p>The idea for this page began with my five friends and our fantasy football league. We wanted to create something different about this league, separate it from the rest. A few ideas flew in the air, until one person suggested that safeties be worth 20 points!
            Typically, safeties are worth a mere two points, but making them 10x the value made us look for every possibility of a safety. Thus, to keep
            us from constantly searching, I decided to build this website to do the searching for us.
          </p>
          <br />
          <p>The website works through the use of python based webscraping, constantly checking each NFL game per week to see if there
            is a safety in one of the games. If there is, the website will say what game(s). It resets at the beginning of each NFL week.
          </p>
          <br />
          <p>
            My name is Gavin Caulfield, the creator of AnySafeties.com. I am a student at University of Delaware, trying my best to learn
            computer science. I am a self taught 'webscraper' and website builder. My main goal for this website was for all my friends to keep
            track of the safeties, so if the minimalist/barebones (and I mean BAREBONES) approach throws you, know that I simply just don't feel the need
            to put such detail into a website that has one purpose; to tell me if there was a safety!
          </p>
          <br />
          <p>I am a very broke college student, and this website costs money, so please feel free to <a href="https://www.paypal.com/donate/?business=JD7RGYFDXQTQW&no_recurring=0&item_name=Please+donate+to+keep+the+website+going
    .+I+am+a+very+broke+college+student.&currency_code=USD"> donate</a>.
          </p>
        </div>
      </div>
    );
}
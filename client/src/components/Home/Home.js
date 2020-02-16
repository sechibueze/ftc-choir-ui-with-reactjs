import React, { Component } from "react";
import "./HomeStyle.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="page">
          <nav className="gtco-nav" role="navigation">
            <div className="gtco-container">
              <div className="row">
                <div className="col-xs-2">
                  <div id="gtco-logo"><a href="/">FT CHOIR</a></div>
                </div>
                <div className="col-xs-8 text-center menu-1">
                  <ul>
                    <li><a href="/contact">Contact</a></li>
                  </ul>
                </div>
                <div className="col-xs-2 text-right hidden-xs menu-2">
                  <ul>
                    <li className="btn-cta"><a href="/login"><span>Login</span></a></li>
                    <li className="btn-cta"><a href="/Signup"><span>Signup</span></a></li>
                  </ul>
                </div>
              </div>

            </div>
          </nav>

          <header id="gtco-header" className="gtco-cover home-main" role="banner">
            <div className="gtco-container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                  <div className="display-t">
                    <div className="display-tc animate-box" data-animate-effect="fadeIn">
                      <h1>FT Choir Directory</h1>
                      <p><a href="/signup" className="btn btn-default">Get Started</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="container-fluid home-content1">
          <div className="row">
            <div className="col-md-6 content1-left">
              <h3>
                Why to Choir Directory <span className="blinker">?</span>
              </h3>
              <p>
                In order to keep track and know each Individual choir in FT.
              </p>
            </div>
            <div className="col-md-6 content1-right">
              <p>
                Id aliqua consequat nulla exercitation laboris occaecat id ipsum
                anim deserunt ad ex id proident. Incididunt cillum duis
                exercitation cillum commodo id incididunt in deserunt. Anim
                mollit fugiat nostrud nisi occaecat nisi ea adipisicing. Laborum
                sunt ipsum non elit cupidatat esse. Elit ipsum labore sit labore
                dolore tempor esse. Ad incididunt aute sunt consequat amet.
                Consectetur esse aute qui duis reprehenderit elit labore mollit
                deserunt consectetur enim laboris. Incididunt ad pariatur magna
                id. Sint ut culpa qui Lorem sunt sint qui fugiat elit qui sunt
                commodo. Nisi ex exercitation eu do velit consectetur Lorem sunt
                culpa ullamco irure ut magna ipsum. Ex est mollit excepteur
                velit est esse veniam nostrud voluptate reprehenderit officia
                fugiat. Ex irure magna ipsum sunt magna magna cillum irure aute
                ut laborum. Esse Lorem qui deserunt consectetur deserunt quis
                pariatur reprehenderit commodo incididunt. Laborum eiusmod
                excepteur irure cupidatat reprehenderit anim reprehenderit. Ex
                ipsum ad sint nostrud cillum commodo consequat sit cillum
                voluptate.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid home-content2">
          <p>
            <span>News</span> and <span>announcements</span> for all things{" "}
            <span>Bootstrap</span>, including new <span>releases</span> and{" "}
            <span>Bootstrap Themes</span>.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;

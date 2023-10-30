import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="header-home">
          <Header></Header>
        </div>
        <div className="category-and-banner">
          <div className="category-and-banner__left">
            <ul>
              <li className="choose">Automobiles</li>
              <li>Clothes and wear</li>
              <li>Home interiors</li>
              <li>Computer and tech</li>
              <li>Tools, equipments</li>
              <li>Sports and outdoor</li>
              <li>Animal and pets</li>
              <li>Machinery tools</li>
              <li>More category</li>
            </ul>
          </div>
          <div className="category-and-banner__center"></div>
          <div className="category-and-banner__right">
            <div className="category-and-banner__right-user">and</div>
            <div className="category-and-banner__right-offer1"></div>
            <div className="category-and-banner__right-offer2"></div>
          </div>
        </div>
        <div className="deals-and-offers">
          <div className="deals-and-offers__clock">
            <h4>Deals and Offers</h4>
            <p>Hygiene equipments</p>
            <div className="clock">
              <div className="clock-element">
                <span>04</span>
                <span>Days</span>
              </div>
              <div className="clock-element">
                <span>13</span>
                <span>Hours</span>
              </div>
              <div className="clock-element">
                <span>34</span>
                <span>Min</span>
              </div>
              <div className="clock-element">
                <span>56</span>
                <span>Sec</span>
              </div>
            </div>
          </div>
          <div className="deals-and-offers__item-list">
            <div className="deals-and-offers__item-list-item">
              <img src="/images/smart-watches.png"></img>
              <p>Smart watches</p>
              <span>-25%</span>
            </div>
            <div className="deals-and-offers__item-list-item">
              <img src="/images/laptops.png"></img>
              <p>Laptops</p>
              <span>-25%</span>
            </div>
            <div className="deals-and-offers__item-list-item">
              <img src="/images/cameras.png"></img>
              <p>GoPro cameras</p>
              <span>-25%</span>
            </div>
            <div className="deals-and-offers__item-list-item">
              <img src="/images/headphones.png"></img>
              <p>Headphones</p>
              <span>-25%</span>
            </div>
            <div className="deals-and-offers__item-list-item">
              <img src="/images/phone.png"></img>
              <p>Smart Phones</p>
              <span>-25%</span>
            </div>
          </div>
        </div>
        <div className="category-items">
          <div className="category-items-name">
            <h4>Home and outdoor</h4>
            <button>Source now</button>
          </div>
          <div className="category-items-list">
            <div className="category-items-list-1">
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
            </div>
            <div className="category-items-list-1">
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="category-items">
          <div className="category-items-name">
            <h4>Home and outdoor</h4>
            <button>Source now</button>
          </div>
          <div className="category-items-list">
            <div className="category-items-list-1">
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
            </div>
            <div className="category-items-list-1">
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
              <div className="category-items-list-item">
                <h5>Soft chairs</h5>
                <span>FROM</span>
                <span>USD 19</span>
                <img src="/images/chair.png"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="user-request">
          <div className="user-request__left">
            <h4>An easy way to send requests to all suppliers</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="user-request__right">
            <h5>Send quote to suppliers</h5>
            <input placeholder="What item you need?"></input>
            <input placeholder="Type more details"></input>

            <input placeholder="Quanity"></input>
            <input placeholder="PCs"></input>
            <button>Send inquiry</button>
          </div>
        </div>
        <div className="recommended-items">
          <h5>Recommended items</h5>
          <div className="recommended-list-items">
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
          </div>
          <div className="recommended-list-items">
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
            <div className="recommended-list-item">
              <img src="/images/cloth.png"></img>
              <div className="recommended-list-item-price">
                <span>$10.30</span>
                <p>T-shirts with multiple colors, for men</p>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-home">
          <Subscribe></Subscribe>
        </div>
        <div className="footer-home">
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;

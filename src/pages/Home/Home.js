import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Subscribe from "../../components/Subscribe/Subscribe";
import Footer from "../../components/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

const Home = ({ cart }) => {
  //load thong tin dang nhap tu local storage
  const datafromLocal = JSON.parse(localStorage.getItem("userInfo"));
  console.log("datafromlocal: ", datafromLocal);

  //load thong tin categroy

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  let isLogin = false;

  const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((category) => {
        setCategories(category);
      });
  };

  const handleCheckLogin = () => {
    if (datafromLocal != null) return (isLogin = true);
  };

  const handleSignOut = () =>{
    localStorage.clear()
    navigate('/login')
  }

  console.log("handleCheckLogin: ", handleCheckLogin());
  //load thong tin san pham
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        setProducts(product);
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleViewProduct = (productID) => {
    navigate(`/products/${productID}`);
  };

  const recommendProducts1 = products.filter((item) => item.rating.rate > 4.5);
  // console.log("recommendProduct", recommendProducts1);
  const recommendProducts2 = products.filter(
    (item) => item.rating.rate > 2.8 && item.rating.rate < 3.6
  );

  // console.log("Recommend 2: ", recommendProducts2)
  return (
    <>
      <div className="home">
        <div className="header-home">
          <Header cart={cart}></Header>
        </div>
        <div className="category-and-banner">
          <div className="category-and-banner__left">
            {categories.length > 0 && (
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>{category}</li>
                ))}
              </ul>
            )}
            {categories.length > 0 && (
              <ul>
                {categories.map((category) => (
                  <li key={category.id}>{category}</li>
                ))}
              </ul>
            )}
            {/* <ul>
              <li className="choose">Automobiles</li>
              <li>Clothes and wear</li>
              <li>Home interiors</li>
              <li>Computer and tech</li>
              <li>Tools, equipments</li>
              <li>Sports and outdoor</li>
              <li>Animal and pets</li>
              <li>Machinery tools</li>
              <li>More category</li>
            </ul> */}
          </div>
          <div className="category-and-banner__center"></div>
          <div className="category-and-banner__right">
            <div className="category-and-banner__right-user">
              {isLogin ? <p>{datafromLocal.email}</p> : <p></p>}

              {isLogin ? (
                <button onClick={()=>handleSignOut()}>Sign out</button>
              ) : (
                <div className="signIn__signUp">
                  <button onClick={() => navigate("/login")}>Sign in</button>
                  <button onClick={() => navigate("/signup")}>Sign up</button>
                </div>
              )}
            </div>
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
        <div className="recommended-items">
          <h5>Recommended items</h5>
          {recommendProducts2.length > 0 && (
            <div className="recommended-list-items">
              {recommendProducts2.map((recommendProduct2) => (
                <div
                  className="recommended-list-item"
                  key={recommendProduct2.id}
                  onClick={() => handleViewProduct(recommendProduct2.id)}
                >
                  <img src={recommendProduct2.image}></img>
                  <div className="recommended-list-item-price">
                    <span>${recommendProduct2.price}</span>
                    <p>{recommendProduct2.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {recommendProducts1.length > 0 && (
            <div className="recommended-list-items">
              {recommendProducts1.map((recommendProduct1) => (
                <div
                  className="recommended-list-item"
                  key={recommendProduct1.id}
                  onClick={() => handleViewProduct(recommendProduct1.id)}
                >
                  <img src={recommendProduct1.image}></img>
                  <div className="recommended-list-item-price">
                    <span>${recommendProduct1.price}</span>
                    <p>{recommendProduct1.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* <div className="category-items">
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
        </div> */}

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
        {/* <div className="recommended-items">
          <h5>Recommended items</h5>
          {recommendProducts2.length > 0 && (
            <div className="recommended-list-items">
              {recommendProducts2.map((recommendProduct2) => (
                <div
                  className="recommended-list-item"
                  key={recommendProduct2.id}
                  onClick={() => handleViewProduct(recommendProduct2.id)}
                >
                  <img src={recommendProduct2.image}></img>
                  <div className="recommended-list-item-price">
                    <span>${recommendProduct2.price}</span>
                    <p>{recommendProduct2.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
          {recommendProducts1.length > 0 && (
            <div className="recommended-list-items">
              {recommendProducts1.map((recommendProduct1) => (
                <div
                  className="recommended-list-item"
                  key={recommendProduct1.id}
                  onClick={() => handleViewProduct(recommendProduct1.id)}
                >
                  <img src={recommendProduct1.image}></img>
                  <div className="recommended-list-item-price">
                    <span>${recommendProduct1.price}</span>
                    <p>{recommendProduct1.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div> */}
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

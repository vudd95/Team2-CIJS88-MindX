import React from 'react';
const Content2 = () => {
  return (
    <div className="content2">
      <div className="content2_left">
        <p>
          <h3>Description:</h3>
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Lorem
          ipsum dolor sit amet, consectetur adipisicing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam,
          <br></br>
          Quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="content2_left_2">
          {/* <div className="content2_left_2_left"></div>
          <div className="content2_left_2_right"></div> */}
          <table className="table">
            {/* <tr> */}
            {/* <th></th>
              <th></th> */}
            {/* </tr> */}
            <tr>
              <td className="td_trai">Model</td>
              <td className="td_phai">#8786867</td>
            </tr>
            <tr>
              <td className="td_trai">Style</td>
              <td className="td_phai">Classic Style</td>
            </tr>
            <tr>
              <td className="td_trai">Certificate</td>
              <td className="td_phai">ISO-898921212</td>
            </tr>
            <tr>
              <td className="td_trai">Size</td>
              <td className="td_phai">
                34mm x 450mm x 19mm
              </td>
            </tr>
            <tr>
              <td className="td_trai">Memory</td>
              <td className="td_phai">36GB RAM</td>
            </tr>
          </table>
        </div>
        <div className="content2_left_3">
          <br></br>
          <p>- Some great feature name here</p>
          <br></br>
          <p>- Lorem ipsum dolor sit amet, consectetur </p>
          <br></br>
          <p>- Duis aute irure dolor in reprehenderit</p>
          <br></br>
          <p>- Some great feature name here</p>
        </div>
      </div>
      <div className="content2_right">
        <h3>You may like</h3>
        <br></br>
        <div className="content2_right_1">
          <img src="Group 558.png"></img>
          <p>
            Men Blazers Sets Elegant Formal <br></br>$7.00 -
            $99.50
          </p>
        </div>
        <div className="content2_right_2">
          <img src="Group 558 (2).png"></img>
          <p>
            Men Shirt Sleeve Polo Contrast <br></br>$7.00 -
            $99.50
          </p>
        </div>
        <div className="content2_right_3">
          <img src="Group 558 (3).png"></img>
          <p>
            Apple Watch Series Space Gray <br></br>$7.00 -
            $99.50
          </p>
        </div>
        <div className="content2_right_4">
          <img src="Group 558 (4).png"></img>
          <p>
            Basketball Crew Socks Long Stuff <br></br>$7.00
            - $99.50
          </p>
        </div>
        <div className="content2_right_5">
          <img src="Group 558 (5).png"></img>
          <p>
            New Summer Men's castrol T-Shirts <br></br>$7.00
            - $99.50
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content2;

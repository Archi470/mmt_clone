'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import SmallBottom from '../components/SmallButtom';
import Icondiv from '../components/Icondiv';
import Bookingcss from "../components/Bookingcss";
import Fromto from "../components/Fromto";
import Bottom from "../components/Bottom";
import FareTypes from "../components/FareTypes";
import Smallbutton from '../components/Smallbutton';

export default function Home() {
  return (      
    <div>
      <Navbar>
        <div className="topdiv">
          <img
            className="laltain"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/DiwaliLantern.webp"
            alt=""
          />  {/* background image */}

            <img
              className="mmtlogo"
              src={
                "https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
              }
              alt="Logo"
            />  {/* mmt logo on top left corner */}
          <div className="login">
            Login
          </div>

          <Smallbutton>
            <div className="smallbuttonpic">
            </div>
            <div>
              <h4>My Trips</h4>
              <p>Manage your Bookings</p>
            </div>
          </Smallbutton>

          <Smallbutton>
            <div className="smallbuttonpic">
              <img
                src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
                alt=""
              />
            </div>
            <div>
              <h4>Introducing myBiz</h4>
              <p>MakeMyTrip for Buisness</p>
            </div>
          </Smallbutton>
        </div>   {/* upper box */}

      
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv> {/* mid upper tab */}
          <div className="checkboxdiv">
            <div>
              <input type="checkbox" />
              <label htmlFor="">ONEWAY</label>
              <input type="checkbox" />
              <label htmlFor="">ROUNDWAY</label>
              <input type="checkbox" />
              <label htmlFor="">MULTI CITY</label>
            </div>
            <div>INTERNATIONAL FLIGHTS | DOMESTIC FLIGHTS</div>
          </div>  {/* upper div */}
          
          <Fromto/>   {/* mid div */}
          <FareTypes />  {/* lower div */}
        </Bookingcss>

        <div className="button">
          <button>
            Search
          </button>
        </div>    {/* Search button*/}

      </Navbar>

      
      <div style={{ background: "#ebe7e7", paddingTop: "50px" }}>
        <SmallBottom /> {/* middle buttons */}
        <Bottom /> {/* 4 last div */}
      </div>
    </div>
  );
}

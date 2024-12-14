'use client'; 
import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: #cacaca 0px 1px 3px 0px;
  color: #4a4a4a;
  font-size: 14px;
  width: 74%;
  margin: auto;
  align-items: center;
  color: #4a4a4a;
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  height: 60px;
  position: relative;
  top: -80px;

  div:nth-child(1) {
    border: none ;
  }
  div:nth-child(3) {
    img {
      width: 30px;
    }
  }
  div {
    align-items: center;
    width: 100%;
    color: #4a4a4a;
    gap: 10px;
    display: flex;
    height: 100%;
    font-size: 14px;
    border-left: 1px solid #cacaca;
    text-align: center;
    img {
      margin-left: 10px;
    }
    p {
      color: #4a4a4a;
      display: inline;
      font-size: 14px;
      line-height: 14px;
      text-align: left;
      margin-right: 10px;
    }
  }
`;

export default function SmallBottom() {
  return (
    <Style>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ti2.png"
          alt="Trip ideas"
        />
        <p>Trip ideas</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_tm1.png"
          alt="Trip Money"
        />
        <p>Trip Money</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png"
          alt="Explore International Flights"
        />
        <p>Explore International Flights</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_ng1.png"
          alt="Nearby Getaways"
        />
        <p>Nearby Getaways</p>
      </div>
      <div>
        <img
          src="https://promos.makemytrip.com/Growth/Images/B2C/x/dt_tert_gc1.png"
          alt="Gift Cards"
        />
        <p>Gift Cards</p>
      </div>
    </Style>
  );
}

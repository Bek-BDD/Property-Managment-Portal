import "./widget.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HouseIcon from '@mui/icons-material/House';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React from "react";
import {count} from '../../index';


const Widgets = (props) => {

  let data1, data2, data3, data4;


      data1 = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      data2 = {
        title: "OWNERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      data3 = {
        title: "PROPERTIES",
        isMoney: false,
        link: "See properties details",
        icon: (
          <HouseIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      data4 = {

        title: "WEBSITE VISITORS",
        isMoney: false,
        link: "See details",
        icon: (
          <VisibilityIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };

  return (
    <div className="allWidgets">
        <div className="widget">
            <div className="left">
                <span className="title">{data1.title}</span>
                <span className="counter">
          {data1.isMoney && "$"} {props.data.customerData}
            </span>
                <span className="link">{data1.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />

                </div>
                {data1.icon}
            </div>
        </div>

        <div className="widget">
            <div className="left">
                <span className="title">{data2.title}</span>
                <span className="counter">
          {data2.isMoney && "$"} {props.data.ownerData}
            </span>
                <span className="link">{data2.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />

                </div>
                {data2.icon}
            </div>
        </div>

        <div className="widget">
            <div className="left">
                <span className="title">{data3.title}</span>
                <span className="counter">
          {data3.isMoney && "$"} {props.data.PropertyData}
            </span>
                <span className="link">{data3.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />

                </div>
                {data3.icon}
            </div>
        </div>

        <div className="widget">
            <div className="left">
                <span className="title">{data4.title}</span>
                <span className="counter">
          {data4.isMoney && "$"} {count}
            </span>
                {/*<span className="link">{data4.link}</span>*/}
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />

                </div>
                {data4.icon}
            </div>
        </div>
    </div>
  );
}

export default Widgets;

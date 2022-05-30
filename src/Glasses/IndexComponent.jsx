import React, { Component } from "react";
import Model from "./Model";
// import bg from "./backgruond.jpg";
export default class IndexComponent extends Component {
  state = {
    glasses: [
      {
        id: 1,
        price: 30,
        name: "GUCCI G8850U",
        url: "./glassesImage/v1.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./glassesImage/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 3,
        price: 30,
        name: "DIOR D6700HQ",
        url: "./glassesImage/v3.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 4,
        price: 70,
        name: "DIOR D6005U",
        url: "./glassesImage/v4.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 5,
        price: 40,
        name: "PRADA P8750",
        url: "./glassesImage/v5.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 6,
        price: 60,
        name: "PRADA P9700",
        url: "./glassesImage/v6.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 7,
        price: 80,
        name: "FENDI F8750",
        url: "./glassesImage/v7.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 8,
        price: 100,
        name: "FENDI F8500",
        url: "./glassesImage/v8.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
      {
        id: 9,
        price: 60,
        name: "FENDI F4300",
        url: "./glassesImage/v9.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    ],
    changeGlass: "",
    changName: "",
    changeDesc:"",
    changeBg:"",
  };
  handleGlasses = (id,name,desc) => {
    this.setState({ changeGlass: `${id}` });
    this.setState({ changName: `${name}` });
    this.setState({ changeDesc: `${desc}` });
    this.setState({changeBg: "#deb77ca1"})
  };
  render() {
    return (
      <div
        className="container-fluild"
        style={{
          height: "1000px",
          width: "100%",
          backgroundSize: "cover",
          backgroundImage: `url('./background.jpg')`,
        }}
      >
        <div className="row ">
          <Model />
          <Model />
        </div>
        <div className="change">
          <img
            style={{
              width: "7%",
              position: "absolute",
              top: "107px",
              left: "320px",
            }}
            src={this.state.changeGlass}
            alt=""
          />
          <div
            style={{
              height: "119px",
              backgroundColor: `${this.state.changeBg}`,
              width: "201px",
              bottom: "117px",
              left: "270px",
              position: "relative",
            }}
            className=""
          >
            <div className="">
            <h5 style={{fontSize: "20px",textAlign: "center",color: "red"}}>{this.state.changName}
            </h5>
            <p style={{fontSize:"15px"}}>{this.state.changeDesc}</p>
            </div>
            
          </div>
        </div>
        <div className="container">
          <div className="row">
            {this.state.glasses.map((glass, index) => {
              return (
                <div key={index} className="col-md-2 mt-5">
                  <img
                    onClick={() => this.handleGlasses(glass.url,glass.name,glass.desc)}
                    src={glass.url}
                    width="100%"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

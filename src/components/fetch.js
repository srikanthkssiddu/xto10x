import React, { Component } from "react";
import  Properties  from "./properties";


export default class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getPropertyList();
  }

  getPropertyList = async () => {
    let res = await fetch("https://demo7394057.mockable.io/properties");
    let property = await res.json();
  // console.log(property)
    this.setState({ data: property});
    // console.log(this.state.data)
  };

  render() {
    let propertyData = this.state.data;
    const newArr = propertyData.map((property)=>(
      <Properties
        images={property.images[0]}
        name={property.name}
        city={property.city}
        gender={property.gender}
        price={property.rent}
        rating={property.rating}
      />
    ))
    
    return (
      
      <div>
      {newArr}
      </div>
    );
  }
};
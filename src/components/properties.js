import React, { Component } from "react";
import '../index.css'

export default class Properties extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <table> 
          
        <div className="property-card">
        <tr>
          <td>
        <figure className="card-banner img-holder" width= "800" height= "533">
                  <img src={this.props.images} width="800" height="533" loading="lazy"
                    alt="Amazing mitra" className="img-cover"></img>
                </figure>
          </td>
        </tr>
          

          <button className="card-action-btn" aria-label="add to favourite">
            <ion-icon name="heart" aria-hidden="true"></ion-icon>
          </button>
          
          <div className="card-content">
        <tr>
          <td>
            <h3 className="h3">
              <a href="#" className="card-title">
              {this.props.name}
              </a>
            </h3>
          </td>
        </tr>      
            <ul className="card-list">
        <tr>
          <td>
              <li className="card-item">
              
                <div className="item-icon">
                  <ion-icon name="cube-outline"></ion-icon>
                </div>

                <span className="item-text">{this.props.city}</span>
                
              </li>
          </td>
        </tr>
        <tr>
          <td>
              <li className="card-item">
                <div className="item-icon">
                  <ion-icon name="Unisex-outline"></ion-icon>
                </div>

                <span className="item-text">{this.props.gender}</span>
              </li>
          </td>
        </tr>
            </ul>

            <div className="card-meta">
        <tr>
            <td>

                
              <div>
                <span className="meta-title">Price</span>

                <span classNameName="meta-text">{this.props.price}</span>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <span className="meta-title">{this.props.Rating}</span>
              </div>
            </td>
          </tr>
            </div>
          </div>
        </div>
        
        </table>
      </div>
    );
  }
}

import React from 'react';
import './Business.css';
import ReactDOM from 'react-dom';

class Business extends React.Component {
    render()
    {
        return (
            <div className="Business">
  <div className="image-container">
    <a href={this.props.business.businessSrc}> <img src={this.props.business.imageSrc} alt=''/> </a>
  </div>
        <h2>{this.props.business.name} (Price: {this.props.business.price})</h2>
  <div className="Business-information">
    <div className="Business-address">
      <a href={this.props.business.locationSrc}>{this.props.business.address}, {this.props.business.city}, {this.props.business.state}, {this.props.business.zipCode}</a>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category.toUpperCase()}</h3>
      <h3 className="rating">Rating: {this.props.business.rating}</h3>
      <p>Review count: {this.props.business.reviewCount}</p>
    </div>
  </div>
</div>
        );
    }
};

export default Business;
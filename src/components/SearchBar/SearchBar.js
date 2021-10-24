import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term:"",
      location:"",
      sortBy: "best_match",
      price: "1",
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  getSortByClass(sortByOption) {
    if (this.state.sortBy === sortByOption)
    return "active";
    else
    return "";
  }

  handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

  handleTermChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value
    });
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value
    });
  }

  handleSearch(event) {
    if (this.state.term || this.state.location) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy, this.state.price);
    event.preventDefault();
    }
    else {
      console.log("Please enter business and location");
    }
  }

  handleEnter(event) {
    if (event.key === "Enter") {
      this.handleSearch(event);
    }
  }
  
  renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return (<li className = {this.getSortByClass(sortByOptionValue)} 
            onClick = {this.handleSortByChange.bind(this, sortByOptionValue)} 
            key = {sortByOptionValue}> {sortByOption} </li>);
        });
  }

    render() {
        return (
            <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <a onClick = {this.handleSearch}> 
    <ul>
      {this.renderSortByOptions()}
    </ul>
    </a>
  </div>
  <div className="SearchBar-fields">
    <input onChange = {this.handleTermChange} onKeyPress = {this.handleEnter} placeholder="Search Businesses" />
    <input onChange = {this.handleLocationChange} onKeyPress = {this.handleEnter} placehoder="Where?"/>
    <p onClick = {this.handleSearch}>
    <select id="Price" onChange = {this.handlePriceChange}>
      <option value = "1">
        Price: $
      </option>

      <option value = "2">
        Price: $$
      </option>

      <option value = "3">
        Price: $$$
      </option>

      <option value = "4">
        Price: $$$$
      </option>
    </select>
    </p>
    <script ></script>
    <script>
      function activatePlacesSearch() {
        var input = document.getElementById('search_term');
        var autoComplete = new google.maps.places.Autocomplete(input);
    }
    </script>
    <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=activatePlacesSearch"></script>
  </div>
  <div className="SearchBar-submit">
    <a onClick = {this.handleSearch}>Let's Go</a>
  </div>
</div>
        );
    }
}

export default SearchBar;

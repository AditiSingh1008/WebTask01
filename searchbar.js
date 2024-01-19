import React, { Component } from 'react';

class Surbhi extends Component {
  state = {
    items: [
      'Rose',
      'Tulip',
      'Hibiscus',
      'Mariegold',
      'Dahlia',
      'Sunflower',
      'Lily',
      'Bluebell',
    ],
    searchTerm: '',
  };

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const filteredItems = this.state.items.filter(item =>
      item.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col">
            <SearchBar onSearch={this.handleSearch} />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <DataContainer items={filteredItems} />
          </div>
        </div>
      </div>
    );
  }
}

const SearchBar = ({ onSearch }) => (
  <input
    type="text"
    className="form-control"
    placeholder="Search..."
    onChange={onSearch}
  />
);

const DataContainer = ({ items }) => (
  <ul className="list-group">
    {items.map((item, i) => (
      <li key={i} className="list-group-item">
        {item}
      </li>
    ))}
  </ul>
);

export default Surbhi;
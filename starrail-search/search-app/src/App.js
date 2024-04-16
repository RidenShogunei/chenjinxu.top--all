import React from 'react';
import { SearchBar } from './searchbar';

class App extends React.Component {
  onSearchSubmit = term => {
    console.log(term);
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
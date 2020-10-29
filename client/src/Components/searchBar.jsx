import React from 'react';
import render from 'react-dom';
import SearchField from 'react-search-field';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props);
    return(
      <SearchField
    placeholder="Search..."
    //change the data string with the appropriate value 
    onSelect={this.props}
    
    searchText="This is initial search text"
    classNames="test-class"
  />
    )
  }
}
export default Filter;

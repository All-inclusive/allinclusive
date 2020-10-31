import React from 'react';
import render from 'react-dom';
import SearchField from 'react-search-field';

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    console.log(this.props.onChange);
    return(
      <SearchField
      placeholder="Search..."
      onChange={this.onChange}
      classNames="test-class"
      />  
    )
  }
}
export default Filter;

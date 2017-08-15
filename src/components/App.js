import React from 'react';

import FruitBasket from './FruitBasket';
import Filter from './Filter'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      data: []
    }
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(res => this.setState({
         data: res
      })
      .then((data) => {
        debugger
      })
    )
  }

  componentWillMount(){
    this.fetchFilters()
  }

  render(){
    return(
    <div>
      <Filter data={this.state.data}/>
      <FruitBasket />;
    </div>
    )
  }
}


export default App;

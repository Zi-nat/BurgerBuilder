import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
//import BuildControl from '../../components/Burger/BuildControl/BuildControl';

class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    state = {
      ingredient: {
          salad: 0,
          cheese:0,
          meat: 0
      }
    }
  render() {
    return (
      <Auxiliary>
        <Burger ingredient={this.state.ingredient} />
       
      </Auxiliary>
    );
  }
}                             
export default BurgerBuilder;

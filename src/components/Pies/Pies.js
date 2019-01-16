import React, {Component} from 'react';

import Pie from './Pie/Pie';
import './Pies.css';

class Pies extends Component {
  testData = [
    {
      nameOfPie: 'Name of Pie',
      baseOfPie: 'Base of Pie',
      crust: 'Crust',
      timeToBake: 'Time to Bake',
      servings: 'Servings',
      rating: 'Rating'
    },
    {
      nameOfPie: 'Cherry',
      baseOfPie: 'Fruit Filling',
      crust: 'Pastry',
      timeToBake: '30 mins',
      servings: 97,
      rating: '5 stars'
    }, 
    {
      nameOfPie: 'Pecan',
      baseOfPie: 'Sugary Goodness',
      crust: 'Graham Cracker',
      timeToBake: '40 mins',
      servings: 2,
      rating: '3 stars'
    }
  ]

  render(){
    let pieRows = this.testData.map(pie => {
      return(
        <Pie pie={pie}/>
      )
    })
    return(
      <table>
        <tbody>
          {pieRows}
        </tbody>
      </table>
    )
  }
}

export default Pies;
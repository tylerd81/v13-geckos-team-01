import React from "react";
import { Container, Table} from 'react-bootstrap'
import Label from './Label'


import testData from './testData.json'



class LabelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render (){
    
    return (
        <Container className="mainFont">
            <h2 className="text-center">Nutrition facts of your meal</h2>
            <h3>Portion</h3>
          <Table responsive>
            <thead>
                <tr>
                <th>Item</th>
                <th><i>Units</i></th>
                </tr>
            </thead>
            
            {/*Double map: first loop maps the testData json file and second loop goes through the 'foodNutrients' array.*/}
            
            {testData.map((value, index) => {
                   return (
                    value.foodNutrients.map((value, index) => (
                      //testing logs
                      //console.log(varName), //console.log(value.nutrient.name), //console.log(testData[0]), //console.log(value.nutrient.name), //console.log(value.amount),
                        <Label names={value.nutrient.name} values={value.amount} units={value.nutrient.unitName}/>
                    ))
                   )
            })}
           </Table>

          <h5> Ingredients: {testData[0].ingredients}</h5> 
</Container> 
    )}
}



export default LabelContainer;

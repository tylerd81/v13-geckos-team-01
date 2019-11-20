import React from "react";
import { Container, Table, Dropdown } from 'react-bootstrap'
import Label from './Label'
import './label.css'


import testData from './testData.json'



class LabelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeUnits: true
    };

    this.renderCompleteUnits = this.renderCompleteUnits.bind(this);
    this.renderTableSpoonUnits = this.renderTableSpoonUnits.bind(this);
    this.completeUnitsButton = this.completeUnitsButton.bind(this);
    this.tableSpoonUnitsButton = this.tableSpoonUnitsButton.bind(this);
  }

  completeUnitsButton(){
    this.setState({ completeUnits: true})
  }

  tableSpoonUnitsButton(){
    this.setState({ completeUnits: false})
  }


  renderCompleteUnits() {
    if (this.state.completeUnits===true){
      return (
        <div> <p className="text-center">Nutrients for 100 {testData[0].servingSizeUnit} </p>
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
                  //console.log(testData[0]),
                    <Label names={value.nutrient.name} values={value.amount} units={value.nutrient.unitName}/>
                ))
               )
        })}
       </Table>
       </div>
      )
    }
  }

  renderTableSpoonUnits() {
    if (this.state.completeUnits===false){
      return (
        <div> <p className="text-center">Nutrients for {testData[0].householdServingFullText} ( {testData[0].servingSize} {testData[0].servingSizeUnit} ) </p> 
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
                  console.log(testData[0]),
                    <Label names={value.nutrient.name} values={Math.round(154*value.amount)/100} units={value.nutrient.unitName}/>
                ))
               )
        })}
       </Table>
       </div>
      )
    }
  }

  render (){    
    return (
        <Container className="mainFont">
          <br/>
            <h2 className="text-center">Nutrition facts of your meal</h2>
           
                <Dropdown className="text-center">
                  <br/>
                  <Dropdown.Toggle className="buttonBackground" id="dropdown-basic">
                    Choose serving size
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item className="letter text-center" onClick={this.completeUnitsButton}>100 {testData[0].servingSizeUnit}</Dropdown.Item>
                    <Dropdown.Item className="letter text-center" onClick={this.tableSpoonUnitsButton}>{testData[0].householdServingFullText} ( {testData[0].servingSize} {testData[0].servingSizeUnit} )</Dropdown.Item>
                  </Dropdown.Menu>
             </Dropdown>
             <br/><br/>

          {/* CONDITIONAL RENDERING */}        
          {this.renderCompleteUnits()}
          {this.renderTableSpoonUnits()}


          <h5> Ingredients: {testData[0].ingredients}</h5> 
</Container> 
    )}
}



export default LabelContainer;

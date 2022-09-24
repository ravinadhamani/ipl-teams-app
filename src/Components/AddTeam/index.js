import React from "react";
import RegistrationList from "../RegistrationList";
import styles from "./addteam.module.css";

class AddTeam extends React.Component {

    constructor(props) {
        super(props)
      
        // Initialize the form values
        this.state = { firstName:"", lastName:"", activity:"Science Lab", bowler:false, batsman:false, allrounder:false, items:[] }
      
        // Bind the "this" for the callback functions 
        this.handleChange = this.handleChange.bind(this)
        this.submitRegistration = this.submitRegistration.bind(this)
        this.removeItem = this.removeItem.bind(this)
    }
  
    // Process all change events for the form elements
    handleChange(event) {
      
        // If the input element isa checkbox, then use the checked property not the value
        if ( event.target.type == "checkbox" ) {
            this.setState( {[event.target.name]: event.target.checked} )                    
        } else {
            this.setState( {[event.target.name]: event.target.value} )          
        }
      
    }
  
    // Adds a course registration item to the list of courses
    submitRegistration() {
      
        var restrictions = (this.state.bowler ? "a" : "") + (this.state.batsman ? "b" : "")  + (this.state.allrounder ? "c" : "")
        
        var itemsCopy = this.state.items.slice()
        itemsCopy.push( {firstName:this.state.firstName, lastName:this.state.lastName, activity:this.state.activity, restrictions:restrictions } )
        
        this.setState ( { firstName:"", lastName:"", activity:"Science Lab", bowler:false, batsman:false, allrounder:false, items:itemsCopy } )
      
    }
  
    // Removes a specific item from the registered courses
    removeItem(index) {
    
        var itemsCopy = this.state.items.slice()
        itemsCopy.splice(index,1)
        this.setState( {items:itemsCopy} )
      
    }
  
    render() {
      
        return (
            <div className={styles.formStyle}>
                <h1 className={styles.teamRegistrationTxt}>Team Registration</h1>
                <div>
                    <p className={styles.nameStyles}>Team Name</p>
                    <input class={styles.inputBoxes} name="firstName" type="input" value={this.state.firstName} onChange={this.handleChange} />
                </div>
                <div>
                    <p className={styles.nameStyles}>Captain Name</p>
                    <input  class={styles.inputBoxes} name="lastName" type="input" value={this.state.lastName} onChange={this.handleChange} />
                </div> 
                
                <div>     
                    <p className={styles.nameStyles}>Select All That Apply</p>
                    <input type="checkbox" name="bowler" checked={this.state.bowler}  onChange={this.handleChange}/> a) Bowler <br/>
                    <input type="checkbox" name="batsman" checked={this.state.batsman} onChange={this.handleChange}/> b) Batsman <br/>
                    <input type="checkbox" name="allrounder" checked={this.state.allrounder}  onChange={this.handleChange}/> c) Allrounder <br/>
                </div>
                <button className={styles.btnStyles} onClick={ () => this.submitRegistration() }>Submit</button>
                <RegistrationList items={this.state.items} removeItem={this.removeItem} />
            </div>
        ) 
    }
  
  }
  
  
export default AddTeam;
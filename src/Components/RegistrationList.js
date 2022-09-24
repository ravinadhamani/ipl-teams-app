import React from "react";
import styles from "./registrationlist.module.css";

class RegistrationList extends React.Component {

    constructor(props) {
        super(props)
    } 
  
    render() {
        console.log("Rendering List, props.items = " + this.props.items.length)      
        return (
            <div>
                <h2 className={styles.teamRegistrationTxt}>All New Team Details</h2>
                <table className={styles.tableStyle} border="0" width="80%">
                   <tr >
                     <th className={styles.nameStyles}>Remove Team</th>
                     <th className={styles.nameStyles}>Team Name</th>
                     <th className={styles.nameStyles}>Captain Name</th>
                     {/* <th>Activity</th> */}
                     <th className={styles.nameStyles}>Type</th>
                  </tr>
                  {this.props.items.map( (item,i) => {
                     return (
                      <tr className={styles.tablerowStyle}>
                        <th><button onClick={ () => this.props.removeItem(i) }>Remove</button></th>
                        <th>{item.firstName}</th>
                        <th>{item.lastName}</th>
                       {/*  <th>{item.activity}</th> */}
                        <th>{item.restrictions}</th>
                     </tr>
                    )             
                })}
            </table>
            </div>
        )
      
    }
  
  }
  
export default RegistrationList;
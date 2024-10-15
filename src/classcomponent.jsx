import React, { Fragment } from "react";
class ClassProps extends React.Component{
    render()
    {
      return (
          <Fragment>
          <h2>Your name is {this.props.person.names}</h2>
          <h2>Your age is {this.props.person.ages}</h2>    
          </Fragment>
      )
     }
}

export default ClassProps;









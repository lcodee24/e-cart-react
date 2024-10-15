// import React from 'react';  
  
// class Lifecycle2 extends React.Component {  
//    constructor() {  
//       super();  
//       this.state = {value: "Welcome to",name : " Frontend"};  
      
//    }  
//    componentWillMount() {  
//     alert ("Learn ReactJS Lifecycle");
//  }    
//  changevalue = () => {
//     this.setState({name : " Learn ReactJS Event"})
//    }

//    componentDidMount(){
//     {
//         setTimeout(() => {
//             this.setState({name: " React JS"})},5000)
//         }
//     }
//     componentWillUpdate(){  
//         alert("Will updated! are you sure?");
//      }  
//     componentDidUpdate(){
//        document.getElementById('element').innerHTML = "New value updated successfully"+' '+this.state.name;
//     }
//     shouldComponentUpdate(){
//         return true;
//     }
// //    //  componentWillUnmount(){
// //    //      alert("Header Deleted");
// //    //  }
 

  
//    deleteheader =()=>{
//     this.setState({value:false,name:false});
//    }
   
     

//    render() {  
//       return (  
//          <div>  
//              <h1>ReactJS components Lifecycle</h1>  
//              <h2>{this.state.value}{this.state.name}</h2>  
//              <h2 id = "element"></h2>
//              <br/>
//              <button type="button" onClick = {this.changevalue}>Click Here!</button>  
//              <button type="button" onClick = {this.deleteheader}>Delete header</button>          
//          </div>  
//       );  
//    }  

// }
// export default Lifecycle2;  

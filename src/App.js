import React from 'react';
import Images from './images';
import "./style.css";


function App(){
  const [title, setTitle] = React.useState("React Test Delete,Insert Images");
  const [isShowing, setIsShowing] = React.useState(false);
  function handleClick(){
    setIsShowing(!isShowing);
    //this.setState({isShowing:!this.state.isShowing});
  }
    
    return(
      <section className="flex justify-center" style={{margin: "0 60px 0 60px",textAlign:"center"}}>
      <div className="w-10/12">            
            <div className="text-center">
                <div className="my-4"><h1>{title}</h1></div> 
                <button id="toggle-btn"                 
                onClick={handleClick} className="p-1 bg-blue-500 text-white my-5">Toggle Image</button>
            </div>
            
            {isShowing ? (              
              <Images />             
             ): null }
            
      </div>
    </section> 
    ) 

}

//example 2

// class App extends React.Component{
//     // constructor(props){
//     //     super(props);
//     //     this.state = {title:"Hello React 2",isShowing: false};
//     // }

//     handleClick = () =>{
//       this.setState({isShowing:!this.state.isShowing});
//     }
//     render(){
//         return(
//         // <section className="flex justify-center">
//         //   <div className="w-1/2">            
//         //         <div className="text-center">
//         //             <div className="my-4">{this.state.title}</div> 
//         //             <button onClick={this.handleClick} className="p-1 bg-blue-500 text-white my-5">Toggle Image</button>
//         //         </div>
//         //         {this.state.isShowing ? (
//         //           <Images />
//         //          ): null }
//         //   </div>
//         // </section>
//         <div>Hellow</div>
//       )
//     }
// }



export default App;
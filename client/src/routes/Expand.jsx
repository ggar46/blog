
import React from 'react';
import { useParams } from 'react-router-dom';


const Expand= ()=> {
    let { id: blogID } = useParams();


return(
    <div>
        <p>This is the Blog Page, with blog ID: {blogID}</p>
    </div>

)};
  


export default Expand;

// const Expand = (props) => {
//     const handleExpand = (event) => {
//         event.preventDefault;
//         console.log("hi");
//     }
// return(
//     <div>
//         <button onClick={handleExpand}>Expand</button>
//         <div> {props.text} </div>
//     </div>
// )}

// export default Expand;
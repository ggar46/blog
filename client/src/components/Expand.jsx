


const Expand = (props) => {
    const handleExpand = (event) => {
        event.preventDefault;
        console.log("hi");
    }
return(
    <div>
        <button onClick={handleExpand}>Expand</button>
        <div> {props.text} </div>
    </div>
)}

export default Expand;
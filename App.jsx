import react, { useState } from "react";
import reactDom from "react-dom";
import './em1.css'
function app() {
  const [input, setext] = useState('');
  const [items, setItems] = useState([]);
  function handlechange(event) {
    const newvalue = event.target.value
    setext(newvalue);
  }
  function additem() {
    setItems((prevItems) => 
       [...prevItems, input]
    )

  }


  return (
    <div className="kelo">
      <input onChange={handlechange} type="text" value={input.name} />
      <button  className="btn btn-warning" onClick={additem}>

        Add
        
      </button>

      <div>
        
          {items.map((prop) => {
            return <li className="fore">{prop}</li>;
          })}
        
      </div>
    </div>
  );
}
export default app;

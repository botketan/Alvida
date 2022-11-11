import { useState } from "react";


const Create = () => {

    const[val,setVal] = useState('');

    return ( 
        <div>
            <form className="create">
                <label>Write few lines</label>
                <input type="text"
                required
                value ={val}
                onChange={(e) => setVal(e.target.value)}                
                ></input>
                <button>Add</button>
            </form>
        </div>
     );
}
 
export default Create;

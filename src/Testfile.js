import { useEffect, useState } from "react";



const TestFile = () => {

    let [fieldValue, setValue] = useState();

    let changeFunction =  (e) => {
        setValue(e.target.value)
    }

    useEffect(()=>{
        fieldValue > 10 ? setValue(0): console.log("TOO LITTLE");;
    },[fieldValue])

    return (  
        <div className="testing">
            <input type="text" value={fieldValue}  
            onChange={(e)=>changeFunction(e)}/>
            <p>why</p>
            <p>{fieldValue}</p>
        </div>
    );
}
 
export default TestFile;

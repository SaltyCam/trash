import './App.css';

const Button = (props) => {

    let inputed = props.conditioner

    return ( 
        
        <div className="menu-toggle">
            <button onClick={()=>inputed(3)}>+k</button>
        </div>

        
     );
}
 
export default Button;

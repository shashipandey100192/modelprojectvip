import { Fragment } from "react/jsx-runtime"

function Aboutpage()
{

const name = "kumar";
const age = 80;


    return <Fragment>
        <h1>this is element</h1>
         <h2 style={{color:'red',fontSize:70}}>this is heading two {name}</h2>
        <h1>{age}</h1>
        <h1>{age>=50? "yes" :"no"}</h1>
        
        <h1>{age+50}</h1>
         </Fragment>  
}




export default Aboutpage


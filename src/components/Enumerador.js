import React , {useState , Fragment} from "react";

const Enumerador = () => {

const [numero , setNumero]  = useState(0);

const incrementar = () => {
   setNumero(numero + 1)
}

    return (
        <Fragment>
            <h1>el estado default es --: {numero}</h1>
            <button onClick={incrementar}>increment</button>
        </Fragment>
    );  
}


export default Enumerador;
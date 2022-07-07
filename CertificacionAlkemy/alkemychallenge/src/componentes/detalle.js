import { useParams } from "react-router-dom";

const Detalle =()=>{
    const {id}=useParams();
    console.log(id)
    return(
        <div>
            detalle
        </div>
    )
}

export default Detalle;
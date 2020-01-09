import React , {useEffect , useState} from 'react';
import { Link } from "react-router-dom";
import ApiEtudiants ,{ApiRemoveEtudiant} from './../api/etudiant';

function Listetudiant(props) {
  
  const [listEtudiant, setListEtudiant] = useState([]);

  useEffect(() => {

       ApiEtudiants().then((etudiants)=>{
          setListEtudiant(etudiants.data);
       }).catch((error)=>{
         console.log(error);
       })
      
  }, []);

  function delete_(id) {

    
    ApiRemoveEtudiant(id).then((res)=>{
        setListEtudiant(res.data.etudiants);
       }).catch((error)=>{
         console.log(error);
       })

  }

    return(
        <div className="container">
        <br/>
       <div className="row" >
         <Link  to={'/etudiants/add'} className="btn btn-primary">Add</Link>
       </div>
       <br/>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#id</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Email</th>
                <th scope="col">Age</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {listEtudiant.map((Etudiant)=>{
                return (
                  <tr key={Etudiant._id}>
                    <th scope="row">{Etudiant._id}</th>
                    <td>{Etudiant.first_name}</td>
                    <td>{Etudiant.last_name}</td>
                    <td>{Etudiant.email}</td>
                    <td>{Etudiant.age}</td>
                    <td>
                    <Link to={`/edit/${Etudiant._id}`} className="btn btn-primary">Edit</Link>
                    <button  onClick={()=>{delete_(Etudiant._id)}} className="btn btn-primary">Delete</button>
                    </td>
                    
                  </tr>
                )
              })

              }
            </tbody>
          </table>
      </div>
  
    )
}





export default Listetudiant;
import React ,{useState} from 'react';
import {ApiAddEtudiant} from './../api/etudiant'

function Addetudiant(props) {
    
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState();
    const [fixe, setFixe] = useState();
    const [module, setModule] = useState('');
    const [niveau, setNiveau] = useState('');
    const [filliere, setFilliere] = useState('');
    const [age, setAge] = useState()

    function handleSubmit(event) {
        event.preventDefault()

        ApiAddEtudiant({'first_name':first_name,
                    'last_name':last_name,
                    'email':email,
                    'mobile':mobile,
                    'fixe':fixe,
                    'module':module,
                    'niveau':niveau,
                    'filliere':filliere,
                    'age':age})
        .then(function(res) {
            console.log('-----> ',res)
            props.history.push('/etudiant/add');
        }).catch(function(error){
          console.log(error)
        })
      

      }
    return(
       <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label >first_name:</label>
                    <input  className="form-control" placeholder="Enter first_name"  type="text"  onChange={(e)=>setFirst_name(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label >last_name:</label>
                    <input  className="form-control" placeholder="Enter last_name"  type="text"  onChange={(e)=>setLast_name(e.target.value)} />
                </div>
                <div className="form-group">
                    <label >Email address:</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Mobile:</label>
                    <input type="text" className="form-control" placeholder="Enter mobile phone " onChange={(e)=>setMobile(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Fixe :</label>
                    <input type="text" className="form-control" placeholder="Enter  fixe phone" onChange={(e)=>setFixe(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >module :</label>
                    <input type="text" className="form-control" placeholder="Enter module" onChange={(e)=>setModule(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Niveau:</label>
                    <input type="text" className="form-control" placeholder="Enter niveau" onChange={(e)=>setNiveau(e.target.value)}  />
                </div>
                
                <div className="form-group">
                    <label >filliere:</label>
                    <input type="text" className="form-control" placeholder="Enter filliere" onChange={(e)=>setFilliere(e.target.value)}  />
                </div>
                <div className="form-group">
                    <label >Age :</label>
                    <input type="text" className="form-control" placeholder="Enter age" onChange={(e)=>setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
       </div>

    )
}





export default Addetudiant;
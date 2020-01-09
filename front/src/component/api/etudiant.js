import axios from 'axios';
import ApiBaseUrl from './../../config/config'


const ApiEtudiants = async ()=> {
  const url  = `${ApiBaseUrl}/etudiants/`;

  const result = await axios({
    method: 'get',
    url: url
  });

  return result;
}

export const ApiAddEtudiant = async (data)=> {
    const url  = `${ApiBaseUrl}/etudiants/add`;

    const result = await axios({
      method: 'post',
      data: data,
      headers:{
        "Content-Type":"application/json"
      },
      url: url
    });
  
    return result;
  }

  export const ApiRemoveEtudiant = async (id)=> {
    const url  = `${ApiBaseUrl}/etudiants/${id}`;

    const result = await axios({
      method: 'delete',
      url: url
    });
  
    return result;
  }

  export const ApiGetEtudiant = async (id)=> {
    const url  = `${ApiBaseUrl}/etudiants/${id}`;
  
    const result = await axios({
      method: 'get',
      url: url
    });
  
    return result;
  }

  export const ApiUpdatedEtudiant = async (id,data)=> {
    const url  = `${ApiBaseUrl}/etudiants/${id}`;
  
    const result = await axios({
      method: 'put',
      data:data,
      url: url
    });
  
    return result;
  }

  
export default ApiEtudiants;
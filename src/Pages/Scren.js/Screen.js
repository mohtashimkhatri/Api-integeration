import React, { useEffect, useState } from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Screen() {
  const [dat, setDat] = useState([]);
  const data = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setDat(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    data();
    // console.log(dat);
  },[]);
  const navigate = useNavigate()
  const deletedat = (id)=>{
axios.delete(`https://jsonplaceholder.typicode.com/comments/${id}`).then((res)=>{
  // console.log('delte nSuccesfully',res)
}).catch((err)=>{
  console.log(err)
})
  }
  return (
    <div>
      <button onClick={()=>{
        navigate('/form')
      }} className="w-100 m-2 py-2 btn btn-dark">Form</button>
      {dat.map((e, i) => {
        return (
          <>
            <div key={i} className="bg-dark text-light p-3 m-2">
              <p>Body: {e.body}</p>
              <p>Email: {e.email}</p>
              <p>Name: {e.name}</p>
              <p>Id: {e.id}</p>
              <button onClick={()=>{
                navigate(`/form/${e.id}`)
              }} className="btn btn-light mx-3">Edit</button>

              <button onClick={()=>{
               deletedat(e.id)
              }} className="btn btn-light">Delete</button>

            </div>
          </>
        );
      })}
    </div>
  );
}

export default Screen;

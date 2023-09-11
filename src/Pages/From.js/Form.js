import React, { useEffect, useState } from "react";
import "../../App.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function Form() {
  const params = useParams();
  const [model, setModel] = useState({});
  const getPostById  = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments/${params.id}`).then(
      (res)=>{
setModel({...res.data})
      }
    ).catch((err)=>{
      console.log(err)
    })
  }
  const postdata = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", model)
      .then((res) => {
        // console.log("post Succesfully", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updatepost = ()=>{
    axios.put(`https://jsonplaceholder.typicode.com/comments/${params.id}`,model).then((res)=>{
      // console.log('update successFully',model)
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    if(params.id){
      getPostById()
    }
  },[])
  return (
    <div className="bg">
      <div className="paper shadow rounded text-dark ">
        <div>
          <h3 className="p-2 text-center">ADD COMMENTS</h3>
          <div className="my-3 m-2 ">
            <input 
              type="text" value={model.body}
              onChange={(e) => {
                setModel(model => ({ ...model, body: e.target.value }));
              }}
              className="width"
              placeholder="Enter Your body"
            />
          </div>
          <div className="my-3 m-2 ">
            <input value={model.email}
              type="text"
              onChange={(e) => {
                setModel({ ...model, email: e.target.value });
              }}
              className="width"
              placeholder="Enter Your email"
            />
          </div>
          <div className="my-3 m-2 ">
            <input value={model.name}
              type="text"
              onChange={(e) => {
                setModel({ ...model, name: e.target.value });
              }}
              className="width"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="my-3 m-2 ">
            <input value={model.id}
              type="text"
              onChange={(e) => {
                setModel({ ...model, userId: e.target.value });
              }}
              className="width"
              placeholder="Enter Your userid"
            />
          </div>
          <div className="my-3 m-2">
            {params.id ? (
              <button onClick={updatepost} className="width2">
                update
              </button>
            ) : (
              <button onClick={postdata} className="width2">
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;

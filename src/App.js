import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`http://localhost:5000/getdata`);
    console.log(data)
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);


   return (
   <div>

<table>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Image</th>
                </tr>
                {data?.products?.map(p => {
                    return (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.title}</td>
                            <td>{p.status}</td>
                            <td><img width= '100' src={p.image?.src}></img></td>
                        </tr>
                    )
                })}
            </table>
    
    {data?.products?.map(p => (
                    <div key={p.id}>
                        <p>ID: {p.id}</p>
                        <p> TITLE: {p.title}</p>
                        <p> Status: {p.status}</p>
                        <img width= '100' src={p.image?.src}></img>
                    </div>
                ))}

   </div>
   )
  
}

export default App;


// https://yesno.wtf/api
// https://7f8536db6566227adeed7245f59a5f53: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@bundlezone.myshopify.com/admin/api/2022-07/products.json

  // const [transactions, setTransactions] = useState([])
  // useEffect(() => {
  //   fetch('http://localhost:8001/getdata')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('s', data)
  //     })
  // }, [])
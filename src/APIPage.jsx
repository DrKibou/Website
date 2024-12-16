import React, { useState, useEffect } from "react";
import "./App.css";

function APIPage() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(URL);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            response.json().then(json => {
                console.log(json);
                setData(json);
            })
          } catch (err) {
            setError(err.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error: {error}</p>;
      return (
        <div>
          <h1>Data from API</h1>
          <ol>
            {data.map((item, index) => (
              <li key={index}>Name: {item.name}, Username: {item.username}</li>
            ))}
          </ol>
        </div>
      );
    }
    

export default APIPage;
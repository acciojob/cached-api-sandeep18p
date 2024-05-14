import React, { useState, useEffect,useMemo } from "react";
import "./../styles/App.css";

const App = () => {
  const [data, setData] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>response.json())
        .then((jsonData)=>{
          setData(jsonData);
          setLoading(false);
          console.log(jsonData);
        }).catch(error => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });

    };

    fetchData();
  }, []);

  const memoizedData = useMemo(() => data, [data]);

  return (
    <div className="App">
     {  loading ? <p>loading....</p>: <div>
          <h2>Posts</h2>
          <ul>
            {memoizedData && memoizedData.map(post => (
              <li key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div> }
        
   
    </div>
  );
};

export default App;

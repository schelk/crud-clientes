import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [array, setarray] = useState([]);

  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setarray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div>
      <ul>
        {array.map((f) => (
          <li>{f}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

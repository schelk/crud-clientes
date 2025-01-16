import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [backData, setbackData] = useState([{}]);
  const [array, setarray] = useState([]);
  const fetchApi = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setarray(response.data.fruits);
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // useEffect(() => {
  //   fetch("/api")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setbackData(data);
  //     });
  // }, []);

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

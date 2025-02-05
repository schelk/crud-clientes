import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  //
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      console.log(response);
    });
  }, []);

  return <div></div>;
};

export default Home;

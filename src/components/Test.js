import React, { useEffect, useState } from "react";
import Data from "../service/Data";

function Test() {
  const [operators, setOperators] = useState([]);

  useEffect(() => {
    Data.getAllOperators()
      .then((response) => {
        setOperators(response.data);
        console.log(response);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div></div>;
}

export default Test;

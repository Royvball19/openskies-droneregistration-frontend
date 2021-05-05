import React, {useEffect, useState} from 'react'
import axios from "axios"
import Data from '../service/Data'

function Test() {
    const [operators, setOperators] = useState([])

    useEffect(() => {
        Data.getAllOperators()
        .then((response) => {
          setOperators(response.data);
          console.log(response);
        }, [])
        .catch((error) => {
          console.log(error);
        });
    },[]
    );


    return (
        <div>
          <h1>{operators[0].id}</h1>
        </div>
    )
}

export default Test

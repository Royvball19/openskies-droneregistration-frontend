import React from "react";
import { Query, DataStore } from "js-data";
import { aircrafts, operators } from "./Dummydata";

function JSData({ type }) {
  const store = new DataStore();
  // dummy get request
  const data = aircrafts;

  store.defineMapper("singletype");
  store.add("singletype", data);

  const result = store.filter("singletype", {
    where: {
      mass: {
        "<=": 800,
      },
      model: {
        "==": "Parrot",
      },
      operator: {
        "==": "A.J. August Photography",
      }
    },
  });

  const result2 = store.filter("singletype", {
    where: {
      waarde: {
        "contains": "A.J."
      }
    }
  });

  console.log(result);
  console.log(result2);

  return (
    <div>
      <h1>Hallo</h1>
    </div>
  );
}

export default JSData;

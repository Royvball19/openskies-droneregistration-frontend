import React, {useState} from "react";
import "../../style/input.css";
import { optionsList } from "../../custom hooks/searchfilter";
import { BiArrowBack } from "react-icons/bi";
import { createFilter } from '../../custom hooks/searchfilter';

function Input({ goBack, createFilterValue }) {
  const [value, setValue] = useState('');
  const [selectedOperator, setSelectedOperator] = useState('');

  function CompareOptions({ type }) {
    let data;
    if (type === "Integer") {
      data = optionsList;
    } else if (type === "String") {
      data = optionsList;
    } else if (type === "date") {
      data = optionsList;
    }
    const content = data.map((item) => (
      <option value={JSON.stringify(item.value)}>{item.text}</option>
    ));
    return <select value={selectedOperator} onChange={onSelectChange}>{content}</select>;
  }

  const onSelectChange = (event) => {
    setSelectedOperator(JSON.parse(event.target.value));
  }


  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSubmit = () => {  
    // get operator from options
    createFilterValue(value, selectedOperator);
  }


  return (
    <div>
      <div>
        <BiArrowBack className="back-icon" onClick={goBack} />
        <h3>Title of search thing</h3>
      </div>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="enter text"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onChange}
        />
      </div>
      <CompareOptions type="String" />
      <button className="add-btn" onClick={onSubmit}>ADD FILTER</button>
    </div>
  );
}

export default Input;

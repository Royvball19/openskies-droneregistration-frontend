import * as searchjs from "searchjs"

// different options 
export const options = {
  is: {} ,
  isNot: { value:{ "_not": true }, text: "is not"},
  contains:{ value: { "_text": true }, text: "contains" },
  doesNotContain:{value: {"_text": true , "_not": true }, text: "does not contain" },
  isEmpty: { value: {} , text: "is empty"} ,
  partial: {_propertySearch: true},
}

// math operators with text
export const mathOperators = {
  from: {operator: 'from', text: 'from'},
  to: {operator: 'to', text: 'to'},
  greaterThan: {operator: 'gt', text: 'greater than'},  
  lessThan: {operator: 'lt', text: 'less than'},
}

// limit filter
// needs to be tested
export const limit = ( number ) => {
  let filter = {"_propertySearchDepth": number}
  return filter
}

// create filter object with math equations
// needs to be tested
export const createMathFilter = (key, value, operator) => {
  let filter = {};
  filter[key] = { operator:value };
  return filter
}

// create a Filter object
export const createFilter = (key, value) => {
  let filter = {};
  filter[key] = value
  return filter
};

// create single object from array
export const createQuery = (arr) => {
  let query = Object.assign(...arr, {});
  // allow nested search
  query[_propertySearch] = true;
  return query
}

// filter the data using the created query
export const useFilter = (data, query) => {

  let filterData = searchjs.matchArray(data, query)
  return filterData
}

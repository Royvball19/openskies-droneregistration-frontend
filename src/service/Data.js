import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api/v1/";

export default {

  // Endpoints for operators
  async getAllOperators() {
    return await axios.get(endpoint + "operators");
  },
  async getSingleOperator(operatorid) {
    return await axios.get(endpoint + "operators/" + operatorid);
  },
  async getPrivilegedOperator(operatorid) {
    return await axios.get(endpoint + "operators/" + operatorid + "/privileged");
  },
  async getAircraftOperator(operatorid) {
    return await axios.get(endpoint + "operators/" + operatorid + "/aircraft");
  },

  // Endpoints for contacts
  async getAllContacts() {
    return await axios.get(endpoint + "contacts");
  },
  async getSingleContact(contactid) {
    return await axios.get(endpoint + "contacts/" + contactid);
  },
  async getPrivilegedContact(contactid) {
    return await axios.get(endpoint + "contacts/" + contactid +"/privileged");
  },

  // Endpoints for pilots
  async getAllPilots() {
    return await axios.get(endpoint + "pilots");
  },
  async getSinglePilot(pilotid) {
    return await axios.get(endpoint + "pilots/" + pilotid);
  },
  async getPrivilegedPilot(pilotid) {
    return await axios.get(endpoint + "pilots/" + pilotid + "/privileged");
  },

  // Endpoints for aircrafts
  async getAllAircrafts() {
    return await axios.get(endpoint + "aircrafts");
  },
  async getSingleAircraft(aircraftid) {
    return await axios.get(endpoint + "aircrafts/" + aircraftid);
  },
  async getPrivilegedAircraft(aircraftid) {
    return await axios.get(endpoint + "aircrafts/" + aircraftid + "/privileged");
  },
};


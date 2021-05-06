import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api/v1/";

export default {
  // API call for all operators
  async getAllOperators() {
    return await axios.get(endpoint + "operators");
  },

  // API call for single operator
  async getSingleOperator(operatorid) {
    return await axios.get(endpoint + "operators/" + operatorid);
  },

  // API call for privileged details operator
  async getPrivilegedOperator(operatorid) {
    return await axios.get(
      endpoint + "operators/" + operatorid + "/privileged"
    );
  },

  // API call for aircrafts within specific operator
  async getAircraftOperator(operatorid) {
    return await axios.get(endpoint + "operators/" + operatorid + "/aircraft");
  },

  // API call for all contacts
  async getAllContacts() {
    return await axios.get(endpoint + "contacts");
  },

  // API call for single contact
  async getSingleContact(contactid) {
    return await axios.get(endpoint + "contacts/" + contactid);
  },

  // API call for privileged details contact
  async getPrivilegedContact(contactid) {
    return await axios.get(endpoint + "contacts/" + contactid + "/privileged");
  },

  // API call for all pilots
  async getAllPilots() {
    return await axios.get(endpoint + "pilots");
  },

  // API call for single pilot
  async getSinglePilot(pilotid) {
    return await axios.get(endpoint + "pilots/" + pilotid);
  },

  // API call for privileged details pilot
  async getPrivilegedPilot(pilotid) {
    return await axios.get(endpoint + "pilots/" + pilotid + "/privileged");
  },

  // API call for all aircrafts
  async getAllAircrafts() {
    return await axios.get(endpoint + "aircrafts");
  },

  // API call for single aircraft
  async getSingleAircraft(aircraftid) {
    return await axios.get(endpoint + "aircrafts/" + aircraftid);
  },

  // API call for privileged details aircraft
  async getPrivilegedAircraft(aircraftid) {
    return await axios.get(
      endpoint + "aircrafts/" + aircraftid + "/privileged"
    );
  },

  // API call for all reports
  async getAllReports() {
    return await axios.get(endpoint + "reports");
  },
};

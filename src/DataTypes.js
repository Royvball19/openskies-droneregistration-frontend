// You can add more table types by adding more functions and setting the datafields and text corresponding to the values you
// want it to show. Datafield = the key and text = the value

export default {
  operators() {
    return [
      {
        dataField: "id",
        text: "ID",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "company_name",
        text: "Company name",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "email",
        text: "Email",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "website",
        text: "Website",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "phone_number",
        text: "Phone number",
        hidden: false,
        variable: "String",
      },
    ];
  },
  pilots() {
    return [
      {
        dataField: "id",
        text: "ID",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "created_at",
        text: "Created at",
        hidden: false,
        variable: "Date",
      },
      {
        dataField: "updated_at",
        text: "Updated at",
        hidden: false,
        variable: "Date",
      },
    ];
  },
  aircrafts() {
    return [
      {
        dataField: "id",
        text: "ID",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "model",
        text: "Model",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "maci_number",
        text: "Maci number",
        hidden: false,
        variable: "String",
      },
      {
        dataField: "manufacturer",
        text: "Manufacturer",
        hidden: false,
        variable: "String",
      },
    ];
  },
  reports() {
    return [
      {
        dataField: "id",
        text: "ID",
        hidden: true,
        variable: "String",
      },
      {
        dataField: "report_type",
        text: "Report type",
        hidden: true,
        variable: "Integer",
      },
      {
        dataField: "created_at",
        text: "Created at",
        hidden: true,
        variable: "Date",
      },
      {
        dataField: "updated_at",
        text: "Updated at",
        hidden: true,
        variable: "Date",
      },
    ];
  },
};

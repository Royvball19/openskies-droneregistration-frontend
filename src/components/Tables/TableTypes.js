// You can add more table types by adding more functions and setting the datafields and text corresponding to the values you 
// want it to show. Datafield = the key and text = the value

export default {
    operators() {
        return [{
            dataField: 'id',
            text: 'ID'
        },
        {
            dataField: 'company_name',
            text: 'Company name'
        },
        {
            dataField: 'email',
            text: 'Email'
        }
        ]
    },
    pilots() {
        return [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'created_at',
            text: 'Created at'
        }, {
            dataField: 'updated_at',
            text: 'Updated at'
        }]
    },
    aircrafts() {
        return [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'model',
            text: 'Model'
        }, {
            dataField: 'status',
            text: 'Status'
        }, {
            dataField: 'operator.company_name',
            text: 'Operator name'
        }]
    },
    reports() {
        return [{
            dataField: 'id',
            text: 'ID'
        }, {
            dataField: 'report_type',
            text: 'Report type'
        }, {
            dataField: 'created_at',
            text: 'Created at'
        }, {
            dataField: 'updated_at',
            text: 'Updated at'
        }]
    }
}






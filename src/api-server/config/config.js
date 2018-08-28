module.exports = {
    preprod:{
        esserver:'',
        esindexname:'',
        esmappingtype:'',
        node_port: process.env.PORT || 8090
    },
    prod:{
        esserver:'',
        esindexname:'',
        esmappingtype:'',
        node_port: process.env.PORT || 8090
    }
}
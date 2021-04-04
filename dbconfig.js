const config = {

    server: 'localhost',
    database: 'DonoationDB',
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER'
    },
    port: 1445
}

module.exports = config;
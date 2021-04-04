var config = require('./dbconfig');
const sql = require('mssql');

async function loginRequest(username,password){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('password',sql.VarChar,password) 
        .input('username',sql.VarChar,username) 
        .input('type',sql.VarChar,'Login') 
        // .query("SELECT TOP 1 firstname from tbl_donorinfo where username= @input_username and password = @input_password");
        .execute('USP_Login_Update');
        console.log(result.recordsets);
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function changePassword(username,password){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()                   
        .input('password',sql.VarChar,password) 
        .input('username',sql.VarChar,username) 
        .input('type',sql.VarChar,'update')
        // .query("UPDATE [tbl_donorinfo] SET password = @input_password where username = @input_username");
        .execute('USP_Login_Update');
        console.log(result.recordsets);
         return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function registerDonor(body){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()     
        .input('username',sql.VarChar,body.username) 
        .input('firstname',sql.VarChar,body.firstname) 
        .input('lastname',sql.VarChar,body.lastname) 
        .input('gender',sql.VarChar,body.gender) 
        .input('Dob',sql.VarChar,body.Dob) 
        .input('password',sql.VarChar,body.password) 
        .input('street',sql.VarChar,body.street) 
        .input('zipcode',sql.VarChar,body.zipcode) 
        .input('city',sql.VarChar,body.city) 
        .input('country',sql.VarChar,body.country) 
        .input('phone',sql.VarChar,body.phone) 
        .input('emailid',sql.VarChar,body.emailid) 
        .input('type',sql.VarChar,'insert')
        .execute('USP_CRUD_Donorinfo');
         return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


async function getAllReciever(){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .query("Select * from tbl_recieverinfo");
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getLastlogin(username){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('input_username',sql.VarChar,username) 
        .query("Select Top 1 convert(varchar, last_logIn, 100) as last_logIn from tbl_applog where username=@input_username order by last_logIn desc");
        console.log(result.recordsets);
        console.log(username);
        return result.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    loginRequest : loginRequest,
    changePassword:changePassword,
    registerDonor:registerDonor,
    getAllReciever:getAllReciever,
    getLastlogin:getLastlogin
}
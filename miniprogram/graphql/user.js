let createUser=`mutation createuser($id: ID!, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    createuser: create_user(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
        id
        openid
        username
        password
        telephone
        email
        createdAt
        updatedAt
    }
}`,
deleteUser=`mutation deleteuser($id: ID, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    deleteuser: delete_user(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt)
}`,
updateUser=`mutation updateorder($remark: String, $server_id: String, $updatedAt: String, $payTime: String, $orderTotalPay: Float, $createdAt: String, $orderStatus: String, $id: ID, $user_id: ID, $orderTime: String, $storeTotalPay: Float) {
    updateorder: update_order(remark: $remark server_id: $server_id updatedAt: $updatedAt payTime: $payTime orderTotalPay: $orderTotalPay createdAt: $createdAt orderStatus: $orderStatus id: $id user_id: $user_id orderTime: $orderTime storeTotalPay: $storeTotalPay) {
        remark
        server_id
        updatedAt
        payTime
        orderTotalPay
        createdAt
        orderStatus
        id
        user_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        orderTime
        storeTotalPay
    }
}`,
getUser=`query userbyprops($openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    userbyprops: user_by_props(openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
        id
        openid
        username
        password
        telephone
        email
        createdAt
        updatedAt
    }
}`,
getUsrById=`query userbyid($id: ID) {
    userbyid: user_by_id(id: $id) {
        id
        openid
        username
        password
        telephone
        email
        createdAt
        updatedAt
    }
}`


export default{
    createUser,
    deleteUser,
    updateUser,
    getUser,
    getUsrById
}

/*
createUser
{
    "createdAt": "String",
    "email": "String",
    "id": "asas",
    "openid": "String",
    "password": "String",
    "telephone": "sadsadsa",
    "updatedAt": "String",
    "username": "String"
}

*/
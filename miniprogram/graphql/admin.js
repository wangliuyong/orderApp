let createAdmin=`mutation createadmin($id: ID!, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    createadmin: create_admin(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
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
deleteAdmin=`mutation deleteadmin($id: ID, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    deleteadmin: delete_admin(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt)
}`,
updateAdmin=`mutation updateadmin($id: ID, $openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    updateadmin: update_admin(id: $id openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
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
getAdmin=`query adminbyprops($openid: String, $username: String, $password: String, $telephone: String, $email: String, $createdAt: String, $updatedAt: String) {
    adminbyprops: admin_by_props(openid: $openid username: $username password: $password telephone: $telephone email: $email createdAt: $createdAt updatedAt: $updatedAt) {
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
    createAdmin,
    deleteAdmin,
    updateAdmin,
    getAdmin
}
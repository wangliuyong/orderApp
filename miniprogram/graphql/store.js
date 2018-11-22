let createStore=`mutation createstore($address: String, $updatedAt: String, $telephone: String, $name: String, $describle: String, $createdAt: String, $admin_id: ID, $id: ID!, $class: String, $recommended: String, $img: String) {
    createstore: create_store(address: $address updatedAt: $updatedAt telephone: $telephone name: $name describle: $describle createdAt: $createdAt admin_id: $admin_id id: $id class: $class recommended: $recommended img: $img) {
        address
        updatedAt
        telephone
        name
        describle
        createdAt
        admin_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        id
        class
        recommended
        img
    }
}`,
deleteStore=`mutation deletestore($address: String, $updatedAt: String, $telephone: String, $name: String, $describle: String, $createdAt: String, $admin_id: ID, $id: ID, $class: String, $img: String) {
    deletestore: delete_store(address: $address updatedAt: $updatedAt telephone: $telephone name: $name describle: $describle createdAt: $createdAt admin_id: $admin_id id: $id class: $class img: $img)
}`,
updateStore=`mutation updatestore($address: String, $updatedAt: String, $telephone: String, $name: String, $describle: String, $createdAt: String, $admin_id: ID, $id: ID, $class: String, $img: String) {
    updatestore: update_store(address: $address updatedAt: $updatedAt telephone: $telephone name: $name describle: $describle createdAt: $createdAt admin_id: $admin_id id: $id class: $class img: $img) {
        address
        updatedAt
        telephone
        name
        describle
        createdAt
        admin_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        id
        class
        img
    }
}`,
getStore=`query storebyprops($address: String, $updatedAt: String, $telephone: String, $name: String, $describle: String, $createdAt: String, $admin_id: ID, $class: String, $img: String) {
    storebyprops: store_by_props(address: $address updatedAt: $updatedAt telephone: $telephone name: $name describle: $describle createdAt: $createdAt admin_id: $admin_id class: $class img: $img) {
        address
        updatedAt
        telephone
        name
        describle
        createdAt
        admin_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        id
        recommended
        class
        img
    }
}`,
getStoreById=`query storebyid($id: ID) {
    storebyid: store_by_id(id: $id) {
        address
        updatedAt
        telephone
        name
        describle
        createdAt
        admin_id {
            id
            openid
            username
            password
            telephone
            email
            createdAt
            updatedAt
        }
        id
        class
        recommended
        img
    }
}
`
export default{
    createStore,
    deleteStore,
    updateStore,
    getStore,
    getStoreById
}


/* 
createStore
{
  "address": "String",
"admin_id": "ID",
"class": "String",
"createdAt": "String",
"describle": "String",
"id": "sss",
"img": "String",
"name": "String",
"telephone": "String",
"updatedAt": "String"
}
*/
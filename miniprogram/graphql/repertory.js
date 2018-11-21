let createRepertory=`mutation createrepertory($id: ID!, $store_id: ID, $name: String, $count: Int) {
    createrepertory: create_repertory(id: $id store_id: $store_id name: $name count: $count) {
        id
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt
            id
            class
            img
        }
        name
        count
    }
}`,
deleteRepertory=`mutation deleterepertory($id: ID, $store_id: ID, $name: String, $count: Int) {
    deleterepertory: delete_repertory(id: $id store_id: $store_id name: $name count: $count)
}`,
updateRepertory=`mutation updaterepertory($id: ID, $store_id: ID, $name: String, $count: Int) {
    updaterepertory: update_repertory(id: $id store_id: $store_id name: $name count: $count) {
        id
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt

            id
            class
            img
        }
        name
        count
    }
}`,
getRepertory=`query repertorybyprops($store_id: ID, $name: String, $count: Int) {
    repertorybyprops: repertory_by_props(store_id: $store_id name: $name count: $count) {
        id
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt

            id
            class
            img
        }
        name
        count
    }
}`

export default{
    createRepertory,
    deleteRepertory,
    updateRepertory,
    getRepertory
}
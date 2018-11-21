let createService=`mutation createservice($updatedAt: String, $orderPrice: Float, $number: Int, $timeRange: String, $name: String, $describle: String, $createdAt: String, $evaluation: String, $id: ID!, $class: String, $serverStatus: String, $price: Float, $store_id: ID, $img: String) {
    createservice: create_service(updatedAt: $updatedAt orderPrice: $orderPrice number: $number timeRange: $timeRange name: $name describle: $describle createdAt: $createdAt evaluation: $evaluation id: $id class: $class serverStatus: $serverStatus price: $price store_id: $store_id img: $img) {
        updatedAt
        orderPrice
        number
        timeRange
        name
        describle
        createdAt
        evaluation
        id
        class
        serverStatus
        price
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt

            id
            class
            recommended
            img
        }
        img
    }
}`,
deleteService=`mutation deleteservice($updatedAt: String, $orderPrice: Float, $number: Int, $name: String, $describle: String, $createdAt: String, $evaluation: String, $id: ID, $class: String, $serverStatus: String, $price: Float, $store_id: ID, $img: String) {
    deleteservice: delete_service(updatedAt: $updatedAt orderPrice: $orderPrice number: $number name: $name describle: $describle createdAt: $createdAt evaluation: $evaluation id: $id class: $class serverStatus: $serverStatus price: $price store_id: $store_id img: $img)
}`,
updateService=`mutation updateservice($updatedAt: String, $orderPrice: Float, $number: Int, $timeRange: String, $name: String, $describle: String, $createdAt: String, $evaluation: String, $id: ID, $class: String, $serverStatus: String, $price: Float, $store_id: ID, $img: String) {
    updateservice: update_service(updatedAt: $updatedAt orderPrice: $orderPrice number: $number timeRange: $timeRange name: $name describle: $describle createdAt: $createdAt evaluation: $evaluation id: $id class: $class serverStatus: $serverStatus price: $price store_id: $store_id img: $img) {
        updatedAt
        orderPrice
        number
        timeRange
        name
        describle
        createdAt
        evaluation
        id
        class
        serverStatus
        price
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt

            id
            class
            recommended
            img
        }
        img
    }
}`,
getService=`query servicebyprops($updatedAt: String, $orderPrice: Float, $number: Int, $name: String, $describle: String, $createdAt: String, $evaluation: String, $class: String, $serverStatus: String, $price: Float, $store_id: ID, $img: String) {
    servicebyprops: service_by_props(updatedAt: $updatedAt orderPrice: $orderPrice number: $number name: $name describle: $describle createdAt: $createdAt evaluation: $evaluation class: $class serverStatus: $serverStatus price: $price store_id: $store_id img: $img) {
        updatedAt
        orderPrice
        number
        timeRange
        name
        describle
        createdAt
        evaluation
        id
        class
        serverStatus
        price
        store_id {
            address
            updatedAt
            telephone
            name
            describle
            createdAt

            id
            class
            recommended
            img
        }
        img
    }
}`


export default{
    createService,
    deleteService,
    updateService,
    getService
}
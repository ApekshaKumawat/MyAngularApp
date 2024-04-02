export interface User{
    "id": number
    "name": string
    "username": string
    "email": string
    "address":address
}

export interface address{
    "street": string
    "suite": string
    "city": string
    "zipcode": string
    "geo": geo
}

export interface geo{
    "lat": string
    "lng": string 
}
import React from 'react'
const { data } = require('./Home.js')
export default function User() {
    console.log(data)
    return (
        <div>{data}</div>
    )
}

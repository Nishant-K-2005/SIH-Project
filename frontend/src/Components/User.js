import React from 'react'
import UserNavigation from './UserNavigation'
import Form from './scholarshipForm/Form'
import { useLocation } from 'react-router-dom'
export default function User() {
    const location = useLocation()
    const Userdata = location.state.user
    return (
        <>
        <UserNavigation/>
        <Form/>
        </>
    )
}

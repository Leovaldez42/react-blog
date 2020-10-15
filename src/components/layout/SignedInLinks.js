import React from 'react'
import {NavLink} from 'react-router-dom'

export const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li> <NavLink to="/create"> New Project </NavLink> </li>
                <li> <NavLink to="/"> LogOut</NavLink> </li>
                <li> <NavLink to="/" className="btn btn-floating blue darken-5"> LV </NavLink> </li>
            </ul>
        </div>
    )
}

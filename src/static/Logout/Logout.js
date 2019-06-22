import React from 'react'
import {Link} from 'react-router-dom'


export default function Logout() {
    return (
        <div>


            <div> 
                <Link to="/Login">
                    <span containerStyle="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left">Logout</i>
                    </span>
                </Link>
            </div>
        </div>
    )
}
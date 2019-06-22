import React from 'react'
import {Link} from 'react-router-dom'
import './Banner.css';


export default function Banner() {
    return (
        
        <div>
            <div> 
                <Link to="/Home">
                    <span containerStyle="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left">Home</i>
                    </span>
                </Link>
            </div>

        </div>
    )
}

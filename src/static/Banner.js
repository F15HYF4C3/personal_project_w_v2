import React from 'react'
import {Link} from 'react-router-dom'


export default function Banner() {
    return (
        <div>
            <div> 
                <Link to="/">
                    <span style="font-size: 48px; color: Dodgerblue;">
                        <i class="fas fa-angle-double-left"></i>
                    </span>
                </Link>
            </div>
            <div> <Link to="/"></Link> </div>
            <div><Link to="/"><i className="fas fa-shopping-cart"></i></Link></div>
        </div>
    )
}
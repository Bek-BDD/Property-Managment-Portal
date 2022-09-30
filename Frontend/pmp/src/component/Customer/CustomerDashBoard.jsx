import React, {useEffect, useState} from 'react'
import CustomerApplications from './CustomerApplications';

function CustomerDashBoard() {
    const [user, setUser] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("tokens") != null)
            setIsLoggedIn(true)
    }, [])

    return (
        <div>
            {isLoggedIn &&
                <div>
                    <CustomerApplications/>
                </div>
            }
        </div>
    )
}

export default CustomerDashBoard

import React from 'react'
import { Outlet } from 'react-router-dom'
import UpperNavBar from '../components/UpperNavBar'
import SideNavBar from '../components/SideNavBar'
import { useDispatch, useSelector } from 'react-redux'
export default function Layout() {
    // const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.navBar.isOpen);
    return (
        <div>
            <UpperNavBar />
            <div className={`layout ${isOpen ? '' : 'full_layout'}`}>
                <SideNavBar />
                <Outlet />
            </div>
        </div>
    )
}

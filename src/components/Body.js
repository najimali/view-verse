import { useSelector } from "react-redux"
import SideBar from "./SideBar"
import { Outlet } from "react-router-dom"

const Body = () => {
    const isSideBarOpen = useSelector(store => store.sideBar.isSideBarOpen)
    return (
        <div className="flex">
            {isSideBarOpen && <SideBar></SideBar>}
            <Outlet></Outlet>
        </div>
    )
}

export default Body
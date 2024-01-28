import { useSelector } from "react-redux"
import SideBarContainer from "./SideBarContainer"
import { Outlet } from "react-router-dom"

const Body = () => {
    const isSideBarOpen = useSelector(store => store.sideBar.isSideBarOpen)
    return (
        <div className="flex">
            {isSideBarOpen && <SideBarContainer></SideBarContainer>}
            <Outlet></Outlet>
        </div>
    )
}

export default Body
import { useSelector } from "react-redux"
import MainContainer from "./MainContainer"
import SideBar from "./SideBar"

const Body = () => {
    const isSideBarOpen = useSelector(store => store.nav.isSideBarOpen)
    return (
        <div className="flex">
            {isSideBarOpen && <SideBar></SideBar>}
            <MainContainer></MainContainer>
        </div>
    )
}

export default Body
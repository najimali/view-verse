import MainContainer from "./MainContainer"
import SideBar from "./SideBar"

const Body = () => {
    return (
        <div className="flex">
            <SideBar></SideBar>
            <MainContainer></MainContainer>
        </div>
    )
}

export default Body
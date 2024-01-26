import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
    return (
        <div className="w-full p-2 mt-2">
            <ButtonList></ButtonList>
            <VideoContainer className='w-full'></VideoContainer>
        </div>
    )
}

export default MainContainer
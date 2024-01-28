import SideBarButton from "./SideBarButton"

const SideBarList = ({ data }) => {
    if (!data?.length) return null
    return (
        <div className="flex flex-col border-b border-b-1 gap-2 py-1 mb-2">
            {
                data.map((item) => <SideBarButton data={item}></SideBarButton>)
            }
        </div>
    )
}

export default SideBarList
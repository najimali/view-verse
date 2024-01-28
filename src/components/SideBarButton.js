const SideBarButton = ({ data }) => {
    const { text, icon } = data
    return (
        <div className="flex justify-between pl-2 items-center hover:bg-gray-100 rounded-md" key={text}>
            {icon}
            <div className="w-full text-start text-sm rounded-md pl-2 py-1 hover:font-bold">{text}</div>
        </div>
    )
}

export default SideBarButton
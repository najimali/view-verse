const ButtonList = () => {
    const names = ["All", "Computer Programming", "React", "Frontend Developement", "Mutual Fund", "Songs", "Hindi Songs", "Sales", "Thoughts", "Startup", "Music", "Drama"]
    return (
        <div className="flex justify-center items-center pb-4">
            {
                names.map((name, index) => (
                    <span key={index} className="bg-gray-100 text-slate-900 px-2 py-1 mx-2 rounded-lg">
                        {name}
                    </span>
                ))
            }
        </div>
    )
}

export default ButtonList
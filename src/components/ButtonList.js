const ButtonList = () => {
    const names = ["All", "Computer Programming", "React", "Frontend Developement", "Mutual Fund", "Songs", "Hindi Songs", "Sales", "Thoughts", "Startup", "Music", "Drama"]
    return (
        <div className="flex justify-start items-center">
            {
                names.map((name, index) => (
                    <span key={index} className="bg-gray-100 min-w-12 text-slate-900 px-2 py-1 mx-2 rounded-lg">
                        {name}
                    </span>
                ))
            }
        </div>
    )
}

export default ButtonList
import "../styles/shimmer-video-card.css";
const ShimmerVideoCard = () => {
    return (
        <div className="flex flex-col justify-start items-center w-96 p-4 gap-1 m-4 rounded-lg hover:shadow-xs shimmer">
            <div className="w-96 h-60 rounded-md bg-gray-100"></div>
            <div className="w-full mt-2">
                <div className="h-4 bg-gray-100 rounded"></div>
                <div className="h-4 bg-gray-100 rounded mt-2"></div>
            </div>
        </div>
    );
};

export default ShimmerVideoCard;
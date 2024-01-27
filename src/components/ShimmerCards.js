import ShimmerVideoCard from './SimmerVideoCard';
const ShimmerCards = () => {
    // Create an array of 10 ShimmerEffect components
    const shimmerCards = Array.from({ length: 10 }, (_, index) => <ShimmerVideoCard key={index} />);

    return (
        <div className='flex flex-wrap'>
            {shimmerCards}
        </div>
    );
};

export default ShimmerCards
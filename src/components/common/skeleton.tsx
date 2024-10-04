const SkeletonPlaceholder = () => {
  return (
    <div className="flex w-52 flex-col gap-4 animate-pulse">
      <div className="skeleton h-32 w-full bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-3/4 bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
      <div className="skeleton h-4 w-full bg-gray-300 rounded"></div>
    </div>
  );
};

export default SkeletonPlaceholder;

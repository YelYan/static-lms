const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-foreground opacity-100 z-100">
      <div className="w-10 h-10 border-2 border-primary border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;

const LoadingButton = ({ type,children,loading , chickHandler}) => {
    return (
        <div>
            <button
                type={type}
                onClick={chickHandler}
                disabled={loading} 
                className={`inline-flex items-center justify-center w-full m-auto px-4 py-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 ${loading ? "opacity-75 cursor-not-allowed" : ""
                    }`}
            >
                {loading ? (
                    <svg
                        className="w-5 h-5 animate-spin text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                        ></path>
                    </svg>
                ) : (
                        children
                )}
            </button>
        </div>
    );
};

export default LoadingButton;

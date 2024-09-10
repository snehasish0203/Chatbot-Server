export const LoadingSpinner =() =>{
    return (
        <div className="inline-block w-5 h-5 border-2 border-t-2 boreder-r-transparent border-white rounded-full animate-spin"></div>
    );
};

export const LoadingSmall =() =>{
    return (
        <div className="flex space-x-2 justify-center items-center w=[200px] m-auto mt-[300px]">
            <div className="h-8 w-8 bg-white rounded-full animated-bounce [animation-delay:-0.3s]"></div>
            <div className="h-8 w-8 bg-white rounded-full animated-bounce [animation-delay:-.15s]"></div>
            <div className="h-8 w-8 bg-white rounded-full animated-bounce "></div>
        </div>
    );
};

export const LoadingBig =() =>{
    return (
        <div className="flex space-x-2 justify-center items-center w=[200px] m-auto mt-[300px]">
            <div className="h-4 w-4 bg-white rounded-full animated-bounce [animation-delay:-0.3s]"></div>
            <div className="h-4 w-4 bg-white rounded-full animated-bounce [animation-delay:-.15s]"></div>
            <div className="h-4 w-4 bg-white rounded-full animated-bounce "></div>
        </div>
    );
};
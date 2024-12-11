import './style/style.css'
const Loader = () => {
    return (      
        <div className='flex w-full h-[80vh] justify-center items-center'>
            <div className="relative inline-block">
                <div className="loader"></div>
                <div className="w-6 h-2 bg-cyan-700 -rotate-45 absolute bottom-[43px] left-[42px]"></div>
                <div className="w-20 h-10 bg-gradient-to-r from-slate-400 to-slate-200 rounded-b-full rotate-45 absolute bottom-4 -left-1 z-10"></div>
                <div className="w-5 h-6 bg-slate-400 absolute bottom-0 left-5"></div>
                <div className="w-6 h-6 rounded-full bg-cyan-400 absolute bottom-12 left-14"></div>
                <div className="w-16 h-3 bg-cyan-700 absolute top-full left-0"></div>
            </div>
        </div>
    )
}

export default Loader


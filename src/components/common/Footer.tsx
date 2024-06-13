

export const Footer = () => {
    return (
        <div className="flex justify-between items-center mt-4">
            <div>
                <div className="text-2xl font-semibold">JPulido</div>
                <div className="text-sm">software</div>
            </div>
            <div className="space-y-2">                
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-black hover:text-white h-10 px-4 py-2 text-sm">
                    Solita asesoría
                </button>
            </div>
        </div>
    )
}

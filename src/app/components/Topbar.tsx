import { ChevronDown } from "lucide-react"

function Topbar(){
    return(
        
        <div className="w-full p-3 bg-black hidden md:flex items-center justify-between">
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <p className="text-white">
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%
                <span className="font-bold underline ml-2">ShopNow</span>
                </p>
            </div>
            <p className="text-white flex items-center gap-2 mr-6">
                English
                <ChevronDown/>
            </p>
        </div>
    )
}

export default Topbar

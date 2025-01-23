
import DashboardDetailsection from "@/app/components/DashboardDetailsection";
import DashboardSidebar from "@/app/components/DashboardSidebar";
import DashboardLast from "../components/DashboardLast";

export default function Dashboard() {
  return (


    
    <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full bg-gray-100 border-r pb-6 border-gray-200">
      <DashboardSidebar />
        </div>
        <main className="min-h-screen bg-gray-50 p-6">
      <DashboardDetailsection />
    </main>

    <div className="min-h-screen  border-gray-200 bg-gray-50 p-6">
    
      < DashboardLast/>
   
    </div>

    </div>
  );
}


import SideBar from "../components/SideBar";
import Third02 from "../components/Third02";
import Cars from "../components/Cars";

function Category() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/4 bg-gray-100 border-r border-gray-200">
        <SideBar />
      </div>
      <div className="md:w-3/4 p-1">
        <div className="mb-4">
          <Third02 />
        </div>
        <div className="">
          <Cars />
        </div>
      </div>
    </div>
  );
}

export default Category;

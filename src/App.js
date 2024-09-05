import "./App.css";
import MainLyout from "./components/MainLyout";

function App() {
  return (
    <div className="p-3 bg-gray-100 min-h-screen">
      <div className="bg-white rounded-lg shadow-xl p-4 h-[calc(100vh-4%)] w-[calc(100vw-6%)] sm:w-[calc(100vw-4%)] md:w-[calc(100vw-3%)] lg:w-[calc(100vw-2%)] fixed overflow-auto scrollable-container">
        <MainLyout />
      </div>
    </div>
  );
}

export default App;

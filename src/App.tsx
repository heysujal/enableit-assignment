import { useState } from "react";
import "./App.css";
import Users from "./components/Users/Users";
import ShimmerDisplay from "./components/ShimmerDisplay/ShimmerDisplay";
import Pagination from "./components/Pagination/Pagination";
import useFetchUsers from "../hooks/useFetchUsers";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const { users, loading, error } = useFetchUsers(pageNumber);
  const handleNext = () => {
    setPageNumber((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
    }
  };

  if (loading) {
    return <ShimmerDisplay />;
  }
  if (error) {
    return <h1 className="text-center">Oops!, {error} </h1>;
  }
  return (
    <div>
      <h1 onClick={()=>setPageNumber(0)} className="text-4xl mb-10 cursor-pointer text-center font-bold underline underline-offset-4">
        Users Database
      </h1>
      <Users users={users} />
      {users?.length > 0 && (
        <Pagination
          currentPage={pageNumber}
          onNext={handleNext}
          onPrev={handlePrev}
          setPageNumber={setPageNumber}
          hasPrev={pageNumber > 0}
        />
      )}
    </div>
  );
}

export default App;

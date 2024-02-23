import PatientList from "./PatientList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: infos, isLoading, error } = useFetch('http://localhost:8000/info');

  return ( 
      <div className="home">
          { error && <div>{ error }</div>}
          { isLoading && <div>Loading.....</div>}
          {infos && <PatientList infos={infos} title="All Patients" />}
      </div>
   );
}

export default Home;
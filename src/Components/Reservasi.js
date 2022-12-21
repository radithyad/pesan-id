import "../App.css";
import ReservasiCard from "../Components/ReservasiCard";
import AddUserCard from "./ReservasiCobaLagi";

 function Reservasi() {

  return (
        <div className="reservasi">
          <div className="pesanin">
            pesan<span className="in">.in</span>
          </div>

          <div className="text">
            <h3>Where do you<br/>wanna eat today?</h3>
          </div>
          
          <div className="rowContainerReservasi" >
            <ReservasiCard/>
          </div>
        </div>
  );
}

export default Reservasi;
import "../App.css";
import ReservasiCard from "../Components/ReservasiCard";
import AddUserCard from "./AddUserCard";

 function AddUser() {

  return (
        <div className="reservasi">
          <div className="pesanin">
            pesan<span className="in">.in</span>
          </div>

          <div className="text">
            <h3>Where do you<br/>wanna eat today?</h3>
          </div>
          
          <div className="rowContainerReservasi" >
            <AddUserCard/>
          </div>
        </div>
  );
}

export default AddUser;


// ** create-user.component.js ** //
// import React, { Component } from 'react';
// import axios from 'axios';
// export default class AddUserCarddd extends Component {
//     constructor(props) {
//         super(props)
//         this.onChangeOrderType = this.onChangeOrderType.bind(this);
//         this.onChangeTableNo = this.onChangeTableNo.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             order_type: '',
//             table_no: ''
//         }
//     }
//     onChangeOrderType(e) {
//         this.setState({ order_type: e.target.value })
//     }
//     onChangeTableNo(e) {
//         this.setState({ table_no: e.target.value })
//     }
//     onSubmit(e) {
//         e.preventDefault()
//         const userObject = {
//             order_type: this.state.order_type,
//             table_no: this.state.table_no
//         };
//         axios.post('http://localhost:3000/order', userObject)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });
//         this.setState({ order_type: '', table_no: '' })
//     }

//     render() {
//         return (
//             <div className="wrapper">
//                 <form onSubmit={this.onSubmit}>
//                     <div className="form-group">
//                         <label>Type</label>
//                         <input type="text" value={this.state.order_type} onChange={this.onChangeOrderType} className="form-control" />
//                     </div>
//                     <div className="form-group">
//                         <label>No Table</label>
//                         <input type="text" value={this.state.table_no} onChange={this.onChangeTableNo} className="form-control" />
//                     </div>
//                         <input type="submit" value="Create User" className="btn btn-success btn-block" />
//                 </form>
//             </div>
//         )
//     }
// }
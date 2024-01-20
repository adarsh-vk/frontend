import React from "react";
import "./AdminBody.css";

const AddPrk = () => {
  return (
    <div>
      <div className="container">
        <div className="table-wrapper1">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-8">
                <h2>
                  Paking Slot <b>Details</b>
                </h2>
              </div>
              <div className="col-sm-4">
                <button type="button" className="btn btn-info add-new">
                  <i className="fa fa-plus"></i> Add New
                </button>
              </div>
            </div>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Vehicle Type</th>
                <th>Slots Available</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>car</td>
                <td>15</td>
                <td>
                  <a className="add" title="Add" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                  <a className="edit" title="Edit" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                  <a className="delete" title="Delete" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>bike</td>
                <td>10</td>
                <td>
                  <a className="add" title="Add" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                  <a className="edit" title="Edit" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                  <a className="delete" title="Delete" data-toggle="tooltip">
                    <i className="material-icons"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddPrk;

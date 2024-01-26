import React from "react";

const UserInfo = ({
  id,
  name,
  email,
  username,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div>
      <table className="user-info">
        <thead>
          <tr>
            <th colSpan="2">User Information</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{email}</td>
          </tr>
          <tr>
           
          </tr>
          <tr>
            <td colSpan="2">
              <h3>Address</h3>
            </td>
          </tr>
          <tr>
            <td>Street:</td>
            <td>{address.street}</td>
          </tr>
          <tr>
            <td>Suite:</td>
            <td>{address.suite}</td>
          </tr>
          <tr>
            <td>City:</td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td>Zipcode:</td>
            <td>{address.zipcode}</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td colSpan="2">
              <h3>Geo</h3>
            </td>
          </tr>
          <tr>
            <td>Lat:</td>
            <td>{address.geo.lat}</td>
          </tr>
          <tr>
            <td>Lng:</td>
            <td>{address.geo.lng}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>Website:</td>
            <td>{website}</td>
          </tr>
          <tr>
          </tr>
          <tr>
            <td colSpan="2">
              <h3>Company</h3>
            </td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{company.name}</td>
          </tr>
          <tr>
            <td>CatchPhrase:</td>
            <td>{company.catchPhrase}</td>
          </tr>
          <tr>
            <td>Bs:</td>
            <td>{company.bs}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserInfo;

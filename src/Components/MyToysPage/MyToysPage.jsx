import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyToysPage = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch the toys data for the logged-in user
    fetch(`http://localhost:5000/myToys`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, [user]);

  const handleUpdateToy = (toyId) => {
    // Handle the update action for a specific toy
    // You can show a modal or navigate to a different route for updating the toy information
    console.log("Update toy:", toyId);
  };

  const handleDeleteToy = (toyId) => {
    // Confirm the delete action before removing the toy
    Swal.fire({
      title: "Confirmation",
      text: "Are you sure you want to delete this toy?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete the toy
        fetch(`http://localhost:5000/toys/${toyId}`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer {accessToken}",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              // Toy deleted successfully
              Swal.fire({
                title: "Deleted!",
                text: "The toy has been deleted.",
                icon: "success",
                confirmButtonText: "OK",
              });
              // Update the toys list
              setToys((prevToys) =>
                prevToys.filter((toy) => toy._id !== toyId)
              );
            } else {
              // Failed to delete toy
              Swal.fire({
                title: "Error",
                text: "Failed to delete the toy.",
                icon: "error",
                confirmButtonText: "OK",
              });
            }
          })
          .catch((error) => {
            console.error("Error deleting toy:", error);
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold underline mb-10 text-center">
        My Toys
      </h1>
      {toys.length === 0 ? (
        <p>No toys found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <tr key={toy._id}>
                <td>{toy.name}</td>
                <td>{toy.price}</td>
                <td>{toy.quantity}</td>
                <td>{toy.description}</td>
                <td>
                  <button
                    onClick={() => handleUpdateToy(toy._id)}
                    className="mr-2"
                  >
                    Update
                  </button>
                  <button onClick={() => handleDeleteToy(toy._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyToysPage;

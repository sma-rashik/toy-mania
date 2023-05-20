import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyToysPage = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState("asc"); // Sort order state, "asc" or "desc"

  useEffect(() => {
    // Fetch toys with sorting
    fetch(`https://toy-assignment-11-server.vercel.app/toys?sort=${sort}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((data) => {
        // Filter the toys based on the logged-in user's ID
        const userToys = data.filter((toy) => toy.userId === user.userId);
        setToys(userToys);
      })
      .catch((error) => {
        console.error("Error fetching toys:", error);
      });
  }, [user, sort]);

  const handleSortChange = (e) => {
    setSort(e.target.value); // Update the sort state when the user selects a different sorting order
  };

  const handleUpdateToy = (toyId) => {
    // Handle the update action for a specific toy
    // You can show a modal or navigate to a different route for updating the toy information
    console.log("Update toy:", toyId);
  };

  const handleDeleteToy = (toyId) => {
    console.log(toyId);
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
        fetch(`https://toy-assignment-11-server.vercel.app/toys/${toyId}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
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
  useEffect(() => {
    document.title = "ToyMania | MyToysPage";
  }, []);

  return (
    <>
      <div className="overflow-x-auto mt-8">
        <h1 className="text-5xl text-cyan-400 text-center m-4 mt-4 font-semibold font-mono underline">
          My Toys
        </h1>
        {toys.length === 0 ? (
          <p>No toys found.</p>
        ) : (
          <>
            {/* Add sorting UI elements */}
            <div className="text-center m-10">
              <label htmlFor="sort" className="mr-2">
                Sort Order:
              </label>
              <select
                id="sort"
                value={sort}
                onChange={handleSortChange}
                className="border border-gray-300 rounded px-2 py-1"
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </div>

            <table className="min-w-full mb-5 divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Toy Image
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Available Quantity
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Price
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>

              <tbody className="divide-y text-center divide-gray-200">
                {toys.map((toy) => (
                  <tr key={toy._id}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      <img className="w-28 h-28" src={toy.picture} alt="" />
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">
                      {toy.name}
                    </td>
                    <td className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700">
                      {toy.quantity}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">
                      ${toy.price}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <Link to={`/updatetoy/${toy._id}`}>
                        <button
                          onClick={() => handleUpdateToy(toy._id)}
                          className="mr-2 btn btn-link"
                        >
                          Update
                        </button>
                      </Link>
                      <button
                        className="btn btn-link"
                        onClick={() => handleDeleteToy(toy._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default MyToysPage;

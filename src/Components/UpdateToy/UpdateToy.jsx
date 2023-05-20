import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const toy = useLoaderData();
  const { _id, name, category, rating, price, quantity } = toy;
  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.toyName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const updateToy = {
      name,
      category,
      rating,
      price,
      quantity,
    };
    console.log(updateToy);
    fetch(`https://toy-assignment-11-server.vercel.app/toys/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "success",
            text: "Toy Updated!.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  useEffect(() => {
    document.title = "ToyMania | UpdateToy";
  }, []);
  return (
    <>
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form onSubmit={handleAddToy} action="" className="space-y-4">
          <h1 className="text-3xl font-semibold underline mb-10 text-center">
            Update Toys Here:{name}
          </h1>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">
                Name
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                defaultValue={name}
                placeholder="Name "
                name="toyName"
                type="text"
                id="name"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Sub-category
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Sub-category.(Soft Toys/Board Games/Sports)"
                defaultValue={category}
                type="text"
                name="category"
                id="phone"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label className="sr-only" htmlFor="email">
                Price
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Price "
                defaultValue={price}
                name="price"
                type="text"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">
                Rating
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Rating"
                defaultValue={rating}
                type="tel"
                name="rating"
                id="phone"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="phone">
                Available Quantity
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Available Quantity"
                defaultValue={quantity}
                type="tel"
                name="quantity"
                id="phone"
              />
            </div>
          </div>

          <div className="mt-4 text-center">
            <input
              type="submit"
              value="Update Toy"
              className="inline-block text-center cursor-pointer w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateToy;

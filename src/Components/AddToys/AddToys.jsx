import React, { useRef } from "react";
import Swal from "sweetalert2";

const AddToys = () => {
  const formRef = useRef(null);

  const handleAddToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const description = form.description.value;
    const quantity = form.quantity.value;
    const newToy = {
      name,
      photo,
      category,
      rating,
      price,
      description,
      quantity,
    };
    console.log(newToy);
    fetch(`http://localhost:5000/addToys`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys added",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Reset the form
          formRef.current.reset();
        }
      });
  };

  return (
    <div>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form
                ref={formRef}
                onSubmit={handleAddToy}
                action=""
                className="space-y-4"
              >
                <h1 className="text-3xl font-semibold underline mb-10 text-center">
                  Add Toys Here:
                </h1>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Photo Url
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Photo Url"
                    type="url"
                    name="photo"
                    id="photo"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name "
                      name="name"
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
                      type="tel"
                      name="quantity"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Description
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Description"
                    rows="8"
                    name="description"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <input
                    type="submit"
                    value="Add Toy"
                    className="inline-block cursor-pointer w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddToys;

import React from "react";
import { Link } from "react-router-dom";

const Toy = ({ toy }) => {
  const { _id, picture, name, price, rating, quantity } = toy;
  return (
    <>
      <div className="overflow-x-auto mt-8 ">
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
            <tr>
              <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                <img className=" w-28 h-28" src={picture} alt="" srcSet="" />
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">
                {name}
              </td>
              <td className="whitespace-nowrap font-semibold px-4 py-2 text-gray-700">
                {quantity}
              </td>
              <td className="whitespace-nowrap px-4 py-2 font-semibold text-gray-700">
                ${price}
              </td>
              <td className="whitespace-nowrap px-4 py-2">
                <Link
                  to=""
                  className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                >
                  View
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Toy;

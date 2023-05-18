import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCompo = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:5000/toys");
        const data = await response.json();
        setDatas(data);
      } catch (error) {
        console.log("Error fetching tab data:", error);
      }
    };

    fetchdata();
  }, []);

  return (
    <div className="flex">
      <Tabs>
        <TabList>
          <Tab>Soft Toys</Tab>
          <Tab>Board Games</Tab>
          <Tab>Sports</Tab>
        </TabList>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-20">
          <TabPanel>
            {datas
              .filter((data) => data.subCategory === "Soft Toys")
              .map((data) => (
                <div
                  key={data.name}
                  className="card card-compact bg-base-100 shadow-xl"
                >
                  <figure>
                    <img className="h-72 w-96" src={data.picture} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">Name: {data.name}</h2>
                    <p className="text-xl">Price: ${data.price}</p>
                    <p className="text-xl">Rating: {data.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/toys/${data._id}`}>
                        <button className="btn btn-link">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>

          {/* Add TabPanel for Board Games */}
          <TabPanel>
            {datas
              .filter((data) => data.subCategory === "Board Games")
              .map((data) => (
                <div
                  key={data.name}
                  className="card card-compact bg-base-100 shadow-xl"
                >
                  <figure>
                    <img className="h-72 w-96" src={data.picture} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">Name: {data.name}</h2>
                    <p className="text-xl">Price: ${data.price}</p>
                    <p className="text-xl">Rating: {data.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/toys/${data._id}`}>
                        <button className="btn btn-link">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>

          {/* Add TabPanel for Sports */}
          <TabPanel>
            {datas
              .filter((data) => data.subCategory === "Sports")
              .map((data) => (
                <div
                  key={data.name}
                  className="card card-compact bg-base-100 shadow-xl"
                >
                  <figure>
                    <img className="h-72 w-96" src={data.picture} alt="Toy" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-bold">Name: {data.name}</h2>
                    <p className="text-xl">Price: ${data.price}</p>
                    <p className="text-xl">Rating: {data.rating}</p>
                    <div className="card-actions justify-end">
                      <Link to={`/toys/${data._id}`}>
                        <button className="btn btn-link">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default TabCompo;

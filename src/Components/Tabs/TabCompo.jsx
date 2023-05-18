import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const TabCompo = () => {
  const [tabDatas, setTabDatas] = useState([]);

  useEffect(() => {
    const fetchTabData = async () => {
      try {
        const response = await fetch("http://localhost:5000/toys");
        const data = await response.json();
        setTabDatas(data);
      } catch (error) {
        console.log("Error fetching tab data:", error);
      }
    };

    fetchTabData();
  }, []);

  return (
    <div className="flex">
      <Tabs>
        <TabList>
          <Tab>Dolls</Tab>
          <Tab>Puzzle</Tab>
          <Tab>Balls</Tab>
        </TabList>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 m-20">
          <TabPanel>
            {tabDatas.slice(0, 2).map((tabData) => (
              <div
                key={tabData.name}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img className="h-72 w-96" src={tabData.picture} alt="Toy" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title font-bold">Name: {tabData.name}</h2>
                  <p className="text-xl">Price: ${tabData.price}</p>
                  <p className="text-xl">Rating: {tabData.rating}</p>
                  <div className="card-actions justify-end">
                    <Link>
                      {" "}
                      <button className="btn  btn-link"> View Details</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {tabDatas.slice(2, 4).map((tabData) => (
              <div
                key={tabData.name}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img className="h-72 w-96" src={tabData.picture} alt="Toy" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{tabData.name}</h2>
                  <p className="text-xl">Price: ${tabData.price}</p>
                  <p className="text-xl">Rating: {tabData.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn  btn-link"> View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
          <TabPanel>
            {tabDatas.slice(4, 6).map((tabData) => (
              <div
                key={tabData.name}
                className="card card-compact bg-base-100 shadow-xl"
              >
                <figure>
                  <img className="h-72 w-96" src={tabData.picture} alt="Toy" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{tabData.name}</h2>
                  <p className="text-xl">Price: ${tabData.price}</p>
                  <p className="text-xl">Rating: {tabData.rating}</p>
                  <div className="card-actions justify-end">
                    <button className="btn  btn-link"> View Details</button>
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

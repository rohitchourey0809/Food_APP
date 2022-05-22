import "./Home.css";
import { PageComponents } from "../PageComponents";
import { RestaurentDetails } from "../RestaurentDetails";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const Home = () => {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);
  const [text, settext] = useState("");
  const [Q, setQ] = useState("");
  const [costorder, setcostorder] = useState("asc");
  const [ratingorder, setratingorder] = useState("asc");
  // const

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:8080/fooddata",
      params: {
        _page: page,
        _limit: 10,
        _sort: "rate,price",
        _order: `${costorder},${ratingorder}`,
        q: Q,
      },
    })
      .then((response) => {
        console.log("response", response);
        setdata(response.data);
        console.log("responsedata", response.data);
      })
      .catch((err) => console.log("error", err));
  }, [page, Q, costorder, ratingorder]);

  return (
    <>
      <div>
        <h2>Home </h2>

        {/* -------------SEARCHBYQ------------- */}
        <input
          // type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
        />
        <button onClick={(e) => setQ(text)}>Search By Q</button>
        {/* -------------SEARCHBYQ------------- */}

        {/* ---------------Sort By Price------------- */}
        <div>
          <button
            disabled={costorder === "desc"}
            onClick={() => setcostorder("desc")}
          >
            SORT BY DESC COST
          </button>
          <button
            disabled={costorder === "asc"}
            onClick={() => setcostorder("asc")}
          >
            SORT BY ASC COST
          </button>
        </div>
        {/* ---------------Sort By Price------------- */}

        {/* ---------Sort By Rating--------------------- */}
        <div>
          <button
            onClick={() => setratingorder("desc")}
            disabled={ratingorder === "desc"}
          >
            Desc By Rating
          </button>
          <button
            onClick={() => setratingorder("asc")}
            disabled={ratingorder === "asc"}
          >
            Ascend By Rating
          </button>
        </div>
        {/* ---------Sort By Rating--------------------- */}

        <div>
          {" "}
          <PageComponents
            CurrentPage={page}
            OnpageChange={setpage}
            lastPage={6}
          />
        </div>
        <div className="container">
          {data.map((e) => (
            <RestaurentDetails key={e.id} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};

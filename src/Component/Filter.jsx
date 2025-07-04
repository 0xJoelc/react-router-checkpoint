import { Select } from "antd";
import { useState } from "react";
import { movieData } from "../data";

function Filter({changeTitle,changeRating}) {


  return (
    <div className="max-w-[1200px] mx-auto mt-10 px-4">
      <Select
        showSearch
        placeholder="Search Movie"
        optionFilterProp="label"
        onChange={changeTitle}
        options={[
          {
            value: "Better call Saul",
            label: "Better call Saul",
          },
          {
            value: "Breaking Bad",
            label: "Breaking Bad",
          },
          {
            value: "Snow Fall",
            label: "Snow Fall",
          },
          {
            value: "Suits",
            label: "Suits",
          },
          {
            value: "The Wire",
            label: "The Wire",
          },
          {
            value: "Power Book",
            label: "Power Book",
          },
        ]}
      />
      <Select
        showSearch
        placeholder="Search Movie"
        optionFilterProp="label"
        onChange={changeRating}
        options={[
          {
            value: 10,
            label: 10,
          },
          {
            value: 9.5,
            label: 9.5,
          },
          {
            value: 9,
            label: 9,
          },
          {
            value: 7,
            label: 7,
          },
          {
            value: 8.5,
            label: 8.5,
          },
          {
            value: 8.7,
            label: 8.7,
          },
        ]}
      />
    </div>
  );
}
export default Filter;

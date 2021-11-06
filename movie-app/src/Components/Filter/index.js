import React, { useState } from "react";
import "./_Filter.scss";
import { Input, Space, Select } from "antd";
const { Search } = Input;

function Filter(props) {
  const [filter, setFilter] = useState("");
  const [selectFilter,setSelectFilter] = useState("")


  const onHandleFilter = (e) => {
    setFilter(e.target.value);
  }; // nhập kí tự vào input

  const onSearch = () => {
    console.log(filter)
  }; // click nút search

  const { Option } = Select;

  const onHandleSelect = (e) => {
    setSelectFilter(e)
  };

  return (
    <div className="filter-container">
      <h1 style={{color:"white"}}>Filter</h1>
      <Space>
        <Search
          size="large"
          className="filter-input"
          placeholder="input search film"
          value={filter}
          onChange={(e) => onHandleFilter(e)}
          onSearch={onSearch}
          enterButton
          allowClear={true}
        />
      </Space>

      <Select
        className="filter-select"
        style={{ width: 200 }}
        placeholder="Filter"
        onChange={(e) => onHandleSelect(e)}
      >
        <Option value="aToZ">Title ( A-Z) </Option>
        <Option value="zToA">Title (Z-A) </Option>
        <Option value="ratingAscending">Rating Ascending</Option>
        <Option value="ratingDescending">Rating Descending</Option>
      </Select>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import "./_Filter.scss";
import { Input, Space, Select } from "antd";
const { Search } = Input;

function Filter({onChangeSortType,onChangefilterKeyWords}) {
  const [filter, setFilter] = useState("");



  const onHandleFilter = (e) => {
    setFilter(()=>{
      setFilter(e.target.value) // set State cho ô search filter
      onChangefilterKeyWords(e.target.value) // truyền value ra component ListFilmPage
    });
  }; // nhập kí tự vào input


  const { Option } = Select;

  const onHandleSelect = (e) => {
    // setSelectFilter(e) // set lại hiển thị bên component filter
    onChangeSortType(e) // set lại sortType ở component cha
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

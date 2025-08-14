import React from "react";

function SearchFilter({ search, setSearch, filterDivision, setFilterDivision }) {
  return (
    <div className="row mb-3">
      <div className="col-md-4 mb-2">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="col-md-4 mb-2">
        <select
          className="form-select"
          value={filterDivision}
          onChange={(e) => setFilterDivision(e.target.value)}
        >
          <option value="">All Divisions</option>
          <option value="First Division">First</option>
          <option value="Second Division">Second</option>
          <option value="Third Division">Third</option>
          <option value="Fail">Fail</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilter;

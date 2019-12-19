import React, { Component } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import List from "./List";

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
    this.state = {
      search: "",
      type: "All Types",
      country: "All Countries",
      sort: "Sort: none"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = event => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  };

  /*
   * This function gets called every time a new filter type is selected in the dropdown. Your job is to handle the state
   * changes that should occur when a new filter type is selected.
   */
  onSelectFilterType = event => {
    //TODO Set the state of the filter type in this.state
    this.setState({ type: event });
  };


  onSelectFilterCountry = event => {
    this.setState({ country: event });
  }

  onSelectSort = event => {
    this.setState({ sort: event });
  }

  /*
   * This function should determine whether the item being passed in matches the type
   * that we are filtering on. Remember that the selected type we are filtering on is stored
   * in this.state!
   * Input: An element from your List component
   * Output: true or false
   */
  matchesFilterType = item => {
    // TODO: add conditions to check if item type is equal to selected type
    if(this.state.type == "All Types" || (item.props.type == this.state.type) )
        return true;
    else
        return false;
  }

  matchesFilterCountry = item => {
    if(this.state.country == "All Countries" || item.props.country == this.state.country)
      return true;
    else
      return false;
  }

  /*
   * The function is passed into a builtin filter() function. filter() calls this function on every element
   * in the list. If this fucntion returns true for a given element, filter() will add that element to its
   * return list.
   */
  filterAndSearch = item => {
    return item.props.name.toLowerCase().search(this.state.search) !== -1 && this.matchesFilterType(item) && this.matchesFilterCountry(item);
  }

  render() {
    return (
      <div className="filter-list">
        <h2 className="filter_title">Discover Great Wines</h2>
        {/* TODO: Add more menu items with onSelect handlers*/}
        <div className ="filter-things">
        <DropdownButton title={this.state.type} id="dropdown-type">
          <Dropdown.Item eventKey="All Types" onSelect={this.onSelectFilterType}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Type: White" onSelect={this.onSelectFilterType}>
            White
          </Dropdown.Item>
          <Dropdown.Item eventKey="Type: Red" onSelect={this.onSelectFilterType}>
            Red
          </Dropdown.Item>
        </DropdownButton>

        <DropdownButton title={this.state.country} id="dropdown-filter">
          <Dropdown.Item eventKey="All Countries" onSelect={this.onSelectFilterCountry}>
            All
          </Dropdown.Item>
          <Dropdown.Item eventKey="Country: Australia" onSelect={this.onSelectFilterCountry}>
            Australia
          </Dropdown.Item>
          <Dropdown.Item eventKey="Country: France" onSelect={this.onSelectFilterCountry}>
            France
          </Dropdown.Item>
          <Dropdown.Item eventKey="Country: Italy" onSelect={this.onSelectFilterCountry}>
            Italy
          </Dropdown.Item>
          <Dropdown.Item eventKey="Country: U.S." onSelect={this.onSelectFilterCountry}>
            U.S.
          </Dropdown.Item>

        </DropdownButton>

        <DropdownButton title={this.state.sort} id="dropdown-sort">
          <Dropdown.Item eventKey="Sort: none" onSelect={this.onSelectSort}>
            None
          </Dropdown.Item>
          <Dropdown.Item eventKey="Sort: Score" onSelect={this.onSelectSort}>
            Score
          </Dropdown.Item>

        </DropdownButton>

        <input type="text" placeholder="Search" onChange={this.onSearch} />

        </div>

        <List className="lists" items={this.props.items.filter(this.filterAndSearch)} sort={this.state.sort} />

      </div>
    );
  }
}

export default FilteredList;

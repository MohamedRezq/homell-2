import { Button, DropdownButton, Dropdown, ButtonGroup } from "react-bootstrap";
import DropDownContent from "./header/DropDownContent";

const FilterBar = () => {
  return (
    <div className="d-flex justify-content-center justify-content-sm-between my-3">
      <div className="d-none d-sm-block"></div>
      <div>
        <DropdownButton
          as={ButtonGroup}
          title={
            <span>
              Sort By
              <i class="fas fa-sort-alt px-2"></i>
            </span>
          }
          id="bg-nested-dropdown"
          variant="info"
          size="md"
          className="mx-2"
          alignRight="true"
        >
          <Dropdown.Item size="sm" eventKey="1">
            Most Recent
          </Dropdown.Item>
          <Dropdown.Item eventKey="2">Price Highest to Lowest</Dropdown.Item>
          <Dropdown.Item eventKey="3">Price Lowest to Highest</Dropdown.Item>
          <Dropdown.Item eventKey="4">Area Highest to Lowest</Dropdown.Item>
          <Dropdown.Item eventKey="5">Area Lowest to Highest</Dropdown.Item>
        </DropdownButton>
        <div className="filterBtn d-inline-block">
          <DropdownButton
            as={ButtonGroup}
            title={
              <span>
                Filter
                <i class="fas fa-filter px-2"></i>
              </span>
            }
            id="bg-nested-dropdown"
            variant="info"
            size="md"
            alignRight="true"
          >
            <DropDownContent />
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;

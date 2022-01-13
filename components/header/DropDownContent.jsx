import { ListGroup } from "react-bootstrap";

const DropDownContent = () => {
  return (
    <div className="d-flex">
      <ListGroup horizontal="md" className="d-flex-column d-md-flex-row w-100">
        <ListGroup.Item>This ListGroup</ListGroup.Item>
        <ListGroup.Item>renders horizontally</ListGroup.Item>
        <ListGroup.Item>on md</ListGroup.Item>
        <ListGroup.Item>and above!</ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default DropDownContent;

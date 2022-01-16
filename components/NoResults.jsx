import FilterBar from "components/FilterBar";
import Link from "next/link";
import { Button } from "react-bootstrap";

const NoResults = () => {
  return (
    <div className="w-100 d-flex flex-column align-content-center">
      <div className="text-center my-5 mx-3">
        <div style={{ fontWeight: "bold", color: "black" }}>Oops.</div>
        There are no properties with the filters you applied, Try to search
        again with other filter values.
      </div>
      <Button variant="dark" className="mx-auto">
        <Link href="/">
          <a className="text-white">Go Back</a>
        </Link>
      </Button>
    </div>
  );
};

export default NoResults;

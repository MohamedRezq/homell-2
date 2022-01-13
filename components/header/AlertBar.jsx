import Link from "next/link";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
const AlertBar = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="m-0 py-2 d-none d-md-block"
        variant="secondary"
        onClose={() => setShow(false)}
        dismissible
      >
        {/*<Alert.Heading>Oh snap! You got an error!</Alert.Heading>*/}
        <Link href="#">
          <a>
            <h6 className="text-center alertText mb-0 fs-6">
              <p className="fw-bolder d-inline blink_me fw-bolder mx-2">
                7.5 %
              </p>
              HOMELL is now offering the best home loans.
              <span className="d-none d-md-inline">
                <Button variant="outline-success" className="mx-3 alertButton" size="sm">
                  Know More
                </Button>
              </span>
            </h6>
          </a>
        </Link>
      </Alert>
    );
  }
  return <></>;
};

export default AlertBar;

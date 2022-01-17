import Link from "next/link";
import { useState } from "react";
import { Alert, Button } from "react-bootstrap";
const AlertBar = () => {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert
        className="m-0 py-3 d-none d-md-block"
        variant="secondary"
        onClose={() => setShow(false)}
        dismissible
      >
        {/*<Alert.Heading>Oh snap! You got an error!</Alert.Heading>*/}
            <h6
              className="text-center alertText mb-0 fs-6"
              style={{ fontSize: "10pt", textDecoration: "underline" }}
            >
              <span
                href=""
                style={{ fontWeight: "bold", color: "black", fontSize: "12pt" }}
              >
                Note:{" "}
              </span>
              This website is a project by{" "}
              <a
                href=""
                style={{ fontWeight: "bold", color: "black", fontSize: "12pt" }}
              >
                REZQ (Web Developer)
              </a>{" "}
              and it is not intended for any commercial purposes.
            </h6>
      </Alert>
    );
  }
  return <></>;
};

export default AlertBar;

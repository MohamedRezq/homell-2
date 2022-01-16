import { useEffect, useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { connect } from "react-redux";
import {
  filterByPrice,
  filterByArea,
  filterByBaths,
  filterByRooms,
} from "store/userValues/userValuesSlice";
const InputRange = ({
  min = 100000,
  max = 1500000,
  filterOn = "price",
  filterByPrice,
  filterByArea,
  filterByBaths,
  filterByRooms,
}) => {
  const MIN = min.toFixed(0);
  const MAX = max.toFixed(0);
  let STEP = 1;
  if (max - min > 1000) {
    STEP = 100;
  } else if (max - min > 100) {
    STEP = 10;
  } else {
    STEP = 1;
  }
  const [values, setValues] = useState([MIN, MAX]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Range
        draggableTrack
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={(values) => {
          setValues(values);
          switch (filterOn) {
            case "price":
              filterByPrice(values);
              break;
            case "area":
              filterByArea(values);
              break;
            case "baths":
              filterByBaths(values);
              break;
            case "rooms":
              filterByRooms(values);
              break;
            default:
              break;
          }
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "20px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX,
                }),
                alignSelf: "center",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "25px",
              width: "25px",
              borderRadius: "24px",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA",
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC",
              }}
            />
          </div>
        )}
      />
      <output style={{ marginTop: "30px", fontSize: "10pt" }} id="output">
        <span className="bg-info p-2 rounded-pill">
          Min: {values[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
        <i class="fas fa-long-arrow-alt-right mx-3"></i>
        <span className="bg-info p-2 rounded-pill">
          Max: {values[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
      </output>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = {
  filterByPrice,
  filterByArea,
  filterByBaths,
  filterByRooms,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputRange);

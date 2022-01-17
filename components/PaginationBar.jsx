import { useRouter } from "next/router";
import { Pagination } from "react-bootstrap";
import { connect } from "react-redux";

const PaginationBar = ({
  curntPage,
  lastPage = 20,
  userPurpose,
  userMinPrice,
  userMaxPrice,
  userMinRooms,
  userMaxRooms,
  userMinBaths,
  userMaxBaths,
  userMinArea,
  userMaxArea,
  userFurnishingStatus,
  userTypeId,
}) => {
  const router = useRouter();
  if (curntPage > 5 && curntPage <= lastPage - 5) {
    return (
      <Pagination className="paginationList">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        {[-2, -1, 0, 1, 2].map((no, i) => (
          <Pagination.Item key={i}>{curntPage + no}</Pagination.Item>
        ))}

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  }
  if (curntPage <= 5) {
    let pages = [1, 2, 3, 4, 5];
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {pages.map((page, i) => {
          if (page == curntPage)
            return (
              <Pagination.Item active key={i}>
                {page}
              </Pagination.Item>
            );
          else
            return (
              <Pagination.Item
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(
                    `/filter/?purpose=${userPurpose}&minPrice=${userMinPrice}&maxPrice=${userMaxPrice}&minArea=${userMinArea}&maxArea=${userMaxArea}&minRooms=${userMinRooms}&maxRooms=${userMaxRooms}&minBaths=${userMinBaths}&maxBaths=${userMaxBaths}&type=${userTypeId}&furnishStatus=${userFurnishingStatus}&page=${e.target.text}`
                  );
                }}
              >
                {page}
              </Pagination.Item>
            );
        })}
        <Pagination.Ellipsis />
        <Pagination.Item>{curntPage + 10}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  }
  if (curntPage >= lastPage - 4 && curntPage <= lastPage) {
    let pages = [16, 17, 18, 19, 20];
    return (
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Item>{curntPage - 10}</Pagination.Item>
        <Pagination.Ellipsis />
        {pages.map((page, i) => {
          if (page == curntPage)
            return <Pagination.Item active key={i}>{page}</Pagination.Item>;
          else return <Pagination.Item key={i}>{page}</Pagination.Item>;
        })}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    );
  }
  return <>Error</>;
};
const mapStateToProps = (state) => ({
  userPurpose: state.userValues.userPurpose,
  userMinPrice: state.userValues.userMinPrice,
  userMaxPrice: state.userValues.userMaxPrice,
  userMinRooms: state.userValues.userMinRooms,
  userMaxRooms: state.userValues.userMaxRooms,
  userMinBaths: state.userValues.userMinBaths,
  userMaxBaths: state.userValues.userMaxBaths,
  userMinArea: state.userValues.userMinArea,
  userMaxArea: state.userValues.userMaxArea,
  userFurnishingStatus: state.userValues.userFurnishingStatus,
  userTypeId: state.userValues.userTypeId,
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBar);

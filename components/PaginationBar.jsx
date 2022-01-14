import { Pagination } from "react-bootstrap";

const PaginationBar = ({curntPage, lastPage = 20}) => {
    console.log(curntPage);
    if (curntPage > 5 && curntPage <= (lastPage-5)) {
      return (
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
  
          <Pagination.Item>{curntPage - 2}</Pagination.Item>
          <Pagination.Item>{curntPage - 1}</Pagination.Item>
          <Pagination.Item active>{curntPage}</Pagination.Item>
          <Pagination.Item>{curntPage + 1}</Pagination.Item>
          <Pagination.Item>{curntPage + 2}</Pagination.Item>
  
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
              return <Pagination.Item active>{page}</Pagination.Item>;
            else return <Pagination.Item>{page}</Pagination.Item>;
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
    if (curntPage >= (lastPage-4) && curntPage <= lastPage) {
      let pages = [16,17,18,19,20];
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
              return <Pagination.Item active>{page}</Pagination.Item>;
            else return <Pagination.Item>{page}</Pagination.Item>;
          })}
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      );
    }
    return <>Error</>;
  };
  

export default PaginationBar

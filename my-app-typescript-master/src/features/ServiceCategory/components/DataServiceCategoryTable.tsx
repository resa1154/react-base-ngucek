import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Pagination, Button} from "semantic-ui-react";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { RootState } from "../../../app/store";
import { getDataServiceCategory } from "../service.reducer";

interface PaginationInt {
  limit: number;
  page: number;
}

const DataServiceCategoryTable = () => {
  const dispatch = useDispatch();
  const [dataServiceState, setDataServiceState] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
    page: 1,
    limit: 20
  });

  const DataServiceCategory = useSelector((state:RootState) => state.services.list);
  const DataCategoryFilter = useSelector((state:RootState) => state.services.filter);
 
  const itemDataCategoryFilter = DataCategoryFilter ?? [];

  const itemDataService = DataServiceCategory ?? [];
  console.log(itemDataService);

  useEffect(()=>{
    setDataServiceState(
      itemDataCategoryFilter.length === 0 ? itemDataService : itemDataCategoryFilter
    );
  }, [DataServiceCategory]);

  useEffect(()=>{
    setDataServiceState(
      itemDataCategoryFilter.length === 0 ? itemDataService : itemDataCategoryFilter
    );
  }, [DataCategoryFilter]);


    //Pagination Handler
    const onChangePage = (page: number) => {
      if (page !== pagination.page) {
        setPagination({ ...pagination, page: page as number });
       
      }
    };
    const handleChangePage = (
      event: React.MouseEvent<HTMLAnchorElement>,
      { activePage }: PaginationProps
    ) => {
      onChangePage(activePage as number);
    };
    const totalCount = dataServiceState.length;
    console.log(totalCount);
    
    const indexOfLastPage  = pagination.page * pagination.limit;
    const indexOfFirstPage = indexOfLastPage  - pagination.limit;
    const PagingService = dataServiceState.slice(indexOfFirstPage, indexOfLastPage  );


  const renderItemsTableRow = () =>{
    return PagingService.map((td:any) => (
      <Table.Row key={td.id}>
      <Table.Cell>{td.no}</Table.Cell>
      <Table.Cell>{td.categoryname}</Table.Cell>
      <Table.Cell>{td.headcategory}</Table.Cell>
      <Table.Cell>{td.note}</Table.Cell>
      <Table.Cell>
          <Link to={{
              pathname:"/ServiceCategoryDetail" ,
              search: `?id=${td.id}`
          }}>
              <Button>Detail</Button>
          </Link>

          <Button color="red">Delete</Button>
      </Table.Cell>
    </Table.Row>
    ));
}

useEffect(() =>{
dispatch(getDataServiceCategory());
},[]
);

    return(
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Category Name</Table.HeaderCell>
            <Table.HeaderCell>Head Category</Table.HeaderCell>
            <Table.HeaderCell>Note</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>


        <Table.Body>
        {renderItemsTableRow()}
        </Table.Body>
        <Table.Footer>
    <Table.Row>
      <Table.HeaderCell colSpan='8'>
      <Pagination
         boundaryRange={0}
         firstItem={null}
         lastItem={null}
                totalPages={Math.ceil(totalCount / pagination.limit)}
                activePage={pagination.page}
                onPageChange={handleChangePage}
              />
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
      </Table>
    );
}

export default DataServiceCategoryTable
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table, Pagination, Button } from "semantic-ui-react";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { RootState } from "../../../app/store";
import { deleteDataCustomer, getDataCustomer } from "../customer.reducer";

interface PaginationInt {
    limit: number;
    page: number;
  }
  
const DataCustomerTable = () => {
    const dispatch = useDispatch();
    const [datacustomerstate,setDataCustomerState] = useState([]);
    const [pagination, setPagination] = useState<PaginationInt>({
        page: 1,
        limit: 20,
      });

      const DataCustomer = useSelector((state:RootState) => state.customer.list);
      const DataCustomerFilter = useSelector((state: RootState) => state.customer.filter);
      const itemDataCustomer = DataCustomer ?? [];
      const itemDataCustomerFilter = DataCustomerFilter ?? [];

      useEffect(() => {
        setDataCustomerState(
            itemDataCustomerFilter.length === 0 ? itemDataCustomer : itemDataCustomerFilter
        );
      }, [DataCustomer]);
    
      useEffect(() => {
        setDataCustomerState(
            itemDataCustomerFilter.length === 0 ? itemDataCustomer : itemDataCustomerFilter
        );
      }, [DataCustomerFilter]);
      
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

  const totalCount = datacustomerstate.length;
  console.log(totalCount);

  const indexOfLastPage = pagination.page * pagination.limit;
  const indexOfFirstPage = indexOfLastPage - pagination.limit;
  const PagingCustomer = datacustomerstate.slice(indexOfFirstPage, indexOfLastPage);

  const onDelete = (id:string) => {
    dispatch(deleteDataCustomer({id}));
    console.log("delete");
    dispatch(getDataCustomer());
  }

  const onDeleteClicked = (e: any, data: any) => {
    dispatch(deleteDataCustomer(data.value));
    dispatch(getDataCustomer());
  };

  const renderItemsTableRow = () => {
    return PagingCustomer.map((td: any) => (
      <Table.Row key={td.id}>
        {/* <Table.Cell>{td.no}</Table.Cell> */}
        <Table.Cell>{td.firstName +" "+ td.lastName}</Table.Cell>
        <Table.Cell>{td.phoneNumber}</Table.Cell>
        <Table.Cell>{td.email}</Table.Cell>
        <Table.Cell>
          <Link to={{
            pathname:"/CustomerUpdate",
            search: `?id=${td.id}`
          }}>
            <Button color="teal">Update</Button>
          </Link>
          <Link
            to={{
              pathname: "/CustomerDetail",
              search: `?id=${td.id}`,
            }}
          >
            <Button>Detail</Button>
          </Link>

          <Button color="red" onClick={()=>{
            if(window.confirm("Apakah Kamu Yakin akan Menghapus data ini?"))
            onDelete(td.id);
          }}
          variant ="danger"
          >Delete</Button>
          {/* <Button color="red" onClick={onDeleteClicked} value={td.id}>Delete</Button> */}
        </Table.Cell>
      </Table.Row>
    ));
  };

  useEffect(() => {
    dispatch(getDataCustomer());
  }, []);
  
    return(
        <Table celled>
      <Table.Header>
        <Table.Row>
          {/* <Table.HeaderCell>No</Table.HeaderCell> */}
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>No. Telepon</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{renderItemsTableRow()}</Table.Body>
      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="8">
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

export default DataCustomerTable
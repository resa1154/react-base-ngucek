import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Pagination } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { getDataUser } from "../user.reducer";

interface PaginationInt {
  page: number;
  limit: number;
}

const DataUserTable = () => {
  const [dataUserState, setDataUserState] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
    page: 1,
    limit: 20,
  });

  const dispatch = useDispatch();

  const DataUsers = useSelector((state: RootState) => state.dataUser.list);
  const DataUsersFilter = useSelector(
    (state: RootState) => state.dataUser.filter
  );
  const itemDataUsers = DataUsers ?? [];
  const itemDataUsersFilter = DataUsersFilter ?? [];

  useEffect(() => {
    setDataUserState(
      itemDataUsersFilter.length === 0 ? itemDataUsers : itemDataUsersFilter
    );
  }, [itemDataUsers]);

  //   useEffect(()=>{
  //     setDataUserState(
  //         itemDataUsersFilter.length === 0 ? itemDataUsers : itemDataUsersFilter
  //     );
  //   }, [DataUsersFilter]);

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

  const totalCount = dataUserState.length;

  const indexOfLastPage = pagination.page * pagination.limit;
  const indexOfFirstPage = indexOfLastPage - pagination.limit;
  const PagingUser = dataUserState.slice(indexOfFirstPage, indexOfLastPage);

  const renderItemsTableRow = () => {
    return PagingUser.map((td: any) => (
      <Table.Row key={td.id}>
        <Table.Cell>{td.no}</Table.Cell>
        <Table.Cell>{td.name}</Table.Cell>
        <Table.Cell>{td.password}</Table.Cell>
        <Table.Cell>{td.roles}</Table.Cell>
        <Table.Cell>
          {/* <Link to={{
                  pathname:"/MitraDetail" ,
                  search: `?id=${td.id}`
              }}>
                  <Button>Detail</Button>
              </Link> */}
          <Button color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    ));
  };

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Password</Table.HeaderCell>
          <Table.HeaderCell>Roles</Table.HeaderCell>
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
};

export default DataUserTable;

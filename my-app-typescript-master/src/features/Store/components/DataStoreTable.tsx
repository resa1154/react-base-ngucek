import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table, Pagination } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { getDataStore } from "../store.reducer";

interface PaginationInt {
  limit: number;
  page: number;
}

const DataStoreTable = () => {
  const dispatch = useDispatch();
  const [datastorestate, setDataStoreState] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
    page: 1,
    limit: 20,
  });

  const DataStore = useSelector((state: RootState) => state.store.list);
  const DataStoreFilter = useSelector((state: RootState) => state.store.filter);
  const itemDataStore = DataStore ?? [];
  const itemDataStoreFilter = DataStoreFilter ?? [];


  useEffect(() => {
    setDataStoreState(
      itemDataStoreFilter.length === 0 ? itemDataStore : itemDataStoreFilter
    );
  }, [DataStore]);

  useEffect(() => {
    setDataStoreState(
      itemDataStoreFilter.length === 0 ? itemDataStore : itemDataStoreFilter
    );
  }, [DataStoreFilter]);

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

  const totalCount = datastorestate.length;
  console.log(totalCount);

  const indexOfLastPage = pagination.page * pagination.limit;
  const indexOfFirstPage = indexOfLastPage - pagination.limit;
  const PagingStore = datastorestate.slice(indexOfFirstPage, indexOfLastPage);

  const renderItemsTableRow = () => {
    return PagingStore.map((td: any) => (
      <Table.Row key={td.id}>
        <Table.Cell>{td.data.no}</Table.Cell>
        <Table.Cell>{td.data.storename}</Table.Cell>
        <Table.Cell>{td.data.status}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: "/StoreDetail",
              search: `?id=${td.id}`,
            }}
          >
            <Button>Detail</Button>
          </Link>

          <Button color="red">Delete</Button>
        </Table.Cell>
      </Table.Row>
    ));
  };

  useEffect(() => {
    dispatch(getDataStore());
  },[]);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
          <Table.HeaderCell>Nama Toko</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
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

export default DataStoreTable;

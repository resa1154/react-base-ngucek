import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table, Pagination } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { getDataKurir } from "../kurir.reducer";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";

interface PaginationInt {
  limit: number;
  page: number;
}

const DataKurirTable = () => {
  const dispatch = useDispatch();
  const [dataKurirState, setDataKurirState] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
    page: 1,
    limit: 20,
  });

  const DataKurir = useSelector((state: RootState) => state.kurir.list);
  const DataKurirFilter = useSelector((state: RootState) => state.kurir.filter);
  const itemDataKurir = DataKurir ?? [];
  const itemDataKurirFilter = DataKurirFilter ?? [];

  useEffect(() => {
    setDataKurirState(
      itemDataKurirFilter.length === 0 ? itemDataKurir : itemDataKurirFilter
    );
  }, [DataKurir]);

  useEffect(() => {
    setDataKurirState(
      itemDataKurirFilter.length === 0 ? itemDataKurir : itemDataKurirFilter
    );
  }, [DataKurirFilter]);

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

  const totalCount = dataKurirState.length;
  console.log(totalCount);

  const indexOfLastPage = pagination.page * pagination.limit;
  const indexOfFirstPage = indexOfLastPage - pagination.limit;
  const PagingKurir = dataKurirState.slice(indexOfFirstPage, indexOfLastPage);

  const renderItemsTableRow = () => {
    return PagingKurir.map((td: any) => (
      <Table.Row key={td.id}>
        <Table.Cell>{td.no}</Table.Cell>
        <Table.Cell>{td.name}</Table.Cell>
        <Table.Cell>{td.phoneNumber}</Table.Cell>
        <Table.Cell>{td.username}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: "/KurirDetail",
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
    dispatch(getDataKurir());
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>No. Telepon</Table.HeaderCell>
          <Table.HeaderCell>Username</Table.HeaderCell>
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

export default DataKurirTable;

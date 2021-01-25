import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import Pagination, {
  PaginationProps,
} from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { Link } from "react-router-dom";
import { getDataTermandCondition } from "../termandcondition.reducer";

interface PaginationInt {
  limit: number;
  page: number;
}

const DataTermsandConditionTable = () => {
  const [dataTerm, setDataTerm] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
    page: 1,
    limit: 20,
  });

  const dispatch = useDispatch();

  const DataTerm = useSelector((state: RootState) => state.term.list);
  const DataTermFilter = useSelector((state: RootState) => state.term.filter);
  const itemDataTerm = DataTerm ?? [];
  const itemDataTermFilter = DataTermFilter ?? [];

  useEffect(() => {
    setDataTerm(
      itemDataTermFilter.length === 0 ? itemDataTerm : itemDataTermFilter
    );
  }, [DataTerm]);

  useEffect(() => {
    setDataTerm(
      itemDataTermFilter.length === 0 ? itemDataTerm : itemDataTermFilter
    );
  }, [DataTermFilter]);

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

  const totalCount = dataTerm.length;
  console.log(totalCount);

  const indexOfLastPage = pagination.page * pagination.limit;
  const indexOfFirstPage = indexOfLastPage - pagination.limit;
  const PagingHelp = dataTerm.slice(indexOfFirstPage, indexOfLastPage);

  const renderItemsTableRow = () => {
    return PagingHelp.map((td: any) => (
      <Table.Row key={td.id}>
        <Table.Cell>{td.data.id}</Table.Cell>
        <Table.Cell>{td.data.title}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: "/SyaratDetail",
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
    dispatch(getDataTermandCondition());
  }, []);

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
          <Table.HeaderCell>Judul</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderItemsTableRow()}</Table.Body>
    </Table>
  );
};

export default DataTermsandConditionTable;

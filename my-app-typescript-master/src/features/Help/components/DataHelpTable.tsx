import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import Pagination, { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { RootState } from "../../../app/store";
import { getDataHelp } from "../help.reducer";


interface PaginationInt {
  limit: number;
  page: number;
}

const DataHelpTable = () => {
  const [dataHelp,setDataHelp] = useState([]);
  const [pagination, setPagination] = useState<PaginationInt>({
      page: 1,
      limit: 20,
    });

    
    const dispatch = useDispatch();

      const DataHelps = useSelector((state:RootState) => state.help.list);
      const DataHelpFilter = useSelector((state:RootState) => state.help.filter);
      const itemDataHelp = DataHelps ?? [];
      const itemDataHelpFilter = DataHelpFilter ?? [];

      useEffect(() => {
        setDataHelp(
          itemDataHelpFilter.length === 0 ? itemDataHelp : itemDataHelpFilter
        );
      }, [DataHelps]);

      useEffect(() => {
        setDataHelp(
          itemDataHelpFilter.length === 0 ? itemDataHelp : itemDataHelpFilter
       );
      }, [DataHelpFilter])

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

  const totalCount = dataHelp.length;
  console.log(totalCount);

    const indexOfLastPage = pagination.page * pagination.limit;
    const indexOfFirstPage = indexOfLastPage - pagination.limit;
    const PagingHelp = dataHelp.slice(indexOfFirstPage, indexOfLastPage);

    const renderItemsTableRow = () =>{
        return PagingHelp.map((td: any) => (
            <Table.Row key={td.id}>
              <Table.Cell>{td.data.id}</Table.Cell>
              <Table.Cell>{td.data.titleHelp}</Table.Cell>
              <Table.Cell>
                <Link
                  to={{
                    pathname: "/HelpDetail",
                    search: `?id=${td.data.id}`,
                  }}
                >
                  <Button>Detail</Button>
                </Link>
      
                <Button color="red">Delete</Button>
              </Table.Cell>
            </Table.Row>
          ));
    }

    useEffect(() => {
      dispatch(getDataHelp());
    }, [])
    
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>No</Table.HeaderCell>
          <Table.HeaderCell>Judul</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderItemsTableRow()}
      </Table.Body>
    </Table>
  )
}

export default DataHelpTable;

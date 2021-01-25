import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import Pagination, { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { RootState } from "../../../app/store";
import { getDataOrder } from "../order.reducer";

interface PaginationInt {
    limit: number;
    page: number;
  }
const DataOrderNgucekTable = () =>{
    const [dataorder,setDataOrder] = useState([]);
    const [pagination, setPagination] = useState<PaginationInt>({
        page: 1,
        limit: 20,
      });

    const dispatch = useDispatch();

      const DataOrder = useSelector((state:RootState) => state.order.list);
      const DataOrderFilter = useSelector((state:RootState) => state.order.filter);
      const itemDataOrder = DataOrder ?? [];
      const itemDataOrderFilter = DataOrderFilter ?? [];

      useEffect(() => {
        setDataOrder(
          itemDataOrderFilter.length === 0 ? itemDataOrder : itemDataOrderFilter
        );
      }, [DataOrder]);

      useEffect(() => {
       setDataOrder(
        itemDataOrderFilter.length === 0 ? itemDataOrder : itemDataOrderFilter
       );
      }, [DataOrderFilter])

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

  const totalCount = dataorder.length;
  console.log(totalCount);

    const indexOfLastPage = pagination.page * pagination.limit;
    const indexOfFirstPage = indexOfLastPage - pagination.limit;
    const PagingOrder = dataorder.slice(indexOfFirstPage, indexOfLastPage);

    const renderItemsTableRow = () =>{
        return PagingOrder.map((td: any) => (
            <Table.Row key={td.id}>
              <Table.Cell>{td.data.tanggalOrder}</Table.Cell>
              <Table.Cell>{td.data.customerName}</Table.Cell>
              <Table.Cell>{td.data.laundryName}</Table.Cell>
              <Table.Cell>{td.data.kurir}</Table.Cell>
              <Table.Cell>{td.data.statusOrder}</Table.Cell>
              <Table.Cell>
                <Link
                  to={{
                    pathname: "/OrderDetailEksklusif",
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
      dispatch(getDataOrder());
    }, [])

    return(
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Tanggal</Table.HeaderCell>
                    <Table.HeaderCell>Nama Customer</Table.HeaderCell>
                    <Table.HeaderCell>Nama Laundry</Table.HeaderCell>
                    <Table.HeaderCell>Kurir</Table.HeaderCell>
                    <Table.HeaderCell>Status Pesanan</Table.HeaderCell>
                    <Table.HeaderCell>Action</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                  {renderItemsTableRow()}
                </Table.Body>
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
    )
}

export default DataOrderNgucekTable
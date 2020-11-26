import React, {useEffect, useState} from "react";
import { Table, Button, Pagination } from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import {getDataMitra, setFilter} from "../mitra.reducer";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";

interface PaginationInt {
  limit: number;
  page: number;
}

const DataMitraTable = () => {
    const dispatch = useDispatch();
    const [dataMitraState, setDataMitraState] = useState([]);
    const [pagination, setPagination] = useState<PaginationInt>({
      page: 1,
      limit: 2
    });

    const MitraList = [{
        id:1,
        no:1,
        status:"Request",
        date:"17/11/2020",
        ownerName:"Ngucek",
        ownerEmail:"ngucek@gmail.com",
        ownerPhone:"081-234-342-211",
        storeAddress:"Jl Sudirman",
      },{
          id:2,
          no:2,
          status:"Verified",
          date:"15/11/2020",
          ownerName:"Ngucek",
          ownerEmail:"ngucek2@gmail.com",
          ownerPhone:"081-234-342-211",
          storeAddress:"Jl Holis",
      },{
        id:3,
        no:3,
        status:"Approved",
        date:"10/11/2020",
        ownerName:"MyNgucek",
        ownerEmail:"ngucek3@gmail.com",
        ownerPhone:"081-234-342-211",
        storeAddress:"Jl Jakarta",
    },{
      id:4,
      no:4,
      status:"Reject",
      date:"10/11/2020",
      ownerName:"MyNgucek",
      ownerEmail:"ngucek3@gmail.com",
      ownerPhone:"081-234-342-211",
      storeAddress:"Jl Jakarta",
  }];


    const DataMitra = useSelector((state:RootState) => state.mitra.list);
    const DataMitraFilter = useSelector((state:RootState) => state.mitra.filter);
    const itemDataMitra = DataMitra  ?? [];
    const itemDataMitraFilter = DataMitraFilter ?? [];

    useEffect(()=>{
      setDataMitraState(
        itemDataMitraFilter.length === 0 ? itemDataMitra : itemDataMitraFilter
      );
    }, [DataMitra]);

    useEffect(()=>{
      setDataMitraState(
        itemDataMitraFilter.length === 0 ? itemDataMitra : itemDataMitraFilter
      );
    }, [DataMitraFilter]);

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

    
    const totalCount = dataMitraState.length;
    console.log(totalCount);
    
    const indexOfLastPage  = pagination.page * pagination.limit;
    const indexOfFirstPage = indexOfLastPage  - pagination.limit;
    const PagingMitra    = dataMitraState.slice(indexOfFirstPage, indexOfLastPage  );

      const renderItemsTableRow = () =>{
          return PagingMitra .map((td:any) => (
            <Table.Row key={td.id}>
            <Table.Cell>{td.no}</Table.Cell>
            <Table.Cell>{td.status}</Table.Cell>
            <Table.Cell>{td.date}</Table.Cell>
            <Table.Cell>{td.nama}</Table.Cell>
            <Table.Cell>{td.email}</Table.Cell>
            <Table.Cell>{td.phoneNumber}</Table.Cell>
            <Table.Cell>{td.address}</Table.Cell>
            <Table.Cell>
                <Link to={{
                    pathname:"/MitraDetail" ,
                    search: `?id=${td.id}`
                }}>
                    <Button>Detail</Button>
                </Link>

                <Button color="red">Delete</Button>
            </Table.Cell>
          </Table.Row>
          ));
      }

      useEffect(() => {
        dispatch(getDataMitra());
      }, []);

      return(
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Owner's Name</Table.HeaderCell>
            <Table.HeaderCell>Owner's Email</Table.HeaderCell>
            <Table.HeaderCell>Owner's Phone</Table.HeaderCell>
            <Table.HeaderCell>Store Address</Table.HeaderCell>
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

export default DataMitraTable
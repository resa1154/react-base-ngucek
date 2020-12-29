import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Pagination, Table } from "semantic-ui-react";
import { PaginationProps } from "semantic-ui-react/dist/commonjs/addons/Pagination/Pagination";
import { RootState } from "../../../app/store";
import { getDataRole } from "../role.reducer";

interface PaginationInt{
    page:number,
    limit:number
}

const DataRoleTable = () => {
  const [dataRoleState, setDataRoleState] = useState([]);
    const [pagination, setPagination] = useState<PaginationInt>({
        page: 1,
        limit: 20
      });
    
      const dispatch = useDispatch();
    const Roles = [{
        id:1,
        no:1,
        roles:"Admin",
    },{
        id:2,
        no:2,
        roles:"Mitra"
    },{
        id:3,
        no:3,
        roles:"Surveyor"
    }]

    const DataRole = useSelector((state:RootState) => state.role.list);
    const DataRoleFilter = useSelector((state:RootState) => state.role.filter);
    const itemDataRole = DataRole  ?? [];
    const itemDataRoleFilter = DataRoleFilter ?? [];

    console.log(DataRole);

    useEffect(()=>{
      setDataRoleState(
        itemDataRoleFilter.length === 0 ? itemDataRole : itemDataRoleFilter
      );
    }, [DataRole]);

    useEffect(()=>{
      setDataRoleState(
        itemDataRoleFilter.length === 0 ? itemDataRole : itemDataRoleFilter
      );
    }, [DataRoleFilter]);
    
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

          const totalCount = dataRoleState.length;

          const indexOfLastPage  = pagination.page * pagination.limit;
          const indexOfFirstPage = indexOfLastPage  - pagination.limit;
          const PagingRole = dataRoleState.slice(indexOfFirstPage, indexOfLastPage  );

    const renderItemsTableRow = () =>{
        return PagingRole.map((td:any) => (
          <Table.Row key={td.id}>
          <Table.Cell>{td.no}</Table.Cell>
          <Table.Cell>{td.roles}</Table.Cell>
          <Table.Cell>
              <Link to={{
                  pathname:"/RoleDetail" ,
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
      dispatch(getDataRole());
    }, []);

    return(
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No</Table.HeaderCell>
            <Table.HeaderCell>Role Name</Table.HeaderCell>
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

export default DataRoleTable
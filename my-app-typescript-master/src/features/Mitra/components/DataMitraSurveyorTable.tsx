import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

const DataMitraSurveyorTable = () => {
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
          status:"Request",
          date:"15/11/2020",
          ownerName:"Ngucek",
          ownerEmail:"ngucek2@gmail.com",
          ownerPhone:"081-234-342-211",
          storeAddress:"Jl Holis",
      },{
        id:3,
        no:3,
        status:"Verified",
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

  const itemDataMitra = MitraList  ?? [];

  const renderItemsTableRow = () =>{
    return itemDataMitra.map((td:any) => (
      <Table.Row key={td.id}>
      <Table.Cell>{td.no}</Table.Cell>
      <Table.Cell>{td.status}</Table.Cell>
      <Table.Cell>{td.date}</Table.Cell>
      <Table.Cell>{td.nama}</Table.Cell>
      <Table.Cell>{td.ownerEmail}</Table.Cell>
      <Table.Cell>{td.ownerPhone}</Table.Cell>
      <Table.Cell>{td.storeAddress}</Table.Cell>
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
  {/* <Pagination
     boundaryRange={0}
     firstItem={null}
     lastItem={null}
            totalPages={Math.ceil(totalCount / pagination.limit)}
            activePage={pagination.page}
            onPageChange={handleChangePage}
          /> */}
  </Table.HeaderCell>
</Table.Row>
</Table.Footer>
  </Table>
  );

}

export default DataMitraSurveyorTable
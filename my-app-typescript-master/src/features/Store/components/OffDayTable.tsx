import React from "react";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";

const OffDayTable = () => {
  const OffDays = [{
    id:1,
    date:"20-12-2020",
    information:"Hari Nasional"
  }];

   const renderItemsTableRow = () =>{
      return OffDays.map((td:any) => (
        <Table.Row key={td.id}>
            <Table.Cell>{td.date}</Table.Cell>
            <Table.Cell>{td.information}</Table.Cell>
            <Table.Cell>
          {/* <Link
            to={{
              pathname: "/StoreDetail",
              search: `?id=${td.id}`,
            }}
          >
            <Button>Detail</Button>
          </Link> */}

          <Button color="red">Delete</Button>
        </Table.Cell>
        </Table.Row>
      ));
   }

    return (
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Tanggal</Table.HeaderCell>
            <Table.HeaderCell>Keterangan</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {renderItemsTableRow()}
        </Table.Body>
      </Table>
    );
}

export default OffDayTable
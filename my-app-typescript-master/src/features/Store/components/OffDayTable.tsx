import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Table } from "semantic-ui-react";
import { RootState } from "../../../app/store";
import { getDataOff } from "../store.reducer";

const OffDayTable = () => {
  const dispatch = useDispatch();
  const OffDays = [{
    id:1,
    date:"20-12-2020",
    information:"Hari Nasional"
  }];

  const OffDayState = useSelector((state:RootState) => state.store.list);
  const itemOffDay = OffDayState ?? [];
  console.log(itemOffDay);

   const renderItemsTableRow = () =>{
      return itemOffDay.map((td:any) => (
        <Table.Row key={td.id}>
            <Table.Cell>{td.data.date_day}</Table.Cell>
            <Table.Cell>{td.data.description_day}</Table.Cell>
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

   useEffect(() => {
    dispatch(getDataOff());
  },[]);

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
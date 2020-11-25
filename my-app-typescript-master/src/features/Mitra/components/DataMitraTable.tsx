import React, {useEffect} from "react";
import { Table, Menu, Icon, Button } from "semantic-ui-react";
import { useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../app/store";
import {getDataMitra, setFilter} from "../mitra.reducer";

const DataMitraTable = () => {
    const dispatch = useDispatch();

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
  
    const itemDataMitra = DataMitra  ?? [];

      const renderItemsTableRow = () =>{
          return itemDataMitra.map((td) => (
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
        <Menu floated='right' pagination>
          <Menu.Item as='a' icon>
            <Icon name='chevron left' />
          </Menu.Item>
          <Menu.Item as='a'>1</Menu.Item>
          <Menu.Item as='a'>2</Menu.Item>
          <Menu.Item as='a'>3</Menu.Item>
          <Menu.Item as='a'>4</Menu.Item>
          <Menu.Item as='a' icon>
            <Icon name='chevron right' />
          </Menu.Item>
        </Menu>
      </Table.HeaderCell>
    </Table.Row>
  </Table.Footer>
      </Table>
      );
}

export default DataMitraTable
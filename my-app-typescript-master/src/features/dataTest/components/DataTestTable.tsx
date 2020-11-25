import React, { useEffect } from "react";
import { Table } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getDataTest } from "../dataTest.reducer";

const DataTestTable = () => {
  const dispatch = useDispatch();

  const DataTestState = useSelector((state: RootState) => state.dataTest.list);

  const itemDataTest = DataTestState ?? [];
  const renderItemsTableRow = () => {
    return itemDataTest.map((td) => (
      <Table.Row key={td.id}>
        <Table.Cell>{td.name}</Table.Cell>
        <Table.Cell>{td.code}</Table.Cell>
        <Table.Cell>{td.symbol}</Table.Cell>
        <Table.Cell>{td.description}</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    ));
  };

  useEffect(() => {
    dispatch(getDataTest());
  }, []);

  return (
    <Table color={"yellow"} className="table-component">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>Kode</Table.HeaderCell>
          <Table.HeaderCell>Kota</Table.HeaderCell>
          <Table.HeaderCell>Telepon</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderItemsTableRow()}</Table.Body>
    </Table>
  );
};

export default DataTestTable;

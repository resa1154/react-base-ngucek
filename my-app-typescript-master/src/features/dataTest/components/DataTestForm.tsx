import React, { useState, ChangeEvent } from "react";
import { Form, InputOnChangeData, Button } from "semantic-ui-react";

const DataTestForm = ({ isLoading = false, ...props }: DataTestFormProps) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [symbol, setSymbol] = useState("");
  const [description, setDescription] = useState("");

  const onNameChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setName(value);
  };

  const onCodeChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setCode(value);
  };

  const onSymbolChange = (
    e: ChangeEvent<HTMLInputElement>,
    { value }: InputOnChangeData
  ) => {
    setSymbol(value);
  };

  const onDescriptionChange = (
    e: ChangeEvent<HTMLTextAreaElement>,
    { value }: any
  ) => {
    setDescription(value);
  };

  return (
    <Form
      loading={isLoading}
      onSubmit={() => props.onSubmit(name, code, symbol, description)}
    >
      <Form.Field>
        <label>Kode UOM</label>
        <Form.Input placeholder="Kode" onChange={onNameChange} value={name} />
      </Form.Field>
      <Form.Field>
        <label>Satuan</label>
        <Form.Input placeholder="Satuan" onChange={onCodeChange} value={code} />
      </Form.Field>
      <Form.Field>
        <label>Simbol</label>
        <Form.Input
          placeholder="Simbol"
          onChange={onSymbolChange}
          value={symbol}
        />
      </Form.Field>
      <Form.TextArea
        label="Note"
        onChange={onDescriptionChange}
        value={description}
      />

      <Button color="teal" floated="right" size="medium" style={{ width: 100 }}>
        create
      </Button>
    </Form>
  );
};

export interface DataTestFormProps {
  onSubmit: (
    name: string,
    code: string,
    symbol: string,
    description: string
  ) => void;
  isLoading?: boolean;
}

export default DataTestForm;

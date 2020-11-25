import React from "react";
import { Grid, Segment, Message } from "semantic-ui-react";
import UOMDetailForm from "../components/DataTestForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { createDataTest } from "../dataTest.reducer";
import { DataTestModel } from "../models";
import DataTestTable from "../components/DataTestTable";

const DataTestPage = () => {
  const dispatch = useDispatch();
  const DataTestState = useSelector((state: RootState) => state.dataTest);

  const onSubmit = (
    name: string,
    code: string,
    symbol: string,
    description: string
  ) => {
    dispatch(
      createDataTest({
        name,
        code,
        symbol,
        description,
      } as DataTestModel)
    );
  };

  return (
    <div className="main-content header-content">
      <Grid stackable>
        <Grid.Row columns={2} className="reverse-flex">
          <Grid.Column className="form-content">
            <Segment color="yellow">
              <UOMDetailForm
                isLoading={DataTestState.isLoading}
                onSubmit={onSubmit}
              />
              {DataTestState.error && (
                <Message error content={DataTestState.error?.message} />
              )}
            </Segment>
          </Grid.Column>
          <Grid.Column>
            <DataTestTable />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default DataTestPage;

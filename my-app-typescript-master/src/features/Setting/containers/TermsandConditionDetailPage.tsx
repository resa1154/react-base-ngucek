import React, { useEffect, useState } from "react";
import { Button, Container, Form, Grid, Menu } from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { getDataTermSingle } from "../termandcondition.reducer";

const TermsandConditionsDetailPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const TermConditionState = useSelector((state:RootState) => state.term.single);

  let history = useHistory();
  const search = history.location.search;
  const params = new URLSearchParams(search);
  const paramID = params.get("id") ?? "";

  useEffect(() => {
     dispatch(getDataTermSingle(paramID));
  }, [])

  useEffect(() => {
    if(TermConditionState !== undefined){
        setTitle(TermConditionState.data.title);
        setDescription(TermConditionState.data.description);
    }
  }, [TermConditionState !== undefined])
  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master - Syarat & Ketentuan</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Syarat">
              Back
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div className="form-content">
              <p className="title-content">Help Info</p>
              <Form>
                <Form.Field>
                  <label>Judul</label>
                  <Form.Input placeholder="" value={title} readOnly />
                </Form.Field>
                <Form.TextArea label="Description" placeholder="" value={description} readOnly />
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default TermsandConditionsDetailPage;

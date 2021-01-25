import React from "react";
import { Button, Container, Form, Grid, Menu } from "semantic-ui-react";
import { Editor } from '@tinymce/tinymce-react';
import { Link } from "react-router-dom";

const TermsandConditionsCreatePage = () => {
   const handleEditorChange = (content:any, editor:any) => {
        console.log('Content was updated:', content);
      }

      
  return (
    <Container fluid>
      <Menu secondary className="menu-header">
        <Menu.Item>
          <h3 className="h3">Master - Syarat & Ketentuan</h3>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button color="teal" as={Link} to="/Syarat">Cancel</Button>
          </Menu.Item>
          <Menu.Item>
            <Button color="teal">Save</Button>
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
                  <Form.Input placeholder="" />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <Editor
         
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={handleEditorChange}
       />
                </Form.Field>
              </Form>
            </div>
          </Grid.Column>
          <Grid.Column>
             
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default TermsandConditionsCreatePage 

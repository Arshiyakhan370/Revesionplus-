import React, { useState } from 'react';
import { Form, Button, Col, Row, Tab, Tabs, CloseButton } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Header from '../AdminDashboard/Header';

const According = () => {
  const [tabs, setTabs] = useState([
    { key: 'panel1', title: 'Panel 1' },
    
  ]);

  const addPanel = () => {
    const newKey = `panel${tabs.length + 1}`;
    const newTitle = `Panel ${tabs.length + 1}`;
    setTabs([...tabs, { key: newKey, title: newTitle }]);
  };

  const removePanel = (keyToRemove) => {
    const updatedTabs = tabs.filter((tab) => tab.key !== keyToRemove);
    setTabs(updatedTabs);
  };
  const handleCancel = () => {
    console.log('Cancel button clicked');
    
    window.history.back();
  };

  return (
    <div className="w-[650px] ml-[500px] mt-16 ">
      <Header />
      <div className="container mt-3">
    
        <Form>
          <Row>
            <Col xs={24} className="px-3">
              <Form.Group controlId="accordion">
                <Form.Label>Accordion</Form.Label>
                <Tabs defaultActiveKey={tabs[0].key} id="accordion-tabs">
                  {tabs.map((tab, index) => (
                    <Tab key={tab.key} eventKey={tab.key} title={
                      <>
                        {tab.title}
                        <CloseButton onClick={() => removePanel(tab.key)} />
                      </>
                    } className={index > 0 ? 'ml-2' : ''}>
                      <div style={{ marginBottom: '20px' }}>
                        <label>Title</label>
                        <div className="sc-kEYyzF cmwoAr multiline-input-area custom-error">
                          <Editor placeholder="Write here" />
                          <div className="error-message"></div>
                        </div>
                      </div>
                      <div>
                        <label>Content</label>
                        <div className="sc-kEYyzF cmwoAr multiline-input-area custom-error">
                          <Editor placeholder="Write here" />
                          <div className="error-message"></div>
                        </div>
                      </div>
                    </Tab>
                  ))}
                </Tabs>
                <Button type="button" variant="primary" onClick={addPanel}>
                  Add Panel
                </Button>
              </Form.Group>
            </Col>
            <Col xs={12} className="mt-3">
              <div className="d-flex justify-content-between">
              <Button type="button" variant="primary" onClick={handleCancel}>
                  Back
                </Button>
                <Button type="submit" variant="primary">
                  Save
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default According;

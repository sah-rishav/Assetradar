import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ManageUser from './ManageUser';
import Firmware from './Firmware/Firmware';
import DeviceMan from './DeviceManager/DeviceMan';
import AssetManager from './AssetManager/AssetManager';
import Navbar from './Navbar';
import './App.css';

function LeftTabsExample() {
   
  return (
    <div>
    <Navbar title="Administration"/>
    <Tab.Container id="left-tabs-example"  defaultActiveKey="second">
    
      <Row>
        <Col sm={2} >
       
          <Nav variant="pills" className="flex-column text-dark">
            <br/>
          <span class="fs-4" style={{textAlign:'center'}}>MENU</span>
            <Nav.Item>
            <Nav.Link href='/AssetRadar'>  Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Manage User</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Device Manager</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Asset Manager</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fifth" >Firmware Manager</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col >
          <Tab.Content>
            
            <Tab.Pane eventKey="second"><ManageUser/> </Tab.Pane>
            <Tab.Pane eventKey="third"> <DeviceMan/></Tab.Pane>
            <Tab.Pane eventKey="fourth"><AssetManager/></Tab.Pane>
            <Tab.Pane eventKey="fifth"> <Firmware/> </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container></div>
  );
}

export default LeftTabsExample;

import React,{ useState }  from 'react';
import Book from "./Book";
import {Col, Row,Button} from "reactstrap";

const Books = (props) => {
 
    const [hidden, setHidden] = useState(true);
    return (
      
        <Row>
            <Col>
              <Button color="primary" onClick={() => setHidden(false)}>List</Button>
              <Button color="primary" onClick={() => setHidden(true) }>Card</Button>
            </Col>
           
            {
                props.items.map((item) => {
                    return <Col  xs= {!hidden ? 8 : 3 } >
                        <Book {...item} />
                    </Col>
                })
            }
        </Row>
    );
};

export default Books;
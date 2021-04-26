import React from 'react';
import {Container,Row, Col} from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        wbai@deltacontrols.com <br/>
                        Test Automation Group
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

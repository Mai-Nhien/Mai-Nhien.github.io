import React, { Component } from 'react'
import '../style/Projects.css';
import {Card, CardImg, CardText, CardBody, CardTitle, Button,ModalBody, ModalHeader,} from 'reactstrap'
import Modal from 'react-modal'
import sixtysix from '../assets/66logo.png'
import zestIcon from '../assets/zestIcon.png'
import intern from '../assets/intern.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

class ProjectModal extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Modal 
                size="lg" 
                centered 
                aria-labelledby="contained-modal-title-vcenter"
                isOpen={this.props.isModalOpen} 
                toggle={this.toggle}
                portalClassName="modal"
            >
                <ModalHeader toggle={this.props.toggle} closeButton>
                    sixty six
                </ModalHeader>
                <ModalBody>
                    sixty six was a project built for a startup incubator at USC called Lavalab. I was on a team of 
                    4 USC students.
                </ModalBody>
            </Modal>
        );
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isModalOpen: false
        };
    
        this.showModal = this.showModal.bind(this);
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    
    showModal() {
        this.setState({
            isModalOpen: true
        });
    }

    render() {
        return (
            <div className="Projects">
              <div className="Projects-content" id="projects">
                <h1>projects</h1>
                {/* <ProjectModal
                    isModalOpen={this.state.isModalOpen}
                    toggle={this.toggle}
                /> */}
                <Card style={{ width: '15rem' }}>
                    <CardImg top width="100%" src={sixtysix} />
                    <CardBody>
                        <CardTitle className="cardTitle">sixty six</CardTitle>
                        <CardText>
                            A habit building and productivity mobile app built for Lavalab, USC's product incubator.
                        </CardText>
                        <Button className="cardButton">learn more</Button>
                    </CardBody>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <CardImg top width="100%" src={zestIcon} />
                    <CardBody>
                        <CardTitle className="cardTitle">zest</CardTitle>
                        <CardText>
                            An iOS application to help you find and organize recipes based on ingredients in your fridge.
                        </CardText>
                        <Button onClick={() => window.open('https://github.com/Mai-Nhien/zest', '_blank')} className="cardButton">see on github</Button>
                    </CardBody>
                </Card>
                <Card style={{ width: '15rem' }}>
                    <CardImg top width="100%" src={intern} />
                    <CardBody>
                        <CardTitle className="cardTitle">internSConnect</CardTitle>
                        <CardText>
                            A web application that helps streamline and organize the internship search process.
                        </CardText>
                        <Button onClick={() => window.open('https://github.com/ronakupadhyaya/CS201-Group-Project/tree/master/Final%20Project', '_blank')} className="cardButton">see on github</Button>
                    </CardBody>
                </Card>
              </div>
            </div>
          );
    }
}

export default Projects
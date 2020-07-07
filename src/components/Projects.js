import React, { Component } from 'react'
import '../style/Projects.css';
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from 'reactstrap'
import sixtysix from '../assets/66logo.png'
import zestIcon from '../assets/zestIcon.png'
import countSixtySix from '../assets/count.png'
import intern from '../assets/intern.png'
import demo from '../assets/demoAccount.png'
import community from '../assets/community.png'
import team from '../assets/team.png'
import {Dialog, IconButton, DialogContent, Typography} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const titleTheme = createMuiTheme({
    typography: {
        fontFamily: 'Georgia, serif',
    },
});

const karla = {
    fontFamily: 'Karla'
}

const contentTheme = createMuiTheme({
    typography: {
        fontFamily: karla
    }
})

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
        fontFamily: theme.fontFamily,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other} >
            <ThemeProvider theme={titleTheme}>
                <Typography variant="h6">{children}</Typography>
            </ThemeProvider>
            
            {onClose ? (
            <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
  });

class ProjectModal extends Component {
    render () {
        return (
            <Dialog 
                aria-labelledby="customized-dialog-title"
                open={this.props.open}
                onClose={this.props.onClose}
            >
                <ThemeProvider theme={titleTheme}>
                    <DialogTitle id="customized-dialog-title" onClose={this.props.onClose}>
                        <span style={{color: "#4d79cb", fontWeight: 'bold'}}>sixty six</span>
                    </DialogTitle>
                </ThemeProvider>
                <ThemeProvider theme={contentTheme}>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            <span style={{fontFamily: 'Karla'}}><span style={{color: "#4d79cb", fontWeight: 'bold'}}>some background:</span> sixty six was a product created during my time in Lavalab, a product incubator and startup community at USC. 
                            I was the backend engineer on a team of 4: Anant Jain as the frontend engineer, Sophia Park as the designer, 
                            and Zach Canning as the product manager. </span>
                        </Typography>
                        <img src={team} alt="Sixty six wireframe" width='100%'/>
                        <Typography gutterBottom>
                            <span style={{fontFamily: 'Karla'}}><span style={{color: "#4d79cb", fontWeight: 'bold'}}>what i did:</span> as the backend engineer I created and maintained a MongoDB database and built an Express.js server to handle all requests and backend 
                            functionality. This server was hosted on Heroku. </span>
                        </Typography>
                        <Typography gutterBottom>
                            <span style={{fontFamily: 'Karla'}}><span style={{color: "#4d79cb", fontWeight: 'bold'}}>the problem:</span> Our team was interested in lifestyle and health related issues- specifically productivity. 
                            We agreed that a big reason why people can't keep up with their goals and habits is because they lose motivation due to lack of results and accountability. 
                            After doing some research, we found that recent studies have shown that it takes at least 66 days to fully establish a habit. </span>
                        </Typography>
                        <Typography gutterBottom>
                            <span style={{fontFamily: 'Karla'}}><span style={{color: "#4d79cb", fontWeight: 'bold'}}>the solution:</span> sixty six is a mobile app that keeps track of how long you've stuck to your habits to encourage you to get to 66 days. 
                            The app also provides a productive community so that you can find inspiration from others and be held accountable. </span>
                        </Typography>
                        <img src={countSixtySix} alt="Sixty six wireframe" width='50%'/>
                        <img src={community} alt="Sixty six wireframe" width='50%'/>
                        <img src={demo} alt="Sixty six wireframe" width='50%'/>
                    </DialogContent>
                </ThemeProvider>
            </Dialog>
        );
    }
}

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
        };
    
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    
    handleClickOpen() {
        this.setState({
          open: true
        });
    }
    
    handleClose() {
        this.setState({
            open: false
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
                        <Button className="cardButton" onClick={this.handleClickOpen}>learn more</Button>
                        <ProjectModal open={this.state.open} onClose={this.handleClose}></ProjectModal>
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
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
    root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
    '&$expanded': {
        margin: 'auto',
    },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
    root: {
        backgroundColor: 'rgba(0, 0, 0, .03)',
        borderBottom: '1px solid rgba(0, 0, 0, .125)',
        marginBottom: 0,
        minHeight: 56,
        '&$expanded': {
        minHeight: 56,
        },
    },
    content: {
    '&$expanded': {
        margin: '12px 0',
    },  
    },
    expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
    padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

function CardComponet(props) {

    const linguagens = props.repositorios.map( 
        repo =>(repo['language']))
    const linguagensCardImp = linguagens.filter(x => x !== null)
    const linguagensCard = [ ...new Set( linguagensCardImp ) ];
    
    const [expanded, setExpanded] = React.useState('panel1');
    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    return (
        <>
        {linguagensCard.map((linguagem ,index )=>(
            <Accordion square expanded={expanded === index} onChange={handleChange(index)} key={index}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{linguagem}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    <ol>
                    {props.repositorios.filter(repo => repo['language'] === linguagem).map(repositoriosfiltrados => (
                        <li key={repositoriosfiltrados['name']}>{repositoriosfiltrados['name']}</li>
                    ))}
                    </ol>
                    </Typography>
                </AccordionDetails>
            </Accordion>
         ))}
        </>
    );
}

export default CardComponet;







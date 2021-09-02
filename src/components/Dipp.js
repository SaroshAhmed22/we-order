import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Icon } from '@material-ui/core';
import { spacing } from '@material-ui/system';
import { Button } from '@material-ui/core';
import dipp1 from './img/dipp/dipp1.jpeg'


const dippData = [
    {
        id: 1,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 139,
    },

    {
        id: 2,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: dipp1,
        itemPrice: 179,
    },
];

const dippList = [
    { listItem: "valj Lask", listBtn: "Coca-Cola Zero", orderStatus: "Sold Out" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
    { listItem: "valj Lask", listBtn: "Not Selected", orderStatus: "Add to cart" },
]






const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



const Dipp = () => {
    const classes = useStyles();
    return (
        <div className="mb-5" id="dippId">
            <h5 className="text-white mt-4">Dipp</h5>
            <div className={classes.root} >
                {
                    dippData.map((dipp) => {
                        const { id, item, itemDesc, itemImg, itemPrice } = dipp
                        return (
                            <div>
                                <Accordion className="our-acds  mt-5">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" >
                                        <div className=" w-100">
                                            <div className="dipp-main  " >
                                                <div style={{ float: "left" }}>
                                                    <div class="d-flex flex-column">
                                                        <h5 className="text-white">
                                                            Coca-Cola Zero
                                                        </h5>

                                                        <h6 className="mt-5 text-white" >100 <span>,-</span></h6>
                                                    </div>
                                                </div>
                                                <div style={{ float: "right" }}>
                                                    <img src={dipp1} width="200px" />
                                                </div>


                                            </div>
                                        </div>
                                    </AccordionSummary>
                                    <AccordionDetails >
                                        <div className="d-flex flex-column w-100">
                                            <div>
                                                <div className="descriptions">
                                                    <p className="di">Amount 1</p>
                                                    <div className="di" style={{ float: 'right' }}>
                                                        <div className="d-flex">
                                                            <button className="plus-btn"> +
                                                            </button>
                                                            <button className="plus-btn"> -
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr />

                                            <div>
                                                <button className="w-100 list-last-btn">Sold Out</button>
                                            </div>
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )

                    })
                }
            </div >

        </div>


    )
}

export default Dipp

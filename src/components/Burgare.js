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
import burgar1 from './img/burger/burgar1.jpeg'


const burgarData = [
    {
        id: 1,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 139,
    },

    {
        id: 2,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
    {
        id: 3,
        item: "Limited Summer BBQ Menu",
        itemDesc: "Svenskt nötkött, cheddarost, romansallad, Phil's dressing, lök.",
        itemImg: burgar1,
        itemPrice: 179,
    },
];

const burgarList = [
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
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



const Burgare = (props) => {
    const classes = useStyles();
    return (
        <div className="mb-5" id="burgare">
            <h5 className="text-white mt-4">Burgare</h5>
            <div className={classes.root} >
                {
                    burgarData.map((menyer) => {
                        const { id, item, itemDesc, itemImg, itemPrice } = menyer
                        return (
                            <div>
                                <Accordion className="our-acds  mt-5">
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header" >
                                        <div className="d-flex w-100 acd-head "  >
                                            <div className="d-flex flex-column">
                                                <div className="d-flex">
                                                    <h5 className="ml-3 text-white">{item}</h5>
                                                    <button class="sold" >Sold out</button>
                                                </div>
                                                <p>
                                                    {itemDesc}
                                                </p>
                                                <h6 className="text-white ">{itemPrice}<span>,-</span></h6>
                                            </div>
                                            <div className="float-right">
                                                <img src={burgar1} alt="" width="200px" />
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
                                            {
                                                burgarList.map((menyerList) => {
                                                    const { listItem, listBtn, orderStatus
                                                    } = menyerList;
                                                    return (
                                                        <div>
                                                            <div className="descriptions">
                                                                <p className="di">{listItem}</p>
                                                                <div className="di" style={{ float: 'right' }}>
                                                                    <Button
                                                                        class="my-list-btns "
                                                                        size="small" variant="outlined" color="secondary">
                                                                        {listBtn}
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            <div>
                                                <button className="w-100 list-last-btn">Sold Out</button>
                                            </div>
                                            <hr />
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

export default Burgare

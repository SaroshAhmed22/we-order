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


const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));



const Menyer = () => {
    const classes = useStyles();
    const array = [{ id: 1, one: "Acd1", two: "acd1data" },
    { id: 2, one: "Acd2", two: "acd2data" }];



    return (
        <div className={classes.root} >
            <Accordion className="our-acds">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className="d-flex w-100 acd-head "  >
                        <div className="d-flex flex-column">
                            <div className="d-flex">
                                <h5 className="ml-3 text-white">Lmited summer</h5>
                                <button class="sold" >Sold out</button>
                            </div>
                            <p>
                                asbahsahvsvhsavdashvdashvd
                                asbahsahvsvhsavdashvdashvd
                            </p>
                            <h6 className="text-white">139,-</h6>
                        </div>
                        <div className="float-right">
                            <img src="https://snappo-prod.s3.amazonaws.com/uploads/entry_images/menu_22570/5ec7511849c13eb8be9109c6ca1262789cb4d9b8.jpeg" alt="" width="200px" />
                        </div>
                    </div>
                </AccordionSummary>
                <AccordionDetails >
                    <div className="d-flex flex-column w-100">
                        <div>
                            <div className="">
                                <div className="di">Amount 1</div>

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
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Coca Cola Zero
                                    </Button>


                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Coca Cola Zero
                                    </Button>


                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                        {/* 3 */}
                        <div>
                            <div className="">
                                <div className="di">Valj Lask</div>
                                <div className="di" style={{ float: 'right' }}>
                                    <Button
                                        class="my-list-btns "
                                        size="small" variant="outlined" color="secondary">
                                        Not Selected
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <hr />

                    </div>




                </AccordionDetails>
            </Accordion>
        </div >

    )
}

export default Menyer

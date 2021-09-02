import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './Header.css'
import Menyer from '../components/Menyer';
import Burgare from '../components/Burgare';
import Dryck from '../components/Dryck';
import Sides from '../components/Sides';
import Dipp from '../components/Dipp';
import Deesert from '../components/Deesert';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


const Header = () => {







    const classes = useStyles()
    return (
        < >
            <div className="header-main">
                <img src="https://snappo-prod.s3.amazonaws.com/images/restaurants/1a43d4f7f16aedd77e03820dd63ebbaa89c239b9.jpeg" alt="" className="img-fluid header-img1" />

                <div className="header-content ">
                    <div className="d-flex ">
                        <div>
                            <img src="
                            https://snappo-prod.s3.amazonaws.com/uploads/app_icons/philsburger.png" alt="" className="header-img2" />
                        </div>
                        <div className="d-flex flex-column drott">
                            <h3 className="text-white">
                                Drottninggatan
                            </h3>
                            <button className="btn btn-dark"> Drottninggatan 79</button>
                        </div>
                    </div>
                    {/* ! Buttons start */}
                    <div className="our-all-btns ">
                        <Button variant="contained" size="small" color="" className={classes.margin}  >
                            Menyer
                        </Button>
                        <a href="#burgare" >
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Burgare och Sallad
                            </Button>
                        </a>
                        <a href="#dryckId">
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Dryck
                            </Button>
                        </a>
                        <a href="#sidesId">
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Sides
                            </Button>
                        </a>
                        <a href="#dippId">
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Dipp
                            </Button>
                        </a>
                        <a href="#deesertId">
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Deesert
                            </Button>
                        </a>
                        <a href="#hemmakitId">
                            <Button variant="contained" size="small" color="" className={classes.margin}  >
                                Hemmakit
                            </Button>
                        </a>
                    </div>


                    {/* <div className="" >
                        <div className="button-container">
                            <button type="button" class="btn btn-outline-dark our-buttons  btn-lg">Menyer</button>
                        </div>
                        <div className="button-container">
                            <button type="button" class="btn btn-outline-dark our-buttons ">Burgare och Sallad</button>
                        </div>
                        <button type="button" class="btn btn-outline-dark our-buttons ">Dryck</button>
                        <button type="button" class="btn btn-outline-dark our-buttons  ">Sides</button>
                        <button type="button" class="btn btn-outline-dark our-buttons ">Dipp</button>
                        <button type="button" class="btn btn-outline-dark our-buttons ">Dessert</button>
                        <button type="button" class="btn btn-outline-dark our-buttons ">Hemmakit</button>
                    </div> */}
                    {/* ! Buttons end */}
                </div>

            </div>





            <div className="container-fluid" style={{ position: "absolute" }}>
                <div className="container">
                    <div className="row ">
                        <div className="col-lg-9  col-12 col-md-12 b1">
                            <Menyer />
                            <Burgare />
                            <Dryck />
                            <Sides />
                            <Dipp />
                            <Deesert />

                        </div>

                        <div className="col-md-3  " >

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

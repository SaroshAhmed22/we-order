import React from 'react'
import './Header.css'
import Menyer from '../components/Menyer';
import Burgare from '../components/Burgare';
import Dryck from '../components/Dryck';
import Sides from '../components/Sides';
import Dipp from '../components/Dipp';
import Deesert from '../components/Deesert';


const Header = () => {
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
                    <div className="d-flex">

                    </div>
                    {/* ! Buttons start */}
                    <div className="" >
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
                    </div>
                    {/* ! Buttons end */}
                </div>

            </div>



            <div className="container-fluid">
                <div className="container">
                    <div className="col-md-9  col-12 ">
                        <Menyer />
                        <Burgare />
                        <Dryck />
                        <Sides />
                        <Dipp />
                        <Deesert />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header

import React, { Component } from 'react'
import './joshe.css';
import Collar from '../collar/collar';
// import Collar1 from '../assets/collarButton.png'
import Collar1 from '../assets/testcollar.png'
import DesignArea from '../designArea/designArea';
import Shirt from '../shirt/shirt';
// import Shirt1 from '../assets/shirtYesBtn.png';
import Shirt1 from '../assets/gg.png';
import Sleeves from '../sleeves/sleeves';
// import LongSleeve from '../assets/longSleeves.png';
import LongSleeve from '../assets/handemo.png';

import CollarIcon from '../assets/collar-icon.png';
import Shirts from '../assets/Short.png';
import Long from '../assets/Long.PNG';
import WhiteCuffs from '../cuff/whiteCuff';
import Cuff from '../cuff/cuff';
import Cuffs from '../assets/igboCuff.png';
import Cuffwhite from '../assets/whiteCuffs.png';
import Cuff1 from '../assets/blackCuffs.png';
import Cuff3 from '../assets/cuff.PNG'
import AnkaraFabrics from '../assets/ankara1.PNG';
// import backCollar from '../assets/backcollar.png';
import BackDesignArea from '../designArea/backDesign';
import BackCollar from '../collar/backCollar';
import backShirt1 from '../assets/dottedShirtBack.png';
import whiteBackShirt1 from '../assets/whiteBackShirt.png';
import BackShirt from '../shirt/backShirt';
import BackLongSleeve from '../assets/igboSleeve.png';
import BackSleeves from '../sleeves/backSleeves';
// import CollarW from '../assets/whitecollar1.png';
import CollarW from '../assets/whiteCollar.png';

import WhiteCollar from '../collar/whiteCollar';
import CollarB from '../assets/blackCollar.png';
// import Shirt3 from '../assets/whiteshirt.png';
import Shirt3 from '../assets/whiteShirt.png'
// import blackShirt3 from '../assets/blackShirt.png';
import blackShirt3 from '../assets/blackShirt.png';

import WhiteShirt from '../shirt/whiteShirt';
import BlackSleeves from '../sleeves/blackSleeves';
import BlackShirt from '../shirt/blackShirt';
import WhiteSleeves from '../sleeves/whiteSleeves';
import WhiteSleeve1 from '../assets/whiteSleeve.png';
import BlackSleeve from '../assets/blackSleeve.png';
import PageLoader from '../Loader/Loader1';
import ItemLoader from "../Loader/Loader3";
import WhiteBackShirt from '../shirt/whiteBackShirt';
import Toggle from '../assets/views.png'
import BlackCuffs from '../cuff/blackCuff';
import BlackCollar from '../collar/blackCollar';


export default class Joshe extends Component {

    state = {
        revealCollar: false,
        revealShirt: false,
        revealWhiteShirt: false,
        revealSleeves: false,
        revealCuff: false,
        hideClothes: false,
        showAll: true,
        fab: false,
        sty: true,
        collarImg: <img className="collar-display" src={Collar1} alt='collar' />,
        shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        // shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        sleevesImg: <img className='sleeves_image1' src={LongSleeve} alt='sleeves' />,
        cuffImg: <img className='cuff_image1' src={Cuffs} alt="cuffs" />,
        // backcollarImg: <img style={{ width: '55%' }} src={backCollar} alt='sleeves' />,
        backshirtImg: <img className='back_shirt_image1' src={backShirt1} alt='shirt' />,
        backsleevesImg: <img className='back_sleeves_image1' src={BackLongSleeve} alt='sleeves' />,
        activeTab: '1',
        frontView: true,
        bacView: false,
        btn: true,
        AnkaraCollar: false,
        AnkaraCuff: false,
        WhiteCuff: false,
        BlackCuff: false,
        backResult: true,
        witeCollar: false,
        blackCollar: false,
        resultCollar: false,
        AnkaraShirt: true,
        ShirtWhite: false,
        revealWhiteShirt: false,
        ShirtBlack: false,
        AnkaraSleeve: false,
        SleeveWhite: false,
        SleeveBlack: false,
        pageLoader: true,
        itemLoader: false
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                pageLoader: false,
            })
        }, 2000);
    }


    // //HANDLE CUFFS
    changeCuff = (cuffImg) => {
        this.setState({
            cuffImg
        })
    }



    //HANDLE COLLAR CHANGE
    changeCollar = (collarImg) => {
        this.setState({
            collarImg,
            hideClothes: !this.state.hideClothes,
            // cuffImg: this.state.hideClothes
        })
    }

    //HANDLE BACK VIEW COLLAR
    // NOTE: UNCOMMENT WHEN THE BACK COLLAR IMAGE IS READY
    // changeBackCollar = (backcollarImg) => {
    //     this.setState({
    //         backcollarImg
    //     })
    // }

    // HANDLE BACK VIEW SLEEVES
    changeBackSleeves = (backsleevesImg) => {
        this.setState({
            backsleevesImg
        })
    }

    // HANDLE BACK VIEW SHIRT
    changeBackShirt = (backshirtImg) => {
        this.setState({
            backshirtImg
        })
    }

    //HANDLE CHANGE OF SHIRTS AND THE BACK SHIRT
    changeShirt = (shirtImg, backshirtImg) => {
        this.setState({
            shirtImg,
            backshirtImg
        })
    }

    changeSleeves = (sleevesImg) => {
        this.setState({
            sleevesImg,
        })
    }


    // REAVEL DIFFERENT FABRICS STARTS HERE
    handleRevealCollar = () => {
        this.setState({
            resultCollar: true,
            backResult: true,
            AnkaraCollar: true,
            witeCollar: false,
            blackCollar: false,
            collarImg: <img className='collar-display' src={Collar1} alt='' />
        });
    }

    handleWhiteCollar = () => {
        this.setState({
            resultCollar: true,
            backResult: true,
            AnkaraCollar: false,
            witeCollar: true,
            blackCollar: false,
            collarImg: <img className="white_collar-display" src={CollarW} alt='' />
        });
    }

    handleBlackCollar = () => {
        this.setState({
            resultCollar: true,
            backResult: true,
            AnkaraCollar: false,
            witeCollar: false,
            blackCollar: true,
            collarImg: <img className="white_collar-display" src={CollarB} alt='' />
        });
    }

    handleReavelShirt = () => {
        this.setState({
            resultCollar: true,
            backResult: true,
            AnkaraShirt: true,
            AnkaraCollar: false,
            blackCollar: false,
            blackCollar: false,
            witeCollar: false,
            AnkaraCuff: false,
            shirtImg: <img className='shirt_image1' src={Shirt1} alt='shirt' />,
        })
    }

    // JUST TO TEST WHJITE SHIRT
    handleReavelWhitebackShirt = () => {
        this.setState({
            resultCollar: true,
            backResult: true,
            AnkaraShirt: true,
            AnkaraCollar: false,
            witeCollar: false,
            shirtImg: <img className='shirt_image1' src={whiteBackShirt1} alt='shirt' />,
        })
    }

    handleReavelWhiteShirt = () => {
        this.setState({
            ShirtWhite: true,
            ShirtBlack: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            blackCollar: false,
            witeCollar: false,
            AnkaraCuff: false,
            shirtImg: <img className='shirt_image' src={Shirt3} alt='shirt' />,
        })
    }

    // For the black shirt
    handleReavelBlackShirt = () => {
        this.setState({
            ShirtBlack: true,
            ShirtWhite: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            blackCollar: false,
            witeCollar: false,
            AnkaraCuff: false,
            shirtImg: <img className='shirt_image' src={blackShirt3} alt='shirt' />,
        })
    }


    handlReavelSleeves = () => {
        this.setState({
            AnkaraSleeve: true,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraCuff: false,
            BlackCuff: false,
            sleevesImg: <img className='sleeves_image1' src={LongSleeve} alt='sleeves' />,
        })
    }

    handlReavelWhiteSleeves = () => {
        this.setState({
            SleeveWhite: true,
            AnkaraSleeve: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraCuff: false,
            BlackCuff: false,
            sleevesImg: <img className='sleeves_image2' src={WhiteSleeve1} alt='sleeves' />,
        })
    }

    handlReavelBlackSleeves = () => {
        this.setState({
            SleeveBlack: true,
            AnkaraSleeve: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraCuff: false,
            BlackCuff: false,
            sleevesImg: <img className='sleeves_image2' src={BlackSleeve} alt='sleeves' />,
        })
    }

    handlReavelCuffs = () => {
        this.setState({
            AnkaraCuff: true,
            WhiteCuff: false,
            BlackCuff: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraSleeve: false,
            SleeveBlack: false,
            SleeveWhite: false,
            cuffImg: <img className='cuff_image1' src={Cuffs} alt='sleeves' />,
        })
    }

    handlReavelWhiteCuffs = () => {
        this.setState({
            AnkaraCuff: false,
            WhiteCuff: true,
            BlackCuff: false,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraSleeve: false,
            SleeveBlack: false,
            SleeveWhite: false,
            cuffsImg: <img className='sleeves_image1' src={Cuffwhite} alt='sleeves' />,
        })
    }

    handlReavelBlackCuffs = () => {
        this.setState({
            AnkaraCuff: false,
            WhiteCuff: false,
            BlackCuff: true,
            resultCollar: true,
            backResult: true,
            AnkaraShirt: false,
            AnkaraCollar: false,
            witeCollar: false,
            ShirtWhite: false,
            ShirtBlack: false,
            AnkaraSleeve: false,
            SleeveBlack: false,
            SleeveWhite: false,
            cuffsImg: <img className='sleeves_image1' src={Cuff1} alt='sleeves' />,
        })
    }
    //ENDS HERE


    handleClose = () => {
        this.setState({
            revealCollar: false,
            revealSleeves: false,
            revealShirt: false,
            revealCuff: false,
        })
    }



    //HANDLE COLLAR TOGGLE SIDEBAR
    handleCollarClose = () => {
        this.setState({
            resultCollar: false,
            backResult: true,

        })
    }

    handleDisplayCollar = (e) => {
        this.setState({
            revealCollar: !this.state.revealCollar,
            revealSleeves: false,
            revealShirt: false,
            revealCuff: false,
            resultCollar: false,
        })
    }

    //HANDLE SHIRT TOGGLE
    handleDisplayShirt = (e) => {
        this.setState({
            revealShirt: !this.state.revealShirt,
            revealCollar: false,
            revealSleeves: false,
            revealCuff: false,
            resultCollar: false
        })
    }

    //HANDLE SLEEVES
    handleDisplaySleeves = (e) => {
        this.setState({
            revealSleeves: !this.state.revealSleeves,
            revealShirt: false,
            revealCollar: false,
            resultCollar: false,
            revealCuff: false
        })
    }

    //HANDLE CUFF
    handleDisplayCuff = (e) => {
        this.setState({
            revealCuff: !this.state.revealCuff,
            revealSleeves: false,
            revealShirt: false,
            revealCollar: false,
            resultCollar: false
        })
    }

    clickFabrics = () => {
        this.setState({
            fab: true,
            sty: false,
            btn: false,
            revealCollar: false,
            revealCuff: false,
            revealShirt: false,
            revealSleeves: false
        })
    }

    clickStyles = () => {
        this.setState({
            sty: true,
            fab: false,
            btn: true
        })
    }

    //TOGGLE VIEW
    toggleViewFront = () => {
        this.setState({
            frontView: true,
            bacView: false,
            itemLoader: true
        })
        setTimeout(() => {
            this.setState({
                itemLoader: false
            })
        }, 1000);
    }

    toggleViewBack = () => {
        this.setState({
            bacView: true,
            frontView: false,
            itemLoader: true
        })
        setTimeout(() => {
            this.setState({
                itemLoader: false
            })
        }, 1000);
    }


    render() {
        const {
            revealCollar,
            backResult,
            revealShirt,
            revealSleeves,
            revealCuff,
            fab,
            sty,
            bacView,
            frontView,
            btn,
            resultCollar,
            AnkaraCollar,
            witeCollar,
            blackCollar,
            AnkaraShirt,
            ShirtWhite,
            backShirtWhite,
            revealWhiteShirt,
            ShirtBlack,
            AnkaraCuff,
            WhiteCuff,
            BlackCuff,
            AnkaraSleeve,
            SleeveBlack,
            SleeveWhite,
            pageLoader,
            itemLoader
        } = this.state


        return (
            <div>
                {
                    pageLoader &&
                    <PageLoader />
                }
                {
                    itemLoader &&
                    <ItemLoader />
                }
                <header> Uwe  </header>
                <div style={{ display: 'flex' }}>

                    {/* FRONT VIEW OF SECTION STARTS */}
                    {
                        frontView &&

                        <section>
                            {
                                fab &&
                                <div className='card'>
                                    <div>
                                        <img style={{ width: '100%', height: '70px' }} src={AnkaraFabrics} alt='' />
                                    </div>
                                    <p className='details'> Ankara </p>
                                </div>
                            }


                            {
                                sty &&
                                <div>

                                    <div className='card' onClick={this.handleDisplayCollar}>
                                        <div>
                                            <img className='collarIcon' src={CollarIcon} alt='' />
                                        </div>
                                        <p className='details'> Collars </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplayShirt}>
                                        <div>
                                            <img className='shirtIcon' src={Shirts} alt="" />
                                        </div>
                                        <p className='details'> Placket  </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplaySleeves}>
                                        <div>
                                            <img className='shirtIcon' src={Long} alt="" />
                                        </div>
                                        <p className='details'> Sleeves </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplayCuff}>
                                        <div>
                                            <img className='shirtIcon' src={Cuff3} alt="" />
                                        </div>
                                        <p className='details'> Cuffs </p>
                                    </div>

                                </div>
                            }

                        </section>
                    }
                    {/* FRONT VIEW OF SECTION ENDS HERE */}


                    {/* BACK VIEW FOR SECTION */}
                    {/* {
                        bacView &&

                        <section>
                            {
                                fab &&
                                <div className='card'>
                                    <div>
                                        <img style={{ width: '100%', height: '70px' }} src={AnkaraFabrics} alt='' />
                                    </div>
                                    <p className='details'> Ankara </p>
                                </div>

                            }


                            {
                                sty &&
                                <div>
                                    <div className='card' onClick={this.handleDisplayCollar}>
                                        <div>
                                            <img className='collarIcon' src={CollarIcon} alt='' />
                                        </div>
                                        <p className='details'> Back Collars </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplayShirt}>
                                        <div>
                                            <img className='shirtIcon' src={Shirts} alt="" />
                                        </div>
                                        <p className='details'>Back Placket  </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplaySleeves}>
                                        <div>
                                            <img className='shirtIcon' src={Long} alt="" />
                                        </div>
                                        <p className='details'>Black Sleeves </p>
                                    </div>
                                    <div className='card' onClick={this.handleDisplayCuff}>
                                        <div>
                                            <img className='shirtIcon' src='' alt="" />
                                        </div>
                                        <p className='details'> Cuffs </p>
                                    </div>

                                </div>
                            }

                        </section>
                    } */}
                    {/* BACK VIEW SECTION ENDS HERE */}


                    {/* FRONT VIEW MAIN STARTS HERE */}


                    {
                        frontView &&
                        <main>
                            <center>

                                {
                                    (resultCollar) ?
                                        <div className='revealer'>
                                            < p style={{ fontSize: '20px', height: 50 }} > <strong style={{ float: 'left' }}> Styles </strong> <i className='fa fa-arrow-left arrow-close' onClick={this.handleCollarClose} style={{ float: 'right', cursor: 'pointer' }}></i> </p>

                                            {
                                                AnkaraCollar ?
                                                    <Collar changeCollar={this.changeCollar} /> :

                                                    witeCollar ?
                                                        <WhiteCollar changeCollar={this.changeCollar} /> :

                                                        blackCollar ?
                                                        <BlackCollar changeCollar={this.changeCollar} /> :

                                                        AnkaraShirt ?
                                                            <Shirt changeShirt={this.changeShirt} /> :

                                                            ShirtWhite ?
                                                                <WhiteShirt changeShirt={this.changeShirt} /> :

                                                                ShirtBlack ?
                                                                    <BlackShirt changeShirt={this.changeShirt} /> :

                                                                    AnkaraSleeve ?
                                                                        <Sleeves changeSleeves={this.changeSleeves} /> :

                                                                        SleeveWhite ?
                                                                            <WhiteSleeves changeSleeves={this.changeSleeves} /> :

                                                                            SleeveBlack ?
                                                                                <BlackSleeves changeSleeves={this.changeSleeves} /> :

                                                                                AnkaraCuff ?
                                                                                    <Cuff changeCuff={this.changeCuff} /> :

                                                                                    WhiteCuff ?
                                                                                        <WhiteCuffs changeCuff={this.changeCuff} /> :

                                                                                        BlackCuff ?
                                                                                            <BlackCuffs changeCuff={this.changeCuff} /> :

                                                                                            null
                                            }
                                        </div> :
                                        (revealCollar || revealCuff || revealShirt || revealSleeves) ?
                                            <div className='reveal' >
                                                <p style={{ fontSize: '20px' }}><strong style={{ float: 'left', height: 50 }}>Fabrics</strong>  <i style={{ float: 'right', cursor: 'pointer', color: 'grey', fontSize: '25px' }} className='fa fa-arrow-left' onClick={this.handleClose}></i> </p>
                                                {
                                                    revealCollar ?
                                                        <div className='revealAll'>
                                                            <div className="side_ankara" onClick={this.handleRevealCollar}>
                                                                {/* <img className='collar_image_side' src={Collar1} alt='collar' /> */}
                                                                {/* <div className='tooltiptext1'>
                                                                    <p ><strong>Ankara <br />Collar</strong></p>
                                                                </div> */}
                                                                <div className='tooltiptext1'>
                                                                    <p>ankara material <br />
                                                                        price: #2000
                                                                </p>
                                                                </div>
                                                            </div>
                                                            <div className="side_white" onClick={this.handleWhiteCollar}>
                                                                {/* <img className='collar_image_side2' src={CollarW} alt='collar' /> */}
                                                                <div className='tooltiptext1'>
                                                                    <p >white <br />Collar <br /> price: #2000</p>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="side_black" onClick={this.handleBlackCollar}>
                                                                {/* <img className='collar_image_side2' src={CollarW} alt='collar' /> */}
                                                                <div className='tooltiptext1'>
                                                                    <p >Black <br />Collar <br /> price: #2000</p>
                                                                </div>
                                                            </div>
                                                        </div> :
                                                        revealShirt ?
                                                            <div className='revealAll'>
                                                                <div className="side_ankara" onClick={this.handleReavelShirt}>
                                                                    {/* <img className='shirt-side' src={Shirt1} alt='shirt' /> */}
                                                                    <div className='tooltiptext1'>
                                                                        <p ><strong>Ankara <br />Material #5000</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div className="side_white" onClick={this.handleReavelWhiteShirt}>
                                                                    {/* <img className='shirt-side' src={Shirt3} alt='shirt' /> */}
                                                                    <div className='tooltiptext1'>
                                                                        <p ><strong>White <br />Material #2400</strong></p>
                                                                    </div>
                                                                </div>
                                                                <div className="side_black" onClick={this.handleReavelBlackShirt}>
                                                                    {/* <img className='shirt-side' src={blackShirt3} alt='shirt' /> */}
                                                                    <div className='tooltiptext1'>
                                                                        <p ><strong>Black <br />Material #12000</strong></p>
                                                                    </div>
                                                                </div>
                                                            </div> :

                                                            revealSleeves ?
                                                                <div className='revealSleeve'>
                                                                    <div className="side_ankara" onClick={this.handlReavelSleeves}>
                                                                        {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                        <div className='tooltiptext1'>
                                                                            <p><strong>Ankara <br />Sleeves</strong></p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="side_white" onClick={this.handlReavelWhiteSleeves}>
                                                                        {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                        <div className='tooltiptext1'>
                                                                            <p><strong>White <br />Sleeves</strong></p>
                                                                        </div>
                                                                    </div>

                                                                    <div className="side_black" onClick={this.handlReavelBlackSleeves}>
                                                                        {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                        <div className='tooltiptext1'>
                                                                            <p><strong>White <br />Sleeves</strong></p>
                                                                        </div>
                                                                    </div>

                                                                </div> :
                                                                revealCuff ?
                                                                    <div className='revealSleeve'>
                                                                        <div className="side_ankara" onClick={this.handlReavelCuffs}>
                                                                            {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                            <div className='tooltiptext1'>
                                                                                <p><strong>Ankara <br />Cuffs</strong></p>
                                                                            </div>
                                                                        </div>
                                                                        <div className="side_white" onClick={this.handlReavelWhiteCuffs}>
                                                                            {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                            <div className='tooltiptext1'>
                                                                                <p><strong>White <br />Cuffs</strong></p>
                                                                            </div>
                                                                        </div>

                                                                        <div className="side_black" onClick={this.handlReavelBlackCuffs}>
                                                                            {/* <img className='sleeves-side1' src={Long} alt='shirt' /> */}
                                                                            <div className='tooltiptext1'>
                                                                                <p><strong>Black <br />Cuffs</strong></p>
                                                                            </div>
                                                                        </div>

                                                                    </div> : null

                                                }
                                            </div> : null
                                }
                                <div className="testing_you">
                                    <DesignArea WcollarImg={this.state.WcollarImg} collarImg={this.state.collarImg} shirtImg={this.state.shirtImg} sleevesImg={this.state.sleevesImg} cuffImg={this.state.cuffImg} />
                                </div>
                                {
                                    btn &&
                                    <div className='toggle-btn'>
                                        <button className='toggle-btn-front' onClick={this.toggleViewFront}><span class="tooltiptexter">Front View</span></button>
                                        <button className='toggle-btn-back' onClick={this.toggleViewBack}><span class="tooltiptexter">Back View</span></button>
                                        <div>
                                            {/* <i class="fa fa-hand-o-right"></i> */}
                                            <span className="change_view">Toggle View</span>
                                            <img className='toggle_view' src={Toggle} alt="tip" />
                                        </div>
                                    </div>

                                }


                            </center>
                        </main>

                    }
                    {/* FRONT VIEW FOR MAIN ENDS HERE */}





                    {/* BACK VIEW FOR MAIN STARTS HERE */}

                    {
                        bacView &&
                        <aside>
                            <center>
                                {
                                    (backResult) ?
                                        <div className='revealer-back'>
                                            < p style={{ fontSize: '20px', height: 50 }} > <strong style={{ float: 'left' }}> Styles </strong> <i className='fa fa-arrow-left arrow-close' onClick={this.handleCollarClose} style={{ float: 'right', cursor: 'pointer' }}></i> </p>

                                            {
                                                // AnkaraCollar ?
                                                //     <BackCollar changeCollar={this.changeCollar} /> :

                                                //     witeCollar ?
                                                //         <WhiteCollar changeCollar={this.changeCollar} /> :

                                                        AnkaraShirt ?
                                                            <BackShirt changeShirt={this.changeBackShirt} /> :

                                                            ShirtWhite ?
                                                                <WhiteBackShirt changeShirt={this.changeBackShirt} /> :

                                                                ShirtBlack ?
                                                                    <BlackShirt changeShirt={this.changeShirt} /> : null

                                                                    // AnkaraSleeve ?
                                                                    //     <BackSleeves changeSleeves={this.changeSleeves} /> :

                                                                    //     SleeveWhite ?
                                                                    //         <WhiteSleeves changeSleeves={this.changeSleeves} /> : null
                                            }
                                        </div> : null


                                }
                                <div className="testing_you">
                                    <BackDesignArea backcollarImg={this.state.backcollarImg} backshirtImg={this.state.backshirtImg} backsleevesImg={this.state.backsleevesImg} />
                                </div>


                                {
                                    btn &&

                                    <div className='toggle-btn'>
                                        <button className='toggle-btn-front' onClick={this.toggleViewFront}><span class="tooltiptexter">Front View</span></button>
                                        <button className='toggle-btn-back' onClick={this.toggleViewBack}><span class="tooltiptexter">Back View</span></button>
                                    </div>

                                }

                            </center>
                        </aside>

                    }
                    {/*                                 
                                {
                                    revealCollar &&
                                    <div className='reveal' >
                                        <BackCollar changeBackCollar={this.changeBackCollar} />
                                    </div>
                                }

                                {
                                    revealShirt &&
                                    <div className='reveal' >
                                        <BackShirt changeBackShirt={this.changeBackShirt} />
                                    </div>
                                }

                                {
                                    revealSleeves &&
                                    <div className='reveal' >
                                        <BackSleeves changeBackSleeves={this.changeBackSleeves} />
                                    </div>
                                }

                                {
                                    revealCuff &&
                                    <div className='reveal' >
                                        <Cuff changeCuff={this.changeCuff} />
                                    </div>
                                } */}
                    {/* BACK VIEW FOR MAIN ENDS HERE */}

                </div>
            </div >
        )
    }
}
import React, { Component } from 'react';
import './MainScreen.scss'

// import HelpIcon from '@material-ui/icons/Help';

import MediaQuery from 'react-responsive';

import Step1Who from '../form/Step1/Step1Who';
import Step1ACounter from '../form/Step1A/Step1ACounter';
import Step1BGroup from '../form/Step1B/Step1BGroup';
import Step2Weeks from '../form/Step2/Step2Weeks';
import Step2days from '../form/Step2A/Step2days';
import Step3When from '../form/Step3/Step3When';
import Step4Speed from '../form/Step4/Step4Speed';
import Step5Activity from '../form/Step5/Step5Activity';
import Step6Accomodation from '../form/Step6/Step6Accomodation';
import Step6AStars from '../form/Step6A/Step6AStars';
import LoadScreen from '../form/LoadScreen/LoadScreen';
import ProgressBar from 'react-bootstrap/ProgressBar'
import elephantIcon from '../../Icons/olifant.svg';
import templeIcon from '../../Icons/temple3.svg';
import snorklingIcon from '../../Icons/snorkeling.svg';
import diepzeeduikenIcon from '../../Icons/diepzeeduiken.svg';
import lionIcon from '../../Icons/safari.svg';
import maskIcon from '../../Icons/bezoek-een-stam.svg';
import surfingIcon from '../../Icons/golfsurfen.svg';
import riceIcon from '../../Icons/rijstvelden.svg';
import cruiseIcon from '../../Icons/cruise.svg';
import monkeyIcon from '../../Icons/monkey.svg';
import helicopterIcon from '../../Icons/helicopter.svg';
import raftingIcon from '../../Icons/rafting.svg';
import keniasafariIcon from '../../Icons/keniasafari.svg';
import maasaiIcon from '../../Icons/maasai.svg';
import wildcampingIcon from '../../Icons/kamperen.svg';
import woestijnIcon from '../../Icons/woestijn.svg';
import gorillaIcon from '../../Icons/gorilla.svg';
import suppenIcon from '../../Icons/surfboard.svg';
import relaxenIcon from '../../Icons/relaxen.svg';
import chinesemuurIcon from '../../Icons/chinesemuur.svg';
import tigerIcon from '../../Icons/tiger.svg';
import tajmahalIcon from '../../Icons/tajmahal.svg';
import borobudurIcon from '../../Icons/borobudur.svg';
import mountfujiIcon from '../../Icons/mountfuji.svg';
import tempeljapanIcon from '../../Icons/tempeljapan.svg';
import geishaIcon from '../../Icons/geisha.svg';
import orangoetanIcon from '../../Icons/orangoetan.svg';
import adamspeakIcon from '../../Icons/adamspeak.svg';
import tempelsrilankaIcon from '../../Icons/tempelsrilanka.svg';

import BackgroundThailand from '../../images/Phuket_thailand_mood.jpg';
import BackgroundVietnam from '../../images/vietnam_reizen.jpg';
import BackgroundBotswana from '../../images/reis_botswana_afrika.jpg';
import BackgroundKenia from '../../images/reis_kenia_afrika1.jpg';
import BackgroundMozambique from '../../images/mozambique_reizen.jpg';
import BackgroundZuidafrika from '../../images/zuidafrika-mood.jpg';
import BackgroundNamibie from '../../images/namibie.jpg';
import BackgroundOeganda from '../../images/oeganda.jpg';
import BackgroundTanzania from '../../images/tanzania.jpg';
import BackgroundChina from '../../images/china.jpg';
import BackgroundIndia from '../../images/india.jpg';
import BackgroundIndonesie from '../../images/indonesie.jpg';
import BackgroundJapan from '../../images/japan.jpg';
import BackgroundMaleisie from '../../images/maleisie.jpg';
import BackgroundSrilanka from '../../images/srilanka.jpg';
import ggtoSvg from '../../Icons/GGTO_logo_grijs_zonder ondertitel.svg';

import HelpModal from './helpModal/HelpModal';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentForm: 'startForm',
            who: "",
            howMany: {},
            weeks: "",
            when: "",
            speed: "",
            activity: "",
            accomodation: "",
            accomodationStars: "",
            userInfo: {},
            helpOpen: false,
            show: true,
            currentCountry: {}
        };

        window.history.replaceState('startForm', null, "");

        this.getObject = this.getObject.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.addState = this.addState.bind(this);
        this.onBackButtonEvent = this.onBackButtonEvent.bind(this);
        this.toggleHelp = this.toggleHelp.bind(this);
        this.goToSuccess = this.goToSuccess.bind(this);
        this.detectMobile = this.detectMobile.bind(this);
    }

    destination = this.props.match.params.destination;

    destinations = [{
        thailand: {
            countryName: "Thailand",
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundThailand})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "OlifantenparkBezoeken"
                },
                two: {
                    icon: templeIcon, 
                    text: "Tempel bezoeken",
                    value: "TempelBezoeken"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Snorkelen"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } //EINDE LAND
        , {
        vietnamtest: {
            countryName: "Vietnamtest",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundVietnam})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND //BEGIN AFRIKA
     {
        botswana: {
            countryName: "Botswana",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundBotswana})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: helicopterIcon,
                    text: "helikoptervlucht",
                    value: "HelikopterVlucht"
                },
                three: {
                    icon: raftingIcon,
                    text: "Raften met gids",
                    value: "RaftenMetGids"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        kenia: {
            countryName: "Kenia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: keniasafariIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: maasaiIcon,
                    text: "Ontmoet de Maasai",
                    value: "OntmoetDeMaasai"
                },
                three: {
                    icon: wildcampingIcon,
                    text: "Wild kamperen",
                    value: "WildKamperen"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        mozambique: {
            countryName: "Mozambique",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: lionIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: wildcampingIcon,
                    text: "Wild kamperen",
                    value: "WildKamperen"
                },
                three: {
                    icon: diepzeeduikenIcon,
                    text: "Diepzeeduiken",
                    value: "Duiken"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        namibie: {
            countryName: "Namibië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundNamibie})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Op safari",
                    value: "opSafari"
                },
                two: {
                    icon: woestijnIcon,
                    text: "Woestijn bezoeken",
                    value: "woestijnBezoeken"
                },
                three: {
                    icon: wildcampingIcon,
                    text: "Wild kamperen",
                    value: "wildKamperen"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        oeganda: {
            countryName: "Oeganda",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundOeganda})`,
            step5: {
                one: {
                    icon: gorillaIcon,
                    text: "Berggorilla's bezoeken",
                    value: "Gorilla's bezoeken"
                },
                two: {
                    icon: suppenIcon,
                    text: "Suppen op de Nijl",
                    value: "SuppenOpDeNijl"
                },
                three: {
                    icon: keniasafariIcon,
                    text: "Op safari",
                    value: "opSafari"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        tanzania: {
            countryName: "Tanzania",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundTanzania})`,
            step5: {
                one: {
                    icon: lionIcon,
                    text: "Op safari",
                    value: "opSafari"
                },
                two: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Snorkelen"
                },
                three: {
                    icon: relaxenIcon,
                    text: "Relaxen op het strand",
                    value: "RelaxenOpHetStrand"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        zuidafrika: {
            countryName: "Zuid-Afrika",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundZuidafrika})`,
            step5: {
                one: {
                    icon: lionIcon,
                    text: "Op safari",
                    value: "elephantPark"
                },
                two: {
                    icon: maskIcon,
                    text: "Bezoek een stam",
                    value: "templeVisit"
                },
                three: {
                    icon: surfingIcon,
                    text: "Golfsurfen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND //EINDE AFRIKA //BEGIN AZIE
    , {
        china: {
            countryName: "China",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundChina})`,
            step5: {
                one: {
                    icon: chinesemuurIcon,
                    text: "Chinese muur",
                    value: "chineseMuur"
                },
                two: {
                    icon: riceIcon,
                    text: "Rijstvelden bezoeken",
                    value: "rijstveldenBezoeken"
                },
                three: {
                    icon: cruiseIcon,
                    text: "Yangtze Cruise",
                    value: "yangtzeCruise"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        india: {
            countryName: "India",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.01)),url(${BackgroundIndia})`,
            step5: {
                one: {
                    icon: tigerIcon,
                    text: "Tijgers spotten",
                    value: "tijgerSpotten"
                },
                two: {
                    icon: tajmahalIcon,
                    text: "Bezoek Taj Mahal",
                    value: "bezoekTajMahal"
                },
                three: {
                    icon: relaxenIcon,
                    text: "Relaxen in Goa",
                    value: "relaxenStrand"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        indonesie: {
            countryName: "Indonesië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundIndonesie})`,
            step5: {
                one: {
                    icon: surfingIcon,
                    text: "Golfsurfen op Bali",
                    value: "golfSurfenBali"
                },
                two: {
                    icon: borobudurIcon,
                    text: "Bezoek de Borobudur",
                    value: "borobudurTempelBezoeken"
                },
                three: {
                    icon: relaxenIcon,
                    text: "Relaxen op het strand",
                    value: "relaxenStrand"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        japan: {
            countryName: "Japan",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundJapan})`,
            step5: {
                one: {
                    icon: mountfujiIcon,
                    text: "Mount Fuji beklimmen",
                    value: "MountFujiBeklimmen"
                },
                two: {
                    icon: tempeljapanIcon,
                    text: "Tempel bezoeken",
                    value: "tempelBezoeken"
                },
                three: {
                    icon: geishaIcon,
                    text: "Ontmoet een Geisha",
                    value: "ontmoetGeisha"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        maleisie: {
            countryName: "Maleisië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundMaleisie})`,
            step5: {
                one: {
                    icon: orangoetanIcon,
                    text: "Ontmoet Orang-oetans",
                    value: "spotOrangOetan"
                },
                two: {
                    icon: diepzeeduikenIcon,
                    text: "Diepzeeduiken",
                    value: "duiken"
                },
                three: {
                    icon: relaxenIcon,
                    text: "Relaxen op het strand",
                    value: "relaxenStrand"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        srilanka: {
            countryName: "Sri Lanka",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundSrilanka})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifanten wassen",
                    value: "elephantPark"
                },
                two: {
                    icon: tempelsrilankaIcon,
                    text: "Bezoek een tempel",
                    value: "tempelBezoeken"
                },
                three: {
                    icon: adamspeakIcon,
                    text: "Beklim Adam's Peak",
                    value: "AdamsPeakBeklimmen"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        vietnam: {
            countryName: "Vietnam",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundVietnam})`,
            step5: {
                one: {
                    icon: riceIcon,
                    text: "Rijstvelden bezoeken",
                    value: "RijstveldenBezoeken"
                },
                two: {
                    icon: cruiseIcon,
                    text: "Cruise in Halong Bay",
                    value: "CruisHalongBay"
                },
                three: {
                    icon: monkeyIcon,
                    text: "Apen ontmoeten",
                    value: "ApenOntmoeten"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND //EINDE AZIE //BEGIN EUROPA
    {
        ijsland: {
            countryName: "IJsland",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND //EINDE EUROPA //BEGIN NOORD-AMERIKA
    , {
        canada: {
            countryName: "Canada",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        costarica: {
            countryName: "Costa Rica",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        cuba: {
            countryName: "Cuba",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        mexico: {
            countryName: "Mexico",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        usa: {
            countryName: "USA",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND //EINDE NOORD-AMERIKA //BEGIN OCEANIE
    {
        australie: {
            countryName: "Australië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        nieuwzeeland: {
            countryName: "Nieuw-Zeeland",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND //EINDE OCEANIE //BEGIN ZUID-AMERIKA
    {
        argentinie: {
            countryName: "Argentinië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        bolivia: {
            countryName: "Bolivia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        brazilie: {
            countryName: "Brazilië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        chili: {
            countryName: "Chili",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        colombia: {
            countryName: "Colombia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND
    , {
        ecuador: {
            countryName: "Ecuador",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    }, // EINDE LAND
    {
        peru: {
            countryName: "Peru",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Olifantenpark bezoeken",
                    value: "elephantPark"
                },
                two: {
                    icon: templeIcon,
                    text: "Tempel bezoeken",
                    value: "templeVisit"
                },
                three: {
                    icon: snorklingIcon,
                    text: "Snorkelen",
                    value: "Diving"
                },
            },
            step6: {
                one: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Hotel",
                    value: "Hotel"
                },
                two: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Resort",
                    value: "Resort"
                },
                three: {
                    icon: "../../Icons/icons_forms.svg",
                    text: "Strandhutje",
                    value: "Beachhouse"
                },
            }
        }
    } // EINDE LAND

    ]

    getForm(currentForm) {

        const forms = {
            startForm: <Step1Who toggleForm={this.toggleForm} addState={this.addState} />,
            step1A: <Step1ACounter toggleForm={this.toggleForm} addState={this.addState} />,
            step1B: <Step1BGroup toggleForm={this.toggleForm} addState={this.addState} />,
            step2: <Step2Weeks toggleForm={this.toggleForm} addState={this.addState} />,
            step2A: <Step2days toggleForm={this.toggleForm} addState={this.addState} />,
            step3: <Step3When toggleForm={this.toggleForm} addState={this.addState} />,
            step4: <Step4Speed toggleForm={this.toggleForm} addState={this.addState} />,
            step5: <Step5Activity country={this.state.currentCountry} toggleForm={this.toggleForm} addState={this.addState} />,
            step6: <Step6Accomodation country={this.getObject} toggleForm={this.toggleForm} addState={this.addState} />,
            step6A: <Step6AStars toggleForm={this.toggleForm} addState={this.addState} />,
            loading: <LoadScreen goToSuccess={this.goToSuccess} />,
            // finalPage: this.goToSuccess()
        }
        return forms[currentForm];
    }

    componentDidMount() {
        this.toggleForm("startForm");
        window.onpopstate = this.onBackButtonEvent;
        this.getObject();
    }

    goToSuccess() {
        this.props.history.push({
            pathname: "/sendform",
            givenState: {
                state: this.state
            }
        });
    }

    addState(question, value) {
        this.setState({
            [question]: value
        })
    }

    toggleForm = (currentForm) => {
        window.history.pushState(currentForm, null, document.URL)
        this.setState({
            currentForm,
        });
    }

    getObject() {
        for (var i = 0; i < this.destinations.length; i++) {
            var obj = this.destinations[i];
            if (this.destination in obj) {
                if (this.destination) {
                    this.setState({
                        currentCountry: obj[this.destination]
                    })
                } else {
                    this.setState({
                        currentCountry: obj["thailand"]
                    })
                }

            }
        }
    }

    onBackButtonEvent(e) {
        e.preventDefault();
        this.previousForm(e.state);
        
    }

    previousForm(currentForm) {
        this.setState({ currentForm })
        this.progress -= 10;
    }

    toggleHelp(e) {
        e.preventDefault();
        this.setState(prevState => ({ helpOpen: !prevState.helpOpen }))
    }

    getProgress(currentForm) {

        const progress = {
            startForm: 10,
            step1A: 10,
            step1B: 10,
            step2: 20,
            step2A: 20,
            step3: 40,
            step4: 60,
            step5: 80,
            step6: 80,
            step6A: 90,
            loading: 100,
        }
        return progress[currentForm];
    }

    detectMobile() {
        if(window.innerWidth <= 575 && window.innerHeight <= 600) {
          return true;
        } else {
          return false;
        }
     }

    render() {
        this.backgroundStyleDesktop = {
            backgroundImage: this.state.currentCountry.backgroundImage,
        }
        this.backgroundStylePhone = {
            //DEZE AANPASSEN naar PHONE
            backgroundImage: this.state.currentCountry.backgroundImage,
        }

        return (
            <div>
                <div className="headerDiv">
                    <a href="https://www.tripsy.nl/" target="_blank" without rel="noopener noreferrer"><div className="logo"> Tripsy </div></a>
                    <div className="helpIcon" style={{ pointerEvents: this.state.helpOpen ? 'none' : 'fill' }} onClick={this.toggleHelp.bind(this)}> <span className="helpword">Help</span>
                        {this.state.helpOpen &&
                            <HelpModal toggleHelp={this.toggleHelp} />
                        }
                    </div>
                </div>
                <div style={this.detectMobile() ? this.backgroundStylePhone : this.backgroundStyleDesktop } className="topDiv">
                    <div className="textDiv">
                        <span className="tripText">Jouw rondreis {this.state.currentCountry.countryName}</span>
                        <br />
                        <MediaQuery query='(min-device-width: 575px)'>
                            <span className="subTripText">Wij maken je reis - gratis en vrijblijvend - volledig op maat</span>
                        </MediaQuery>
                        <MediaQuery query='(max-device-width: 575px)'>
                            <span className="subTripText">Wij maken je reis - gratis en vrijblijvend</span>
                        </MediaQuery>
                        <div className="cardBox">
                            <ProgressBar animated className="progressBar" variant="success" now={this.getProgress(this.state.currentForm)} />
                            {this.getForm(this.state.currentForm)}
                        </div>
                        <div className="garrantyDiv">
                            <div className="onsGarantiefonds">
                                <span >Ons garantiefonds</span>
                            </div>
                            <div className="Garantiefonds">
                                <a href="https://www.stichting-ggto.nl/html/Welkom.asp" target="_blank" without rel="noopener noreferrer"> <img src={ggtoSvg} alt="GGTO garantiefonds" className="ggtogrey" /></a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="bottomDiv">
                    <div className="links1">
                        <span className="linksRight"> © Tripsy B.V. 2019</span>
                    </div>
                    <div className="links2">
                        <a href="https://www.tripsy.nl/algemene-voorwaarden" target="_blank" without rel="noopener noreferrer"><span className="linksLeft"> Reisvoorwaarden </span></a>
                        <a href="https://www.tripsy.nl/privacy-cookies" target="_blank" without rel="noopener noreferrer"><span className="linksLeft">Privacy & Cookies</span></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainScreen;
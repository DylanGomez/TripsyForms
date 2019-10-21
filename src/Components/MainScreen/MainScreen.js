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
import ijslandIcon from '../../Icons/ijslandkerk.svg';
import sneeuwscooterIcon from '../../Icons/sneeuwscooter.svg';
import watervalIcon from '../../Icons/waterval.svg';
import beerIcon from '../../Icons/beer.svg';
import ijshotelIcon from '../../Icons/ijshotel.svg';
import hikenIcon from '../../Icons/hiken.svg';
import luiaardIcon from '../../Icons/luiaard.svg';
import klassiekeautoIcon from '../../Icons/klassiekeauto.svg';
import cigaarIcon from '../../Icons/cigaar.svg';
import mayapiramideIcon from '../../Icons/mayapiramide.svg';
import vrijheidsbeeldIcon from '../../Icons/vrijheidsbeeld.svg';
import grandcanyonIcon from '../../Icons/grandcanyon.svg';
import operahouseIcon from '../../Icons/operahouse.svg';
import kangarooIcon from '../../Icons/kangaroo.svg';
import walvisIcon from '../../Icons/walvis.svg';
import kerknieuwzeelandIcon from '../../Icons/kerknieuwzeeland.svg';
import kayakIcon from '../../Icons/kayak.svg';
import alpacaIcon from '../../Icons/alpaca.svg';
import meerIcon from '../../Icons/meer.svg';
import zoutvlakteIcon from '../../Icons/zoutvlaktes.svg';
import amazoneIcon from '../../Icons/amazone.svg';
import jezusbeeldIcon from '../../Icons/jezusbeeld.svg';
import paaseilandIcon from '../../Icons/paaseiland.svg';
import zandboardenIcon from '../../Icons/zandboarden.svg';
import kerkchiliIcon from '../../Icons/kerkchili.svg';
import koffieplantageIcon from '../../Icons/koffieplantages.svg';
import kerkcolombiaIcon from '../../Icons/kerkcolombia.svg';
import turtleIcon from '../../Icons/turtle.svg';
import middelpuntIcon from '../../Icons/middelpunt.svg';
import machupicchuIcon from '../../Icons/machupicchu.svg';
import kerkperuIcon from '../../Icons/kerkperu.svg';

import BackgroundThailand from '../../images/Phuket_thailand_mood.jpg';
import BackgroundVietnam from '../../images/vietnam_reizen.jpg';
import BackgroundBotswana from '../../images/reis_botswana_afrika.jpg';
import BackgroundKenia from '../../images/reis_kenia_afrika1.jpg';
import BackgroundMozambique from '../../images/mozambique_reizen.jpg';
import BackgroundZuidafrika from '../../images/de_highlights_van_zuid-afrika_mood.jpg';
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
import BackgroundIJsland from '../../images/ijsland.jpg';
import BackgroundCanada from '../../images/canada.jpg';
import BackgroundCostarica from '../../images/costa-rica.jpg';
import BackgroundCuba from '../../images/cuba.jpg';
import BackgroundMexico from '../../images/mexico.jpg';
import BackgroundUSA from '../../images/usa.jpg';
import BackgroundAustralie from '../../images/australie.jpg';
import BackgroundNieuwzeeland from '../../images/nieuwzeeland.jpg';
import BackgroundArgentinie from '../../images/argentinie.jpg';
import BackgroundBolivia from '../../images/bolivia.jpg';
import BackgroundBrazilie from '../../images/brazilie.jpg';
import BackgroundChili from '../../images/chili.jpg';
import BackgroundColombia from '../../images/colombia.jpg';
import BackgroundEcuador from '../../images/ecuador.jpg';
import BackgroundPeru from '../../images/peru.jpg';
import BackgroundHetbestevannoord from '../../images/hetbestevannoord.jpg';

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
            countryName: "Jouw rondreis Thailand",
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundThailand})`,
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
        vietnam: {
            countryName: "Jouw rondreis Thailand14dagen",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundVietnam})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundVietnam})`,
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
            countryName: "Jouw rondreis Botswana",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundBotswana})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundBotswana})`,
            step5: {
                one: {
                    icon: elephantIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: helicopterIcon,
                    text: "Helikoptervlucht",
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
            countryName: "Jouw rondreis Kenia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundKenia})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundKenia})`,
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
            countryName: "Jouw rondreis Mozambique",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundMozambique})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundMozambique})`,
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
            countryName: "Jouw rondreis Namibië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundNamibie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundNamibie})`,
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
            countryName: "Jouw rondreis Oeganda",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundOeganda})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundOeganda})`,
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
            countryName: "Jouw rondreis Tanzania",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundTanzania})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundTanzania})`,
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
            countryName: "Jouw rondreis Zuid-Afrika",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.15), rgba(0,0,0,0.1)),url(${BackgroundZuidafrika})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundZuidafrika})`,
            step5: {
                one: {
                    icon: lionIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: maskIcon,
                    text: "Bezoek een stam",
                    value: "BezoekEenStam"
                },
                three: {
                    icon: surfingIcon,
                    text: "Golfsurfen",
                    value: "Golfsurfen"
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
            countryName: "Jouw rondreis China",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundChina})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundChina})`,
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
            countryName: "Jouw rondreis India",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3), rgba(0,0,0,0.01)),url(${BackgroundIndia})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundIndia})`,
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
            countryName: "Jouw rondreis Indonesië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundIndonesie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundIndonesie})`,
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
            countryName: "Jouw rondreis Japan",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundJapan})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundJapan})`,
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
            countryName: "Jouw rondreis Maleisië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundMaleisie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundMaleisie})`,
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
            countryName: "Jouw rondreis Sri Lanka",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundSrilanka})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundSrilanka})`,
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
            countryName: "Jouw rondreis Vietnam",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundVietnam})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundVietnam})`,
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
            countryName: "Jouw rondreis IJsland",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundIJsland})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundIJsland})`,
            step5: {
                one: {
                    icon: watervalIcon,
                    text: "Waterval bekijken",
                    value: "ErvaarEenWaterval"
                },
                two: {
                    icon: ijslandIcon,
                    text: "Historisch gebouw",
                    value: "bezoek Historisch gebouw"
                },
                three: {
                    icon: sneeuwscooterIcon,
                    text: "Sneeuwscooter tour",
                    value: "sneeuwscooterTour"
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
            countryName: "Jouw rondreis Canada",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundCanada})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundCanada})`,
            step5: {
                one: {
                    icon: beerIcon,
                    text: "Beren spotten",
                    value: "BerenSpotten"
                },
                two: {
                    icon: ijshotelIcon,
                    text: "Verblijf in ijshotel",
                    value: "verblijfInIjshotel"
                },
                three: {
                    icon: hikenIcon,
                    text: "Hiken in de natuur",
                    value: "Hiken"
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
            countryName: "Jouw rondreis Costa Rica",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundCostarica})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundCostarica})`,
            step5: {
                one: {
                    icon: luiaardIcon,
                    text: "Spot de luiaard",
                    value: "SpotDeLuiaard"
                },
                two: {
                    icon: surfingIcon,
                    text: "Golfsurfen",
                    value: "golfsurfen"
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
    } // EINDE LAND
    , {
        cuba: {
            countryName: "Jouw rondreis Cuba",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundCuba})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundCuba})`,
            step5: {
                one: {
                    icon: cigaarIcon,
                    text: "Cigaren rollen",
                    value: "CigarenRollen"
                },
                two: {
                    icon: klassiekeautoIcon,
                    text: "Klassieke autotour",
                    value: "klassiekeAutoTour"
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
        mexico: {
            countryName: "Jouw rondreis Mexico",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundMexico})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundMexico})`,
            step5: {
                one: {
                    icon: mayapiramideIcon,
                    text: "Bezoek een tempel",
                    value: "TempelBezoeken"
                },
                two: {
                    icon: diepzeeduikenIcon,
                    text: "Diepzeeduiken",
                    value: "Diepzeeduiken"
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
    } // EINDE LAND
    , {
        usa: {
            countryName: "Jouw rondreis USA",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundUSA})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundUSA})`,
            step5: {
                one: {
                    icon: vrijheidsbeeldIcon,
                    text: "Het vrijheidsbeeld",
                    value: "BezoekHetVrijheidsbeeld"
                },
                two: {
                    icon: helicopterIcon,
                    text: "Helikoptervlucht",
                    value: "HelikopterVlucht"
                },
                three: {
                    icon: grandcanyonIcon,
                    text: "De Grand Canyon",
                    value: "GrandCanyon"
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
            countryName: "Jouw rondreis Australië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundAustralie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundAustralie})`,
            step5: {
                one: {
                    icon: operahouseIcon,
                    text: "Het Opera House",
                    value: "elephantPark"
                },
                two: {
                    icon: diepzeeduikenIcon,
                    text: "Diepzeeduiken",
                    value: "Diepzeeduiken"
                },
                three: {
                    icon: kangarooIcon,
                    text: "Kangaroo's spotten",
                    value: "KangarooBekijken"
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
            countryName: "Jouw rondreis Nieuw-Zeeland",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25), rgba(0,0,0,0.01)),url(${BackgroundNieuwzeeland})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundNieuwzeeland})`,
            step5: {
                one: {
                    icon: kerknieuwzeelandIcon,
                    text: "Historisch gebouw",
                    value: "Historisch gebouw"
                },
                two: {
                    icon: kayakIcon,
                    text: "Kajakken",
                    value: "Kajakken"
                },
                three: {
                    icon: walvisIcon,
                    text: "Walvis spotten",
                    value: "WalvisSpotten"
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
            countryName: "Jouw rondreis Argentinië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundArgentinie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundArgentinie})`,
            step5: {
                one: {
                    icon: hikenIcon,
                    text: "Wandelen in Patagonië",
                    value: "WandelenInPatagonie"
                },
                two: {
                    icon: watervalIcon,
                    text: "Iguazu watervallen",
                    value: "Watervallen"
                },
                three: {
                    icon: walvisIcon,
                    text: "Walvis spotten",
                    value: "WalvisSpotten"
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
            countryName: "Jouw rondreis Bolivia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.15), rgba(0,0,0,0.01)),url(${BackgroundBolivia})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundBolivia})`,
            step5: {
                one: {
                    icon: alpacaIcon,
                    text: "Alpaca's spotten",
                    value: "AlpacasSpotten"
                },
                two: {
                    icon: meerIcon,
                    text: "Het Titicaca meer",
                    value: "templeVisit"
                },
                three: {
                    icon: zoutvlakteIcon,
                    text: "Zoutvlaktes",
                    value: "Zoutvlaktes"
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
            countryName: "Jouw rondreis Brazilië",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2), rgba(0,0,0,0.01)),url(${BackgroundBrazilie})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundBrazilie})`,
            step5: {
                one: {
                    icon: jezusbeeldIcon,
                    text: "Het Christusbeeld",
                    value: "Christusbeeld"
                },
                two: {
                    icon: amazoneIcon,
                    text: "Verken de Amazone",
                    value: "VerkenDeAmazone"
                },
                three: {
                    icon: relaxenIcon,
                    text: "De Copacabana",
                    value: "DeCopacabana"
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
            countryName: "Jouw rondreis Chili",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.35), rgba(0,0,0,0.01)),url(${BackgroundChili})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundChili})`,
            step5: {
                one: {
                    icon: paaseilandIcon,
                    text: "Naar Paaseiland",
                    value: "BezoekPaaseiland"
                },
                two: {
                    icon: kerkchiliIcon,
                    text: "Historisch gebouw",
                    value: "Historisch gebouw"
                },
                three: {
                    icon: zandboardenIcon,
                    text: "Zandboarden",
                    value: "Zandboarden"
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
            countryName: "Jouw rondreis Colombia",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(0,0,0,0.01)),url(${BackgroundColombia})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundColombia})`,
            step5: {
                one: {
                    icon: koffieplantageIcon,
                    text: "Koffieplantage",
                    value: "Koffieplantage"
                },
                two: {
                    icon: kerkcolombiaIcon,
                    text: "Historisch gebouw",
                    value: "Historisch gebouw"
                },
                three: {
                    icon: surfingIcon,
                    text: "Golfsurfen",
                    value: "Golfsurfen"
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
            countryName: "Jouw rondreis Ecuador",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2), rgba(0,0,0,0.01)),url(${BackgroundEcuador})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundEcuador})`,
            step5: {
                one: {
                    icon: turtleIcon,
                    text: "Galapagos eilanden",
                    value: "GalapagosEilanden"
                },
                two: {
                    icon: middelpuntIcon,
                    text: "Historisch gebouw",
                    value: "HistorischGebouw"
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
    }, // EINDE LAND
    {
        peru: {
            countryName: "Jouw rondreis Peru",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.20), rgba(0,0,0,0.01)),url(${BackgroundPeru})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundPeru})`,
            step5: {
                one: {
                    icon: machupicchuIcon,
                    text: "Machu Picchu",
                    value: "MachuPicchu"
                },
                two: {
                    icon: amazoneIcon,
                    text: "Verken de Amazone",
                    value: "Verken de Amazone"
                },
                three: {
                    icon: kerkperuIcon,
                    text: "Historisch gebouw",
                    value: "Historisch gebouw"
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
    } // EINDE LAND //EINDE LANDEN //BEGIN REIZEN
    ,{
        zuidafrikareis1: {
            countryName: "Jouw rondreis Zuid-Afrika",
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2), rgba(0,0,0,0.1)),url(${BackgroundHetbestevannoord})`,
            backgroundImagePhone: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${BackgroundHetbestevannoord})`,
            step5: {
                one: {
                    icon: lionIcon,
                    text: "Op safari",
                    value: "OpSafari"
                },
                two: {
                    icon: maskIcon,
                    text: "Bezoek een stam",
                    value: "BezoekEenStam"
                },
                three: {
                    icon: surfingIcon,
                    text: "Golfsurfen",
                    value: "Golfsurfen"
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
            // TODO UNCOMMENT bottom one
            

        backgroundImage: this.state.currentCountry.backgroundImagePhone,

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
                        <span className="tripText">{this.state.currentCountry.countryName}</span>
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
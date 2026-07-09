/* =========================================================
   AGING IN PLACE DIRECTORY — CENTRAL LISTINGS DATA
   =========================================================
   HOW TO POPULATE:
   1. Open admin.html in your browser (password protected).
   2. Enter your Google Places API key and pick a city.
   3. Click "Fetch listings" — the tool runs all category
      searches and outputs a ready-to-paste block.
   4. Paste that block into the matching city array below.
   5. Commit + push. Every city page reads from this file.

   Categories used across the site:
   "bathroom"  = Grab bars & bathroom safety
   "tubs"      = Walk-in tubs & showers
   "stairs"    = Stairlifts, ramps & lifts
   "remodel"   = CAPS / whole-home remodelers
   ========================================================= */

const LISTINGS = {
  "anna-tx": [],
  "melissa-tx": [],
  "fate-tx": [],
 "rockwall-tx": [
    {
      "name": "DreamMaker Bath & Kitchen of Greater Rockwall",
      "address": "110 Smirl Dr Suite 108, Heath, TX 75032, USA",
      "phone": "(469) 689-0847",
      "website": "https://dreammaker-remodel.com/greater-rockwall/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=greater-rockwall-office",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Trademark Install",
      "address": "2026 Midlake Rd, Rockwall, TX 75032, USA",
      "phone": "(469) 288-9135",
      "website": "http://www.trademarkinstall.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Ace Hardware",
      "address": "1013 S Goliad St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-2237",
      "website": "http://www.acehardware.com/store-details/02067?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=02067",
      "rating": 4.5,
      "reviews": 480,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "The Home Depot",
      "address": "765 E Interstate 30, Rockwall, TX 75087, USA",
      "phone": "(972) 771-2825",
      "website": "https://www.homedepot.com/l/Rockwall/TX/Rockwall/75087/531?emt=MSGoogleMaps",
      "rating": 4.2,
      "reviews": 1987,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Special Products & Mfg., Inc.",
      "address": "2625 Discovery Blvd, Rockwall, TX 75032, USA",
      "phone": "(972) 771-8851",
      "website": "http://www.spmfg.com/",
      "rating": 4,
      "reviews": 42,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Rockwall Remodeler",
      "address": "5603 Cambria Dr, Rockwall, TX 75032, USA",
      "phone": "(469) 916-5888",
      "website": "https://www.rockwallremodeler.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "Texas Elite Remodeling",
      "address": "1 Horizon Ct Ste C, Rockwall, TX 75032, USA",
      "phone": "(214) 499-9364",
      "website": "https://texaseliteremodeling.com/",
      "rating": 4.8,
      "reviews": 18,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bettermost Handyman",
      "address": "160 Gumbo Dr, Rockwall, TX 75032, USA",
      "phone": "(469) 224-9886",
      "website": "https://bettermostconstruction.com/handyman-services/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "DFW Improved",
      "address": "6652 Pinecrest Dr Ste 100, Plano, TX 75024, USA",
      "phone": "(972) 377-7600",
      "website": "https://www.dfwimproved.com/?utm_source=organic&utm_medium=listings",
      "rating": 4.8,
      "reviews": 640,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Elite Remodeling",
      "address": "2930 Preston Rd Suite 980, Frisco, TX 75034, USA",
      "phone": "(972) 334-9800",
      "website": "https://elitehomeremodeling.com/",
      "rating": 4.6,
      "reviews": 83,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Home Platinum Services LLC",
      "address": "1400 Preston Rd Ste 400, Plano, TX 75093, USA",
      "phone": "(972) 863-2117",
      "website": "https://www.homeplatinumservices.com/",
      "rating": 4.9,
      "reviews": 122,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "ServiceBeaver Professional Handyman and Remodeling",
      "address": "520E E Vine St #1874, Keller, TX 76248, USA",
      "phone": "(817) 944-4990",
      "website": "https://www.servicebeaver.com/",
      "rating": 4.9,
      "reviews": 75,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "One You Love Homecare - Rockwall-Heath",
      "address": "103 N Goliad St #105, Rockwall, TX 75087, USA",
      "phone": "(972) 532-8993",
      "website": "https://oneyoulovehomecare.com/locations/rockwall-heath-tx/",
      "rating": 4.9,
      "reviews": 12,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Expedient Home Health Care",
      "address": "4893 Farm to Market Rd 552, Rockwall, TX 75087, USA",
      "phone": "(972) 772-5086",
      "website": "http://www.expedienthhc.com/",
      "rating": 4,
      "reviews": 6,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "703 N Goliad St, Rockwall, TX 75087, USA",
      "phone": "(469) 314-1774",
      "website": "https://www.rightathome.net/rockwall/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1619",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "FirstLight Home Care of Rockwall",
      "address": "675 Town Square Blvd #200, Garland, TX 75040, USA",
      "phone": "(214) 956-4319",
      "website": "https://www.firstlighthomecare.com/home-healthcare-rockwall/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sunrise Home Health Care",
      "address": "1221 Arista Dr, Rockwall, TX 75032, USA",
      "phone": "(214) 771-0771",
      "website": "http://sunrisehomehealth.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Cornerstone Caregiving",
      "address": "761 Justin Rd Suite E, Rockwall, TX 75087, USA",
      "phone": "(469) 314-9907",
      "website": "https://cornerstonecaregiving.com/locations/rockwall-tx/?utm_source=google&utm_medium=yext",
      "rating": 5,
      "reviews": 21,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Superior Helpers",
      "address": "811 E Yellow Jacket Ln #101, Rockwall, TX 75087, USA",
      "phone": "(469) 974-8262",
      "website": "https://www.superiorhelpers.com/",
      "rating": 4.9,
      "reviews": 15,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Garnet Home Health Care Services",
      "address": "311 Hidden Waters Dr, Lavon, TX 75166, USA",
      "phone": "(469) 653-6405",
      "website": "https://garnet-homehealth.com/services/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "506 N Goliad St Ste 200, Rockwall, TX 75087, USA",
      "phone": "(214) 703-8123",
      "website": "https://www.visitingangels.com/rockwall/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers - Rockwall",
      "address": "2931 Ridge Rd Ste 101-202, Rockwall, TX 75032, USA",
      "phone": "(972) 516-0055",
      "website": "https://www.comfortkeepers.com/offices/texas/rockwall/?utm_source=local&utm_medium=organic",
      "rating": 3,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Divine Glory HomeCare Inc",
      "address": "1101 Ridge Rd Ste 249, Rockwall, TX 75087, USA",
      "phone": "(469) 300-7724",
      "website": "https://www.divinegloryhc.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Mercy Divine Homecare LLC",
      "address": "Patina St, Royse City, TX 75189, USA",
      "phone": "(945) 295-9901",
      "website": "https://www.mercy-divine.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Wellness Wagons",
      "address": "1244 Kennedy Ct, Rockwall, TX 75087, USA",
      "phone": "(469) 267-7007",
      "website": "https://wellnesswagons.com/",
      "rating": 5,
      "reviews": 34,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Meals on Wheels Senior Services of Rockwall County",
      "address": "750 E Interstate 30 Ste200, Rockwall, TX 75087, USA",
      "phone": "(972) 771-9514",
      "website": "http://www.rockwallmealsonwheels.org/",
      "rating": 4.8,
      "reviews": 8,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "RH-Transportation",
      "address": "1021 Manchester Dr, Wylie, TX 75098, USA",
      "phone": "(972) 839-0579",
      "website": "http://rh-transportation.com/",
      "rating": 5,
      "reviews": 18,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Rockwall ISD Transportation",
      "address": "707 S Clark St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-1948",
      "website": "https://www.rockwallisd.com/departments1/transportation/transportation-information",
      "rating": 3,
      "reviews": 46,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "The Center At Rockwall City Place",
      "address": "108 E Washington St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-7740",
      "website": "",
      "rating": 4.7,
      "reviews": 73,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Evergreen at Rockwall",
      "address": "1325 S Goliad St, Rockwall, TX 75087, USA",
      "phone": "(469) 472-5321",
      "website": "http://www.evergreenrockwall.com/",
      "rating": 4.2,
      "reviews": 55,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Rockwall Nursing Care Center",
      "address": "206 Storrs St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-5000",
      "website": "https://rockwallnursing.com/",
      "rating": 3.6,
      "reviews": 35,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Village Green Memory Care Community Rockwall",
      "address": "1192 T L Townsend Dr, Rockwall, TX 75087, USA",
      "phone": "(972) 478-0000",
      "website": "https://villagegreenalzheimerscare.com/rockwall/",
      "rating": 4.9,
      "reviews": 25,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Standard - Rockwall",
      "address": "1325 S Goliad St, Rockwall, TX 75087, USA",
      "phone": "(214) 924-3388",
      "website": "https://thestandard-rockwall.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Alders Rockwall",
      "address": "1196 T L Townsend Dr, Rockwall, TX 75087, USA",
      "phone": "(469) 936-1850",
      "website": "https://www.aldersrockwall.com/?switch_cls[id]=95345&utm_source=gmb&utm_medium=organic",
      "rating": 4.7,
      "reviews": 41,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Pathways To Home",
      "address": "1306 Arezzo Ln, Rockwall, TX 75032, USA",
      "phone": "(972) 588-4334",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Harmony Adult Day and Habilitation Center",
      "address": "705 E Oates Rd, Garland, TX 75043, USA",
      "phone": "(469) 619-7271",
      "website": "http://www.harmonyadultcare.org/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Agape Day Center for Adults",
      "address": "1025 Gross Rd, Mesquite, TX 75149, USA",
      "phone": "(972) 354-9455",
      "website": "http://www.agapedaycenter.com/",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Superior Adult Care Services",
      "address": "500 E High St, Terrell, TX 75160, USA",
      "phone": "(972) 524-6913",
      "website": "",
      "rating": 4.3,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Beyond Care LLC",
      "address": "3201 FM 544 #202, Wylie, TX 75098, USA",
      "phone": "(469) 596-4488",
      "website": "https://www.beyondcareadultday.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Uplift 100 Adult Day Center",
      "address": "5212 Village Creek Dr Ste A, Plano, TX 75093, USA",
      "phone": "(972) 773-9610",
      "website": "https://uplift100.com/",
      "rating": 5,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "1st Choice Adult Day Center",
      "address": "Dallas, TX 75227, USA",
      "phone": "(972) 699-7700",
      "website": "https://www.1stchoicetex.com/",
      "rating": 4.2,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Envision Day Hab",
      "address": "819 E Moore Ave, Terrell, TX 75160, USA",
      "phone": "(469) 474-7077",
      "website": "https://www.facebook.com/envision.dayhab",
      "rating": 4.6,
      "reviews": 9,
      "cats": [
        "social"
      ]
    },
    {
      "name": "1st Choice Adult Day Center",
      "address": "326 E 12th St, Dallas, TX 75203, USA",
      "phone": "(972) 699-7702",
      "website": "http://www.1stchoicetex.com/",
      "rating": 4.5,
      "reviews": 13,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lakeview Education",
      "address": "365 W Rusk St Fl 2nd, Rockwall, TX 75087, USA",
      "phone": "(214) 210-2616",
      "website": "https://lakevieweducation.com/",
      "rating": 4.1,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Atrium Legal Group, PLLC",
      "address": "1131 W Yellow Jacket Ln, Rockwall, TX 75087, USA",
      "phone": "(469) 402-3030",
      "website": "http://www.atriumlegalgroup.com/",
      "rating": 4.9,
      "reviews": 145,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ashmore & Ashmore Law Firm",
      "address": "902 N Goliad St, Rockwall, TX 75087, USA",
      "phone": "(972) 325-5938",
      "website": "https://www.ashmorelawfirm.com/",
      "rating": 4.6,
      "reviews": 200,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Timpa Law Office",
      "address": "202 N San Jacinto St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-9627",
      "website": "http://timpalaw.com/",
      "rating": 4.8,
      "reviews": 190,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Faithful Stewardship Law Firm",
      "address": "110 Greenhill Ln Third Floor Suite 307, Rockwall, TX 75087, USA",
      "phone": "(214) 600-7523",
      "website": "https://faithful-stewardship.com/?utm_source=google+business+profile&utm_medium=organic&utm_id=Google+Business+Profile",
      "rating": 5,
      "reviews": 22,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office Of Susan Satterwhite PC",
      "address": "1509 Summer Lee Dr, Rockwall, TX 75032, USA",
      "phone": "(972) 771-1162",
      "website": "http://susansatterwhitepc.com/",
      "rating": 4.4,
      "reviews": 27,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Pittman & Henderson PLLC",
      "address": "6530 Alliance Dr #120, Rockwall, TX 75032, USA",
      "phone": "(469) 442-1340",
      "website": "https://www.pittmanhenderson.com/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Offices of David E. Rohlf",
      "address": "102 Ross St A, Rockwall, TX 75087, USA",
      "phone": "(972) 771-0054",
      "website": "https://www.attorneylawrockwall.com/?npcmp=dir:local:3231214:75087",
      "rating": 4.2,
      "reviews": 24,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Jack Robinson",
      "address": "603 N Goliad St, Rockwall, TX 75087, USA",
      "phone": "(972) 772-6100",
      "website": "https://jackrobinson.com/?utm_source=google&utm_medium=organic&utm_campaign=google-business&utm_content=gbp-profile",
      "rating": 4.8,
      "reviews": 58,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The White Law Firm",
      "address": "503 S Goliad St, Rockwall, TX 75087, USA",
      "phone": "(972) 771-8011",
      "website": "http://www.whitelaw.law/",
      "rating": 4.4,
      "reviews": 13,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of John B. Henry, III, PLLC",
      "address": "102 S Goliad St Ste 106, Rockwall, TX 75087, USA",
      "phone": "(469) 305-7583",
      "website": "http://www.johnhenrylaw.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "legal"
      ]
    }
  ],
  "mckinney-tx": [
    {
      "name": "DFW Grab Bars",
      "address": "1812 Amber Ln, Carrollton, TX 75007, USA",
      "phone": "(214) 585-3326",
      "website": "https://www.dfwgrabbars.com/",
      "rating": 5,
      "reviews": 109,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Midwest Collin County",
      "address": "703 N Chestnut St Ste B, McKinney, TX 75069, USA",
      "phone": "(214) 387-3474",
      "website": "https://www.mrhandyman.com/midwest-collin-county/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.9,
      "reviews": 1444,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Five Star Bath Solutions of McKinney",
      "address": "2150 S Central Expy Ste 200, McKinney, TX 75070, USA",
      "phone": "(469) 414-5882",
      "website": "https://fivestarbathsolutions.com/mckinney-tx/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Mr. Handyman of Flower Mound, Lewisville and Denton",
      "address": "1075 Civic Cir Ste B, Lewisville, TX 75067, USA",
      "phone": "(972) 627-4793",
      "website": "https://www.mrhandyman.com/flower-mound-lewisville-denton/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.9,
      "reviews": 573,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "The Bath Pros - Bathroom Remodeling Contractors",
      "address": "7425 Elm Fork Dr, McKinney, TX 75071, USA",
      "phone": "(972) 521-6140",
      "website": "https://www.thebathpros.com/",
      "rating": 4.4,
      "reviews": 25,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Moore Supply Co. & Facets",
      "address": "424 Metro Park Dr Ste 200, McKinney, TX 75071, USA",
      "phone": "(972) 562-4996",
      "website": "http://www.mooresupplymckinney.com/",
      "rating": 4.4,
      "reviews": 42,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "THE TUB GUYS",
      "address": "2631 Mountain View Dr, McKinney, TX 75071, USA",
      "phone": "(214) 300-8111",
      "website": "https://www.facebook.com/RepairAndRefinishing/",
      "rating": 5,
      "reviews": 23,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": ".plumbersmckinneytexas.co",
      "address": "500 N Custer Rd, McKinney, TX 75071, USA",
      "phone": "(972) 265-9829",
      "website": "http://plumbersmckinneytexas.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bright TV Mounting & Home Services",
      "address": "6100 Eldorado Pkwy, McKinney, TX 75072, USA",
      "phone": "(945) 336-6598",
      "website": "https://brighttvservice.com/",
      "rating": 5,
      "reviews": 460,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath Envy Remodeling",
      "address": "119 W Virginia St Ste 301, McKinney, TX 75069, USA",
      "phone": "(469) 905-3201",
      "website": "https://bathenvy.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "USA Choice Remodeling And Outdoor Living",
      "address": "5900 S Lake Forest Dr, McKinney, TX 75070, USA",
      "phone": "(972) 639-2794",
      "website": "http://www.usachoiceremodel.com/",
      "rating": 4.8,
      "reviews": 52,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "New Value Home Remodeling",
      "address": "7300 State Hwy 121 Ste. 300, McKinney, TX 75070, USA",
      "phone": "(469) 991-3182",
      "website": "https://newvaluehomeremodeling.com/",
      "rating": 5,
      "reviews": 95,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "The Bath Pros",
      "address": "777 Bourland Bnd, Celina, TX 75009, USA",
      "phone": "(972) 521-6140",
      "website": "https://www.thebathpros.com/",
      "rating": 4.6,
      "reviews": 29,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "McKinney Bathroom Solutions",
      "address": "2004 Fleming Dr, McKinney, TX 75070, USA",
      "phone": "(972) 528-0547",
      "website": "https://mckinneybathroomsolutions.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Next Day Access North Dallas",
      "address": "1922 Choate Pkwy Ste 101, Celina, TX 75009, USA",
      "phone": "(214) 382-9353",
      "website": "https://www.nextdayaccess.com/celina-tx/",
      "rating": 4.9,
      "reviews": 58,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stair Solutions",
      "address": "5651 Lawrence Ln, McKinney, TX 75071, USA",
      "phone": "(972) 347-5151",
      "website": "http://www.stairsolutionsus.com/",
      "rating": 4.8,
      "reviews": 26,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "SafeLifts of Texas",
      "address": "130 N Preston Rd Ste 410, Prosper, TX 75078, USA",
      "phone": "(972) 633-5438",
      "website": "http://www.safelifts.com/",
      "rating": 4.9,
      "reviews": 462,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lone Star Stairlifts - Greater Houston",
      "address": "16250 State Hwy 3 Ste A3, Webster, TX 77598, USA",
      "phone": "(281) 538-1215",
      "website": "https://www.greaterhoustonstairlifts.com/",
      "rating": 5,
      "reviews": 67,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Ascend Residential Elevators & Lifts",
      "address": "2910 Belmeade Dr #101, Carrollton, TX 75006, USA",
      "phone": "(214) 763-9060",
      "website": "http://www.ascendadditions.com/",
      "rating": 4.9,
      "reviews": 37,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "FJR Stair & Door",
      "address": "10689 Rose Garden Ct, McKinney, TX 75072, USA",
      "phone": "(945) 273-2002",
      "website": "https://fjrstairanddoor.com/",
      "rating": 5,
      "reviews": 59,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Southern Stairlifts",
      "address": "13 Farringdon Dr, Greenville, SC 29615, USA",
      "phone": "(864) 979-4148",
      "website": "https://southernstairlifts.com/greenville/",
      "rating": 5,
      "reviews": 22,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "The Lift Shop",
      "address": "900 N Central Expy N Ste 102, McKinney, TX 75070, USA",
      "phone": "(214) 429-3161",
      "website": "https://www.liftedtrucks.com/the-lift-shop/index.htm",
      "rating": 4.9,
      "reviews": 79,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Dallas",
      "address": "2601 Summit Ave #300, Plano, TX 75074, USA",
      "phone": "(214) 571-7134",
      "website": "https://www.101mobility.com/dallas/?utm_source=GBP_Dallas&utm_medium=organic&y_source=1_MTAzMzU5NzAwNS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "501 N Industrial Blvd Ste 300, Bedford, TX 76021, USA",
      "phone": "(682) 297-6029",
      "website": "https://mobilitycity.com/fort-worth-tx/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 1851,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Rxpro Medical Supply",
      "address": "1705 W University Dr Ste 104, McKinney, TX 75069, USA",
      "phone": "(972) 954-9400",
      "website": "https://www.rxpromedicalsupply.com/",
      "rating": 4.9,
      "reviews": 32,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Hieline Medical",
      "address": "720 F Avenue #101, Plano, TX 75074, USA",
      "phone": "(214) 227-2222",
      "website": "https://hielinemedical.com/",
      "rating": 4.7,
      "reviews": 212,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "New Life Medical Equipment",
      "address": "501 Anthony St, McKinney, TX 75069, USA",
      "phone": "(972) 233-5433",
      "website": "http://www.newlifehme.com/",
      "rating": 4.7,
      "reviews": 71,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "9720 Coit Rd #180, Plano, TX 75025, USA",
      "phone": "(972) 498-1134",
      "website": "https://mobilitycity.com/north-tx/?utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 269,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "United Access",
      "address": "2704 Lawing Ln #300, Rowlett, TX 75088, USA",
      "phone": "(972) 240-8839",
      "website": "https://www.unitedaccess.com/us/en/locations/rowlett-tx.html",
      "rating": 4.9,
      "reviews": 79,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Aging-In-Place Remodeling",
      "address": "620 Venture St D, Escondido, CA 92029, USA",
      "phone": "(858) 776-8700",
      "website": "http://aipremodeling.com/",
      "rating": 4.4,
      "reviews": 18,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Legacy Home Pro",
      "address": "6401 Eldorado Pkwy Ste 222, McKinney, TX 75070, USA",
      "phone": "(214) 273-0306",
      "website": "http://www.legacyhomecarepro.com/?utm_campaign=gmb",
      "rating": 4.7,
      "reviews": 35,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "DFW Home Health McKinney",
      "address": "6951 Virginia Pkwy Ste 100, McKinney, TX 75071, USA",
      "phone": "(817) 417-5344",
      "website": "https://lhcgroup.com/locations/dfw-home-health-mckinney/",
      "rating": 3.7,
      "reviews": 6,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care McKinney",
      "address": "4500 Eldorado Pkwy Ste 1500, McKinney, TX 75070, USA",
      "phone": "(214) 491-1999",
      "website": "https://www.visitingangels.com/mckinney/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 206,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Aunt Mae's Home Care",
      "address": "2570 Eldorado Pkwy #120, McKinney, TX 75072, USA",
      "phone": "(469) 742-0700",
      "website": "http://www.auntmae.com/",
      "rating": 4.8,
      "reviews": 72,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Helpers Home Care of McKinney",
      "address": "1833 W Hunt St Ste 9, McKinney, TX 75069, USA",
      "phone": "(469) 373-8779",
      "website": "https://homehelpershomecare.com/mckinney/?utm_source=google&utm_medium=organic&utm_campaign=gbp-mckinney&utm_id=local&utm_content=mckinney",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FirstLight Home Care of McKinney",
      "address": "130 N Preston Rd 109 & 110, Prosper, TX 75078, USA",
      "phone": "(945) 357-9025",
      "website": "https://www.firstlighthomecare.com/home-healthcare-mckinney/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Care Mountain McKinney",
      "address": "6800 Weiskopf Ave suite 150, McKinney, TX 75070, USA",
      "phone": "(469) 789-7166",
      "website": "https://www.caremountain.com/mckinney-texas/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "1Mission Home Care",
      "address": "2150 S Central Expy #200, McKinney, TX 75070, USA",
      "phone": "(214) 556-8852",
      "website": "https://1missionhomecare.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Generations Home Care",
      "address": "2300 W White Ave Ste 108, McKinney, TX 75071, USA",
      "phone": "(469) 885-4893",
      "website": "https://generationshomecare.org/home-health-care-near-mckinney-tx/?utm_source=gbp",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Prominent HomeCare Solutions",
      "address": "7300 State Hwy 121 Ste 300, McKinney, TX 75070, USA",
      "phone": "(214) 935-8866",
      "website": "https://phs-dfw.com/",
      "rating": 5,
      "reviews": 54,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "5900 Lake Forest Dr Ste 300, McKinney, TX 75070, USA",
      "phone": "(972) 984-2627",
      "website": "https://www.homeinstead.com/home-care/usa/tx/plano/413/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 22,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "6000 Alma Rd Ste 1201, McKinney, TX 75070, USA",
      "phone": "(469) 340-0601",
      "website": "https://www.seniorhelpers.com/tx/mckinney?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 39,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Touching Hearts at Home",
      "address": "5900 S Lake Forest Dr Ste 300, McKinney, TX 75070, USA",
      "phone": "(469) 342-8750",
      "website": "http://www.touchinghearts.com/mckinney",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Prominent Care Transport",
      "address": "7300 State Hwy 121 Ste 300, McKinney, TX 75070, USA",
      "phone": "(214) 383-2877",
      "website": "https://roundtriptransport.com/",
      "rating": 4.9,
      "reviews": 74,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Reliable Solutions Medical Transportation",
      "address": "7300 State Hwy 121 Ste. 300, McKinney, TX 75070, USA",
      "phone": "(682) 715-3074",
      "website": "https://www.reliablesolmedtranspo.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Senior Center Resources and Public Transit",
      "address": "4912 Lee St, Greenville, TX 75401, USA",
      "phone": "(903) 454-1444",
      "website": "http://www.scrpt.org/",
      "rating": 4.5,
      "reviews": 28,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Meals on Wheels Collin County",
      "address": "600 N Tennessee St, McKinney, TX 75069, USA",
      "phone": "(972) 562-6996",
      "website": "https://www.mealsonwheelscc.org/",
      "rating": 4.7,
      "reviews": 49,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Collin County Area Regional Transit",
      "address": "600 N Tennessee St, McKinney, TX 75069, USA",
      "phone": "(972) 562-4275",
      "website": "",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "McKinney Senior Recreation Center",
      "address": "1400 S College St, McKinney, TX 75069, USA",
      "phone": "(972) 547-7491",
      "website": "https://www.mckinneytexas.org/621/Senior-Recreation-Center",
      "rating": 4.7,
      "reviews": 209,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "BC Mobile Resources Non emergency transportation",
      "address": "450 Century Pkwy, Allen, TX 75013, USA",
      "phone": "(469) 702-0593",
      "website": "http://bcmobileresources.com/",
      "rating": 4.4,
      "reviews": 28,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Elite Community Transportation",
      "address": "4402 Broadway Blvd Ste 14G, Garland, TX 75043, USA",
      "phone": "(469) 530-3077",
      "website": "https://www.elitecommunitytransportation.com/",
      "rating": 4.8,
      "reviews": 22,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Home Base Transportation",
      "address": "617 N Ebrite St, Mesquite, TX 75149, USA",
      "phone": "(214) 507-3943",
      "website": "https://homebasetransportation.com/",
      "rating": 3.6,
      "reviews": 16,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Golden Grace Assisted Living & Adult Day Activity",
      "address": "1710 N McDonald St, McKinney, TX 75071, USA",
      "phone": "(972) 569-9000",
      "website": "http://goldengracedahs.com/",
      "rating": 4.3,
      "reviews": 29,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Everyone's Day Hab",
      "address": "1228 E Exchange Pkwy #118, Allen, TX 75002, USA",
      "phone": "(214) 284-0677",
      "website": "http://www.everyonesdayhab.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Harmony Adult Day and Habilitation Center",
      "address": "705 E Oates Rd, Garland, TX 75043, USA",
      "phone": "(469) 619-7271",
      "website": "http://www.harmonyadultcare.org/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Uplift 100 Adult Day Center",
      "address": "5212 Village Creek Dr Ste A, Plano, TX 75093, USA",
      "phone": "(972) 773-9610",
      "website": "https://uplift100.com/",
      "rating": 5,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Encore Memory Care Day Center",
      "address": "6505 W Park Blvd #116, Plano, TX 75093, USA",
      "phone": "(972) 810-0228",
      "website": "http://www.encoredaycare.com/",
      "rating": 5,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Together We Care Adult day Activity Center",
      "address": "500 S Lake Dallas Dr Ste 505, Lake Dallas, TX 75065, USA",
      "phone": "",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Agape Day Center for Adults",
      "address": "1025 Gross Rd, Mesquite, TX 75149, USA",
      "phone": "(972) 354-9455",
      "website": "http://www.agapedaycenter.com/",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "social"
      ]
    },
    {
      "name": "1st Choice Adult Day Center",
      "address": "Dallas, TX 75227, USA",
      "phone": "(972) 699-7700",
      "website": "https://www.1stchoicetex.com/",
      "rating": 4.2,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Law Offices Of Amy L. Jenkins, P.C.",
      "address": "3600 Eldorado Pkwy Ste A200, McKinney, TX 75070, USA",
      "phone": "(469) 296-8202",
      "website": "https://amyjenkinslaw.com/",
      "rating": 4.9,
      "reviews": 31,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "1st Estate Planning, PLLC (Formerly Anderson Estate Planning)",
      "address": "6401 Eldorado Pkwy Ste 324, McKinney, TX 75070, USA",
      "phone": "(469) 207-1529",
      "website": "https://1stestateplanning.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
      "rating": 5,
      "reviews": 109,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Anderson Law Firm, PLLC",
      "address": "5900 S Lake Forest Dr Ste 300, McKinney, TX 75070, USA",
      "phone": "(972) 299-0833",
      "website": "https://www.andersonlawfirmpllc.com/",
      "rating": 4.8,
      "reviews": 80,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "WG Law",
      "address": "7701 Eldorado Pkwy St #200, McKinney, TX 75070, USA",
      "phone": "(214) 250-4407",
      "website": "https://www.willprobateattorneys.com/?utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 369,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Malolo Law Firm, PLLC",
      "address": "6401 Eldorado Pkwy Ste 102, McKinney, TX 75070, USA",
      "phone": "(214) 620-2088",
      "website": "https://mckinneyestateplanning.com/",
      "rating": 5,
      "reviews": 331,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "R Dean Davenport Attorney at Law",
      "address": "6800 Weiskopf Ave suite 150, McKinney, TX 75070, USA",
      "phone": "(469) 352-1876",
      "website": "https://estatelawtexas.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Estes Law Office, P.L.L.C.",
      "address": "105 N Benge St, McKinney, TX 75069, USA",
      "phone": "(972) 418-2919",
      "website": "http://www.esteslawoffice.com/",
      "rating": 5,
      "reviews": 47,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Philips & Epperson Attorneys LP",
      "address": "2301 Virginia Pkwy, McKinney, TX 75071, USA",
      "phone": "(972) 562-9440",
      "website": "http://www.philipsandepperson.com/",
      "rating": 4.7,
      "reviews": 50,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Caton Law Firm",
      "address": "206 S Tennessee St, McKinney, TX 75069, USA",
      "phone": "(972) 562-0777",
      "website": "https://www.caton-firm.com/",
      "rating": 4.7,
      "reviews": 14,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Camille Borg Law PLLC",
      "address": "5060 Collin McKinney Pkwy Unit 104, McKinney, TX 75070, USA",
      "phone": "(469) 646-7763",
      "website": "https://www.camilleborglaw.com/",
      "rating": 4.7,
      "reviews": 134,
      "cats": [
        "legal"
      ]
    }
  ],
  "frisco-tx": [
    {
      "name": "AHOD - Handyman Services",
      "address": "122 Rose Ln P3, Frisco, TX 75036, USA",
      "phone": "(469) 966-7774",
      "website": "https://www.ahodhandyman.com/",
      "rating": 4.4,
      "reviews": 72,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Handyman Home Pros",
      "address": "5848 Kimber Ln, Frisco, TX 75034, USA",
      "phone": "(214) 308-9441",
      "website": "http://handymanhomepros.com/",
      "rating": 4.9,
      "reviews": 338,
      "cats": [
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "Ferguson Home",
      "address": "7946 State Hwy 121, Frisco, TX 75034, USA",
      "phone": "(972) 987-8677",
      "website": "https://www.fergusonhome.com/showroom/branch/frisco-tx-showroom-0064?utm_source=google&utm_medium=organic&utm_campaign=shw_lis_listingtraffic&utm_content=listing",
      "rating": 3.6,
      "reviews": 123,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Affordable 1 Day Bath",
      "address": "1406 N Corinth St Ste 409, Corinth, TX 76208, USA",
      "phone": "(214) 466-6037",
      "website": "https://www.affordable1daybath.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Zintex Remodeling Group",
      "address": "591 Benjamin's Way, Lewisville, TX 75057, USA",
      "phone": "(972) 934-5696",
      "website": "http://www.zintex.com/?utm_source=googlemybusiness&utm_medium=dfwlisting&promo=gmbdfw&region=0001",
      "rating": 4.7,
      "reviews": 601,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Azores Kitchen & Bath Remodeling",
      "address": "425 Old Newman Rd Ste 502/2, Frisco, TX 75036, USA",
      "phone": "(972) 309-9009",
      "website": "https://azoresremodeling.com/frisco/",
      "rating": 5,
      "reviews": 210,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Elite KBF Remodel",
      "address": "1927 Old Witt Rd Ste 350, Frisco, TX 75036, USA",
      "phone": "(469) 927-2045",
      "website": "https://elitekbfremodel.com/frisco-tx",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Red River Renovations",
      "address": "7122 Stoneridge Dr, Frisco, TX 75034, USA",
      "phone": "(214) 492-9480",
      "website": "https://redriverrenovations.com/",
      "rating": 5,
      "reviews": 86,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "All American Home Renovators",
      "address": "6010 W Spring Creek Pkwy, Plano, TX 75024, USA",
      "phone": "(214) 206-7005",
      "website": "https://www.allamericanhomerenovators.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lone Star Stairlifts - Dallas Metroplex",
      "address": "500 E Arapaho Rd Ste 510, Richardson, TX 75081, USA",
      "phone": "(214) 604-7840",
      "website": "https://metroplexstairlifts.com/",
      "rating": 5,
      "reviews": 27,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "SafeLifts of Texas",
      "address": "130 N Preston Rd Ste 410, Prosper, TX 75078, USA",
      "phone": "(972) 633-5438",
      "website": "http://www.safelifts.com/",
      "rating": 4.9,
      "reviews": 463,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Dallas",
      "address": "2601 Summit Ave #300, Plano, TX 75074, USA",
      "phone": "(214) 571-7134",
      "website": "https://www.101mobility.com/dallas/?utm_source=GBP_Dallas&utm_medium=organic&y_source=1_MTAzMzU5NzAwNS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Ascend Residential Elevators & Lifts",
      "address": "2910 Belmeade Dr #101, Carrollton, TX 75006, USA",
      "phone": "(214) 763-9060",
      "website": "http://www.ascendadditions.com/",
      "rating": 4.9,
      "reviews": 37,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Baxter Residential Elevators by RD Baxter",
      "address": "5000 Eldorado Pkwy, Frisco, TX 75033, USA",
      "phone": "(972) 424-3070",
      "website": "http://www.baxterresidentialelevators.com/",
      "rating": 4.1,
      "reviews": 9,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "2000 E Lamar Blvd #600, Arlington, TX 76006, USA",
      "phone": "(972) 408-3335",
      "website": "https://www.lifewaymobility.com/dallas/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Dallas",
      "rating": 4.9,
      "reviews": 153,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "501 N Industrial Blvd Ste 300, Bedford, TX 76021, USA",
      "phone": "(682) 297-6029",
      "website": "https://mobilitycity.com/fort-worth-tx/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 1851,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "9720 Coit Rd #180, Plano, TX 75025, USA",
      "phone": "(972) 498-1134",
      "website": "https://mobilitycity.com/north-tx/?utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 269,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Future Mobility Systems of Texas",
      "address": "4371 FM 51, Decatur, TX 76234, USA",
      "phone": "(940) 255-4334",
      "website": "https://futuremobilitytexas.com/",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Hieline Medical",
      "address": "720 F Avenue #101, Plano, TX 75074, USA",
      "phone": "(214) 227-2222",
      "website": "https://hielinemedical.com/",
      "rating": 4.7,
      "reviews": 212,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Advanced Medical Supply",
      "address": "6700 Main St Ste 104, The Colony, TX 75056, USA",
      "phone": "(214) 494-6464",
      "website": "http://advanceddmesupplies.com/",
      "rating": 4.6,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "United Access",
      "address": "2704 Lawing Ln #300, Rowlett, TX 75088, USA",
      "phone": "(972) 240-8839",
      "website": "https://www.unitedaccess.com/us/en/locations/rowlett-tx.html",
      "rating": 4.9,
      "reviews": 79,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "United Access",
      "address": "2109 Luna Rd #200, Carrollton, TX 75006, USA",
      "phone": "(972) 432-5538",
      "website": "https://www.unitedaccess.com/us/en/locations/carrollton-tx.html",
      "rating": 4.8,
      "reviews": 78,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Elite Remodeling",
      "address": "2930 Preston Rd Suite 980, Frisco, TX 75034, USA",
      "phone": "(972) 334-9800",
      "website": "https://elitehomeremodeling.com/",
      "rating": 4.6,
      "reviews": 83,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Home Platinum Services LLC",
      "address": "1400 Preston Rd Ste 400, Plano, TX 75093, USA",
      "phone": "(972) 863-2117",
      "website": "https://www.homeplatinumservices.com/",
      "rating": 4.9,
      "reviews": 122,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Mr. Handyman of Frisco",
      "address": "6136 Frisco Square Blvd, Frisco, TX 75034, USA",
      "phone": "(972) 439-1191",
      "website": "https://www.mrhandyman.com/frisco/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.9,
      "reviews": 1432,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "DFW Improved",
      "address": "6652 Pinecrest Dr Ste 100, Plano, TX 75024, USA",
      "phone": "(972) 377-7600",
      "website": "https://www.dfwimproved.com/?utm_source=organic&utm_medium=listings",
      "rating": 4.8,
      "reviews": 640,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "I Am Renovation, LLC",
      "address": "701 Oak Ln, Grapevine, TX 76051, USA",
      "phone": "(817) 852-5932",
      "website": "",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Agapé Home Services",
      "address": "3207 Skylane Dr #105, Carrollton, TX 75006, USA",
      "phone": "(469) 208-6134",
      "website": "https://agapehomeservices.com/",
      "rating": 4.9,
      "reviews": 85,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "GP Homes and Repairs",
      "address": "5055 W Park Blvd Suite,400 #132, Plano, TX 75093, USA",
      "phone": "(469) 444-7777",
      "website": "https://gphomesandrepairs.com/",
      "rating": 4.9,
      "reviews": 61,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "FirstLight Home Care of Frisco",
      "address": "400 Stonebrook Pkwy Unit 603, Frisco, TX 75036, USA",
      "phone": "(214) 764-5882",
      "website": "https://www.firstlighthomecare.com/home-healthcare-frisco/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 30,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Nexus Home Healthcare",
      "address": "4645 Avon Ln Suite 345, Frisco, TX 75033, USA",
      "phone": "(469) 317-3017",
      "website": "http://nexushomehealthcare.com/",
      "rating": 5,
      "reviews": 32,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Assisting Hands Home Care - Frisco, Plano, TX & Surrounding Areas",
      "address": "1721 W Plano Pkwy #126, Plano, TX 75075, USA",
      "phone": "(214) 609-1340",
      "website": "https://assistinghands.com/92/texas/frisco/",
      "rating": 5,
      "reviews": 46,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Favorite Home Health Care LLC",
      "address": "9555 Lebanon Rd, Frisco, TX 75035, USA",
      "phone": "(972) 335-0410",
      "website": "http://www.favoritehomehealth.com/",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Helpers Home Care of Frisco, TX",
      "address": "7460 Warren Pkwy #100, Frisco, TX 75034, USA",
      "phone": "(469) 263-1913",
      "website": "https://homehelpershomecare.com/frisco-tx",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Crescent Home Health",
      "address": "4085 Ohio Dr #500, Frisco, TX 75035, USA",
      "phone": "(214) 375-0101",
      "website": "http://www.crescenthomehealthtx.com/",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lonestar Visiting Caregivers",
      "address": "7460 Warren Pkwy Ste 166, Frisco, TX 75034, USA",
      "phone": "(682) 203-4126",
      "website": "https://lonestarvc.com/en-us/",
      "rating": 4.9,
      "reviews": 29,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Integrity Home Care Agency",
      "address": "5700 Tennyson Pkwy, Plano, TX 75024, USA",
      "phone": "(214) 551-6318",
      "website": "http://integritymedhomecare.com/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "ALL SAINTS HOME HEALTH CARE INC",
      "address": "2601 Little Elm Pkwy Ste 602, Little Elm, TX 75068, USA",
      "phone": "(972) 573-4001",
      "website": "http://www.allsaintshhc.com/",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors",
      "address": "6136 Frisco Square Blvd Ste 429, Frisco, TX 75034, USA",
      "phone": "(469) 768-0308",
      "website": "https://locations.seniorshelpingseniors.com/tx/frisco/130.html",
      "rating": 4.9,
      "reviews": 8,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care McKinney",
      "address": "4500 Eldorado Pkwy Ste 1500, McKinney, TX 75070, USA",
      "phone": "(214) 491-1999",
      "website": "https://www.visitingangels.com/mckinney/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 206,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "400 Stonebrook Pkwy Suite 802, Frisco, TX 75036, USA",
      "phone": "(972) 908-0654",
      "website": "https://www.seniorhelpers.com/tx/legacy-trail/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead - Home Care Services of Carrollton, Frisco & Plano Texas",
      "address": "4425 Plano Pkwy Ste 201, Carrollton, TX 75010, USA",
      "phone": "(972) 243-6100",
      "website": "https://www.homeinstead.com/home-care/usa/tx/carrollton-coppell-irving/407/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Sweet Home Care LLC",
      "address": "5465 Legacy Dr #650, Plano, TX 75024, USA",
      "phone": "(945) 249-4193",
      "website": "https://myhomesweethomecare.com/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Harmony at Home Senior Care",
      "address": "850 Central Pkwy E #246, Plano, TX 75074, USA",
      "phone": "(972) 789-4187",
      "website": "https://harmonyathomeseniorcare.com/",
      "rating": 4.9,
      "reviews": 67,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Prominent Care Transport",
      "address": "7300 State Hwy 121 Ste 300, McKinney, TX 75070, USA",
      "phone": "(214) 383-2877",
      "website": "https://roundtriptransport.com/",
      "rating": 4.9,
      "reviews": 74,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Frisco P Transportation",
      "address": "2613 Mariners Dr, Little Elm, TX 75068, USA",
      "phone": "(945) 249-4427",
      "website": "https://www.friscopremiumtransportation.com/",
      "rating": 5,
      "reviews": 31,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Texas Senior Care Transport",
      "address": "9550 Spring Green Blvd Ste 408 2, Katy, TX 77494, USA",
      "phone": "(346) 517-6029",
      "website": "https://www.texasseniorcaretransport.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "CareTrips",
      "address": "1616 Gateway Blvd, Richardson, TX 75080, USA",
      "phone": "(214) 238-9100",
      "website": "http://www.caretrips.net/",
      "rating": 3.5,
      "reviews": 94,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Integrity EMS Services",
      "address": "9300 John Hickman Pkwy Ste 803, Frisco, TX 75035, USA",
      "phone": "(469) 921-6159",
      "website": "https://integrityemsservices.com/",
      "rating": 4.5,
      "reviews": 156,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Maverick Medical Transportation",
      "address": "2081 Hutton Dr Ste 105, Carrollton, TX 75006, USA",
      "phone": "(469) 892-0024",
      "website": "https://maverickmtc.com/",
      "rating": 4.5,
      "reviews": 71,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "The Grove at Frisco Commons",
      "address": "8300 McKinney Rd, Frisco, TX 75034, USA",
      "phone": "(972) 292-6550",
      "website": "https://www.friscotexas.gov/1559/The-Grove-at-Frisco-Commons",
      "rating": 4.7,
      "reviews": 50,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Uplift 100 Adult Day Center",
      "address": "5212 Village Creek Dr Ste A, Plano, TX 75093, USA",
      "phone": "(972) 773-9610",
      "website": "https://uplift100.com/",
      "rating": 5,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Encore Memory Care Day Center",
      "address": "6505 W Park Blvd #116, Plano, TX 75093, USA",
      "phone": "(972) 810-0228",
      "website": "http://www.encoredaycare.com/",
      "rating": 5,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Harmony Adult Day and Habilitation Center",
      "address": "705 E Oates Rd, Garland, TX 75043, USA",
      "phone": "(469) 619-7271",
      "website": "http://www.harmonyadultcare.org/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Friends Place Plano",
      "address": "4682 McDermott Rd, Plano, TX 75024, USA",
      "phone": "(972) 437-2940",
      "website": "https://www.friendsplaceads.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Hogue Barnett, PLLC",
      "address": "5300 Town and Country Blvd Ste 200, Frisco, TX 75034, USA",
      "phone": "(214) 618-3160",
      "website": "https://hoguebarnett.com/",
      "rating": 4.8,
      "reviews": 61,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Marx Law Firm",
      "address": "6136 Frisco Square Blvd Ste 400, Frisco, TX 75034, USA",
      "phone": "(469) 747-0451",
      "website": "https://marxfirm.com/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 139,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Adriane S. Grace, PLLC",
      "address": "3010 Gaylord Pkwy Ste 210, Frisco, TX 75034, USA",
      "phone": "",
      "website": "https://www.gracelawoffice.com/",
      "rating": 4.9,
      "reviews": 61,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Pratt Law Group PLLC",
      "address": "2591 Dallas Pkwy Ste. 300, Frisco, TX 75034, USA",
      "phone": "(972) 712-1515",
      "website": "https://texasestates.com/",
      "rating": 3.9,
      "reviews": 53,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Werner Law Firm TX, PLLC",
      "address": "4645 Wyndham Ln Ste 190, Frisco, TX 75033, USA",
      "phone": "(945) 207-8007",
      "website": "https://wernerlawtx.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Judith P. Kenney & Associates, P.C.",
      "address": "5300 Town and Country Blvd Ste 195, Frisco, TX 75034, USA",
      "phone": "(972) 713-6133",
      "website": "https://www.judithkenneylaw.com/?utm_source=GMB",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Estes Law Office, P.L.L.C.",
      "address": "6160 Warren Pkwy #100, Frisco, TX 75034, USA",
      "phone": "(972) 418-2919",
      "website": "http://www.esteslawoffice.com/",
      "rating": 5,
      "reviews": 17,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Miller Law Office, PLLC",
      "address": "1400 Preston Rd Ste 118, Plano, TX 75093, USA",
      "phone": "(214) 292-4225",
      "website": "http://www.aaronmillerlaw.com/",
      "rating": 4.8,
      "reviews": 69,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Leu, Peirce & Olson, PLLC",
      "address": "2313 Coit Rd A, Plano, TX 75075, USA",
      "phone": "(972) 996-2540",
      "website": "http://www.leulawfirm.com/",
      "rating": 4.2,
      "reviews": 39,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Weeks Law Firm",
      "address": "5600 Tennyson Pkwy #105, Plano, TX 75024, USA",
      "phone": "(214) 269-4290",
      "website": "https://weekslawfirm.com/?utm_source=Google&utm_medium=Local&utm_campaign=GMB",
      "rating": 4.9,
      "reviews": 70,
      "cats": [
        "legal"
      ]
    }
  ],
  "fulshear-tx": [],
  "katy-tx": [],
  "leland-nc": [],
  "wilmington-nc": [],
  "new-york-ny": [],
  "los-angeles-ca": [],
  "chicago-il": [],
  "houston-tx": [],
  "phoenix-az": [],
  "philadelphia-pa": [],
  "san-antonio-tx": [],
  "san-diego-ca": [],
  "dallas-tx": [],
  "jacksonville-fl": [],
  "fort-worth-tx": [],
  "columbus-oh": [],
  "charlotte-nc": [],
  "indianapolis-in": [],
  "san-francisco-ca": [],
  "austin-tx": [],
  "seattle-wa": [],
  "denver-co": [],
  "oklahoma-city-ok": [],
  "nashville-tn": [],
  "washington-dc": [],
  "el-paso-tx": [],
  "las-vegas-nv": [],
  "boston-ma": [],
  "san-jose-ca": []
};

/* ---------------------------------------------------------
   LISTING OBJECT FORMAT (what admin.html outputs):
   {
     name: "Business Name",
     address: "123 Main St, City, TX 75409",
     phone: "(972) 555-0100",
     website: "https://example.com",
     rating: 4.8,          // Google rating, or null
     reviews: 42,          // review count, or null
     cats: ["bathroom", "stairs"]   // one or more category keys
   }
   --------------------------------------------------------- */

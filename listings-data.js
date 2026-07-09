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
  "rockwall-tx": [],
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
  "frisco-tx": [],
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

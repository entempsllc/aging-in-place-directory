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
  "anna-tx": [
    {
      "name": "The Home Depot",
      "address": "200 N Central Expy, Anna, TX 75409, USA",
      "phone": "(945) 777-8200",
      "website": "https://www.homedepot.com/l/Anna/TX/Anna/75409/597?emt=MSGoogleMaps",
      "rating": 4.5,
      "reviews": 243,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Gar Hole",
      "address": "106 Houston St, Anna, TX 75409, USA",
      "phone": "(469) 301-6284",
      "website": "http://garhole.net/",
      "rating": 4.8,
      "reviews": 427,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Flying J Travel Center",
      "address": "1700 N US Hwy 75, Anna, TX 75409, USA",
      "phone": "(972) 924-2035",
      "website": "https://locations.pilotflyingj.com/us/tx/anna/1700-n-us-hwy-75",
      "rating": 3.8,
      "reviews": 1635,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Alanis Remodeling & Construction, LLC",
      "address": "3015 N Powell Pkwy, Anna, TX 75409, USA",
      "phone": "(469) 412-2006",
      "website": "https://arcllctx.com/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "S.M New Age Remodel Builders",
      "address": "1108 W White St, Anna, TX 75409, USA",
      "phone": "(214) 271-9671",
      "website": "http://smnewageremodelbuilders.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "ILB homehealth services, Inc",
      "address": "3008 Lakeshore Dr, Anna, TX 75409, USA",
      "phone": "(404) 852-8722",
      "website": "https://www.ilbhomehealth.com/",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Patience & Faith Home Healthcare",
      "address": "8563 Co Rd 419, Anna, TX 75409, USA",
      "phone": "(469) 606-4006",
      "website": "https://www.patiencefaithhomehealthcare.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "RAJ Home Health",
      "address": "3105 Bowen St, Anna, TX 75409, USA",
      "phone": "(469) 473-8973",
      "website": "http://www.rajhomehealth.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "T&N Homecare & Management Inc",
      "address": "219 Foster Ln, Anna, TX 75409, USA",
      "phone": "(972) 464-7472",
      "website": "",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "All Hands-On Care",
      "address": "405 Tate Ln, Anna, TX 75409, USA",
      "phone": "(469) 691-0559",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Ujamaa Assisted Living",
      "address": "1004 Chatsworth Dr, Anna, TX 75409, USA",
      "phone": "(469) 558-4317",
      "website": "https://www.myujamaa.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Pedu Residential Living",
      "address": "1304 Lavinola Ln, Anna, TX 75409, USA",
      "phone": "(817) 330-9558",
      "website": "https://peduresidentialliving.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Ginger Avenue Home Care",
      "address": "105 Ginger Ave, Anna, TX 75409, USA",
      "phone": "(945) 333-8256",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Grace Place Community Center",
      "address": "1737 Co Rd 1036, Anna, TX 75409, USA",
      "phone": "(469) 213-2153",
      "website": "https://mygraceplace.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Parmore Anna",
      "address": "651 E Finley Blvd, Anna, TX 75409, USA",
      "phone": "(469) 654-7915",
      "website": "https://www.parmoreanna.com/?utm_knock=g",
      "rating": 4.1,
      "reviews": 56,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Joyous Tots Daycare, Anna Texas",
      "address": "1021 Acacia Dr, Anna, TX 75409, USA",
      "phone": "(214) 250-2695",
      "website": "",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "hapily ever after",
      "address": "304 Portina Dr, Anna, TX 75409, USA",
      "phone": "(346) 452-1773",
      "website": "https://hapilyeverafterdaycare.netlify.app/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Christian Care Academy Inc",
      "address": "3220 N Powell Pkwy, Anna, TX 75409, USA",
      "phone": "(214) 831-1383",
      "website": "http://christiancareacademyinc.com/",
      "rating": 4.9,
      "reviews": 32,
      "cats": [
        "social"
      ]
    }
  ],
  "melissa-tx": [
    {
      "name": "Melissa Ace Hardware",
      "address": "2801 McKinney St, Melissa, TX 75454, USA",
      "phone": "(469) 425-5125",
      "website": "http://www.acehardware.com/store-details/18751?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=18751",
      "rating": 4.9,
      "reviews": 68,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Buc-ee's",
      "address": "1550 Central Expy, Melissa, TX 75454, USA",
      "phone": "(979) 238-6390",
      "website": "http://www.buc-ees.com/",
      "rating": 4.6,
      "reviews": 5919,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Walmart Supercenter",
      "address": "1950 McKinney St, Melissa, TX 75454, USA",
      "phone": "(945) 234-6957",
      "website": "https://www.walmart.com/store/1484-melissa-tx/?veh=seo_loc",
      "rating": 4.3,
      "reviews": 155,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Integra Healthcare Services",
      "address": "Brookfield Dr, Melissa, TX 75454, USA",
      "phone": "(469) 594-9595",
      "website": "https://integrahealthcareservices.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Blessed Hands Senior Home care LLC",
      "address": "3612 Bastrop St, Melissa, TX 75454, USA",
      "phone": "(972) 876-9690",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "A & A Devine Home Health, LLC",
      "address": "3309 Herron Dr, Melissa, TX 75454, USA",
      "phone": "(469) 605-7230",
      "website": "http://aadivinehomehealth.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Gala at Melissa",
      "address": "2730 E Melissa Rd, Melissa, TX 75454, USA",
      "phone": "(214) 856-3574",
      "website": "https://www.galaatmelissa.com/",
      "rating": 4.1,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Provision at Melissa",
      "address": "2650 E Melissa Rd, Melissa, TX 75454, USA",
      "phone": "(214) 856-3574",
      "website": "https://www.provisionatmelissa.com/",
      "rating": 3.8,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "CheerLand-Melissa",
      "address": "2111 McKinney St Ste 200, Melissa, TX 75454, USA",
      "phone": "(972) 535-5588",
      "website": "https://www.cheerlandusa.com/",
      "rating": 4.9,
      "reviews": 522,
      "cats": [
        "social"
      ]
    },
    {
      "name": "N4 Montessori Academy of Melissa",
      "address": "2045 McKinney St, Melissa, TX 75454, USA",
      "phone": "(469) 591-1400",
      "website": "https://n4montessori.com/melissa/",
      "rating": 4.7,
      "reviews": 27,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Melissa KinderCare",
      "address": "3404 Sky Rdg Ln, Melissa, TX 75454, USA",
      "phone": "(469) 905-3690",
      "website": "https://www.kindercare.com/our-centers/melissa/tx/302158?utm_campaign=kc-lg&utm_source=yext&utm_medium=pro&utm_keyword=&utm_platform=&utm_matchtype=&utm_adgroupid=&utm_content=gmb&y_source=1_MjAxMDI2Mjk1Ny03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.5,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Melissa Ridge Education Center",
      "address": "3233 W Fannin Rd, Melissa, TX 75454, USA",
      "phone": "(972) 837-2901",
      "website": "http://www.melissaisd.org/schools/melissa-ridge-education-center/",
      "rating": 4.7,
      "reviews": 6,
      "cats": [
        "social"
      ]
    }
  ],
  "fate-tx": [
    {
      "name": "Best Buy Walk In Tubs",
      "address": "311 Kings Plaza, Granbury, TX 76049, USA",
      "phone": "(682) 205-3532",
      "website": "http://www.bestbuywalkintubs.com/",
      "rating": 4.6,
      "reviews": 18,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Victor's Quality Remodeling LLC",
      "address": "1089 N Churchill Dr, Royse City, TX 75189, USA",
      "phone": "(469) 623-2418",
      "website": "https://victorsqualityremodeling.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "tubs"
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
      "name": "Apex Bath and Remodeling Pros",
      "address": "416 E Vaughn Rd, Cleburne, TX 76031, USA",
      "phone": "(817) 506-9696",
      "website": "https://apexbathremodeling.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Wicker Plumbing",
      "address": "4426 TX-276, Rockwall, TX 75032, USA",
      "phone": "(469) 437-7221",
      "website": "https://wickerplumbing.com/",
      "rating": 4.8,
      "reviews": 794,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Independent Home Walk-in Tubs",
      "address": "59 Hempstead Gardens Dr, West Hempstead, NY 11552, USA",
      "phone": "(888) 239-1058",
      "website": "https://independenthome.com/",
      "rating": 3.9,
      "reviews": 21,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Patriot Pool & Spa",
      "address": "3942 Ruger Dr, Royse City, TX 75189, USA",
      "phone": "(469) 949-6151",
      "website": "https://www.patriotpoolandspa.com/locations/rockwall/?utm_campaign=gmb&utm_medium=organic&utm_source=google",
      "rating": 4.8,
      "reviews": 379,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Sunrise Plumbing",
      "address": "1705 S John King Blvd Ste 103, Rockwall, TX 75032, USA",
      "phone": "(214) 773-2506",
      "website": "https://www.sunriseplumbingtexas.com/",
      "rating": 4.8,
      "reviews": 1633,
      "cats": [
        "tubs"
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
      "name": "Next Day Access Central Dallas",
      "address": "4653 Nall Rd Ste 33, Farmers Branch, TX 75244, USA",
      "phone": "(214) 981-1488",
      "website": "https://www.nextdayaccess.com/dallas-tx/",
      "rating": 5,
      "reviews": 29,
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
      "name": "Graceful Living Home Care",
      "address": "811 Twin Edge Dr, Royse City, TX 75189, USA",
      "phone": "(971) 331-3847",
      "website": "https://www.gracefullivinghc.org/",
      "rating": 5,
      "reviews": 4,
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
      "name": "Without A Doubt Home Health",
      "address": "708 Cottonwood Wy, Royse City, TX 75189, USA",
      "phone": "(469) 610-0754",
      "website": "",
      "rating": 5,
      "reviews": 2,
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
      "name": "Executive Home Care of Northeast Dallas and Flower Mound, TX",
      "address": "110 Greenhill Ln Ste 324, Rockwall, TX 75087, USA",
      "phone": "(469) 314-6465",
      "website": "https://executivehomecare.com/ne-dallas-and-flower-mound-tx/",
      "rating": 5,
      "reviews": 2,
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
      "name": "Mother Earth Healthcare Services Inc",
      "address": "128 Creek Plum Dr., Royse City, TX 75189, USA",
      "phone": "(469) 349-9828",
      "website": "https://motherearthhealthcare.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Angels Care Home Health",
      "address": "501 S Elm St, Royse City, TX 75189, USA",
      "phone": "(903) 454-6001",
      "website": "https://www.angelscarehealth.com/",
      "rating": 2.6,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Newport Home Health Agency",
      "address": "2080 N Hwy 360 Ste 350, Grand Prairie, TX 75050, USA",
      "phone": "(972) 602-3500",
      "website": "https://www.newporthomehealth.com/",
      "rating": 4.9,
      "reviews": 94,
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
      "name": "Right at Home",
      "address": "703 N Goliad St, Rockwall, TX 75087, USA",
      "phone": "(469) 314-1774",
      "website": "https://www.rightathome.net/rockwall/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1619",
      "rating": 5,
      "reviews": 49,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Healing Touch Homecare & Hospice",
      "address": "2304 Joe Ramsey Blvd E, Greenville, TX 75401, USA",
      "phone": "(903) 455-8191",
      "website": "http://www.healingtouchhc.net/",
      "rating": 4.9,
      "reviews": 89,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "908 Audelia Rd Ste 200-254, Richardson, TX 75081, USA",
      "phone": "(469) 865-1103",
      "website": "https://www.homeinstead.com/home-care/usa/tx/richardson/278/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "iCare Elder Services TX, LLC",
      "address": "1400 Preston Rd, Plano, TX 75093, USA",
      "phone": "(972) 767-7034",
      "website": "https://www.icareelderservicestx.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "City of Fate Community Center",
      "address": "104 S William E Crawford Ave, Rockwall, TX 75087, USA",
      "phone": "(972) 771-4601",
      "website": "https://www.fatetx.gov/412/Rentals-and-Reservations",
      "rating": 4.6,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Gala at Fate",
      "address": "359 Black Oak Ln, Rockwall, TX 75087, USA",
      "phone": "(469) 654-1850",
      "website": "https://galaatfate.com/",
      "rating": 3.3,
      "reviews": 30,
      "cats": [
        "social"
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
        "social"
      ]
    },
    {
      "name": "Terrell Senior Citizen Center",
      "address": "115 N Adelaide St, Terrell, TX 75160, USA",
      "phone": "(972) 563-7960",
      "website": "https://www.cityofterrell.org/447/Senior-Resources",
      "rating": 4.5,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Highview Learning Center",
      "address": "907 W Holiday, Rockwall, TX 75087, USA",
      "phone": "(972) 771-8441",
      "website": "https://highviewlearningcenter.com/daycare-locations/fate/?y_source=1_MTA4MDc3MzM1NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 3.6,
      "reviews": 33,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Fate City Hall",
      "address": "1900 CD Boren Pkwy, Rockwall, TX 75087, USA",
      "phone": "(972) 771-4601",
      "website": "https://www.fatetx.gov/",
      "rating": 4.3,
      "reviews": 48,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Collin County Senior Citizens",
      "address": "209 Orange Ave, Farmersville, TX 75442, USA",
      "phone": "(972) 782-8231",
      "website": "https://www.farmersvilletx.com/departments/senior_center/index.php",
      "rating": 4.7,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Royse City Senior Center",
      "address": "322 W Lamar St, Royse City, TX 75189, USA",
      "phone": "(972) 524-4848",
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
      "name": "Law Office of Andrew D. Thomas",
      "address": "422 I-30 Suite F, Royse City, TX 75189, USA",
      "phone": "(469) 965-4500",
      "website": "http://www.law-adt.com/",
      "rating": 4.5,
      "reviews": 25,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Warren Legal Services, PLLC",
      "address": "103 N Houston St, Royse City, TX 75189, USA",
      "phone": "(972) 635-2888",
      "website": "https://www.warrenlegalservices.com/?npcmp=dir:local:5218405:75189",
      "rating": 3.7,
      "reviews": 22,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Edwards Law, PLLC",
      "address": "105 N Alamo Rd, Rockwall, TX 75087, USA",
      "phone": "(844) 837-8283",
      "website": "http://www.bethedwardslaw.com/",
      "rating": 4.8,
      "reviews": 54,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Tracy S. Bush, PLLC",
      "address": "6108 W Poly Webb Rd, Arlington, TX 76016, USA",
      "phone": "(817) 842-2312",
      "website": "https://www.bushattorney.com/?utm_source=gmb&utm_medium=organic",
      "rating": 4.7,
      "reviews": 85,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Vice Henley & Dilbeck",
      "address": "5368 TX-276, Royse City, TX 75189, USA",
      "phone": "(469) 331-3719",
      "website": "https://www.texasinjurygiants.com/",
      "rating": 4.7,
      "reviews": 102,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Craig W. Watson, Attorney at Law",
      "address": "805 N Travis St Ste 400, Sherman, TX 75090, USA",
      "phone": "(903) 813-8500",
      "website": "https://www.craigwatsonlaw.com/?npcmp=dir:local:3415193:75090",
      "rating": 4.7,
      "reviews": 9,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ross and Shoalmire PLLC",
      "address": "6633 Oak Hill Blvd Ste 400, Tyler, TX 75703, USA",
      "phone": "(903) 561-5653",
      "website": "https://www.rossandshoalmire.com/offices/tyler-texas-elder-law-and-estate-planning-attorneys.cfm",
      "rating": 4.9,
      "reviews": 27,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bromlow Law, PLLC",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(281) 665-3807",
      "website": "https://bromlowlaw.com/?utm_source=google&utm_medium=organic&utm_campaign=gmbwebsite",
      "rating": 5,
      "reviews": 115,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bertsch & Boze Elder Law, PC.",
      "address": "8703 Broadway, San Antonio, TX 78217, USA",
      "phone": "(210) 892-4555",
      "website": "https://www.assistingseniors.com/",
      "rating": 4.9,
      "reviews": 85,
      "cats": [
        "legal"
      ]
    }
  ],
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
  "fulshear-tx": [
    {
      "name": "Texas Senior Safety",
      "address": "21077 Kingsland Blvd, Katy, TX 77450, USA",
      "phone": "(737) 888-4900",
      "website": "https://txseniorsafety.com/services/houston/",
      "rating": 4.8,
      "reviews": 18,
      "cats": [
        "bathroom"
      ]
    },
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
      "name": "ezaccessbathrooms",
      "address": "12019 Gregory Crossing Way, Houston, TX 77067, USA",
      "phone": "(832) 202-8453",
      "website": "http://ezaccessbathrooms.com/",
      "rating": 4.9,
      "reviews": 64,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Ace Handyman Services Fort Bend County",
      "address": "6111-A N Mallard Dr, Fulshear, TX 77441, USA",
      "phone": "(346) 595-9405",
      "website": "https://www.acehandymanservices.com/offices/fort-bend-county?utm_source=google&utm_medium=gbp",
      "rating": 4.9,
      "reviews": 351,
      "cats": [
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "Solaressolutionsllc.com",
      "address": "190 Kona Dr, Bastrop, TX 78602, USA",
      "phone": "(512) 585-8453",
      "website": "https://solaressolutionsllc.com/",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Honey Do List Services LLC",
      "address": "5011 Bent Tree Dr, Fulshear, TX 77441, USA",
      "phone": "(281) 384-8661",
      "website": "https://www.honey-do-list-services.com/",
      "rating": 4.7,
      "reviews": 97,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Grab Bar Installers of Houston",
      "address": "2215, 594 Sawdust Rd #107, Spring, TX 77380, USA",
      "phone": "(713) 588-1200",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Fulshear Home Repair",
      "address": "5850 Dawning Sun St, Fulshear, TX 77441, USA",
      "phone": "(832) 745-0771",
      "website": "",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Fulshear Ace Hardware",
      "address": "8411 FM 359 RD S, Bldg, 8411A FM359, Fulshear, TX 77441, USA",
      "phone": "(281) 533-8571",
      "website": "",
      "rating": 4.5,
      "reviews": 282,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Cinco Ranch, Katy, Western Houston",
      "address": "21815 Katy Fwy Suite C121, Katy, TX 77450, USA",
      "phone": "(281) 502-8908",
      "website": "https://www.mrhandyman.com/cinco-ranch-south-katy-west-houston/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.7,
      "reviews": 310,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Simplicity Bath & Shower - Houston Bathroom Remodelers",
      "address": "Crosswater Ln, Katy, TX 77494, USA",
      "phone": "(713) 804-2284",
      "website": "https://simplicitybath.com/?utm_source=GoogleBusinessProfile&utm_medium=organic",
      "rating": 5,
      "reviews": 118,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Rhyolite Baths and Designs",
      "address": "2665 Hwy 90 Alt, Rosenberg, TX 77471, USA",
      "phone": "(281) 250-5767",
      "website": "http://www.rhyolitedesigns.com/",
      "rating": 5,
      "reviews": 52,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Gladden Remodeling Bath & Kitchen LLC",
      "address": "21435 Park Villa Dr, Katy, TX 77450, USA",
      "phone": "(713) 201-5851",
      "website": "",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Fulshear Remodeling",
      "address": "7609 Tiki Dr Ste E, Fulshear, TX 77441, USA",
      "phone": "(346) 346-0078",
      "website": "https://www.remodelingfulshear.com/",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "EZ Bath",
      "address": "11246 Timbertech Ln Ste A, Tomball, TX 77375, USA",
      "phone": "(281) 968-3000",
      "website": "https://www.ezbath.com/",
      "rating": 4.9,
      "reviews": 242,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DD Master Tub",
      "address": "24927 Azalea Ranch Dr, Katy, TX 77494, USA",
      "phone": "(832) 845-8407",
      "website": "https://mastertubsrefinishing.com/",
      "rating": 5,
      "reviews": 80,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "GoPro Tub Refinishing",
      "address": "2020 Katy Gap Rd, Katy, TX 77494, USA",
      "phone": "(832) 627-1200",
      "website": "http://www.goprotubrefinishing.com/",
      "rating": 4.8,
      "reviews": 57,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "One Drop Accessible Showers",
      "address": "2722 Lakecrest Way Dr, Katy, TX 77493, USA",
      "phone": "(832) 814-9591",
      "website": "https://www.onedropshowers.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "tubs"
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
      "name": "Stairlift Store",
      "address": "100 E NASA Pkwy Ste 406, Webster, TX 77598, USA",
      "phone": "(281) 480-9876",
      "website": "https://stairliftstore.com/",
      "rating": 4.7,
      "reviews": 31,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "12610 Tanner Rd #52, Houston, TX 77041, USA",
      "phone": "(281) 769-2396",
      "website": "https://www.lifewaymobility.com/houston/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Houston",
      "rating": 4,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "LiveWell Mobility and Modifications - Aging at Home Solutions",
      "address": "16830 Barker Springs Rd #406, Houston, TX 77084, USA",
      "phone": "(281) 771-1469",
      "website": "https://www.livewellmobility.com/",
      "rating": 4.7,
      "reviews": 164,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Angleton, Pearland, Lake Jackson, Freeport",
      "address": "3520 Farm to Market Rd 723 Unit B, Rosenberg, TX 77471, USA",
      "phone": "(281) 572-5070",
      "website": "https://www.101mobility.com/angleton/?utm_source=GBP_Angleton&utm_medium=organic&y_source=1_MTAzMzU5NzAzMC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.6,
      "reviews": 9,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access North Houston",
      "address": "21621 Rhodes Rd Ste H, Spring, TX 77388, USA",
      "phone": "(713) 366-4605",
      "website": "https://www.nextdayaccess.com/north-houston-tx/",
      "rating": 4.9,
      "reviews": 71,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Houston",
      "address": "5829 W Sam Houston Pkwy N Suite 701, Houston, TX 77041, USA",
      "phone": "(832) 662-1821",
      "website": "https://www.101mobility.com/houston/?utm_source=GBP_Houston&utm_medium=organic&y_source=1_MTAzMzU5Njk5Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 110,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of The Woodlands & Conroe",
      "address": "25003 Pitkin Rd Ste A800, Spring, TX 77386, USA",
      "phone": "(832) 702-3468",
      "website": "https://www.101mobility.com/woodlands-conroe/?utm_source=GBP_TheWoodlands&utm_medium=organic&y_source=1_MTAzMzU5Njk3NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 40,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Triple M Mobility",
      "address": "11020 Katy Fwy Ste 114, Houston, TX 77043, USA",
      "phone": "(281) 391-4466",
      "website": "https://www.triplemmobility.com/",
      "rating": 4.9,
      "reviews": 219,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Lift Aids",
      "address": "14655 Northwest Fwy #102, Houston, TX 77040, USA",
      "phone": "(713) 939-9922",
      "website": "http://www.texaswheelchairvan.com/",
      "rating": 4.5,
      "reviews": 64,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "17687 Tomball Pkwy, Houston, TX 77064, USA",
      "phone": "(832) 864-5120",
      "website": "https://mobilitycity.com/houston-tx/?utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 156,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "3327 S Sam Houston Pkwy E #300, Houston, TX 77047, USA",
      "phone": "(346) 226-6999",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-houston-texas/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=houston",
      "rating": 4.2,
      "reviews": 72,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Partners of Houston LLC",
      "address": "11727 S Sam Houston Pkwy W Unit F, Houston, TX 77031, USA",
      "phone": "(346) 335-1112",
      "website": "https://www.mobilitypartnershouston.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 34,
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
      "name": "A Life Saver Home Care LLC",
      "address": "24014 Thornbird Cliff Wy, Katy, TX 77493, USA",
      "phone": "(888) 593-2055",
      "website": "http://www.alifesaverhomecare.com/",
      "rating": 4.9,
      "reviews": 61,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Regina Home Care LLC",
      "address": "30722 Skye Villa Ln, Fulshear, TX 77423, USA",
      "phone": "(281) 215-5195",
      "website": "https://reginahomecare.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lone Star Home Care Solutions",
      "address": "32619 Dew Crest St, Fulshear, TX 77423, USA",
      "phone": "(713) 837-7592",
      "website": "https://www.lonestarhcs.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lifetime Health Care DBA Home Care of Texas LLC",
      "address": "21416 Provincial Blvd, Katy, TX 77450, USA",
      "phone": "(281) 602-0800",
      "website": "http://www.thehomecareoftexas.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "1st Texas Home Health",
      "address": "324 Meyer St, Sealy, TX 77474, USA",
      "phone": "(979) 877-0900",
      "website": "https://www.first-texas.com/",
      "rating": 4.8,
      "reviews": 12,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "A Hug Away Healthcare",
      "address": "1203 Avenue D, Katy, TX 77493, USA",
      "phone": "(832) 437-1983",
      "website": "https://www.ahugaway.com/",
      "rating": 4.7,
      "reviews": 163,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Magnolia Personal Home Care Services",
      "address": "24285 Katy Fwy Suite 300, Katy, TX 77494, USA",
      "phone": "(281) 215-5214",
      "website": "https://www.magnoliapersonalhc.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Nurse Next Door Home Care Services - Katy, TX",
      "address": "21703 Kingsland Blvd #103, Katy, TX 77450, USA",
      "phone": "(346) 646-4110",
      "website": "https://www.nursenextdoor.com/locations/katy-tx/",
      "rating": 4.9,
      "reviews": 35,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "OAKWELL HOME HEALTH SERVICES LLC",
      "address": "4600 Hwy 6 N Ste 378, Houston, TX 77084, USA",
      "phone": "(346) 803-0568",
      "website": "https://www.oakwellhomehealth.com/",
      "rating": 4.9,
      "reviews": 14,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FirstLight Home Care of Katy",
      "address": "25722 Kingsland Blvd #113a, Katy, TX 77494, USA",
      "phone": "(832) 380-8265",
      "website": "https://www.firstlighthomecare.com/home-healthcare-katy/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Katy",
      "address": "25140 Kingsland Blvd Ste 175, Katy, TX 77494, USA",
      "phone": "(832) 705-8911",
      "website": "https://www.visitingangels.com/northwesthouston/home-care-katy-tx-senior-care-near-me?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Great Senior Care",
      "address": "27119 Faded Trl, Katy, TX 77494, USA",
      "phone": "(254) 323-8433",
      "website": "https://homehealthcarekaty.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors Katy",
      "address": "801 FM 1463 Ste 200, #129, Katy, TX 77494, USA",
      "phone": "(346) 454-0389",
      "website": "https://locations.seniorshelpingseniors.com/tx/katy/118.html",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "A Place At Home - Katy",
      "address": "20811 Westheimer Pkwy Ste 2B, Katy, TX 77450, USA",
      "phone": "(281) 676-2555",
      "website": "http://aplaceathomekaty.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Homewatch CareGivers of Katy",
      "address": "25722 Kingsland Blvd Suite 115, Katy, TX 77494, USA",
      "phone": "(832) 952-1495",
      "website": "https://www.homewatchcaregivers.com/katy/?utm_source=gbp&utm_medium=organic&utm_campaign=katy",
      "rating": 4.9,
      "reviews": 28,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Adore Home Healthcare llc",
      "address": "2819 Oakdale Landing Ct, Katy, TX 77494, USA",
      "phone": "(832) 499-6846",
      "website": "https://www.adorehomehealthcarellc.com/",
      "rating": 4.9,
      "reviews": 9,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Americare Home Services",
      "address": "6002 Franz Ct, Katy, TX 77493, USA",
      "phone": "(346) 851-5920",
      "website": "http://www.americarehomeservices.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
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
      "name": "Senior Rides and More",
      "address": "9600 S Gessner Rd, Houston, TX 77071, USA",
      "phone": "(713) 772-8181",
      "website": "https://seniorridesandmore.org/",
      "rating": 4.9,
      "reviews": 8,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Elder-Ride Carewagon Transport",
      "address": "11111 Katy Fwy, Houston, TX 77079, USA",
      "phone": "(713) 487-8087",
      "website": "http://www.elder-ridecarewagon.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "M & S Medical Transportation",
      "address": "4314 Whickham Dr, Fulshear, TX 77441, USA",
      "phone": "(281) 728-2229",
      "website": "",
      "rating": 4.1,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "LCISD - Fulshear Transportation",
      "address": "29422 FM 1093, Fulshear, TX 77441, USA",
      "phone": "(832) 223-0551",
      "website": "http://www.lcisd.org/departments/transportation",
      "rating": 3,
      "reviews": 50,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(346) 273-2078",
      "website": "https://caringseniorservice.com/katy/?utm_source=gmb&utm_medium=referral-link&utm_campaign=google-my-business",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Irene Stern Community Center",
      "address": "6920 Fulshear Katy Rd, Fulshear, TX 77441, USA",
      "phone": "(281) 346-1796",
      "website": "https://www.fulsheartexas.gov/about-us/departments-h-z/irene-stern-community-center",
      "rating": 4.3,
      "reviews": 72,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Katy Fussell Senior Citizen Center",
      "address": "5370 E 5th St, Katy, TX 77493, USA",
      "phone": "(281) 391-4837",
      "website": "https://www.cityofkaty.com/government/city-departments/senior-services",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Lifelong Learning Center",
      "address": "1701 East Ave 1st floor, Katy, TX 77493, USA",
      "phone": "(346) 387-6955",
      "website": "",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Serenity Falls Adult Day Care",
      "address": "5510 Rio Alamo St, Rosharon, TX 77583, USA",
      "phone": "(832) 524-5442",
      "website": "",
      "rating": 3.2,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Filling the Gap Adult Day Care",
      "address": "6734 Antoine Dr, Houston, TX 77091, USA",
      "phone": "(281) 741-0102",
      "website": "http://fillingthegapadultdaycare.com/",
      "rating": 4.5,
      "reviews": 43,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Aspen Cove Assisted Living",
      "address": "31503 Corsham Cv Ct, Fulshear, TX 77441, USA",
      "phone": "(713) 480-8378",
      "website": "https://www.aspencoveassistedliving.com/",
      "rating": 5,
      "reviews": 44,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Domain TLC: Private Assisted Living Residence",
      "address": "5211 Eddy Dr, Fulshear, TX 77441, USA",
      "phone": "(281) 346-8474",
      "website": "http://thedomaintlc.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Del Webb Fulshear- 55+ Active Adult Community",
      "address": "7733 Lifestyle Blvd, Fulshear, TX 77441, USA",
      "phone": "(281) 626-8839",
      "website": "https://www.delwebb.com/homes/texas/houston/fulshear/del-webb-fulshear-210748",
      "rating": 4.5,
      "reviews": 50,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Preferred Urgent Care - Fulshear",
      "address": "4030 FM 1463 Ste 108, Katy, TX 77494, USA",
      "phone": "(281) 916-1444",
      "website": "https://www.preferredurgentcare.com/?utm_source=GMB&utm_medium=organic&utm_campaign=katy",
      "rating": 4.6,
      "reviews": 347,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Vivid Life Residential Care",
      "address": "10302 W Hidden Lake Ln, Richmond, TX 77406, USA",
      "phone": "(713) 543-8774",
      "website": "http://vividlifeapex.com/",
      "rating": 5,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Johnson and Johnson Adult Day Care",
      "address": "14730 Fondren Rd, Missouri City, TX 77489, USA",
      "phone": "(713) 723-2090",
      "website": "https://www.johnsonandjohnsonadultdaycare.org/",
      "rating": 3.7,
      "reviews": 18,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Wadler Perches & Kerlick",
      "address": "29818 FM 1093 Ste 206, Fulshear, TX 77441, USA",
      "phone": "(800) 929-1725",
      "website": "https://wpk-law.com/",
      "rating": 4.9,
      "reviews": 11,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bromlow Law, PLLC",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(281) 665-3807",
      "website": "https://bromlowlaw.com/?utm_source=google&utm_medium=organic&utm_campaign=gmbwebsite",
      "rating": 5,
      "reviews": 115,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ortego Law Firm",
      "address": "24285 Katy Fwy Suite 300, Katy, TX 77494, USA",
      "phone": "(832) 557-4593",
      "website": "https://www.lawortego.com/",
      "rating": 5,
      "reviews": 43,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Theander & Grimes, PLLC",
      "address": "1325 Main St Ste 1101, Katy, TX 77494, USA",
      "phone": "(281) 968-9965",
      "website": "https://www.katylegal.com/",
      "rating": 5,
      "reviews": 59,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Stegall Law Firm PLLC",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(713) 568-5122",
      "website": "https://stegalllawfirm.com/",
      "rating": 4.5,
      "reviews": 66,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Handley Law Office PLLC",
      "address": "633 E Fernhurst Dr Ste. 1402, Katy, TX 77450, USA",
      "phone": "(281) 703-3616",
      "website": "https://thehandleylawoffice.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Howard Law Firm, PLLC",
      "address": "26717 Westheimer Pkwy Ste 703, Katy, TX 77494, USA",
      "phone": "(346) 702-4344",
      "website": "http://www.nhowardlaw.com/",
      "rating": 4.8,
      "reviews": 32,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Humble Law PLLC",
      "address": "5757 Flewellen Oaks Lane Ste 501, Fulshear, TX 77441, USA",
      "phone": "(832) 913-1323",
      "website": "http://www.humblefirm.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Junker Law, PLLC",
      "address": "212 Jackson St, Richmond, TX 77469, USA",
      "phone": "(281) 342-9476",
      "website": "http://www.junkerlaw.com/",
      "rating": 5,
      "reviews": 149,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Wright Abshire, Attorneys, A Professional Corporation",
      "address": "4949 Bissonnet St, Bellaire, TX 77401, USA",
      "phone": "(713) 234-1940",
      "website": "https://www.wrightabshire.com/?npcmp=dir:local:2203133:77401",
      "rating": 4.8,
      "reviews": 43,
      "cats": [
        "legal"
      ]
    }
  ],
  "katy-tx": [
    {
      "name": "Texas Senior Safety",
      "address": "21077 Kingsland Blvd, Katy, TX 77450, USA",
      "phone": "(737) 888-4900",
      "website": "https://txseniorsafety.com/services/houston/",
      "rating": 4.8,
      "reviews": 18,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "ezaccessbathrooms",
      "address": "12019 Gregory Crossing Way, Houston, TX 77067, USA",
      "phone": "(832) 202-8453",
      "website": "http://ezaccessbathrooms.com/",
      "rating": 4.9,
      "reviews": 64,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Fixi Handyman Services",
      "address": "3325 Porter Rd C103, Katy, TX 77493, USA",
      "phone": "(281) 800-5420",
      "website": "https://fixinow.com/",
      "rating": 4.9,
      "reviews": 212,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "WayMaker Home Improvement",
      "address": "1708 Spring Green Blvd #120, Katy, TX 77494, USA",
      "phone": "(832) 480-1866",
      "website": "http://waymakertexas.com/",
      "rating": 5,
      "reviews": 116,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Solaressolutionsllc.com",
      "address": "190 Kona Dr, Bastrop, TX 78602, USA",
      "phone": "(512) 585-8453",
      "website": "https://solaressolutionsllc.com/",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Gatsby Glass",
      "address": "3820 N Mason Rd Ste F, Katy, TX 77449, USA",
      "phone": "(281) 864-3170",
      "website": "https://www.gatsbyglass.com/greater-katy-tx/",
      "rating": 5,
      "reviews": 57,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Enrique Remodeling",
      "address": "24647 Lakecrest Pine Trail, Katy, TX 77493, USA",
      "phone": "(832) 592-7514",
      "website": "http://www.enrique-remodeling.com/",
      "rating": 5,
      "reviews": 24,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Ace Handyman Services Katy",
      "address": "2900 Katy Hockley Cut Off Rd Ste B207, Katy, TX 77493, USA",
      "phone": "(832) 240-9213",
      "website": "https://www.acehandymanservices.com/offices/katy?utm_source=google&utm_medium=gbp",
      "rating": 4.9,
      "reviews": 227,
      "cats": [
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "Mr. Handyman of Cinco Ranch, Katy, Western Houston",
      "address": "21815 Katy Fwy Suite C121, Katy, TX 77450, USA",
      "phone": "(281) 502-8908",
      "website": "https://www.mrhandyman.com/cinco-ranch-south-katy-west-houston/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.7,
      "reviews": 310,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Gbd home repair services",
      "address": "Pear, Pearl Lake Dr, Katy, TX 77449, USA",
      "phone": "(281) 748-1199",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Simplicity Bath & Shower - Houston Bathroom Remodelers",
      "address": "Crosswater Ln, Katy, TX 77494, USA",
      "phone": "(713) 804-2284",
      "website": "https://simplicitybath.com/?utm_source=GoogleBusinessProfile&utm_medium=organic",
      "rating": 5,
      "reviews": 118,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Gladden Remodeling Bath & Kitchen LLC",
      "address": "21435 Park Villa Dr, Katy, TX 77450, USA",
      "phone": "(713) 201-5851",
      "website": "",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "EZ Bath",
      "address": "11246 Timbertech Ln Ste A, Tomball, TX 77375, USA",
      "phone": "(281) 968-3000",
      "website": "https://www.ezbath.com/",
      "rating": 4.9,
      "reviews": 242,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "One Drop Accessible Showers",
      "address": "2722 Lakecrest Way Dr, Katy, TX 77493, USA",
      "phone": "(832) 814-9591",
      "website": "https://www.onedropshowers.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DD Master Tub",
      "address": "24927 Azalea Ranch Dr, Katy, TX 77494, USA",
      "phone": "(832) 845-8407",
      "website": "https://mastertubsrefinishing.com/",
      "rating": 5,
      "reviews": 80,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "GoPro Tub Refinishing",
      "address": "2020 Katy Gap Rd, Katy, TX 77494, USA",
      "phone": "(832) 627-1200",
      "website": "http://www.goprotubrefinishing.com/",
      "rating": 4.8,
      "reviews": 57,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "4400 Blalock Rd #100, Houston, TX 77041, USA",
      "phone": "(832) 380-8110",
      "website": "https://www.bathfitter.com/us-en/location/houston/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.5,
      "reviews": 140,
      "cats": [
        "tubs"
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
      "name": "Stairlift Store",
      "address": "100 E NASA Pkwy Ste 406, Webster, TX 77598, USA",
      "phone": "(281) 480-9876",
      "website": "https://stairliftstore.com/",
      "rating": 4.7,
      "reviews": 31,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "12610 Tanner Rd #52, Houston, TX 77041, USA",
      "phone": "(281) 769-2396",
      "website": "https://www.lifewaymobility.com/houston/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Houston",
      "rating": 4,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "LiveWell Mobility and Modifications - Aging at Home Solutions",
      "address": "16830 Barker Springs Rd #406, Houston, TX 77084, USA",
      "phone": "(281) 771-1469",
      "website": "https://www.livewellmobility.com/",
      "rating": 4.7,
      "reviews": 164,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "9001 Jameel Rd Ste 160, Houston, TX 77040, USA",
      "phone": "(833) 376-8129",
      "website": "https://www.leafhomesafetysolutions.com/?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_MzYxNTA2NzMtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 3.1,
      "reviews": 15,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Commodity Home Elevator, LLC",
      "address": "3807 W Briarlilly Park Cir, Katy, TX 77493, USA",
      "phone": "(832) 417-7001",
      "website": "http://commodityhomeelevator.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "17687 Tomball Pkwy, Houston, TX 77064, USA",
      "phone": "(832) 864-5120",
      "website": "https://mobilitycity.com/houston-tx/?utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 156,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Star Mobility",
      "address": "27027 Westheimer Pkwy #1500, Katy, TX 77494, USA",
      "phone": "(832) 913-8261",
      "website": "https://starmobilityhousto.wixsite.com/mysite",
      "rating": 3,
      "reviews": 2,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility",
      "address": "21811 Katy Fwy, Katy, TX 77450, USA",
      "phone": "(832) 701-0101",
      "website": "http://houston.101mobility.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access North Houston",
      "address": "21621 Rhodes Rd Ste H, Spring, TX 77388, USA",
      "phone": "(713) 366-4605",
      "website": "https://www.nextdayaccess.com/north-houston-tx/",
      "rating": 4.9,
      "reviews": 71,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Houston",
      "address": "5829 W Sam Houston Pkwy N Suite 701, Houston, TX 77041, USA",
      "phone": "(832) 662-1821",
      "website": "https://www.101mobility.com/houston/?utm_source=GBP_Houston&utm_medium=organic&y_source=1_MTAzMzU5Njk5Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 110,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Lift Aids",
      "address": "14655 Northwest Fwy #102, Houston, TX 77040, USA",
      "phone": "(713) 939-9922",
      "website": "http://www.texaswheelchairvan.com/",
      "rating": 4.5,
      "reviews": 64,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of The Woodlands & Conroe",
      "address": "25003 Pitkin Rd Ste A800, Spring, TX 77386, USA",
      "phone": "(832) 702-3468",
      "website": "https://www.101mobility.com/woodlands-conroe/?utm_source=GBP_TheWoodlands&utm_medium=organic&y_source=1_MTAzMzU5Njk3NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 40,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "3327 S Sam Houston Pkwy E #300, Houston, TX 77047, USA",
      "phone": "(346) 226-6999",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-houston-texas/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=houston",
      "rating": 4.2,
      "reviews": 72,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Partners of Houston LLC",
      "address": "11727 S Sam Houston Pkwy W Unit F, Houston, TX 77031, USA",
      "phone": "(346) 335-1112",
      "website": "https://www.mobilitypartnershouston.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 34,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "A Place At Home - Katy",
      "address": "20811 Westheimer Pkwy Ste 2B, Katy, TX 77450, USA",
      "phone": "(281) 676-2555",
      "website": "http://aplaceathomekaty.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "remodel",
        "homecare"
      ]
    },
    {
      "name": "New Age Renovations, Llc",
      "address": "3210 Arbor Mill Ct, Houston, TX 77059, USA",
      "phone": "",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "A Hug Away Healthcare",
      "address": "1203 Avenue D, Katy, TX 77493, USA",
      "phone": "(832) 437-1983",
      "website": "https://www.ahugaway.com/",
      "rating": 4.7,
      "reviews": 163,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "A Life Saver Home Care LLC",
      "address": "24014 Thornbird Cliff Wy, Katy, TX 77493, USA",
      "phone": "(888) 593-2055",
      "website": "http://www.alifesaverhomecare.com/",
      "rating": 4.9,
      "reviews": 61,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Nurse Next Door Home Care Services - Katy, TX",
      "address": "21703 Kingsland Blvd #103, Katy, TX 77450, USA",
      "phone": "(346) 646-4110",
      "website": "https://www.nursenextdoor.com/locations/katy-tx/",
      "rating": 4.9,
      "reviews": 35,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "5702 4th St Bldg A, Katy, TX 77493, USA",
      "phone": "(832) 300-3480",
      "website": "https://www.rightathome.net/katy/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1384",
      "rating": 5,
      "reviews": 23,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Katy",
      "address": "25140 Kingsland Blvd Ste 175, Katy, TX 77494, USA",
      "phone": "(832) 705-8911",
      "website": "https://www.visitingangels.com/northwesthouston/home-care-katy-tx-senior-care-near-me?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FirstLight Home Care of Katy",
      "address": "25722 Kingsland Blvd #113a, Katy, TX 77494, USA",
      "phone": "(832) 380-8265",
      "website": "https://www.firstlighthomecare.com/home-healthcare-katy/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Homewatch CareGivers of Katy",
      "address": "25722 Kingsland Blvd Suite 115, Katy, TX 77494, USA",
      "phone": "(832) 952-1495",
      "website": "https://www.homewatchcaregivers.com/katy/?utm_source=gbp&utm_medium=organic&utm_campaign=katy",
      "rating": 4.9,
      "reviews": 28,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Americare Home Services",
      "address": "6002 Franz Ct, Katy, TX 77493, USA",
      "phone": "(346) 851-5920",
      "website": "http://www.americarehomeservices.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lifetime Health Care DBA Home Care of Texas LLC",
      "address": "21416 Provincial Blvd, Katy, TX 77450, USA",
      "phone": "(281) 602-0800",
      "website": "http://www.thehomecareoftexas.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Great Senior Care",
      "address": "27119 Faded Trl, Katy, TX 77494, USA",
      "phone": "(254) 323-8433",
      "website": "https://homehealthcarekaty.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers Home Care",
      "address": "22503 Katy Fwy #27, Katy, TX 77450, USA",
      "phone": "(281) 978-2600",
      "website": "https://www.comfortkeepers.com/offices/texas/katy/?utm_source=local&utm_medium=organic",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Cornerstone Caregiving",
      "address": "518 Westgreen Blvd Unit B, Katy, TX 77450, USA",
      "phone": "(281) 915-2250",
      "website": "https://cornerstonecaregiving.com/locations/katy-tx/?utm_source=google&utm_medium=yext",
      "rating": 5,
      "reviews": 107,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors Katy",
      "address": "801 FM 1463 Ste 200, #129, Katy, TX 77494, USA",
      "phone": "(346) 454-0389",
      "website": "https://locations.seniorshelpingseniors.com/tx/katy/118.html",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare",
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
      "name": "CareMove - NEMT",
      "address": "307 Old Silo St, Richmond, TX 77406, USA",
      "phone": "(800) 293-9046",
      "website": "https://caremove.us/",
      "rating": 4.8,
      "reviews": 13,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Senior Rides and More",
      "address": "9600 S Gessner Rd, Houston, TX 77071, USA",
      "phone": "(713) 772-8181",
      "website": "https://seniorridesandmore.org/",
      "rating": 4.9,
      "reviews": 8,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Elder-Ride Carewagon Transport",
      "address": "11111 Katy Fwy, Houston, TX 77079, USA",
      "phone": "(713) 487-8087",
      "website": "http://www.elder-ridecarewagon.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Advance Mobility non emergency Transportation - Wheelchair transportation - Katy - Houston - Sugarland -",
      "address": "3880 Greenhouse Rd Suite 405, Houston, TX 77084, USA",
      "phone": "(281) 717-8940",
      "website": "https://www.advancemobilitytransportation.com/non-emergency-medical-transportation-book-online",
      "rating": 4.6,
      "reviews": 54,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "SOS Executive Transportation LLC",
      "address": "5306 Sunny Ray Dr, Katy, TX 77493, USA",
      "phone": "(833) 504-5466",
      "website": "https://sosexecutivetransportation.com/",
      "rating": 5,
      "reviews": 207,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "First City Trans, LLC",
      "address": "25807 Westheimer Pkwy #432, Katy, TX 77494, USA",
      "phone": "(281) 902-2429",
      "website": "http://www.firstcitytrans.com/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "M & S Medical Transportation",
      "address": "4314 Whickham Dr, Fulshear, TX 77441, USA",
      "phone": "(281) 728-2229",
      "website": "",
      "rating": 4.1,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Katy Fussell Senior Citizen Center",
      "address": "5370 E 5th St, Katy, TX 77493, USA",
      "phone": "(281) 391-4837",
      "website": "https://www.cityofkaty.com/government/city-departments/senior-services",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lilly-Lou Day Activity Center, LLC",
      "address": "18075 W Little York Rd Ste G, Katy, TX 77449, USA",
      "phone": "(832) 683-4809",
      "website": "",
      "rating": 4.6,
      "reviews": 9,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Lifelong Learning Center",
      "address": "1701 East Ave 1st floor, Katy, TX 77493, USA",
      "phone": "(346) 387-6955",
      "website": "",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Everyday Opportunities",
      "address": "5242 E 3rd St, Katy, TX 77493, USA",
      "phone": "(832) 913-6286",
      "website": "http://www.journeyadventures.org/",
      "rating": 4.5,
      "reviews": 8,
      "cats": [
        "social"
      ]
    },
    {
      "name": "St Agnes Adult Day Care",
      "address": "7520 Cherry Park Dr, Houston, TX 77095, USA",
      "phone": "(713) 542-0947",
      "website": "",
      "rating": 3,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Bromlow Law, PLLC",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(281) 665-3807",
      "website": "https://bromlowlaw.com/?utm_source=google&utm_medium=organic&utm_campaign=gmbwebsite",
      "rating": 5,
      "reviews": 115,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Stegall Law Firm PLLC",
      "address": "24285 Katy Fwy Ste 300, Katy, TX 77494, USA",
      "phone": "(713) 568-5122",
      "website": "https://stegalllawfirm.com/",
      "rating": 4.5,
      "reviews": 66,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Theander & Grimes, PLLC",
      "address": "1325 Main St Ste 1101, Katy, TX 77494, USA",
      "phone": "(281) 968-9965",
      "website": "https://www.katylegal.com/",
      "rating": 5,
      "reviews": 59,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ortego Law Firm",
      "address": "24285 Katy Fwy Suite 300, Katy, TX 77494, USA",
      "phone": "(832) 557-4593",
      "website": "https://www.lawortego.com/",
      "rating": 5,
      "reviews": 43,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Serafini Smith Law Firm",
      "address": "21408 Provincial Blvd, Katy, TX 77450, USA",
      "phone": "(936) 323-3336",
      "website": "https://www.serafinismithlawfirm.com/?utm_source=gbp_gen&utm_medium=gbp&utm_campaign=gbp_search",
      "rating": 5,
      "reviews": 65,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Handley Law Office PLLC",
      "address": "633 E Fernhurst Dr Ste. 1402, Katy, TX 77450, USA",
      "phone": "(281) 703-3616",
      "website": "https://thehandleylawoffice.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Barker Law Firm PC",
      "address": "23225 Red River Dr, Katy, TX 77494, USA",
      "phone": "(713) 597-3911",
      "website": "https://www.barkerlawfirmpc.com/?utm_source=GMB&utm_medium=organic&utm_campaign=katy",
      "rating": 4.4,
      "reviews": 98,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Behlmann Law Firm, LP",
      "address": "21218 Kingsland Blvd, Katy, TX 77450, USA",
      "phone": "(281) 398-0088",
      "website": "http://www.behlmannlaw.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "J. Urech Law",
      "address": "24285 Katy Fwy, Katy, TX 77494, USA",
      "phone": "(281) 712-7350",
      "website": "https://jurechlaw.com/",
      "rating": 5,
      "reviews": 40,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Howard Law Firm, PLLC",
      "address": "26717 Westheimer Pkwy Ste 703, Katy, TX 77494, USA",
      "phone": "(346) 702-4344",
      "website": "http://www.nhowardlaw.com/",
      "rating": 4.8,
      "reviews": 32,
      "cats": [
        "legal"
      ]
    }
  ],
  "leland-nc": [
    {
      "name": "Get a Grip. Avoid a Slip! Bathroom Grab Bars, Expertly Installed",
      "address": "8718 Dog Leg Rd, Sherrills Ford, NC 28673, USA",
      "phone": "(704) 408-2652",
      "website": "http://getagripavoidaslip.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "3822 US-421 Ste 140, Wilmington, NC 28401, USA",
      "phone": "(910) 210-4086",
      "website": "https://www.bathfitter.com/us-en/location/wilmington/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.7,
      "reviews": 102,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Safe Home Pro, Inc.",
      "address": "18635 Starcreek Dr Ste b, Cornelius, NC 28031, USA",
      "phone": "(704) 948-4125",
      "website": "http://www.safehomepro.com/",
      "rating": 5,
      "reviews": 224,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Next Level Remodels LLC",
      "address": "4261 Allsbrook Ln, Leland, NC 28451, USA",
      "phone": "(910) 756-1553",
      "website": "http://nextlevelremodels.com/",
      "rating": 5,
      "reviews": 29,
      "cats": [
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "Leland Ace Hardware",
      "address": "117 B Village Rd NE, Leland, NC 28451, USA",
      "phone": "(910) 408-1200",
      "website": "http://www.lelandacehardware.com/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=15279",
      "rating": 4.6,
      "reviews": 545,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "EZPro Express",
      "address": "2017 Corporate Dr Unit 6, Wilmington, NC 28405, USA",
      "phone": "(910) 981-2461",
      "website": "https://ezproexpress.com/?utm_source=gbp_wilmington&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 448,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Kitchen and Bath of Wilmington",
      "address": "107-3 Village Rd NE, Leland, NC 28451, USA",
      "phone": "(910) 769-9939",
      "website": "https://kitchenandbathofwilmington.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Newberry Home Improvement",
      "address": "3012 N Kerr Ave, Wilmington, NC 28405, USA",
      "phone": "(910) 500-6811",
      "website": "http://www.newberryhome.com/",
      "rating": 5,
      "reviews": 227,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Unique Shower Glass and Mirror",
      "address": "5424 Oleander Dr Ste 103, Wilmington, NC 28403, USA",
      "phone": "(910) 523-6756",
      "website": "https://www.uniqueshowerglassandmirror.com/?utm_source=cumulus&utm_medium=onlinepresence&utm_campaign=gbp",
      "rating": 5,
      "reviews": 272,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Cardinal Bath",
      "address": "2530 Maco Rd NE, Leland, NC 28451, USA",
      "phone": "(910) 444-8193",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "3405 Merchant Ct, Wilmington, NC 28405, USA",
      "phone": "(910) 239-0441",
      "website": "https://westshorehome.com/locations/wilmington-nc/?utm_source=gbp&utm_medium=organic&utm_branch=wilmington",
      "rating": 4.8,
      "reviews": 1169,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "6010 Oleander Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 945-0620",
      "website": "https://www.rebath.com/location/wilmington/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.5,
      "reviews": 98,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DreamMaker Bath & Kitchen of Wilmington",
      "address": "7134 Market St Ste 2, Wilmington, NC 28411, USA",
      "phone": "(910) 597-1756",
      "website": "https://dreammaker-remodel.com/wilmington/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=wilmington-office",
      "rating": 4.9,
      "reviews": 69,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "101 Mobility of Wilmington",
      "address": "5221 Oleander Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 469-4815",
      "website": "https://www.101mobility.com/wilmington/?utm_source=GBP_Wilmington&utm_medium=organic&y_source=1_MTAzMzU5Njk0MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.6,
      "reviews": 136,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Brunswick County",
      "address": "3846 George II Hwy SE Ste A, Southport, NC 28461, USA",
      "phone": "(910) 713-1381",
      "website": "https://www.101mobility.com/brunswick-county-nc/?utm_source=GBP_BrunswickCounty&utm_medium=organic&y_source=1_MTA5NzIzMDk0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Wilmington NC",
      "address": "5555 Trade St, Hope Mills, NC 28348, USA",
      "phone": "(910) 375-4029",
      "website": "https://www.nextdayaccess.com/wilmington-nc/?utm_campaign=gmb&utm_medium=yext&utm_source=gmb",
      "rating": 4.3,
      "reviews": 19,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "3818 US-421 Ste 140, Wilmington, NC 28401, USA",
      "phone": "(910) 319-8280",
      "website": "https://www.leafhome.com/locations/north-carolina/wilmington/stair-lift?y_source=1_MjAxMTg1ODQ0NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Handilift Residential / Precision Stairlifts",
      "address": "3823 Asheville Hwy, Hendersonville, NC 28791, USA",
      "phone": "(828) 696-8005",
      "website": "http://www.handiliftnc.com/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Port City Elevator, Inc.",
      "address": "5704 Nixon Ln, Castle Hayne, NC 28429, USA",
      "phone": "(910) 790-9300",
      "website": "http://www.portcityelevator.com/",
      "rating": 4.8,
      "reviews": 60,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "3113 Garner Station Blvd, Raleigh, NC 27603, USA",
      "phone": "(984) 217-2385",
      "website": "https://www.lifewaymobility.com/raleigh-durham-nc/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Raleigh",
      "rating": 4.9,
      "reviews": 147,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Van Products",
      "address": "394 N Green Meadows Dr, Wilmington, NC 28405, USA",
      "phone": "(910) 793-5661",
      "website": "http://www.vanproducts.com/",
      "rating": 4.7,
      "reviews": 52,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Raleigh/Durham",
      "address": "3036 Barrow Dr, Raleigh, NC 27616, USA",
      "phone": "(919) 355-4141",
      "website": "https://www.nextdayaccess.com/raleigh-durham-nc/",
      "rating": 5,
      "reviews": 43,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Charlotte",
      "address": "126-A Statesville Blvd, Salisbury, NC 28144, USA",
      "phone": "(704) 459-4143",
      "website": "https://www.101mobility.com/charlotte/?utm_source=GBP_Charlotte&utm_medium=organic&y_source=1_MTAzMzU5NzAxMi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 120,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Go mobility NC, LLC",
      "address": "400 Flagg Rd, Holly Springs, NC 27540, USA",
      "phone": "(919) 244-2025",
      "website": "https://gomobilitync.com/",
      "rating": 4.6,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Charlotte",
      "address": "4004B Sardis Church Rd, Monroe, NC 28110, USA",
      "phone": "(980) 998-2756",
      "website": "https://amramp.com/charlotte/?utm_source=gmb&utm_medium=yext",
      "rating": 4.9,
      "reviews": 29,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Helping Wheels Inc",
      "address": "6 Winners Cir #4, Arden, NC 28704, USA",
      "phone": "(866) 443-3101",
      "website": "http://www.helpingwheels.com/",
      "rating": 5,
      "reviews": 70,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stag Construction",
      "address": "5726 Pepper Rd, Oak Ridge, NC 27310, USA",
      "phone": "(336) 781-6314",
      "website": "https://stagconstructionnc.com/",
      "rating": 5,
      "reviews": 148,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Aging In Place Professionals",
      "address": "4201-F, Stuart Andrew Blvd, Charlotte, NC 28217, USA",
      "phone": "(980) 938-0611",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Amedisys Home Health Care",
      "address": "1003 Olde Waterford Way #2d, Leland, NC 28451, USA",
      "phone": "(910) 332-2341",
      "website": "https://locations.amedisys.com/nc/leland/1003-olde-waterford-way-assistedcare-home-health-care-an-amedisys-company?utm_source=extnet&utm_medium=yext",
      "rating": 4,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in Wilmington, NC",
      "address": "4624 Carolina Beach Rd #120, Wilmington, NC 28412, USA",
      "phone": "(910) 994-1684",
      "website": "https://alwaysbestcare.com/leland/",
      "rating": 4.8,
      "reviews": 26,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers of Wilmington, NC",
      "address": "2203 Delaney Ave, Wilmington, NC 28403, USA",
      "phone": "(910) 342-9200",
      "website": "https://www.comfortkeepers.com/offices/north-carolina/wilmington",
      "rating": 5,
      "reviews": 42,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Wilmington",
      "address": "3205 Randall Pkwy #208, Wilmington, NC 28403, USA",
      "phone": "(910) 777-5926",
      "website": "https://www.visitingangels.com/wilmingtonnc/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.8,
      "reviews": 120,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Age in Place Home Care",
      "address": "1213 Culbreth Dr, Wilmington, NC 28405, USA",
      "phone": "(910) 386-4511",
      "website": "http://www.ageinplacehomecareservices.com/",
      "rating": 5,
      "reviews": 66,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "2505 S 17th St Ste 110, Wilmington, NC 28401, USA",
      "phone": "(910) 900-7839",
      "website": "https://www.homeinstead.com/home-care/usa/nc/wilmington/386/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.5,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "5041 New Centre Dr #209, Wilmington, NC 28403, USA",
      "phone": "(910) 208-4079",
      "website": "https://bit.ly/3pBo2qY",
      "rating": 4.9,
      "reviews": 36,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sila Senior Care",
      "address": "313 Walnut St #103, Wilmington, NC 28401, USA",
      "phone": "(910) 936-3189",
      "website": "https://silaseniorcare.com/",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Eldercare At Home",
      "address": "3408 Wilshire Blvd #100-B, Wilmington, NC 28403, USA",
      "phone": "(800) 343-5003",
      "website": "http://www.eldercarenc.net/",
      "rating": 4.7,
      "reviews": 15,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "2311 S 17th St, Wilmington, NC 28401, USA",
      "phone": "(910) 375-5591",
      "website": "https://www.seniorhelpers.com/nc/wilmington?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 54,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Out & About Senior Transportation",
      "address": "9073 Hooper Rd NE #9025, Leland, NC 28451, USA",
      "phone": "(910) 859-2584",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "The Brunswick Center at Leland",
      "address": "121 Town Hall Dr, Leland, NC 28451, USA",
      "phone": "(910) 754-7701",
      "website": "http://www.bsrinc.org/",
      "rating": 4.6,
      "reviews": 71,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elderhaus at the Lake",
      "address": "1950 Amphitheater Dr, Wilmington, NC 28401, USA",
      "phone": "(910) 251-0660",
      "website": "http://elderhaus.com/",
      "rating": 4.2,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elder Law & Life Care Planning Center",
      "address": "2505 College Rd, Wilmington, NC 28412, USA",
      "phone": "(910) 755-7526",
      "website": "https://www.apracticewithpurpose.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Four Pillars Law Firm",
      "address": "2202 Wrightsville Ave Ste 213, Wilmington, NC 28403, USA",
      "phone": "(910) 762-1577",
      "website": "http://fourpillarslawfirm.com/",
      "rating": 5,
      "reviews": 181,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Craige, Fox & Roden",
      "address": "701 Market St, Wilmington, NC 28401, USA",
      "phone": "(910) 815-0085",
      "website": "http://www.craigeandfox.com/",
      "rating": 4.2,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Salines-Mondello Law Firm, PC",
      "address": "6781 Parker Farm Dr #210, Wilmington, NC 28405, USA",
      "phone": "(910) 668-4587",
      "website": "http://www.lisa-law.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
      "rating": 4.8,
      "reviews": 113,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Elder Law & Life Care Planning Center",
      "address": "4436 Main St, Shallotte, NC 28470, USA",
      "phone": "(910) 755-7526",
      "website": "https://www.apracticewithpurpose.com/",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Pettijohn & Getty, PLLC",
      "address": "1012 Grandiflora Dr Suite 130, Leland, NC 28451, USA",
      "phone": "(910) 910-9010",
      "website": "https://portcityattorney.com/",
      "rating": 4.5,
      "reviews": 11,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Cape Fear Family Law - Wilmington",
      "address": "5101 Dunlea Ct Ste 202, Wilmington, NC 28405, USA",
      "phone": "(910) 210-0349",
      "website": "https://capefearfamilylaw.com/locations/wilmington-nc-office-location/",
      "rating": 4.7,
      "reviews": 276,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Galbreath Costner",
      "address": "503 Olde Waterford Way Unit 201, Leland, NC 28451, USA",
      "phone": "(910) 383-3610",
      "website": "https://nelsongalbreath.com/locations/wilmington-cape-fear/",
      "rating": 5,
      "reviews": 95,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "KEN NANCE LAW",
      "address": "4032 Masonboro Loop Rd Unit 103, Wilmington, NC 28409, USA",
      "phone": "(910) 473-5377",
      "website": "http://www.kennancelaw.com/",
      "rating": 5,
      "reviews": 67,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Alley, Register & McEachern Attorneys At Law",
      "address": "701 N 4th St, Wilmington, NC 28401, USA",
      "phone": "(910) 251-0103",
      "website": "http://www.alleyregistermceachern.com/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "legal"
      ]
    }
  ],
  "wilmington-nc": [
    {
      "name": "Bath Fitter",
      "address": "3822 US-421 Ste 140, Wilmington, NC 28401, USA",
      "phone": "(910) 210-4086",
      "website": "https://www.bathfitter.com/us-en/location/wilmington/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.7,
      "reviews": 102,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "3405 Merchant Ct, Wilmington, NC 28405, USA",
      "phone": "(910) 239-0441",
      "website": "https://westshorehome.com/locations/wilmington-nc/?utm_source=gbp&utm_medium=organic&utm_branch=wilmington",
      "rating": 4.8,
      "reviews": 1169,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "EZPro Express",
      "address": "2017 Corporate Dr Unit 6, Wilmington, NC 28405, USA",
      "phone": "(910) 981-2461",
      "website": "https://ezproexpress.com/?utm_source=gbp_wilmington&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 448,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Next Day Access Wilmington NC",
      "address": "5555 Trade St, Hope Mills, NC 28348, USA",
      "phone": "(910) 375-4029",
      "website": "https://www.nextdayaccess.com/wilmington-nc/?utm_campaign=gmb&utm_medium=yext&utm_source=gmb",
      "rating": 4.3,
      "reviews": 19,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "6010 Oleander Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 945-0620",
      "website": "https://www.rebath.com/location/wilmington/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.5,
      "reviews": 98,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Longley Supply Company",
      "address": "2018 Oleander Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 762-7793",
      "website": "http://www.longleysupplycompany.com/",
      "rating": 4.6,
      "reviews": 36,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Craft American Hardware, Inc.",
      "address": "7002 Wrightsville Ave, Wilmington, NC 28403, USA",
      "phone": "(910) 256-4782",
      "website": "https://www.doitbest.com/crafthardware/",
      "rating": 4.7,
      "reviews": 135,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "DreamMaker Bath & Kitchen of Wilmington",
      "address": "7134 Market St Ste 2, Wilmington, NC 28411, USA",
      "phone": "(910) 597-1756",
      "website": "https://dreammaker-remodel.com/wilmington/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=wilmington-office",
      "rating": 4.9,
      "reviews": 69,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "Kitchen and Bath of Wilmington",
      "address": "107-3 Village Rd NE, Leland, NC 28451, USA",
      "phone": "(910) 769-9939",
      "website": "https://kitchenandbathofwilmington.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of Wilmington",
      "address": "6709 Netherlands Dr C, Wilmington, NC 28405, USA",
      "phone": "(910) 390-1730",
      "website": "https://fivestarbathsolutions.com/wilmington-nc/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Newberry Home Improvement",
      "address": "3012 N Kerr Ave, Wilmington, NC 28405, USA",
      "phone": "(910) 500-6811",
      "website": "http://www.newberryhome.com/",
      "rating": 5,
      "reviews": 227,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Reico Kitchen & Bath",
      "address": "3360 Jaeckle Dr Unit 110, Wilmington, NC 28403, USA",
      "phone": "(910) 310-0510",
      "website": "https://www.reico.com/locations/north-carolina-showrooms/wilmington-nc/",
      "rating": 5,
      "reviews": 23,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "101 Mobility of Wilmington",
      "address": "5221 Oleander Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 469-4815",
      "website": "https://www.101mobility.com/wilmington/?utm_source=GBP_Wilmington&utm_medium=organic&y_source=1_MTAzMzU5Njk0MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.6,
      "reviews": 136,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Brunswick County",
      "address": "3846 George II Hwy SE Ste A, Southport, NC 28461, USA",
      "phone": "(910) 713-1381",
      "website": "https://www.101mobility.com/brunswick-county-nc/?utm_source=GBP_BrunswickCounty&utm_medium=organic&y_source=1_MTA5NzIzMDk0Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Port City Elevator, Inc.",
      "address": "5704 Nixon Ln, Castle Hayne, NC 28429, USA",
      "phone": "(910) 790-9300",
      "website": "http://www.portcityelevator.com/",
      "rating": 4.8,
      "reviews": 60,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "3818 US-421 Ste 140, Wilmington, NC 28401, USA",
      "phone": "(910) 319-8280",
      "website": "https://www.leafhome.com/locations/north-carolina/wilmington/stair-lift?y_source=1_MjAxMTg1ODQ0NS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Numotion",
      "address": "3012 Hall Watters Dr Ste 101, Wilmington, NC 28405, USA",
      "phone": "(910) 452-0999",
      "website": "https://www.numotion.com/locations/wilmington-nc",
      "rating": 4.6,
      "reviews": 203,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Van Products",
      "address": "394 N Green Meadows Dr, Wilmington, NC 28405, USA",
      "phone": "(910) 793-5661",
      "website": "http://www.vanproducts.com/",
      "rating": 4.7,
      "reviews": 52,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Complete Renovation Solutions LLC",
      "address": "2011 Corporate Dr Unit 5, Wilmington, NC 28405, USA",
      "phone": "(910) 399-5126",
      "website": "https://completerenovationsnc.com/",
      "rating": 4.9,
      "reviews": 27,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Magnolia Grove Design & Cabinetry",
      "address": "2305 Market St, Wilmington, NC 28403, USA",
      "phone": "(910) 218-0098",
      "website": "https://www.magnoliagrovedesign.com/",
      "rating": 4.6,
      "reviews": 17,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Age in Place Home Care",
      "address": "1213 Culbreth Dr, Wilmington, NC 28405, USA",
      "phone": "(910) 386-4511",
      "website": "http://www.ageinplacehomecareservices.com/",
      "rating": 5,
      "reviews": 66,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "BrightStar Care",
      "address": "2709 Market St Suite 201, Wilmington, NC 28403, USA",
      "phone": "(910) 599-9555",
      "website": "https://www.brightstarcare.com/locations/wilmington-brunswick-county/",
      "rating": 4.9,
      "reviews": 45,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Griswold Home Care for Wilmington",
      "address": "4016 Shipyard Blvd A, Wilmington, NC 28403, USA",
      "phone": "(910) 515-1378",
      "website": "https://www.griswoldcare.com/wilmington/",
      "rating": 4.8,
      "reviews": 100,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "HomeWerks Home Care LLC",
      "address": "1213 Culbreth Dr #345, Wilmington, NC 28405, USA",
      "phone": "(910) 386-4555",
      "website": "https://www.homewerks-homecare.com/homewerks-wilmington-nc/?utm_source=GMBlisting&utm_medium=organic",
      "rating": 5,
      "reviews": 25,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Wilmington",
      "address": "3205 Randall Pkwy #208, Wilmington, NC 28403, USA",
      "phone": "(910) 777-5926",
      "website": "https://www.visitingangels.com/wilmingtonnc/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.8,
      "reviews": 120,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers of Wilmington, NC",
      "address": "2203 Delaney Ave, Wilmington, NC 28403, USA",
      "phone": "(910) 342-9200",
      "website": "https://www.comfortkeepers.com/offices/north-carolina/wilmington",
      "rating": 5,
      "reviews": 42,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "3973-A Market St, Wilmington, NC 28403, USA",
      "phone": "(910) 765-0755",
      "website": "https://www.rightathome.net/wilmington/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1552",
      "rating": 4.8,
      "reviews": 21,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "2505 S 17th St Ste 110, Wilmington, NC 28401, USA",
      "phone": "(910) 900-7839",
      "website": "https://www.homeinstead.com/home-care/usa/nc/wilmington/386/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.5,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "SYNERGY HomeCare",
      "address": "400 Carl St Ste 201, Wilmington, NC 28403, USA",
      "phone": "(910) 408-5390",
      "website": "https://www.synergyhomecare.com/nc-wilmington-28403/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=3411",
      "rating": 5,
      "reviews": 95,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in Wilmington, NC",
      "address": "4624 Carolina Beach Rd #120, Wilmington, NC 28412, USA",
      "phone": "(910) 994-1684",
      "website": "https://alwaysbestcare.com/leland/",
      "rating": 4.8,
      "reviews": 26,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "2311 S 17th St, Wilmington, NC 28401, USA",
      "phone": "(910) 375-5591",
      "website": "https://www.seniorhelpers.com/nc/wilmington?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 54,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Eldercare At Home",
      "address": "3408 Wilshire Blvd #100-B, Wilmington, NC 28403, USA",
      "phone": "(800) 343-5003",
      "website": "http://www.eldercarenc.net/",
      "rating": 4.7,
      "reviews": 15,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sila Senior Care",
      "address": "313 Walnut St #103, Wilmington, NC 28401, USA",
      "phone": "(910) 936-3189",
      "website": "https://silaseniorcare.com/",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "5041 New Centre Dr #209, Wilmington, NC 28403, USA",
      "phone": "(910) 208-4079",
      "website": "https://bit.ly/3pBo2qY",
      "rating": 4.9,
      "reviews": 36,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "New Hanover County Senior Resource Center",
      "address": "2222 College Rd, Wilmington, NC 28403, USA",
      "phone": "(910) 798-6400",
      "website": "https://www.nhcgov.com/1191/Senior-Resource-Center/",
      "rating": 4.7,
      "reviews": 97,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "CXL Transportation Services",
      "address": "7149 Jennings Rd NE, Leland, NC 28451, USA",
      "phone": "(910) 427-3276",
      "website": "http://www.cxltransport.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Out & About Senior Transportation",
      "address": "9073 Hooper Rd NE #9025, Leland, NC 28451, USA",
      "phone": "(910) 859-2584",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Elder Up LLC",
      "address": "311 N Main St, Kernersville, NC 27284, USA",
      "phone": "(336) 624-0933",
      "website": "https://elderuptransportationsvc.com/",
      "rating": 5,
      "reviews": 17,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Ivory's Accessible Transport",
      "address": "4557 Technology Dr Ste 5, Wilmington, NC 28405, USA",
      "phone": "(910) 264-9329",
      "website": "",
      "rating": 4.4,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "The Transporter",
      "address": "5008 Hunters Trail, Wilmington, NC 28405, USA",
      "phone": "(910) 632-7401",
      "website": "https://www.nctransporter.com/",
      "rating": 4.9,
      "reviews": 84,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Elderhaus at the Lake",
      "address": "1950 Amphitheater Dr, Wilmington, NC 28401, USA",
      "phone": "(910) 251-0660",
      "website": "http://elderhaus.com/",
      "rating": 4.2,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Town Square Wilmington",
      "address": "1929 Oleander Dr F, Wilmington, NC 28403, USA",
      "phone": "(910) 900-7752",
      "website": "https://www.townsquare.net/adult-day-care/north-carolina/wilmington/",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elderhaus PACE",
      "address": "1380 N College Rd, Wilmington, NC 28405, USA",
      "phone": "(910) 343-8209",
      "website": "http://elderhaus.com/",
      "rating": 4.5,
      "reviews": 23,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Carefinderz",
      "address": "313 Walnut St, Wilmington, NC 28401, USA",
      "phone": "(910) 297-9743",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "W.A.V.E.S. Day Program",
      "address": "1939 Independence Blvd #1939, Wilmington, NC 28403, USA",
      "phone": "(910) 799-7564",
      "website": "https://www.wavesilm.org/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=5658350513519437036",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elder Law & Life Care Planning Center",
      "address": "2505 College Rd, Wilmington, NC 28412, USA",
      "phone": "(910) 755-7526",
      "website": "https://www.apracticewithpurpose.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Four Pillars Law Firm",
      "address": "2202 Wrightsville Ave Ste 213, Wilmington, NC 28403, USA",
      "phone": "(910) 762-1577",
      "website": "http://fourpillarslawfirm.com/",
      "rating": 5,
      "reviews": 181,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Salines-Mondello Law Firm, PC",
      "address": "6781 Parker Farm Dr #210, Wilmington, NC 28405, USA",
      "phone": "(910) 668-4587",
      "website": "http://www.lisa-law.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing",
      "rating": 4.8,
      "reviews": 113,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Craige, Fox & Roden",
      "address": "701 Market St, Wilmington, NC 28401, USA",
      "phone": "(910) 815-0085",
      "website": "http://www.craigeandfox.com/",
      "rating": 4.2,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Robert H Hochuli Jr",
      "address": "219 Racine Dr, Wilmington, NC 28403, USA",
      "phone": "(910) 392-2004",
      "website": "http://www.wilmingtonlegalplanning.com/",
      "rating": 4.7,
      "reviews": 39,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "LSM",
      "address": "6781 Parker Farm Dr #210, Wilmington, NC 28405, USA",
      "phone": "(910) 254-1481",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Legacy Lawyers",
      "address": "1135 Military Cutoff Rd Ste 202, Wilmington, NC 28403, USA",
      "phone": "(910) 452-3577",
      "website": "http://www.legacylawyersnc.com/?utm_source=GMBlisting&utm_medium=organic",
      "rating": 4.9,
      "reviews": 8,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Johnson Legal",
      "address": "123 N Cardinal Extension Dr Ste 100, Wilmington, NC 28405, USA",
      "phone": "(910) 807-8241",
      "website": "https://www.johnsonlegal.us/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 667,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Cranfill Sumner LLP",
      "address": "5535 Currituck Dr Ste 210, Wilmington, NC 28403, USA",
      "phone": "(910) 777-6000",
      "website": "https://www.cshlaw.com/?utm_source=gmb&utm_medium=organic&utm_campaign=wilmington",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "KEN NANCE LAW",
      "address": "4032 Masonboro Loop Rd Unit 103, Wilmington, NC 28409, USA",
      "phone": "(910) 473-5377",
      "website": "http://www.kennancelaw.com/",
      "rating": 5,
      "reviews": 67,
      "cats": [
        "legal"
      ]
    }
  ],
  "new-york-ny": [
    {
      "name": "Matthew Grandin Custom Fabrication",
      "address": "63 Flushing Ave, Brooklyn, NY 11205, USA",
      "phone": "(203) 246-2741",
      "website": "http://www.mattgrandin.com/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Janbar Inc",
      "address": "69 Engert Ave, Brooklyn, NY 11222, USA",
      "phone": "(718) 782-9720",
      "website": "",
      "rating": 1,
      "reviews": 2,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mavi New York Inc",
      "address": "51-02 21st St 6th Floor, Long Island City, NY 11101, USA",
      "phone": "(718) 874-3805",
      "website": "http://www.mavinewyork.com/",
      "rating": 3.9,
      "reviews": 16,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "1W2R LLC",
      "address": "122 Pennsylvania Ave, Brooklyn, NY 11207, USA",
      "phone": "(212) 671-0722",
      "website": "http://1w2r.com/",
      "rating": 5,
      "reviews": 95,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "The Home Depot",
      "address": "40 W 23rd St, New York, NY 10010, USA",
      "phone": "(212) 929-9571",
      "website": "https://www.homedepot.com/l/Manhattan-West-23rd-St/NY/New-York/10010/6175?emt=MSGoogleMaps",
      "rating": 4.3,
      "reviews": 5084,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "M & D Shapiro True Value Hardware",
      "address": "7 Great Jones St, New York, NY 10012, USA",
      "phone": "(212) 256-0050",
      "website": "http://shapirohardware.com/",
      "rating": 4,
      "reviews": 75,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "GRAB IT CORP",
      "address": "1173 39th St, Brooklyn, NY 11218, USA",
      "phone": "(347) 423-0130",
      "website": "http://grabitcorp.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "BAR Construction Corp",
      "address": "22-15 43rd Ave Unit 330, Long Island City, NY 11101, USA",
      "phone": "(718) 458-0664",
      "website": "http://www.barconstructioncorp.com/",
      "rating": 4,
      "reviews": 2,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "The Gordon Supply Co.",
      "address": "131-15 Merrick Blvd, Jamaica, NY 11434, USA",
      "phone": "(718) 527-8827",
      "website": "http://www.gordonsupply.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Reglazing bath",
      "address": "2246 Clarendon Rd, Brooklyn, NY 11226, USA",
      "phone": "(646) 866-3815",
      "website": "https://reglazingbath.com/",
      "rating": 5,
      "reviews": 77,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bathroom Pros NYC & LI",
      "address": "254 E Jericho Tpke, Mineola, NY 11501, USA",
      "phone": "(516) 888-6862",
      "website": "https://www.bathroomprosnyc.com/",
      "rating": 4.7,
      "reviews": 53,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Shiny Surface Restoration",
      "address": "14 Wall St 20th floor, New York, NY 10005, USA",
      "phone": "(212) 292-4812",
      "website": "https://shinysurfacerestoration.com/",
      "rating": 5,
      "reviews": 94,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Independent Home Walk-in Tubs",
      "address": "59 Hempstead Gardens Dr, West Hempstead, NY 11552, USA",
      "phone": "(888) 239-1058",
      "website": "https://independenthome.com/",
      "rating": 3.9,
      "reviews": 21,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Elements Kitchen & Bath Renovations",
      "address": "689 Lorimer St Ste 3L, Brooklyn, NY 11211, USA",
      "phone": "(212) 899-5070",
      "website": "https://elementsknb.com/",
      "rating": 5,
      "reviews": 35,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "1-Day Bath Remodeling",
      "address": "254 E Jericho Tpke, Mineola, NY 11501, USA",
      "phone": "(516) 888-6862",
      "website": "https://www.1daybathremodeling.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "New York Tubs - Bathtub Reglazing (Refinishing)",
      "address": "2225 60th St, Brooklyn, NY 11204, USA",
      "phone": "(212) 830-0000",
      "website": "https://nytubs.com/",
      "rating": 5,
      "reviews": 93,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Prime Bathtub And Tiles Refinishing Corp",
      "address": "62-62 Woodhaven Blvd S41, Rego Park, NY 11374, USA",
      "phone": "(929) 928-5859",
      "website": "https://refinishingprimebath.com/",
      "rating": 5,
      "reviews": 197,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bathtub Solutions: Bathtub, Tile & Sink Reglazing",
      "address": "135-02 61st Rd, Flushing, NY 11367, USA",
      "phone": "(516) 851-6865",
      "website": "https://bathtubrefinishingnewyork.com/",
      "rating": 5,
      "reviews": 54,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Freedom Stairlifts",
      "address": "3129 Connell Pl, Bronx, NY 10465, USA",
      "phone": "(914) 415-7466",
      "website": "https://freedomstairlift.com/",
      "rating": 4.9,
      "reviews": 130,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "StairLifts Pro Inc.",
      "address": "2950 Ocean Ave, Brooklyn, NY 11235, USA",
      "phone": "(718) 915-7743",
      "website": "http://stairliftsproinc.com/",
      "rating": 5,
      "reviews": 110,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stair Glider Stairlifts Brooklyn",
      "address": "1389 Atlantic Ave, Brooklyn, NY 11216, USA",
      "phone": "(718) 689-0090",
      "website": "https://www.stairglider.net/stairlifts-brooklyn-ny/",
      "rating": 5,
      "reviews": 18,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "American Stairlifts",
      "address": "185 Price Pkwy, Farmingdale, NY 11735, USA",
      "phone": "(888) 876-1776",
      "website": "https://www.americanstairlifts.com/",
      "rating": 4.9,
      "reviews": 44,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Freedom Stairlifts",
      "address": "45A E 25th St, Huntington, NY 11743, USA",
      "phone": "(516) 494-9794",
      "website": "http://freedomstairlift.com/",
      "rating": 4.9,
      "reviews": 233,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Dermer Stairlifts and Mobility",
      "address": "126 Scott Ave, Brooklyn, NY 11237, USA",
      "phone": "(866) 454-3896",
      "website": "https://www.dermerstairlifts.com/",
      "rating": 4.9,
      "reviews": 25,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Staten Island Stairlifts Pro",
      "address": "36 Park Hill Ln, Staten Island, NY 10304, USA",
      "phone": "(718) 535-8690",
      "website": "https://stairliftsproinc.com/",
      "rating": 5,
      "reviews": 67,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stair Lift Store LI",
      "address": "375 N Long Beach Rd, Rockville Centre, NY 11570, USA",
      "phone": "(516) 633-5664",
      "website": "https://www.stairliftstoreli.com/",
      "rating": 5,
      "reviews": 26,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stair Glider Stairlifts Queens",
      "address": "215-22 99th Ave, Queens Village, NY 11429, USA",
      "phone": "(718) 689-0090",
      "website": "https://www.stairglider.net/stairlifts-queens-village-new-york/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Wheelchair Ramps Long Island",
      "address": "Lauren Suval, 25 Alfred Rd W, Merrick, NY 11566, USA",
      "phone": "(631) 515-6152",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Alpha Care Supply",
      "address": "21 Stringham Ave, Valley Stream, NY 11580, USA",
      "phone": "(866) 291-7039",
      "website": "https://www.alphacaresupply.com/",
      "rating": 4.9,
      "reviews": 177,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Northern New Jersey",
      "address": "369 Harrison St, Nutley, NJ 07110, USA",
      "phone": "(973) 453-0899",
      "website": "https://amramp.com/northern-southern-nj/?utm_source=gmb&utm_medium=yext",
      "rating": 5,
      "reviews": 73,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "100 E Jefryn Blvd # K, Deer Park, NY 11729, USA",
      "phone": "(631) 657-5560",
      "website": "https://www.lifewaymobility.com/long-island/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Long_Island",
      "rating": 5,
      "reviews": 27,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Westchester and Fairfield",
      "address": "364 Adams St, Bedford Hills, NY 10507, USA",
      "phone": "(914) 444-2103",
      "website": "https://www.nextdayaccess.com/westchester-fairfield?utm_campaign=gmb",
      "rating": 5,
      "reviews": 51,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Long Island",
      "address": "350 Marconi Blvd, Copiague, NY 11726, USA",
      "phone": "(516) 226-7231",
      "website": "https://amramp.com/long-island/?utm_source=gmb&utm_medium=yext",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Affordable Portable Ramps",
      "address": "2100 Arctic Ave, Bohemia, NY 11716, USA",
      "phone": "(631) 567-4203",
      "website": "http://apramps.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Level Accessibility Inc.",
      "address": "374 Neptune Ave, West Babylon, NY 11704, USA",
      "phone": "(888) 844-4455",
      "website": "http://www.nextlevelaccessibility.com/",
      "rating": 5,
      "reviews": 126,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "National Ramp",
      "address": "625 Corporate Way Suite 100, Valley Cottage, NY 10989, USA",
      "phone": "(877) 748-5588",
      "website": "https://homeaccess.nationalramp.com/?utm_source=localfx&utm_medium=organic&utm_campaign=localfx",
      "rating": 4.8,
      "reviews": 78,
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
      "name": "Aging At Home, LTD.",
      "address": "142 Mineola Blvd, Mineola, NY 11501, USA",
      "phone": "(516) 746-6451",
      "website": "http://aahny.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AGNY SERVICES LLC",
      "address": "695 Lorimer St Apt L1, Brooklyn, NY 11211, USA",
      "phone": "(347) 772-4582",
      "website": "http://agny.nyc/",
      "rating": 5,
      "reviews": 21,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Overall Renovation - Brooklyn",
      "address": "2717 E 63rd St, Brooklyn, NY 11234, USA",
      "phone": "(718) 841-0462",
      "website": "https://overallrenovation.com/brooklyn-location-overall-renovation/?utm_campaign=gmb&utm_medium=website-btn&utm_source=gmb-listings",
      "rating": 4.9,
      "reviews": 69,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "NY Home Improvement services",
      "address": "127 42nd St, Brooklyn, NY 11232, USA",
      "phone": "(347) 248-6700",
      "website": "http://www.newyorkhis.com/",
      "rating": 5,
      "reviews": 63,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "DCON Renovations & Remodeling",
      "address": "2329 Nostrand Ave Suite 100, Brooklyn, NY 11210, USA",
      "phone": "(718) 628-3428",
      "website": "https://www.dconrenovations.com/?utm_source=googlemybusiness&utm_medium=organic&utm_campaign=googlemybusiness_listing",
      "rating": 4.9,
      "reviews": 63,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "IG Renovation NY",
      "address": "84 Withers St 3rd floor, Brooklyn, NY 11211, USA",
      "phone": "(347) 884-2488",
      "website": "https://www.igrenovationny.com/",
      "rating": 5,
      "reviews": 44,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Knockout Renovation Services Inc.",
      "address": "134 W 26th St #1000, New York, NY 10001, USA",
      "phone": "(212) 599-5060",
      "website": "https://knockoutrenovation.com/",
      "rating": 4.3,
      "reviews": 44,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "SelectCare Home Health Care",
      "address": "220 E 23rd St Ste 303, New York, NY 10010, USA",
      "phone": "(212) 505-3640",
      "website": "https://www.selectcarenyc.com/",
      "rating": 4.9,
      "reviews": 39,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Health Care Services of NY",
      "address": "1989 Coney Island Ave, Brooklyn, NY 11223, USA",
      "phone": "(718) 336-7110",
      "website": "http://hcshomecare.com/",
      "rating": 4.4,
      "reviews": 277,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "All Heart Homecare Agency Inc.",
      "address": "260 W 35th St 7th Floor Suite 702, New York, NY 10001, USA",
      "phone": "(718) 285-9101",
      "website": "https://allheartcare.com/",
      "rating": 4.8,
      "reviews": 94,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "All Heart Homecare Agency Inc.",
      "address": "1664 E 14th St 2nd floor, Brooklyn, NY 11229, USA",
      "phone": "(718) 627-0300",
      "website": "https://www.allheartcare.com/contact-us/",
      "rating": 4.8,
      "reviews": 436,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Health Care Agency",
      "address": "621 W 189th St, New York, NY 10040, USA",
      "phone": "(929) 572-7162",
      "website": "https://homehealthcareagencynyc6.godaddysites.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Anchor Health Home care",
      "address": "133-20 41st Rd Fl 5 suite 5b, Flushing, NY 11355, USA",
      "phone": "(718) 395-6328",
      "website": "https://anchorhc.org/",
      "rating": 4.9,
      "reviews": 249,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "LeanOnWe Home Care",
      "address": "575 8th Ave 11th floor, New York, NY 10018, USA",
      "phone": "(844) 532-6669",
      "website": "https://www.leanonwe.com/",
      "rating": 4.9,
      "reviews": 146,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Health Care Agency Manhattan",
      "address": "4257 Broadway, New York, NY 10033, USA",
      "phone": "(646) 603-1585",
      "website": "http://homehealthcareagencyny.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "7 Day Home Care",
      "address": "100 Park Ave RM 1600, New York, NY 10017, USA",
      "phone": "(516) 408-0034",
      "website": "https://www.7dayhomecare.com/",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Affirmed Home Care",
      "address": "70 W 36th St. 6th Floor, New York, NY 10018, USA",
      "phone": "(212) 423-5611",
      "website": "https://www.affirmedhomecare.com/",
      "rating": 4.7,
      "reviews": 130,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Elder Care Homecare - NYC",
      "address": "389 5th Ave #500, New York, NY 10016, USA",
      "phone": "(914) 786-6635",
      "website": "https://eldercarehomecare.com/nyc/",
      "rating": 4.8,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Home Care",
      "address": "305 West End Ave #100, New York, NY 10023, USA",
      "phone": "(212) 791-9486",
      "website": "",
      "rating": 3.2,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Affordable Senior Care of New York",
      "address": "338 E 5th St, Brooklyn, NY 11218, USA",
      "phone": "(718) 851-0325",
      "website": "http://www.affordableseniorcarenewyork.com/home-health-care-contact-us",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "Professional Wing, 400 E 56th St Suite #2, New York, NY 10022, USA",
      "phone": "(646) 781-7350",
      "website": "https://www.homeinstead.com/home-care/usa/ny/new-york/368/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 191,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Touching Hearts at Home NYC -- Manhattan; Brooklyn; Westchester; Queens; Rockland",
      "address": "733 3rd Ave Fl 16, New York, NY 10017, USA",
      "phone": "(646) 480-6266",
      "website": "https://www.touchinghearts.com/nyc?utm_source=GBP&utm_medium=Organic&utm_campaign=Google+Business+Profile&utm_id=ChoiceLocal",
      "rating": 4.9,
      "reviews": 34,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Best Senior Home Care",
      "address": "61-43 186th St, Fresh Meadows, NY 11365, USA",
      "phone": "(917) 880-9373",
      "website": "https://nyseniorhomecare.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Assisted Home Care Services",
      "address": "86-37 Grand Ave, Elmhurst, NY 11373, USA",
      "phone": "(718) 719-6011",
      "website": "https://asthomecare.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Home Service",
      "address": "115 Wooster St #2F, New York, NY 10012, USA",
      "phone": "",
      "website": "http://www.seniorhomeservice.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Care and Transportation",
      "address": "525 E 72nd St, New York, NY 10021, USA",
      "phone": "(212) 235-1036",
      "website": "",
      "rating": 1.6,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "NEZ senior transportation",
      "address": "2550 Olinville Ave suite 18B, Bronx, NY 10467, USA",
      "phone": "(347) 798-3970",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "NYC Wheelchair Transportation",
      "address": "One Liberty St, New York, NY 10006, USA",
      "phone": "(212) 705-8773",
      "website": "https://nycwheelchairtransportation.com/",
      "rating": 4.1,
      "reviews": 110,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Posh Senior Ride LLC",
      "address": "18-58 Cornaga Ave Fl 2, Far Rockaway, NY 11691, USA",
      "phone": "(718) 868-0329",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Stein Senior Center",
      "address": "204 E 23rd St, New York, NY 10010, USA",
      "phone": "(646) 395-8083",
      "website": "http://steinseniorcenter.org/",
      "rating": 4.5,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Open Door Senior Citizen Center",
      "address": "168 Grand St, New York, NY 10013, USA",
      "phone": "(212) 431-9026",
      "website": "",
      "rating": 3.2,
      "reviews": 9,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Greenwich House Older Adult Center at Center on the Square",
      "address": "20 Washington Square N, New York, NY 10011, USA",
      "phone": "(212) 777-3555",
      "website": "https://greenwichhouse.org/",
      "rating": 4.3,
      "reviews": 30,
      "cats": [
        "social"
      ]
    },
    {
      "name": "New York City Housing Authority Dyckman Senior Center",
      "address": "3754 10th Ave, New York, NY 10034, USA",
      "phone": "(212) 569-7790",
      "website": "",
      "rating": 4,
      "reviews": 35,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Center @ Lenox Hill Neighborhood House",
      "address": "343 E 70th St, New York, NY 10021, USA",
      "phone": "(212) 218-0319",
      "website": "http://www.lenoxhill.org/center-lenox-hill-neighborhood-house",
      "rating": 4.3,
      "reviews": 37,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Henry Street Settlement Older Adult Center",
      "address": "334 Madison St Lower Level, New York, NY 10002, USA",
      "phone": "(212) 349-2770",
      "website": "https://www.henrystreet.org/older-adult-services/older-adult-center-older-adult-services/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Carter Burden Network / Leonard Covello Older Adult Center",
      "address": "312 E 109th St #301, New York, NY 10029, USA",
      "phone": "(212) 423-9665",
      "website": "http://carterburdennetwork.org/",
      "rating": 4.1,
      "reviews": 74,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Moriah Older Adult Luncheon",
      "address": "90 Bennett Ave #92, New York, NY 10033, USA",
      "phone": "(212) 923-5715",
      "website": "http://www.moriahseniorcenter.org/contact-us",
      "rating": 4.6,
      "reviews": 23,
      "cats": [
        "social"
      ]
    },
    {
      "name": "ABSW Senior Citizens Center",
      "address": "221 W 107th St, New York, NY 10025, USA",
      "phone": "(212) 749-8400",
      "website": "",
      "rating": 4.7,
      "reviews": 13,
      "cats": [
        "social"
      ]
    },
    {
      "name": "New York City Housing Authority Fulton Senior Center",
      "address": "119 9th Ave, New York, NY 10011, USA",
      "phone": "(212) 255-5005",
      "website": "http://www.hudsonguild.org/",
      "rating": 3.2,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Heart Adult Day Care - A Social Adult Daycare Center - Washington Heights",
      "address": "1920 Amsterdam Ave Ground Floor, New York, NY 10032, USA",
      "phone": "(212) 470-2604",
      "website": "https://www.theheartnyc.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Amsterdam Adult Day Health Care Program",
      "address": "1060 Amsterdam Ave, New York, NY 10025, USA",
      "phone": "(212) 316-7735",
      "website": "https://centersadultdaycare.com/new-york-new-york/",
      "rating": 3.2,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Centers Adult Day Care in Queens, New York",
      "address": "59-25 67th Ave, Ridgewood, NY 11385, USA",
      "phone": "(718) 821-3723",
      "website": "https://centersadultdaycare.com/queens-new-york/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Social Adult Care Inc",
      "address": "617 W 181st St, New York, NY 10033, USA",
      "phone": "(646) 274-4842",
      "website": "https://www.nyc.gov/site/dfta/community-partners/social-adult-day-care.page",
      "rating": 4,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "NYC Care Social Adult Day Care",
      "address": "187-30 Linden Blvd, St. Albans, NY 11412, USA",
      "phone": "(929) 206-5656",
      "website": "https://www.nyccare.org/",
      "rating": 4.8,
      "reviews": 41,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Divine Living Adult Daycare Center",
      "address": "280 Delancey St, New York, NY 10002, USA",
      "phone": "(212) 477-7755",
      "website": "http://www.divinelivingadc.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Centers Adult Day Care in Staten Island, New York",
      "address": "91 Tompkins Ave., Staten Island, NY 10304, USA",
      "phone": "(718) 876-4331",
      "website": "https://centersadultdaycare.com/staten-island-new-york/?utm_source=gbp&utm_medium=web",
      "rating": 3.6,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Park Ave Adult Day Care",
      "address": "1916 Park Ave #102, New York, NY 10037, USA",
      "phone": "(212) 490-2541",
      "website": "",
      "rating": 4.1,
      "reviews": 33,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Cathay adult day care center",
      "address": "120 Baxter St #118, New York, NY 10013, USA",
      "phone": "(212) 226-1353",
      "website": "https://a125-egovt.nyc.gov/egovt/services/service_detail.cfm?contract__cont_dfta_id=S2701",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "GREATER NEW YORK SOCIAL AND HEALTH ADULT DAY CARE CENTER",
      "address": "132-06 Maple Ave, Flushing, NY 11355, USA",
      "phone": "(347) 392-3699",
      "website": "https://a125-egovt.nyc.gov/egovt/services/service_detail.cfm?contract__cont_dfta_id=S33201",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elder Law Attorney",
      "address": "626 1st Ave 31 -A, New York, NY 10016, USA",
      "phone": "(718) 333-2395",
      "website": "https://advanced-legal.com/manhattan-estate-planning-attorney",
      "rating": 4.9,
      "reviews": 54,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Michael J. Greenberg, P.C. - Estate Planning & Elder Law",
      "address": "515 Madison Ave 31st Floor, New York, NY 10022, USA",
      "phone": "(212) 401-5750",
      "website": "https://www.mjglawyers.com/",
      "rating": 5,
      "reviews": 159,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Connors & Sullivan, Attorneys at Law, PLLC",
      "address": "110 E 59th St, New York, NY 10022, USA",
      "phone": "(212) 737-2700",
      "website": "https://www.connorsandsullivan.com/?npcmp=dir:local:2228405:10022",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "NY Elder Law Group",
      "address": "401 Franklin Ave Ste 312, Garden City, NY 11530, USA",
      "phone": "(516) 246-8319",
      "website": "https://www.nyelderlawgroup.com/",
      "rating": 5,
      "reviews": 62,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Burner Prudenti Law, P.C.",
      "address": "450 7th Ave Ste 1904, New York, NY 10123, USA",
      "phone": "",
      "website": "https://burnerlaw.com/contact/new-york/?utm_source=google&utm_medium=organic&utm_campaign=gmb-website",
      "rating": 4.9,
      "reviews": 30,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Fern J. Finkel, Esq., Fern Finkel & Associates, PLLC",
      "address": "26 Court St #2500, Brooklyn, NY 11242, USA",
      "phone": "(347) 296-8200",
      "website": "http://www.ffelderlaw.com/",
      "rating": 5,
      "reviews": 26,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Lamson & Cutner, P.C.",
      "address": "2 W 45th St #1408, New York, NY 10036, USA",
      "phone": "(212) 447-8690",
      "website": "https://www.cutner.com/",
      "rating": 4.9,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Estate Planning & Elder Law Group",
      "address": "71-27 Myrtle Ave, Glendale, NY 11385, USA",
      "phone": "(718) 514-2066",
      "website": "http://www.aljlaw.com/",
      "rating": 4.9,
      "reviews": 152,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Trust and Estate Planning Law Office",
      "address": "310 E 2nd St Ste 9A, New York, NY 10009, USA",
      "phone": "(718) 333-2395",
      "website": "http://advanced-legal.com/trust-estate-planning-wills",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Miller & Miller Law Group PLLC",
      "address": "365 Bridge St #7pro, Brooklyn, NY 11201, USA",
      "phone": "(718) 875-2191",
      "website": "http://www.nycelderlawyers.com/",
      "rating": 4.9,
      "reviews": 86,
      "cats": [
        "legal"
      ]
    }
  ],
  "los-angeles-ca": [
    {
      "name": "Grab Bar Los Angeles",
      "address": "712 San Luis Rey Rd, Arcadia, CA 91007, USA",
      "phone": "(818) 939-9615",
      "website": "https://www.grabbarlosangeles.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "In Home Safely, Inc.",
      "address": "4840 Calle Alto Unit C, Camarillo, CA 93012, USA",
      "phone": "(323) 864-2089",
      "website": "https://inhomesafely.com/?utm_source=omg-gbp&utm_medium=webclick",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "A+ Bathroom & Kitchen Remodeling",
      "address": "1441 Huntington Dr #179, South Pasadena, CA 91030, USA",
      "phone": "(626) 208-9396",
      "website": "",
      "rating": 4.8,
      "reviews": 56,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "NuFinishPro of Los Angeles",
      "address": "8560 Sunset Blvd, West Hollywood, CA 90069, USA",
      "phone": "(323) 405-9654",
      "website": "https://www.nufinishpro.com/los-angeles/",
      "rating": 5,
      "reviews": 30,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Aqua Ease Walk-In Tubs",
      "address": "1539 E Grand Ave Ste 5, Pomona, CA 91766, USA",
      "phone": "(888) 609-7441",
      "website": "https://aquaeasetubs.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Walk In Tubs Pros",
      "address": "3278 W Slauson Ave, Los Angeles, CA 90043, USA",
      "phone": "(424) 245-7622",
      "website": "",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Payless Bath Makeover",
      "address": "3614 San Fernando Rd, Glendale, CA 91204, USA",
      "phone": "(888) 703-1982",
      "website": "https://paylessbathmakeover.com/payless-bathroom-makeovers-in-glendale/?utm_source=google&utm_medium=gmb&utm_campaign=gmb-leads",
      "rating": 4.8,
      "reviews": 310,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Walk In Tubs Advanced",
      "address": "563 W 2nd St, Los Angeles, CA 90012, USA",
      "phone": "(424) 279-7983",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Custom Care Walk In Tubs",
      "address": "468 N Camden Dr #200, Beverly Hills, CA 90210, USA",
      "phone": "(877) 977-7902",
      "website": "",
      "rating": 3.3,
      "reviews": 3,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "My Bathroom Remodeling Los Angeles",
      "address": "700 Flower St, Los Angeles, CA 90017, USA",
      "phone": "(213) 566-7696",
      "website": "https://mybathroomremodelinglosangeles.com/",
      "rating": 4.9,
      "reviews": 17,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Luxury Bath Technologies",
      "address": "28210 Ave Crocker Ste 307, Valencia, CA 91355, USA",
      "phone": "(800) 298-1705",
      "website": "https://www.luxurybathandwindow.com/",
      "rating": 4.5,
      "reviews": 40,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Tub N' Crete Coatings",
      "address": "3962 Seneca Ave, Los Angeles, CA 90039, USA",
      "phone": "(949) 775-0354",
      "website": "https://tubncretecoatings.com/",
      "rating": 5,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bathtub Reglazing Studio",
      "address": "720 Santa Monica Blvd, Los Angeles, CA 90025, USA",
      "phone": "(818) 441-8722",
      "website": "https://www.reglazingstudio.com/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "SoCal Stairlift - Echo Delta Inc.",
      "address": "2658 Griffith Park Blvd, Los Angeles, CA 90039, USA",
      "phone": "(323) 665-6665",
      "website": "http://www.southweststairlift.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "25020 Avenue Stanford Unit 110, Valencia, CA 91355, USA",
      "phone": "(310) 280-2069",
      "website": "https://www.lifewaymobility.com/los-angeles/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Los_Angeles",
      "rating": 4.9,
      "reviews": 514,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Call Before You Fall",
      "address": "5308 Derry Ave Ste A, Agoura Hills, CA 91301, USA",
      "phone": "(800) 829-1491",
      "website": "https://callbeforeyoufall.com/",
      "rating": 4.9,
      "reviews": 235,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Arrow Lift",
      "address": "28631 Canwood St Ste D1, Agoura Hills, CA 91301, USA",
      "phone": "(805) 399-2001",
      "website": "https://arrowlift.com/about/all-locations/los-angeles-ca/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.4,
      "reviews": 30,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Los Angeles Chair Stair Lifts",
      "address": "4152 Naomi Ave, Los Angeles, CA 90011, USA",
      "phone": "(818) 288-0282",
      "website": "http://www.los-angeles-chair-stair-lifts.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Integrated Mobility Stair lifts & Wheelchair Repairs",
      "address": "22114 Vermont Ave #102, Torrance, CA 90502, USA",
      "phone": "(424) 271-7328",
      "website": "https://www.integratedmobilitystairlifts.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "California Mobility Stairlifts",
      "address": "97 S Second St #1, San Jose, CA 95113, USA",
      "phone": "(866) 720-6275",
      "website": "https://californiamobility.com/service-areas/san-jose-stair-lifts/?utm_campaign=gmb_san_jose&utm_medium=organic&utm_source=google",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "LookStairLifts",
      "address": "4565 Industrial St, Simi Valley, CA 93063, USA",
      "phone": "(866) 782-4791",
      "website": "https://lookstairlifts.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Los Angeles",
      "address": "1619 W 134th St, Gardena, CA 90249, USA",
      "phone": "(213) 652-6137",
      "website": "https://amramp.com/los-angeles/?utm_source=gmb&utm_medium=yext",
      "rating": 4.7,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Wheelchair Ramps Los Angeles",
      "address": "5750 Woodman Ave #1, Van Nuys, CA 91401, USA",
      "phone": "(213) 474-8078",
      "website": "",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Accessible Construction",
      "address": "968 Rancheros Dr O, San Marcos, CA 92069, USA",
      "phone": "(310) 215-3332",
      "website": "http://www.accessibleconstruction.com/",
      "rating": 4.6,
      "reviews": 21,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Aero Mobility",
      "address": "11601 Wilshire Blvd #500, Los Angeles, CA 90025, USA",
      "phone": "(310) 763-4000",
      "website": "http://www.aeromobility.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "7720 Sepulveda Blvd, Van Nuys, CA 91405, USA",
      "phone": "(818) 321-6606",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-van-nuys-los-angeles-california?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=van_nuys",
      "rating": 4.1,
      "reviews": 55,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Aero Mobility",
      "address": "1001 N Weir Canyon Rd, Anaheim, CA 92807, USA",
      "phone": "(877) 325-4000",
      "website": "https://www.aeromobility.com/",
      "rating": 4.3,
      "reviews": 99,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Superior Mobility",
      "address": "1950 E 220th St #208, Carson, CA 90810, USA",
      "phone": "(310) 218-2040",
      "website": "http://www.superiormobility.com/",
      "rating": 4.8,
      "reviews": 57,
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
      "name": "Active Homes Certified Aging In Place Modifications",
      "address": "3435 Wilshire Blvd #144, Los Angeles, CA 90010, USA",
      "phone": "(855) 924-7663",
      "website": "http://aginginplacemods.com/",
      "rating": 1,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Better Place Design & Build",
      "address": "4655 Cass St, San Diego, CA 92109, USA",
      "phone": "(858) 355-9766",
      "website": "https://www.betterplacedesignbuild.com/",
      "rating": 4.6,
      "reviews": 33,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Golden Age Builders",
      "address": "8265 Sunset Blvd #205, West Hollywood, CA 90046, USA",
      "phone": "(323) 366-4749",
      "website": "https://newgoldenagebuilders.com/",
      "rating": 4.8,
      "reviews": 89,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AP Remodeling Inc.",
      "address": "5972 Washington Blvd, Culver City, CA 90232, USA",
      "phone": "(818) 748-8709",
      "website": "http://apremodelinginc.com/",
      "rating": 4.9,
      "reviews": 150,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Aging With Grace In-Home Care",
      "address": "4343 Crenshaw Blvd Ste 206, Los Angeles, CA 90008, USA",
      "phone": "(213) 434-2673",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Northvale Remodeling",
      "address": "247 N Larchmont Blvd, Los Angeles, CA 90004, USA",
      "phone": "(747) 330-2272",
      "website": "",
      "rating": 4.8,
      "reviews": 5,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Modern Home Remodeling Contractors of LA Near Los Angeles, CA",
      "address": "2851 S Bronson Ave, Los Angeles, CA 90018, USA",
      "phone": "(213) 772-0861",
      "website": "https://modernhomesla.shop/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Green Planet Remodeling",
      "address": "9595 Wilshire Blvd Ste 900-724, Beverly Hills, CA 90212, USA",
      "phone": "(800) 387-5917",
      "website": "https://greenplanetremodeling.com/",
      "rating": 5,
      "reviews": 34,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Miracle Home Health Care, Inc",
      "address": "5670 Wilshire Blvd #1600, Los Angeles, CA 90036, USA",
      "phone": "(323) 782-3883",
      "website": "https://www.miraclehomehealthcareinc.com/",
      "rating": 4.7,
      "reviews": 398,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Los Angeles Home Health Care Agency, Inc.",
      "address": "2741 S Robertson Blvd, Los Angeles, CA 90034, USA",
      "phone": "(310) 559-2290",
      "website": "http://www.losangeleshomehealth.net/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Luxe Homecare, Inc.",
      "address": "11726 San Vicente Blvd #240, Los Angeles, CA 90049, USA",
      "phone": "(310) 459-3535",
      "website": "https://luxehomecare.com/",
      "rating": 4.9,
      "reviews": 116,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "24 Hour Caregivers - Los Angeles Home Care Services",
      "address": "10801 National Blvd, Los Angeles, CA 90064, USA",
      "phone": "(866) 681-7778",
      "website": "https://www.24hourcaregivers.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-los-angeles",
      "rating": 5,
      "reviews": 44,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of Los Angeles",
      "address": "3660 Wilshire Blvd Ste 311, Los Angeles, CA 90010, USA",
      "phone": "(213) 519-6309",
      "website": "https://www.homeinstead.com/home-care/usa/ca/los-angeles-silver-lake-hollywood/488/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.7,
      "reviews": 39,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Danny's Home Health Care of Los Angeles",
      "address": "1539 Sawtelle Blvd Ste PH #22, Los Angeles, CA 90025, USA",
      "phone": "(424) 832-7450",
      "website": "https://dannyshomehealth.com/",
      "rating": 4.7,
      "reviews": 24,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Mom's Home Care",
      "address": "8600 W 3rd St #3, Los Angeles, CA 90048, USA",
      "phone": "(323) 244-4789",
      "website": "http://www.momshomecare.com/",
      "rating": 5,
      "reviews": 24,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "LA Care Provider Home Health Agency",
      "address": "11850 Wilshire Blvd #102, Los Angeles, CA 90025, USA",
      "phone": "(310) 478-8400",
      "website": "http://www.lacareprovider.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Oceanside Home Health Services, Inc",
      "address": "4322 Wilshire Blvd #208, Los Angeles, CA 90010, USA",
      "phone": "(323) 934-5050",
      "website": "http://www.oshhs.com/",
      "rating": 4.3,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Arosa Los Angeles",
      "address": "9696 Culver Blvd #108, Culver City, CA 90232, USA",
      "phone": "(323) 933-5880",
      "website": "https://arosacare.com/locations/los-angeles/",
      "rating": 4.9,
      "reviews": 89,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "CARE Homecare",
      "address": "1156 N Gardner St, West Hollywood, CA 90046, USA",
      "phone": "(323) 851-1422",
      "website": "https://carehomecare.com/?utm_source=gbp&utm_medium=organic",
      "rating": 5,
      "reviews": 36,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers Home Care",
      "address": "5478 Wilshire Blvd #218, Los Angeles, CA 90036, USA",
      "phone": "(323) 601-0365",
      "website": "https://www.comfortkeepers.com/offices/california/los-angeles/?utm_source=GMB&utm_medium=organic",
      "rating": 4.8,
      "reviews": 18,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "5601 W Slauson Ave Ste 255, Culver City, CA 90230, USA",
      "phone": "(213) 519-5743",
      "website": "https://www.homeinstead.com/home-care/usa/ca/culver-city-inglewood/778/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 64,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "401 Wilshire Blvd 12th Floor #60, Santa Monica, CA 90401, USA",
      "phone": "(310) 857-9377",
      "website": "https://www.visitingangels.com/santamonica/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Amada Senior Care",
      "address": "3415 S Sepulveda Blvd Ste 11, Los Angeles, CA 90034, USA",
      "phone": "(747) 262-3252",
      "website": "https://www.amadaseniorcare.com/los-angeles-central-senior-care/",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "The Elderly Gentleman",
      "address": "12912 McCune Ave, Los Angeles, CA 90066, USA",
      "phone": "(424) 222-1471",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "RideSenior Los Angeles",
      "address": "333 S Grand Ave Ste 3310, Los Angeles, CA 90071, USA",
      "phone": "(825) 343-8998",
      "website": "https://ridesenior.com/los-angeles",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Senior Center Transportation",
      "address": "1556 Central Ave, South El Monte, CA 91733, USA",
      "phone": "(626) 448-0131",
      "website": "",
      "rating": 4.7,
      "reviews": 47,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Ambiance Medical Transportation",
      "address": "4627 Beverly Blvd, Los Angeles, CA 90004, USA",
      "phone": "(818) 955-5757",
      "website": "https://ambiancemedicaltransport.com/",
      "rating": 4.8,
      "reviews": 106,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "El Monte Dial A Ride",
      "address": "3650 Rockwell Ave, El Monte, CA 91731, USA",
      "phone": "(626) 307-3224",
      "website": "https://www.ci.el-monte.ca.us/648/Dial-A-Ride",
      "rating": 4.2,
      "reviews": 12,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Good Health Kare Transportation",
      "address": "425 S Fairfax Ave #301, Los Angeles, CA 90036, USA",
      "phone": "(818) 528-7281",
      "website": "",
      "rating": 3,
      "reviews": 2,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "County of Los Angeles - Senior Citizen Center",
      "address": "12915 Jarvis Ave, Los Angeles, CA 90061, USA",
      "phone": "(310) 217-5650",
      "website": "https://ad.lacounty.gov/services/community-and-senior-centers/",
      "rating": 4.6,
      "reviews": 11,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Pan Pacific Senior Activity Center",
      "address": "141 S Gardner St, Los Angeles, CA 90036, USA",
      "phone": "(323) 935-5705",
      "website": "https://www.laparks.org/scc/pan-pacific-activity",
      "rating": 4.7,
      "reviews": 29,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Highland Park Adult Senior Citizen Center",
      "address": "6152 N Figueroa St, Los Angeles, CA 90042, USA",
      "phone": "(323) 256-6867",
      "website": "http://www.laparks.org/scc/highland-adult",
      "rating": 4.3,
      "reviews": 64,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Fairfax Senior Citizens Center",
      "address": "7929 Melrose Ave, Los Angeles, CA 90046, USA",
      "phone": "(323) 653-1824",
      "website": "https://recreation.parks.lacity.gov/scc/fairfax",
      "rating": 4.5,
      "reviews": 83,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Boyle Heights Senior Center",
      "address": "2839 E 3rd St, Los Angeles, CA 90033, USA",
      "phone": "(323) 264-5757",
      "website": "https://www.laparks.org/scc/boyle-heights",
      "rating": 4.5,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Montecito Heights Senior Citizen's Center",
      "address": "4545 Homer St, Los Angeles, CA 90031, USA",
      "phone": "(213) 485-8550",
      "website": "https://www.laparks.org/scc/montecito-heights",
      "rating": 4.9,
      "reviews": 18,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Watts Senior Citizens Center",
      "address": "1657 E Century Blvd, Los Angeles, CA 90002, USA",
      "phone": "(323) 564-9440",
      "website": "http://www.laparks.org/scc/watts",
      "rating": 4.5,
      "reviews": 29,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lincoln Heights Senior Center",
      "address": "2323 Workman St, Los Angeles, CA 90031, USA",
      "phone": "(323) 225-9339",
      "website": "https://www.laparks.org/scc/lincoln-heights",
      "rating": 4.4,
      "reviews": 69,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Ahmanson Senior Center (at EXPO Center)",
      "address": "3990 Bill Robertson Ln, Los Angeles, CA 90037, USA",
      "phone": "(213) 763-0118",
      "website": "https://www.laparks.org/scc/ahmanson",
      "rating": 4.5,
      "reviews": 27,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Westchester Senior Center",
      "address": "8740 Lincoln Blvd, Los Angeles, CA 90045, USA",
      "phone": "(310) 649-3319",
      "website": "https://www.laparks.org/scc/westchester",
      "rating": 4.4,
      "reviews": 37,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mayfair Adult Day Health Care",
      "address": "1627 W 20th St, Los Angeles, CA 90007, USA",
      "phone": "(323) 766-5363",
      "website": "",
      "rating": 4.2,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Beverly Adult Day Health Care Center",
      "address": "316 N Western Ave, Los Angeles, CA 90004, USA",
      "phone": "(323) 957-9777",
      "website": "",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Sinai Adult Day Health Care",
      "address": "1772- 1776 S Robertson Blvd, Los Angeles, CA 90035, USA",
      "phone": "(323) 933-6611",
      "website": "",
      "rating": 4.5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Opica Adult Day Care Center Inc",
      "address": "11759 Missouri Ave, Los Angeles, CA 90025, USA",
      "phone": "(310) 478-0226",
      "website": "http://www.opica.org/",
      "rating": 5,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Koreatown Adult Day Health Care Center",
      "address": "2140 W Olympic Blvd #100, Los Angeles, CA 90006, USA",
      "phone": "(213) 378-0101",
      "website": "https://healthy.kaiserpermanente.org/southern-california/facilities/koreatown-adult-day-health-care-center-429485",
      "rating": 4.3,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Central Adult Day Health Care Center",
      "address": "1825 Beverly Blvd, Los Angeles, CA 90057, USA",
      "phone": "(213) 413-6966",
      "website": "https://locator.lacounty.gov/dcfs/Location/3174892/central-adult-day-health-care-center",
      "rating": 1,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Silverlake Adult Daycare 실버레이크 양로보건센터",
      "address": "3339 W Temple St, Los Angeles, CA 90026, USA",
      "phone": "(213) 383-0050",
      "website": "https://healthy.kaiserpermanente.org/southern-california/facilities/silver-lake-adult-day-health-care-center-429764",
      "rating": 4.6,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Sunny Days Adult Day Health",
      "address": "3739 Overland Ave, Los Angeles, CA 90034, USA",
      "phone": "(310) 815-9115",
      "website": "https://sunnydaysadhc.com/about/",
      "rating": 4.6,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Daylight La Adult Day Health Care",
      "address": "2136 W Washington Blvd, Los Angeles, CA 90018, USA",
      "phone": "(323) 998-0890",
      "website": "",
      "rating": 4.9,
      "reviews": 8,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Buena Vida Adult Day Health Care",
      "address": "1617 Beverly Blvd, Los Angeles, CA 90026, USA",
      "phone": "(213) 250-9191",
      "website": "",
      "rating": 4.4,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elder Care Law - Medi Cal, Probate & Estate Planning Attorney Los Angeles, Long Beach, Orange County",
      "address": "475 Washington Blvd, Marina Del Rey, CA 90292, USA",
      "phone": "(866) 822-7211",
      "website": "https://www.eldercarelawca.com/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Cherepinskiy Law Firm, PC",
      "address": "1180 S Beverly Dr Unit 405, Los Angeles, CA 90035, USA",
      "phone": "(310) 694-0317",
      "website": "https://clawfirmpc.com/",
      "rating": 5,
      "reviews": 150,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Keystone Law Group, P.C.",
      "address": "11300 W Olympic Blvd #910, Los Angeles, CA 90064, USA",
      "phone": "(424) 408-1936",
      "website": "https://keystone-law.com/",
      "rating": 4.8,
      "reviews": 366,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Elder Law Services of California",
      "address": "1609 Cravens Ave, Torrance, CA 90505, USA",
      "phone": "(800) 403-6078",
      "website": "https://www.elderlawcalifornia.com/",
      "rating": 3.9,
      "reviews": 28,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Jerome S. Cohen, Attorney At Law",
      "address": "3731 Wilshire Blvd, Los Angeles, CA 90010, USA",
      "phone": "(213) 388-8188",
      "website": "http://www.jscbklaw.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "LA Elder Law",
      "address": "4560 Admiralty Way #254, Marina Del Rey, CA 90292, USA",
      "phone": "(310) 823-3943",
      "website": "https://laelderlaw.com/",
      "rating": 3.4,
      "reviews": 5,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Aliav Law",
      "address": "291 S La Cienega Blvd #310, Beverly Hills, CA 90211, USA",
      "phone": "(310) 800-2911",
      "website": "http://aliavlaw.com/",
      "rating": 4.9,
      "reviews": 82,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Perlmutter & Pourshalimi | Elder Abuse Attorneys",
      "address": "424 S Beverly Dr, Beverly Hills, CA 90212, USA",
      "phone": "(310) 295-2236",
      "website": "http://pandpfirm.com/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 74,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Evans Law Firm, Inc.",
      "address": "6701 Center Dr W, Los Angeles, CA 90045, USA",
      "phone": "(888) 503-8267",
      "website": "http://www.evanslaw.com/?utm_source=GMBlisting&utm_medium=organic",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Senior Justice Law Firm | Nursing Home Abuse Attorneys",
      "address": "360 E 2nd St, Los Angeles, CA 90012, USA",
      "phone": "(213) 297-5277",
      "website": "https://seniorjustice.com/los-angeles-nursing-home-abuse-attorney/?utm_source=google&utm_medium=gbp&utm_campaign=los_angeles",
      "rating": 4.8,
      "reviews": 21,
      "cats": [
        "legal"
      ]
    }
  ],
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

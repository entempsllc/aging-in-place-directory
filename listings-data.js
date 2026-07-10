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
  "chicago-il": [
    {
      "name": "Jacuzzi Bath Remodel of Chicagoland",
      "address": "570 E W N Frontage Rd, Bolingbrook, IL 60440, USA",
      "phone": "(708) 694-8365",
      "website": "https://jacuzzibathremodelchicagoland.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.7,
      "reviews": 303,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Ella's Bubbles Walk In Tubs",
      "address": "2101 S Carpenter St, Chicago, IL 60608, USA",
      "phone": "(800) 480-6850",
      "website": "https://ellasbubbles.com/",
      "rating": 4.9,
      "reviews": 412,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "ACA Chicago Bathroom Remodeling",
      "address": "3111 W Armitage Ave, Chicago, IL 60647, USA",
      "phone": "(312) 940-5473",
      "website": "https://acaremodelingchicago.com/",
      "rating": 4.8,
      "reviews": 25,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "PB Bathroom Remodeling",
      "address": "1724 W Belmont Ave Suite 109, Chicago, IL 60657, USA",
      "phone": "(312) 940-4956",
      "website": "https://pbbathroomremodeling.com/",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Dream Bath Solutions",
      "address": "1333 Burr Ridge Pkwy Ste 200, Burr Ridge, IL 60527, USA",
      "phone": "(630) 394-3311",
      "website": "https://dreambathsolutions.com/",
      "rating": 5,
      "reviews": 25,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Renuity Bath of Chicago",
      "address": "226 Gerry Dr, Wood Dale, IL 60191, USA",
      "phone": "(630) 332-0130",
      "website": "https://renuityhome.com/illinois/bathroom-remodeling-in-chicago-il/?utm_source=extnet&utm_medium=Yext&y_source=1_MTA4NjYxODY0Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.8,
      "reviews": 416,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Planet of Chicagoland",
      "address": "1051 N Main St C, Lombard, IL 60148, USA",
      "phone": "(630) 540-2023",
      "website": "https://www.bathplanetlocal.com/",
      "rating": 4.4,
      "reviews": 921,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "REFINISHING PROS - Bathtub And Tile",
      "address": "1529 N Lawndale Ave, Chicago, IL 60651, USA",
      "phone": "(773) 983-5884",
      "website": "http://chicagotubandtile.com/",
      "rating": 5,
      "reviews": 188,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Paul Bathroom Remodeling Contractors",
      "address": "980 N Michigan Ave #1440, Chicago, IL 60611, USA",
      "phone": "(773) 945-5407",
      "website": "http://acaremodelingcontractors.com/",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "Chicago Bathtub Refinishing I Art of Tub Reglazing",
      "address": "351 W Oak St apt. 106, Chicago, IL 60610, USA",
      "phone": "(708) 888-2093",
      "website": "http://bathtubrefinishing.org/",
      "rating": 5,
      "reviews": 94,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Stairlift for Vets",
      "address": "5814 W Grand Ave suite B, Chicago, IL 60639, USA",
      "phone": "(331) 808-5438",
      "website": "https://stairliftforvets.org/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "StarLift LLC",
      "address": "5814 W Grand Ave, Chicago, IL 60639, USA",
      "phone": "(331) 808-5438",
      "website": "https://www.star-lift.com/",
      "rating": 4.3,
      "reviews": 42,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Slip-Proof Safety, Inc.",
      "address": "7801 Roberts Rd, Bridgeview, IL 60455, USA",
      "phone": "(708) 839-4775",
      "website": "https://www.slipproofsafety.com/",
      "rating": 4.8,
      "reviews": 36,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Freedom Accessibility / Your Stair lift experts! Installation/ repairs, /sales",
      "address": "2175 E Lincoln Hwy, Lynwood, IL 60411, USA",
      "phone": "(312) 523-4471",
      "website": "https://www.facebook.com/share/1LvFqXmCKf/?mibextid=wwXIfr",
      "rating": 4.8,
      "reviews": 39,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Access Elevator, Inc. of Roselle",
      "address": "42 Congress Cir W, Roselle, IL 60172, USA",
      "phone": "(630) 616-6249",
      "website": "https://www.allaboutaccess.com/",
      "rating": 4.9,
      "reviews": 229,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "RampNOW",
      "address": "2272 Cornell Ave, Montgomery, IL 60538, USA",
      "phone": "(630) 892-7267",
      "website": "http://www.rampnow.com/",
      "rating": 4.9,
      "reviews": 397,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of South Chicago",
      "address": "11535 W 183rd St Suite 102, Orland Park, IL 60467, USA",
      "phone": "(708) 576-4903",
      "website": "https://www.101mobility.com/southchicago/?utm_source=GBP_SouthChicago&utm_medium=organic&y_source=1_MTAzMzU5Njk1Mi03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.8,
      "reviews": 90,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Southwest Chicago",
      "address": "16W251 S Frontage Rd Ste 26, Burr Ridge, IL 60527, USA",
      "phone": "",
      "website": "https://www.nextdayaccess.com/",
      "rating": 5,
      "reviews": 57,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Chair Lift Chicago",
      "address": "332 S Michigan Ave, Chicago, IL 60604, USA",
      "phone": "(872) 325-2239",
      "website": "https://chairliftchicago.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "210 W Campus Dr b, Arlington Heights, IL 60004, USA",
      "phone": "(847) 215-9490",
      "website": "https://www.lifewaymobility.com/chicagoland/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Chicago",
      "rating": 4.8,
      "reviews": 532,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access North Suburban Chicago",
      "address": "28835 N Herky Dr Ste 101, Lake Bluff, IL 60044, USA",
      "phone": "(224) 243-6739",
      "website": "https://www.nextdayaccess.com/north-chicago-il/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Naperville",
      "address": "1701 Quincy Ave Unit 12, Naperville, IL 60540, USA",
      "phone": "(630) 394-5521",
      "website": "https://www.101mobility.com/naperville/?utm_source=GBP_Naperville&utm_medium=organic&y_source=1_MTAzMzU5Njk3Ny03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 129,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Chicago",
      "address": "100 Bridge St #420, Wheaton, IL 60187, USA",
      "phone": "(888) 715-7598",
      "website": "https://amramp.com/chicago/",
      "rating": 4.2,
      "reviews": 5,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Chicagoland North",
      "address": "2531 Technology Dr Ste 305, Elgin, IL 60124, USA",
      "phone": "(847) 994-4969",
      "website": "https://www.101mobility.com/chicago/?utm_source=GBP_ChicagoNorth&utm_medium=organic&y_source=1_MTAzMzU5Njk3Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 123,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Independent Living Solutions",
      "address": "6327 N Pulaski Rd, Chicago, IL 60646, USA",
      "phone": "(773) 478-8450",
      "website": "http://www.ilsremodel.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AR REMODELING GROUP LLC",
      "address": "2628 N Harding Ave, Chicago, IL 60647, USA",
      "phone": "(312) 468-1805",
      "website": "https://www.arremodelinggroupllc.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.9,
      "reviews": 33,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Areté Renovators",
      "address": "3821 W Montrose Ave, Chicago, IL 60618, USA",
      "phone": "(773) 683-3033",
      "website": "https://areterenovators.com/?utm_source=chicago&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.9,
      "reviews": 164,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Icon Construction & Remodeling Inc",
      "address": "212 North Carpenter St# A1, A2, Chicago, IL 60607, USA",
      "phone": "(773) 203-8351",
      "website": "https://iconconstructionremodeling.com/",
      "rating": 5,
      "reviews": 111,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "GP Home Renovations, Inc",
      "address": "6520 W Higgins Ave, Chicago, IL 60656, USA",
      "phone": "(773) 458-5264",
      "website": "https://gphomerenovations.com/",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "My Handyman Express",
      "address": "5113 S Harper Ave Suite 2C, Chicago, IL 60615, USA",
      "phone": "(312) 313-3878",
      "website": "https://myhandymanchicago.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "A.L.S Remodeling LLC",
      "address": "6328 w Addison st 1212 Sunup Point Hempshire il 60140, 6328 W Addison St, Chicago, IL 60634, USA",
      "phone": "(224) 616-4640",
      "website": "http://www.alsremodelingchicago.com/",
      "rating": 4.8,
      "reviews": 38,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Chicago Department On Aging",
      "address": "6117 S Kedzie Ave, Chicago, IL 60629, USA",
      "phone": "(312) 747-0440",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior.html",
      "rating": 4.3,
      "reviews": 111,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AAC Kitchen and Bath remodeling",
      "address": "1010 Lake St, Oak Park, IL 60301, USA",
      "phone": "(773) 703-2170",
      "website": "https://aackitchenandbath.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Healthcare Plus Homemakers",
      "address": "3949 N Pulaski Rd, Chicago, IL 60641, USA",
      "phone": "(773) 669-3338",
      "website": "http://gohcp.com/",
      "rating": 4.8,
      "reviews": 170,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Healthcare Plus Caregivers",
      "address": "2518 W North Ave Unit A, Chicago, IL 60647, USA",
      "phone": "(773) 747-7977",
      "website": "https://www.hcpcaregivers.com/",
      "rating": 5,
      "reviews": 171,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Healthcare Plus Caregivers",
      "address": "2150 S Canalport Ave Suite 2B-12, Chicago, IL 60608, USA",
      "phone": "(312) 500-5010",
      "website": "https://www.hcpcaregivers.com/",
      "rating": 4.8,
      "reviews": 147,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "CHICAGO HOME HEALTHCARE S.C.",
      "address": "940 W Adams St, Chicago, IL 60607, USA",
      "phone": "(312) 421-6800",
      "website": "http://www.chicagohomehealthcare.com/",
      "rating": 3.2,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Healthcare Plus Caregivers",
      "address": "4648 W Diversey Ave, Chicago, IL 60639, USA",
      "phone": "(773) 596-9444",
      "website": "https://www.hcpcaregivers.com/",
      "rating": 4.9,
      "reviews": 674,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "@Home Healthcare",
      "address": "1715 E 55th St, Chicago, IL 60615, USA",
      "phone": "(773) 386-6607",
      "website": "http://www.athomehealthchicago.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Custom Home Care, LLC",
      "address": "2716 W Peterson Ave, Chicago, IL 60659, USA",
      "phone": "(773) 561-4663",
      "website": "https://customhomecare.net/?utm_source=GMB&utm_medium=organic",
      "rating": 4.9,
      "reviews": 252,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "101 W Grand Ave Ste 208, Chicago, IL 60654, USA",
      "phone": "(773) 775-4677",
      "website": "https://www.rightathome.net/chicago-metro/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1437",
      "rating": 4.9,
      "reviews": 62,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Abcor Home Health Inc - Chicago",
      "address": "868 N Milwaukee Ave, Chicago, IL 60642, USA",
      "phone": "(312) 724-6655",
      "website": "http://www.abcor.com/",
      "rating": 4.8,
      "reviews": 188,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Friendly Home Care",
      "address": "3427 N Milwaukee Ave, Chicago, IL 60641, USA",
      "phone": "(773) 545-7776",
      "website": "https://www.chicagoeuropeancaregivers.com/",
      "rating": 4.9,
      "reviews": 85,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "2249 W Irving Park Rd, Chicago, IL 60618, USA",
      "phone": "(312) 447-9300",
      "website": "https://www.visitingangels.com/chicagonorth/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 21,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "1426 W Fullerton Ave, Chicago, IL 60614, USA",
      "phone": "(312) 319-4282",
      "website": "https://www.seniorhelpers.com/il/chicago-near-north/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 5,
      "reviews": 80,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Illinois Senior Services, Inc. DBA AASRA HOME CARE",
      "address": "2749 W Devon Ave, Chicago, IL 60659, USA",
      "phone": "(773) 336-7632",
      "website": "http://www.illinoisseniorsservices.com/",
      "rating": 4.3,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers of Chicago, IL",
      "address": "1 E Superior St #210, Chicago, IL 60611, USA",
      "phone": "(312) 470-6070",
      "website": "https://www.comfortkeepers.com/offices/illinois/chicago/?utm_source=local&utm_medium=organic",
      "rating": 5,
      "reviews": 18,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home For Good Senior Care Inc",
      "address": "5765 N Lincoln Ave #27, Chicago, IL 60659, USA",
      "phone": "(773) 572-4875",
      "website": "http://www.homeforgoodcare.com/",
      "rating": 4.8,
      "reviews": 4,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "1165 N Clark St #700, Chicago, IL 60610, USA",
      "phone": "(773) 463-3500",
      "website": "https://www.homeinstead.com/home-care/usa/il/chicago/470/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.9,
      "reviews": 30,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors Chicago Metro",
      "address": "4750 N Sheridan Rd Ste 433, Chicago, IL 60640, USA",
      "phone": "(312) 526-3666",
      "website": "https://locations.seniorshelpingseniors.com/il/chicago/42.html",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Amada Senior Care",
      "address": "1030 W North Ave Ste 402, Chicago, IL 60642, USA",
      "phone": "(312) 971-9292",
      "website": "https://www.amadachicago.com/",
      "rating": 4.9,
      "reviews": 70,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Extended Care Medical Transportation",
      "address": "13341 SW Hwy, Orland Park, IL 60462, USA",
      "phone": "(708) 429-2082",
      "website": "http://www.extendedcaretransport.com/",
      "rating": 4.8,
      "reviews": 58,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Chicago Express Transportation",
      "address": "4325 Frontage Rd Ste 106, Oak Forest, IL 60452, USA",
      "phone": "",
      "website": "http://www.chicago-express.com/",
      "rating": 5,
      "reviews": 55,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Greater Chicago Transit",
      "address": "960 Rand Rd Ste 102, Des Plaines, IL 60016, USA",
      "phone": "(844) 943-7386",
      "website": "https://www.greaterchicagotransit.com/",
      "rating": 4.9,
      "reviews": 221,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "RideSenior Chicago",
      "address": "111 W Illinois St 5th floor, Chicago, IL 60654, USA",
      "phone": "(825) 343-8998",
      "website": "https://ridesenior.com/chicago/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Community Assisted Rides",
      "address": "150 S Ashland Ave, La Grange, IL 60525, USA",
      "phone": "(708) 354-9328",
      "website": "http://www.communityassistedrides.org/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Oak Park Township Senior Services Transportation",
      "address": "130 S Oak Park Ave, Oak Park, IL 60302, USA",
      "phone": "(708) 383-8060",
      "website": "https://oakparktownship.org/senior-services/",
      "rating": 2.3,
      "reviews": 6,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Direct Transit LLC",
      "address": "5113 S Harper Ave Suite 2C, Chicago, IL 60615, USA",
      "phone": "(888) 651-6944",
      "website": "https://chicagodirecttransit.com/",
      "rating": 4.7,
      "reviews": 12,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Dream Care Rides | Non-Emergency Medical Transportation 🚐❤️‍🩹♿",
      "address": "20000 Governors Dr Ste 103H, Olympia Fields, IL 60461, USA",
      "phone": "(708) 505-6994",
      "website": "https://dreamcarerides.com/",
      "rating": 5,
      "reviews": 73,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Lyons Senior Transportation",
      "address": "6404 Joliet Rd, Countryside, IL 60525, USA",
      "phone": "(708) 354-0292",
      "website": "http://www.lyonstownshipil.gov/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Golden Circle Of Friends Senior Care LLC",
      "address": "1755 Park St suite#200, Naperville, IL 60563, USA",
      "phone": "(630) 453-1420",
      "website": "http://www.snlhomecare.com/",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Northeast (Levy) Senior Center",
      "address": "2019 W Lawrence Ave, Chicago, IL 60625, USA",
      "phone": "(312) 744-0784",
      "website": "http://www.cityofchicago.org/city/en/depts/fss/provdrs/senior/svcs/regional_senior_centers.html",
      "rating": 4.1,
      "reviews": 169,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Regional Senior Center",
      "address": "2102 W Ogden Ave, Chicago, IL 60612, USA",
      "phone": "(312) 746-5300",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior/svcs/regional_senior_centers.html",
      "rating": 4.3,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Portage Park Senior Center",
      "address": "4001 N Long Ave, Chicago, IL 60641, USA",
      "phone": "(312) 744-9022",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior/svcs/satellite_seniorcenters.html",
      "rating": 4.4,
      "reviews": 40,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Senior Center",
      "address": "49 E 95th St, Chicago, IL 60628, USA",
      "phone": "",
      "website": "",
      "rating": 4.3,
      "reviews": 18,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northwest (Copernicus) Senior Center",
      "address": "3160 N Milwaukee Ave, Chicago, IL 60618, USA",
      "phone": "(312) 744-6681",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior/svcs/regional_senior_centers.html",
      "rating": 4,
      "reviews": 77,
      "cats": [
        "social"
      ]
    },
    {
      "name": "SouthEast Atlas Regional Senior Center",
      "address": "1767 E 79th St, Chicago, IL 60649, USA",
      "phone": "(312) 747-0189",
      "website": "http://www.79thstreetseniors.org/",
      "rating": 4.4,
      "reviews": 149,
      "cats": [
        "social"
      ]
    },
    {
      "name": "City Of Chicago Senior Center",
      "address": "2715 N Cicero Ave, Chicago, IL 60639, USA",
      "phone": "(312) 744-3350",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior/svcs/regional_senior_centers.html",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Southwest Senior Center",
      "address": "6117 S Kedzie Ave, Chicago, IL 60639, USA",
      "phone": "(312) 747-0440",
      "website": "https://www.chicago.gov/city/en/depts/fss/provdrs/senior/svcs/regional_senior_centers.html",
      "rating": 4.8,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "North Center Senior Satellite Center",
      "address": "4040 N Oakley Ave, Chicago, IL 60618, USA",
      "phone": "(312) 744-4015",
      "website": "http://www.cityofchicago.org/city/en/depts/fss/provdrs/senior/svcs/satellite_seniorcenters.html",
      "rating": 4.4,
      "reviews": 101,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Norwood Park Senior Center",
      "address": "5801 N Natoma Ave, Chicago, IL 60631, USA",
      "phone": "(773) 775-6071",
      "website": "http://www.npseniorcenter.org/",
      "rating": 4.4,
      "reviews": 60,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Chicago Commons - Adult Day Services and Headquarters",
      "address": "515 E 50th St, Chicago, IL 60615, USA",
      "phone": "(773) 373-5055",
      "website": "https://www.chicagocommons.org/",
      "rating": 4.2,
      "reviews": 70,
      "cats": [
        "social"
      ]
    },
    {
      "name": "St Ailbe Adult Day Services",
      "address": "9249 S Avalon Ave, Chicago, IL 60619, USA",
      "phone": "(773) 721-0177",
      "website": "",
      "rating": 4.7,
      "reviews": 26,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Renaissance Adult Day Services Inc",
      "address": "7920 S Greenwood Ave, Chicago, IL 60619, USA",
      "phone": "(773) 723-9670",
      "website": "",
      "rating": 4.1,
      "reviews": 9,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Destiny Adult Day Center",
      "address": "1112 N 9th Ave, Melrose Park, IL 60160, USA",
      "phone": "(708) 838-0060",
      "website": "",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Among Friends Adult Day Care",
      "address": "760 Holbrook Rd, Glenwood, IL 60425, USA",
      "phone": "(708) 755-2345",
      "website": "https://afadc.com/",
      "rating": 4.1,
      "reviews": 32,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mildred's Place Adult Daycare NFP",
      "address": "2950 W Fillmore St, Chicago, IL 60612, USA",
      "phone": "",
      "website": "https://mildred-s-place-adult-daycare-nfp.com/?utm_campaign=gmb",
      "rating": 4.3,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "CJE Seniorlife-Adult Day Services",
      "address": "1015 W Howard St, Evanston, IL 60202, USA",
      "phone": "(773) 508-1000",
      "website": "https://cje.net/supportiveservices/adultdayservices/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Seals & Steingard Adult Day Care",
      "address": "408 S Oak Park Ave Ste 5th floor, Oak Park, IL 60302, USA",
      "phone": "(224) 491-1160",
      "website": "https://www.oakparkadultdaycare.com/",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "New St Paul Adult Day Services",
      "address": "2113 W Marquette Rd, Chicago, IL 60636, USA",
      "phone": "(773) 544-8312",
      "website": "http://www.newstpaulcogic.com/contact.html",
      "rating": 4.6,
      "reviews": 20,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Active Day of Homewood",
      "address": "1818 Ridge Rd #1, Homewood, IL 60430, USA",
      "phone": "(708) 957-4365",
      "website": "http://www.activeday.com/",
      "rating": 4.8,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "WhiteheadFink Elder Law, LLC",
      "address": "6232 N Pulaski Rd Ste 404, Chicago, IL 60646, USA",
      "phone": "(773) 906-5752",
      "website": "http://www.whiteheadfink.com/",
      "rating": 4.8,
      "reviews": 43,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Peck Ritchey, LLC",
      "address": "321 S Plymouth Ct 6th Fl, Chicago, IL 60604, USA",
      "phone": "(872) 266-7756",
      "website": "https://www.peckritchey.com/?utm_source=gmb&utm_medium=organic&utm_campaign=chicago",
      "rating": 4.6,
      "reviews": 114,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Dutton Casey & Mesoloras, PC",
      "address": "17 N State St Suite 890, Chicago, IL 60602, USA",
      "phone": "(312) 899-0950",
      "website": "http://www.duttonelderlaw.com/",
      "rating": 4.9,
      "reviews": 55,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Otte & Czajkowska, LLC",
      "address": "6035 N Northwest Hwy #201, Chicago, IL 60631, USA",
      "phone": "(773) 631-7100",
      "website": "https://www.oclawyergroup.com/?utm_source=google&utm_medium=Chicago_gmb&utm_campaign=gmb_website_button",
      "rating": 4.6,
      "reviews": 27,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Joseph W. Pieper, Attorney at Law, LLC",
      "address": "205 W Randolph St #1310, Chicago, IL 60606, USA",
      "phone": "(312) 263-2233",
      "website": "http://pieperlawoffice.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Elder Law & Estate Planning Attorneys of Illinois, LLC",
      "address": "85 W Algonquin Rd Ste 405, Arlington Heights, IL 60005, USA",
      "phone": "(847) 253-7500",
      "website": "https://jcslaw.com/",
      "rating": 4.7,
      "reviews": 38,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Sexauer Law, P.C.",
      "address": "100 N LaSalle St Ste 2200, Chicago, IL 60602, USA",
      "phone": "(312) 300-4743",
      "website": "https://www.sexauerlaw.com/",
      "rating": 4.6,
      "reviews": 34,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Edelson Law, LLC",
      "address": "8401 N Crawford Ave #104, Skokie, IL 60076, USA",
      "phone": "(847) 410-9131",
      "website": "https://edelsonlawllc.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Steve M. Levin, JD - Nursing Home Abuse Attorney",
      "address": "325 N La Salle Dr, Chicago, IL 60654, USA",
      "phone": "(312) 332-2872",
      "website": "https://www.levinperconti.com/nursing-home-abuse/chicago-lawyer/?utm_source=google&utm_medium=organic&utm_campaign=gbp-steve",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Center for Disability & Elder Law",
      "address": "205 W Randolph St Suite 1610, Chicago, IL 60606, USA",
      "phone": "(312) 376-1880",
      "website": "http://www.cdelaw.org/",
      "rating": 2.9,
      "reviews": 11,
      "cats": [
        "legal"
      ]
    }
  ],
  "houston-tx": [
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
      "name": "TubNotch Renovations",
      "address": "800 Town and Country Blvd, Houston, TX 77024, USA",
      "phone": "(713) 590-4477",
      "website": "https://www.tubnotch.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb-listing",
      "rating": 4.8,
      "reviews": 92,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Leaf Home Bath",
      "address": "9001 Jameel Rd Ste 160, Houston, TX 77040, USA",
      "phone": "(877) 566-0956",
      "website": "https://www.leafhomebath.com/?y_source=1_MjA2NTM0MTQzOS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.8,
      "reviews": 423,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Safely In Tubs & Showers",
      "address": "17350 TX-249 #220, Houston, TX 77064, USA",
      "phone": "(281) 730-6396",
      "website": "http://safelyintubs.com/",
      "rating": 5,
      "reviews": 64,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Mr Bathroom Remodeling Houston",
      "address": "1301 McKinney St, Houston, TX 77010, USA",
      "phone": "(281) 270-2130",
      "website": "https://mrbathroomremodelinghouston.com/",
      "rating": 5,
      "reviews": 45,
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
      "name": "Re-Bath",
      "address": "3413 North Sam Houston Pkwy W #200, Houston, TX 77086, USA",
      "phone": "(281) 506-0079",
      "website": "https://www.rebath.com/location/houston-texas/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 1570,
      "cats": [
        "tubs"
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
      "name": "West Shore Home",
      "address": "10551 Ella Blvd #200, Houston, TX 77038, USA",
      "phone": "(713) 929-2795",
      "website": "https://westshorehome.com/locations/houston-tx/?utm_source=gbp&utm_medium=organic&utm_branch=houston",
      "rating": 4.9,
      "reviews": 1032,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of Houston",
      "address": "1401 Greengrass Dr, Houston, TX 77008, USA",
      "phone": "(281) 595-8566",
      "website": "http://fivestarbathsolutions.com/houston-tx",
      "rating": 4.9,
      "reviews": 42,
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
      "name": "Delta Accessibility | Mobility & Residential Elevators",
      "address": "800 Town and Country Blvd Ste 300-351, Houston, TX 77024, USA",
      "phone": "(832) 904-7341",
      "website": "https://www.deltaaccessibility.com/",
      "rating": 5,
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
      "name": "Marchal Stevenson Elevator Co., Inc.",
      "address": "11050 W Little York Rd Bldg E, Houston, TX 77041, USA",
      "phone": "(713) 961-1940",
      "website": "http://www.marchalstevenson.com/",
      "rating": 4.9,
      "reviews": 436,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Central & South Houston",
      "address": "1417 Upland Dr, Houston, TX 77043, USA",
      "phone": "(713) 338-9277",
      "website": "https://www.nextdayaccess.com/central-south-houston/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 34,
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
      "name": "E Care Medical Supplies",
      "address": "4306 Fulton St, Houston, TX 77009, USA",
      "phone": "(713) 695-4939",
      "website": "https://ecaremedicalsupplies.com/",
      "rating": 4.8,
      "reviews": 492,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Heal Well Medical Supply",
      "address": "8719 Stella Link Rd, Houston, TX 77025, USA",
      "phone": "(281) 645-6568",
      "website": "https://www.healwellmedicalsupply.com/",
      "rating": 4.6,
      "reviews": 60,
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
      "name": "Great Aging in Place",
      "address": "2929 Allen Pkwy STE. 200, Houston, TX 77019, USA",
      "phone": "(713) 425-3076",
      "website": "http://greataginginplace.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "All About Home Care",
      "address": "427 W 20th St #601, Houston, TX 77008, USA",
      "phone": "(713) 802-1211",
      "website": "http://www.aahcare.com/",
      "rating": 4.8,
      "reviews": 89,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Primetime Home Health Services Inc",
      "address": "11602 Burdine St A, Houston, TX 77035, USA",
      "phone": "(713) 977-7721",
      "website": "http://www.pthhs.net/",
      "rating": 4.8,
      "reviews": 108,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Heart Home Health Care Agency",
      "address": "9103 Scott St, Houston, TX 77051, USA",
      "phone": "(713) 654-8825",
      "website": "https://hearthomehealth.com/",
      "rating": 3.7,
      "reviews": 23,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Dignified Nursing Home Health Care Agency, LLC",
      "address": "12000 Richmond Ave #360, Houston, TX 77082, USA",
      "phone": "(281) 920-3100",
      "website": "",
      "rating": 4.9,
      "reviews": 29,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "DediCare Home Health, LLC",
      "address": "5600 NW Central Dr, Houston, TX 77092, USA",
      "phone": "(346) 701-7915",
      "website": "http://dedicarehomehealth.com/",
      "rating": 5,
      "reviews": 42,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lilly's Home Care",
      "address": "2925 Richmond Ave, Houston, TX 77098, USA",
      "phone": "(713) 262-5812",
      "website": "https://lillyhomecare.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Care Home Health LLC",
      "address": "16676 Northchase Dr Ste 420, Houston, TX 77060, USA",
      "phone": "(832) 286-4161",
      "website": "https://alwayscarehh.com/",
      "rating": 4.9,
      "reviews": 40,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Impact Home Care and Staffing",
      "address": "7135 W Tidwell Rd M105, Houston, TX 77092, USA",
      "phone": "(346) 240-2607",
      "website": "https://www.impactcare4u.com/",
      "rating": 5,
      "reviews": 25,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Bellaire Home Health Care",
      "address": "International Trade Center, 11110 Bellaire Blvd Ste 110, Houston, TX 77072, USA",
      "phone": "(281) 564-9959",
      "website": "http://www.bellairehomehealthcare.com/",
      "rating": 5,
      "reviews": 76,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Central Home Health Services of Tx",
      "address": "720 N Post Oak Rd #140, Houston, TX 77024, USA",
      "phone": "(713) 461-5696",
      "website": "http://centraloftexas.com/",
      "rating": 4.4,
      "reviews": 32,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors Houston",
      "address": "5005 Woodway Dr Ste 225, Houston, TX 77056, USA",
      "phone": "(832) 830-6940",
      "website": "https://seniorcarefortbend.com/",
      "rating": 4.9,
      "reviews": 25,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead - Houston, Bellaire, Missouri City & Sugar Land",
      "address": "8303 Southwest Fwy Suite 705, Houston, TX 77074, USA",
      "phone": "(346) 537-1945",
      "website": "https://www.homeinstead.com/home-care/usa/tx/houston/541/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.9,
      "reviews": 86,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "1919 N Loop W Ste 443, Houston, TX 77008, USA",
      "phone": "(832) 210-2485",
      "website": "https://www.seniorhelpers.com/tx/houston-central/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 5,
      "reviews": 29,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead - West and Southwest Houston",
      "address": "11201 Richmond Ave Ste A110, Houston, TX 77082, USA",
      "phone": "(346) 701-5196",
      "website": "https://www.homeinstead.com/home-care/usa/tx/houston/252/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.9,
      "reviews": 85,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "4660 Beechnut St Ste 243, Houston, TX 77096, USA",
      "phone": "(346) 577-8357",
      "website": "https://www.homeinstead.com/home-care/usa/tx/houston/582/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.9,
      "reviews": 55,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "TheKey - Senior Home Care",
      "address": "1900 Saint James Place Ste 215, Houston, TX 77056, USA",
      "phone": "(713) 528-8076",
      "website": "https://thekey.com/locations/texas/houston?utm_source=search&utm_medium=Yext",
      "rating": 4.9,
      "reviews": 57,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "24 Greenway Plz Ste 1800, Houston, TX 77046, USA",
      "phone": "(713) 864-7388",
      "website": "https://www.visitingangels.com/houstonmetro/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in Houston Metro",
      "address": "5555 W Loop S #435, Bellaire, TX 77401, USA",
      "phone": "(713) 485-5000",
      "website": "https://alwaysbestcare.com/houstonmetro/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "At Your Side Home Care",
      "address": "2400 Augusta Dr Ste 260, Houston, TX 77057, USA",
      "phone": "(832) 271-1600",
      "website": "http://www.houston-homecare.com/?utm_source=gbp",
      "rating": 4.7,
      "reviews": 126,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care North Houston",
      "address": "14614 Falling Creek Dr #208, Houston, TX 77068, USA",
      "phone": "(832) 705-8911",
      "website": "https://www.visitingangels.com/northwesthouston/home-care-harris-county-texas?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 39,
      "cats": [
        "homecare"
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
      "name": "Medbridge Transport",
      "address": "15100 Lee Rd Ste 103, Humble, TX 77396, USA",
      "phone": "(713) 766-5385",
      "website": "https://medbridgetransport.com/?utm_campaign=gmb",
      "rating": 4.5,
      "reviews": 105,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Janna Hand-Formerly Hand to Help Senior Transport",
      "address": "28918 Sedgefield St, Spring, TX 77386, USA",
      "phone": "(224) 659-8853",
      "website": "",
      "rating": 5,
      "reviews": 11,
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
      "name": "Can I Get a Ride?",
      "address": "2600 S Loop W #595J, Houston, TX 77054, USA",
      "phone": "(832) 392-8749",
      "website": "https://canigetaride.org/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "BD Express LLC, Non-Emergency Transportation Service, Houston and greater Houston areas, TX",
      "address": "17350 TX-249 #220, Houston, TX 77064, USA",
      "phone": "(832) 535-6589",
      "website": "https://bdexpressusa.com/",
      "rating": 4.9,
      "reviews": 40,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Hardy Senior Center",
      "address": "11901 W Hardy Rd, Houston, TX 77076, USA",
      "phone": "(713) 274-1022",
      "website": "",
      "rating": 4.4,
      "reviews": 119,
      "cats": [
        "social"
      ]
    },
    {
      "name": "West University Senior Services",
      "address": "6104 Auden St, Houston, TX 77005, USA",
      "phone": "(713) 662-5895",
      "website": "https://www.westutx.gov/220/Senior-Services",
      "rating": 4.5,
      "reviews": 43,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Senior Social Center",
      "address": "9347 Richmond Ave, Houston, TX 77063, USA",
      "phone": "(713) 782-1995",
      "website": "",
      "rating": 3.5,
      "reviews": 11,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Harris County Senior Education Center",
      "address": "Houston, TX 77084, USA",
      "phone": "(713) 274-3250",
      "website": "https://cp4.harriscountytx.gov/Community-Centers/Community-Center/thomas-a-glazier-senior-education-center",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Jim & JoAnn Fonteno Senior Education Center",
      "address": "6600 Bissonnet St, Houston, TX 77074, USA",
      "phone": "(713) 274-3305",
      "website": "https://cp4.harriscountytx.gov/fonteno",
      "rating": 4.7,
      "reviews": 68,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Senior Community Center",
      "address": "7850 Parkwood Cir Dr Ste A-1, Houston, TX 77036, USA",
      "phone": "",
      "website": "",
      "rating": 4.6,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Alexander Deussen Park Seniors' Center",
      "address": "12303 Sonnier St, Houston, TX 77044, USA",
      "phone": "(832) 927-2100",
      "website": "https://www.hcp1.net/AlexanderDeussenSeniorCenter",
      "rating": 4.7,
      "reviews": 137,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Pinnacle Senior Center",
      "address": "5525 Hobby Rd Bldg C, Houston, TX 77053, USA",
      "phone": "(832) 471-2760",
      "website": "https://www.fortbendcountytx.gov/government/departments/health-and-human-services/pinnacle-senior-center",
      "rating": 4.8,
      "reviews": 126,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Heritage Hall Senior Citizens",
      "address": "1025 Oates Rd, Houston, TX 77029, USA",
      "phone": "(713) 675-4487",
      "website": "http://www.jacintocity-tx.gov/?/departments/index/15",
      "rating": 4.5,
      "reviews": 49,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Neighborhood Centers",
      "address": "3814 Market St, Houston, TX 77020, USA",
      "phone": "(713) 238-2237",
      "website": "",
      "rating": 4.4,
      "reviews": 28,
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
      "name": "Northline Adult Daycare Center",
      "address": "3910 North Fwy, Houston, TX 77022, USA",
      "phone": "(713) 699-1580",
      "website": "",
      "rating": 4.3,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "A BETTER QUALITY OF LIFE ADULT DAYCARE",
      "address": "239 W Tidwell Rd, Houston, TX 77022, USA",
      "phone": "(832) 692-6766",
      "website": "",
      "rating": 4.5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Good Old Days Adult Daycare",
      "address": "5339 Easthampton Dr, Houston, TX 77039, USA",
      "phone": "(281) 227-0404",
      "website": "",
      "rating": 4.1,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lac Hong Adult Day Center",
      "address": "6628 Wilcrest Dr, Houston, TX 77072, USA",
      "phone": "(281) 776-9955",
      "website": "https://www.lachonghouston.com/",
      "rating": 4.2,
      "reviews": 28,
      "cats": [
        "social"
      ]
    },
    {
      "name": "South Texas Adult Day Activity",
      "address": "6011 Telephone Rd, Houston, TX 77087, USA",
      "phone": "(713) 645-4900",
      "website": "",
      "rating": 2.9,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Odyssey Adult Day Care",
      "address": "2115 Cypress Landing Rd, Houston, TX 77090, USA",
      "phone": "(281) 787-1429",
      "website": "https://odysseyadc.com/",
      "rating": 3.9,
      "reviews": 43,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Hannah's Place Adult Day Center",
      "address": "Almeda Plaza Dr, Houston, TX 77045, USA",
      "phone": "(346) 269-4493",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Sunnyside Adult Daycare",
      "address": "8423 Almeda Rd # T, Houston, TX 77054, USA",
      "phone": "(713) 748-7370",
      "website": "",
      "rating": 3.4,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Nixon Adult Day Center",
      "address": "3719 Lynnfield St, Houston, TX 77016, USA",
      "phone": "(713) 633-4700",
      "website": "https://www.nixonhomecare.org/",
      "rating": 4.5,
      "reviews": 54,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Law Office of Christina Lesher, P.C.",
      "address": "5615 Kirby Dr #412, Houston, TX 77005, USA",
      "phone": "(713) 529-5900",
      "website": "http://www.lawlesher.com/?utm_source=gmb&utm_medium=local&utm_campaign=local+pack",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Holland Elder Law Firm",
      "address": "2211 Norfolk St #1105, Houston, TX 77098, USA",
      "phone": "(713) 970-1300",
      "website": "http://houstoneldercareattorneys.com/",
      "rating": 4.9,
      "reviews": 48,
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
    },
    {
      "name": "Your Legacy Legal Care®",
      "address": "1150 Clear Lake City Blvd #100, Houston, TX 77062, USA",
      "phone": "(713) 322-3894",
      "website": "https://www.yourlegacylegalcare.com/?utm_source=google&utm_medium=gbp&utm_campaign=houston",
      "rating": 4.8,
      "reviews": 253,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "McCulloch & Miller, PLLC",
      "address": "440 Louisiana St Ste 1635, Houston, TX 77002, USA",
      "phone": "(713) 333-8900",
      "website": "https://www.mcmfirm.com/?utm_source=google&utm_medium=local",
      "rating": 4.2,
      "reviews": 10,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "McCulloch & Miller, PLLC - Galleria",
      "address": "1900 Saint James Place Ste 425, Houston, TX 77056, USA",
      "phone": "(713) 547-5902",
      "website": "https://www.mcmfirm.com/?utm_source=google&utm_medium=local",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Geoffrey C. Sansom, P.C.",
      "address": "2905 Sackett St Suite P, Houston, TX 77098, USA",
      "phone": "(713) 238-7767",
      "website": "http://attysansom.com/",
      "rating": 4.6,
      "reviews": 8,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Schwartz Law Firm, PLLC",
      "address": "3730 Kirby Dr Suite #1200, Houston, TX 77098, USA",
      "phone": "(713) 385-0269",
      "website": "http://www.schwartzlawhouston.com/",
      "rating": 4.3,
      "reviews": 6,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Mendel Law Firm, L.P.",
      "address": "1155 Dairy Ashford Rd #104, Houston, TX 77079, USA",
      "phone": "(281) 759-3213",
      "website": "http://www.mendellawfirm.com/",
      "rating": 4.9,
      "reviews": 89,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Hayes & Wilson, PLLC",
      "address": "1235 N Loop W Fwy Suite 907, Houston, TX 77008, USA",
      "phone": "(713) 880-3939",
      "website": "https://www.hayeswilsonlaw.com/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    }
  ],
  "phoenix-az": [
    {
      "name": "Arizona Grab Bar",
      "address": "11536 W Bighorn Ct, Surprise, AZ 85378, USA",
      "phone": "(602) 456-9411",
      "website": "https://www.arizonagrabbar.com/",
      "rating": 5,
      "reviews": 339,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Scottsdale",
      "address": "7678 E Greenway Rd Ste 101, Scottsdale, AZ 85260, USA",
      "phone": "(602) 632-0877",
      "website": "https://www.mrhandyman.com/scottsdale/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.9,
      "reviews": 490,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Jacuzzi Bath Remodel of Arizona",
      "address": "1510 E Riverview Dr, Phoenix, AZ 85034, USA",
      "phone": "(928) 460-8115",
      "website": "https://azbaths.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_phoenix",
      "rating": 4.6,
      "reviews": 1616,
      "cats": [
        "bathroom",
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "3333 S 7th St, Phoenix, AZ 85040, USA",
      "phone": "(602) 610-5610",
      "website": "https://westshorehome.com/locations/phoenix-az/?utm_source=gbp&utm_medium=organic&utm_branch=phoenix",
      "rating": 4.9,
      "reviews": 1060,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Saftey Rails of Arizona",
      "address": "1427 E Elwood St, Phoenix, AZ 85040, USA",
      "phone": "(602) 232-1900",
      "website": "https://www.oshasafetyrails.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "MEASURAbilities Home Safety- Fall Prevention Specialists / MEASURAbilities",
      "address": "8147 E Evans Rd #8, Scottsdale, AZ 85260, USA",
      "phone": "(480) 214-9725",
      "website": "https://measurabilities.com/",
      "rating": 4.9,
      "reviews": 33,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Driver Industrial Safety",
      "address": "2115 W Mountain View Rd, Phoenix, AZ 85021, USA",
      "phone": "",
      "website": "https://driverindustrialsafety.com/",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "IE Grab Bars-Grab Bar Installers",
      "address": "134 Pueblo Rd, Corona, CA 92882, USA",
      "phone": "(714) 658-9137",
      "website": "https://iegrabbars.com/",
      "rating": 5,
      "reviews": 422,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Aqua Therapy Walk In Tubs & Showers Phoenix",
      "address": "310 W Hatcher Rd, Phoenix, AZ 85021, USA",
      "phone": "(602) 607-0404",
      "website": "https://aquatherapytubs.com/",
      "rating": 5,
      "reviews": 161,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "USA Showers",
      "address": "1215 S Park Ln #4, Tempe, AZ 85281, USA",
      "phone": "(866) 706-7789",
      "website": "https://usashowers.com/service-areas/arizona/?utm_campaign=gmb_AZ&utm_medium=organic&utm_source=google",
      "rating": 4.9,
      "reviews": 943,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Renuity",
      "address": "2215 W Lone Cactus Dr Ste 21, Phoenix, AZ 85027, USA",
      "phone": "(928) 437-6982",
      "website": "https://renuityhome.com/arizona/bathroom-remodeling-in-phoenix-az/?utm_source=gmb&utm_medium=Yext&y_source=1_NjY1MDE5MDktNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 4.7,
      "reviews": 321,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Paradise Walk In Tubs",
      "address": "7402 W Detroit St Ste 100, Chandler, AZ 85226, USA",
      "phone": "(866) 229-5659",
      "website": "",
      "rating": 4.7,
      "reviews": 13,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "AZ BathMasters",
      "address": "18206 N 19th Ave #2b, Phoenix, AZ 85023, USA",
      "phone": "(480) 709-6442",
      "website": "https://azbathmasters.com/",
      "rating": 4.3,
      "reviews": 21,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "AZ Tub Guy",
      "address": "5237 W Montebello Ave C5, Glendale, AZ 85301, USA",
      "phone": "(480) 561-1188",
      "website": "https://aztubguy.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Independent Home",
      "address": "1838 W Parkside Ln Ste 115, Phoenix, AZ 85027, USA",
      "phone": "(888) 239-1058",
      "website": "http://www.independenthome.com/",
      "rating": 4.9,
      "reviews": 702,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "16879 N 75th Ave #101, Peoria, AZ 85382, USA",
      "phone": "(480) 400-9025",
      "website": "https://www.rebath.com/location/peoria/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 1524,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "101 Mobility of Phoenix",
      "address": "9830 S 51st St # B105, Phoenix, AZ 85044, USA",
      "phone": "(480) 531-7292",
      "website": "https://www.101mobility.com/phoenix/?utm_source=GBP_Phoenix&utm_medium=organic&y_source=1_MTAzMzU5Njk2My03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 182,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "3707 E Southern Ave, Mesa, AZ 85206, USA",
      "phone": "(480) 939-5359",
      "website": "https://www.lifewaymobility.com/phoenix/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Phoenix",
      "rating": 4.8,
      "reviews": 33,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "3616 W Thomas Rd Ste 7-8, Phoenix, AZ 85017, USA",
      "phone": "(623) 473-7832",
      "website": "https://www.leafhome.com/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_Nzg4NzYxNTctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "CoachLift",
      "address": "1815 W 1st Ave #134, Mesa, AZ 85202, USA",
      "phone": "(877) 595-8204",
      "website": "https://www.coachlift.com/",
      "rating": 4.9,
      "reviews": 22,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Power Mobility & Lifts",
      "address": "3225 N Arizona Ave Ste 5, Chandler, AZ 85225, USA",
      "phone": "(480) 471-8592",
      "website": "https://powerandmobility.com/",
      "rating": 4.7,
      "reviews": 61,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Serene Mobility & Lifts",
      "address": "16671 N 84th Ave #150, Peoria, AZ 85382, USA",
      "phone": "(623) 580-8500",
      "website": "http://serenemobility.com/",
      "rating": 4.4,
      "reviews": 17,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "StairBuddy - Residential Elev. Serv. - Stairlifts | Home Elevators",
      "address": "No Showroom - We come to you, 1615 E Georgia Ave Unit 238, Phoenix, AZ 85016, USA",
      "phone": "(602) 653-1378",
      "website": "http://www.stairbuddy.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Celtic Elevator, LLC",
      "address": "23025 N 15th Ave Ste 102, Phoenix, AZ 85027, USA",
      "phone": "(602) 369-2573",
      "website": "https://celticelevator.com/?utm_source=googlebusinessprofile&utm_medium=search&utm_content=phoenix&utm_campaign=celocalsearch",
      "rating": 5,
      "reviews": 91,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "AAA Mobility Specialist LLC",
      "address": "23015 N 15th Ave Ste 103, Phoenix, AZ 85027, USA",
      "phone": "(602) 618-5158",
      "website": "https://aaamobilityspecialist.com/",
      "rating": 4.4,
      "reviews": 91,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "885 E Warner Rd #103, Gilbert, AZ 85296, USA",
      "phone": "(480) 428-1889",
      "website": "https://mobilitycity.com/phoenix-az/?utm_campaign=gmb",
      "rating": 4.7,
      "reviews": 141,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "United Access",
      "address": "23606 N 19th Ave Ste 16, Phoenix, AZ 85085, USA",
      "phone": "(623) 879-0800",
      "website": "https://www.unitedaccess.com/us/en/locations/phoenix-az.html",
      "rating": 4.7,
      "reviews": 93,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Vantage Mobility",
      "address": "5202 S 28th Pl, Phoenix, AZ 85040, USA",
      "phone": "(855) 864-8267",
      "website": "https://www.vantagemobility.com/",
      "rating": 3.2,
      "reviews": 58,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "EZmobility Direct",
      "address": "1070 E Lone Cactus Dr, Phoenix, AZ 85024, USA",
      "phone": "(866) 719-1666",
      "website": "https://ezmobilitydirect.com/",
      "rating": 4.4,
      "reviews": 103,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Access Medical Wheelchairs",
      "address": "513 W Thomas Rd, Phoenix, AZ 85013, USA",
      "phone": "(800) 921-4508",
      "website": "https://www.accessmedicalrehab.com/",
      "rating": 5,
      "reviews": 2,
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
      "name": "Phoenix Home Remodeling",
      "address": "6700 W Chicago St #1, Chandler, AZ 85226, USA",
      "phone": "(623) 243-8583",
      "website": "https://phxhomeremodeling.com/?utm_source=google&utm_medium=organic&utm_content=gmb-map&utm_campaign=gmb-map",
      "rating": 5,
      "reviews": 132,
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
      "name": "Area Agency on Aging, Region One",
      "address": "1366 E Thomas Rd #108, Phoenix, AZ 85014, USA",
      "phone": "(602) 264-4357",
      "website": "http://www.aaaphx.org/",
      "rating": 3.5,
      "reviews": 52,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "East Valley Remodeling Inc",
      "address": "3617 W Morelos St, Chandler, AZ 85226, USA",
      "phone": "(480) 313-6655",
      "website": "http://www.remodeleastvalley.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Ace Handyman Services Scottsdale PV",
      "address": "10210 N 32nd St Ste B4, Phoenix, AZ 85028, USA",
      "phone": "(602) 607-3623",
      "website": "https://www.acehandymanservices.com/offices/scottsdale-pv",
      "rating": 4.9,
      "reviews": 943,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Valley Remodeling",
      "address": "2550 N Thunderbird Cir #115, Mesa, AZ 85215, USA",
      "phone": "(602) 316-9187",
      "website": "https://www.valleyremodelingaz.com/?utm_source=google-gmb-maps&utm_medium=gmb-website-button&utm_campaign=locl.io&utm_content=28ab1742-078d-499e-9205-cee52c060cce",
      "rating": 4.9,
      "reviews": 258,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Handled Home Care - Phoenix",
      "address": "3101 N Central Ave Ste 183 #4461, Phoenix, AZ 85012, USA",
      "phone": "(602) 456-5998",
      "website": "https://www.handledcare.com/phoenix-home-care",
      "rating": 5,
      "reviews": 40,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Phoenician Home Care",
      "address": "20860 N Tatum Blvd #300, Phoenix, AZ 85050, USA",
      "phone": "(480) 714-9883",
      "website": "https://phoenicianhomecare.com/",
      "rating": 5,
      "reviews": 55,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Arizona Home Care and Infusion",
      "address": "1626 S Edward Dr, Tempe, AZ 85281, USA",
      "phone": "(602) 252-5000",
      "website": "https://www.azhomecare.com/",
      "rating": 4.8,
      "reviews": 396,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "United Home Health Care Agency",
      "address": "2828 N Central Ave Ste 806, Phoenix, AZ 85004, USA",
      "phone": "(480) 300-5655",
      "website": "",
      "rating": 4.6,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caring Hearts Home Care Services",
      "address": "9305 W Thomas Rd #555, Phoenix, AZ 85037, USA",
      "phone": "(623) 440-4047",
      "website": "https://www.caringheartsservices.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=2952944694774188552",
      "rating": 5,
      "reviews": 58,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sun Valley Home Healthcare",
      "address": "19820 N 7th St #230, Phoenix, AZ 85024, USA",
      "phone": "(602) 584-6150",
      "website": "http://www.sunvalleyhhc.com/",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Firstat Home Health Services",
      "address": "7330 N 16th St #C117, Phoenix, AZ 85020, USA",
      "phone": "(602) 279-0000",
      "website": "http://www.firstat.com/",
      "rating": 4.8,
      "reviews": 45,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FreedomCare ALTCS - Paid Family Care",
      "address": "300 W Clarendon Ave Ste 317, Phoenix, AZ 85013, USA",
      "phone": "(480) 741-2048",
      "website": "https://www.freedomcare.com/",
      "rating": 4.9,
      "reviews": 258,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Care Resources",
      "address": "7600 N 16th St #200, Phoenix, AZ 85020, USA",
      "phone": "(602) 443-4700",
      "website": "https://homecareresources.net/",
      "rating": 4.8,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "BrightStar Care",
      "address": "4515 S McClintock Dr #203, Tempe, AZ 85282, USA",
      "phone": "(480) 897-1166",
      "website": "https://www.brightstarcare.com/locations/phoenix-tempe/",
      "rating": 4.9,
      "reviews": 151,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of Phoenix",
      "address": "1430 E Missouri Ave Ste 200, Phoenix, AZ 85014, USA",
      "phone": "(602) 858-1703",
      "website": "https://www.homeinstead.com/home-care/usa/az/phoenix/808/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 25,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of Scottsdale",
      "address": "6991 E Camelback Rd suite d 300, Scottsdale, AZ 85251, USA",
      "phone": "(480) 896-6864",
      "website": "https://www.homeinstead.com/home-care/usa/az/scottsdale/816/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 69,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Granny NANNIES Home Care",
      "address": "4041 S McClintock Dr Ste 304, Tempe, AZ 85282, USA",
      "phone": "(602) 438-2273",
      "website": "https://grannynannies.com/phoenix",
      "rating": 4.9,
      "reviews": 30,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care South Phoenix",
      "address": "16815 S Desert Foothills Pkwy Ste 123, Phoenix, AZ 85048, USA",
      "phone": "(480) 886-1165",
      "website": "https://www.visitingangels.com/southphoenix/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caregiving Services",
      "address": "10000 N 31st Ave C312, Phoenix, AZ 85051, USA",
      "phone": "(602) 920-9433",
      "website": "http://www.bestcgservices.com/",
      "rating": 5,
      "reviews": 26,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "3509 E Shea Blvd #117j, Phoenix, AZ 85028, USA",
      "phone": "(602) 726-2189",
      "website": "https://www.visitingangels.com/northeastphoenix/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "14231 N 7th St Ste 7B, Phoenix, AZ 85022, USA",
      "phone": "(602) 900-9824",
      "website": "https://www.homeinstead.com/home-care/usa/az/phoenix/837/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 89,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Quality Transport Services of Arizona",
      "address": "2730 W Agua Fria Fwy Ste 102, Phoenix, AZ 85027, USA",
      "phone": "(602) 371-1000",
      "website": "http://www.qtsaz.com/",
      "rating": 3.9,
      "reviews": 67,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "RideSenior Phoenix",
      "address": "4539 N 22nd St Ste. N, Phoenix, AZ 85016, USA",
      "phone": "(825) 343-8998",
      "website": "https://ridesenior.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Seniors Only Services",
      "address": "44233 W Wade Dr, Maricopa, AZ 85138, USA",
      "phone": "",
      "website": "http://seniorsonlyservices.org/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Wanda.Care",
      "address": "3401 E Elwood St, Phoenix, AZ 85040, USA",
      "phone": "(855) 735-1222",
      "website": "http://wanda.care/",
      "rating": 3.5,
      "reviews": 11,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Devonshire Senior Center",
      "address": "2802 E Devonshire Ave, Phoenix, AZ 85016, USA",
      "phone": "(602) 256-3130",
      "website": "https://www.phoenix.gov/parks/recreation-and-community-centers/centers-d/devonshire",
      "rating": 4.5,
      "reviews": 179,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mc Dowell Place Senior Center",
      "address": "1845 E McDowell Rd, Phoenix, AZ 85006, USA",
      "phone": "(602) 262-1842",
      "website": "https://www.phoenix.gov/humanservices/programs/older/senior-centers",
      "rating": 4.5,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Phoenix Sunnyslope Senior Center",
      "address": "802 E Vogel Ave, Phoenix, AZ 85020, USA",
      "phone": "(602) 262-7572",
      "website": "https://www.phoenix.gov/parks/recreation-and-community-centers/centers-s/sunnyslope",
      "rating": 4.6,
      "reviews": 58,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Shadow Mountain Senior Center",
      "address": "3546 E Sweetwater Ave, Phoenix, AZ 85032, USA",
      "phone": "(602) 534-2303",
      "website": "",
      "rating": 4.5,
      "reviews": 86,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Phoenix Deer Valley Senior Center",
      "address": "2001 W Wahalla Ln, Phoenix, AZ 85027, USA",
      "phone": "(602) 495-3714",
      "website": "https://www.phoenix.gov/humanservices/programs/older/senior-centers",
      "rating": 4.5,
      "reviews": 42,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Phoenix Desert West Senior Center",
      "address": "6501 W Virginia Ave, Phoenix, AZ 85035, USA",
      "phone": "(602) 495-3711",
      "website": "",
      "rating": 3.9,
      "reviews": 19,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Helen Drake Senior Center",
      "address": "7600 N 27th Ave, Phoenix, AZ 85051, USA",
      "phone": "(602) 262-4949",
      "website": "http://helen-center-phoenix.keeq.io/",
      "rating": 4.5,
      "reviews": 105,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Adam Diaz Senior Center",
      "address": "4115 W Thomas Rd, Phoenix, AZ 85019, USA",
      "phone": "(602) 262-1609",
      "website": "https://www.phoenix.gov/humanservices/programs/older/senior-centers",
      "rating": 4.4,
      "reviews": 60,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Phoenix Paradise Valley Senior",
      "address": "17402 N 40th St, Phoenix, AZ 85032, USA",
      "phone": "(602) 495-3785",
      "website": "http://phoenix.gov/",
      "rating": 4.6,
      "reviews": 42,
      "cats": [
        "social"
      ]
    },
    {
      "name": "South Mountain Senior Center",
      "address": "212 E Alta Vista Rd, Phoenix, AZ 85042, USA",
      "phone": "(602) 262-4093",
      "website": "http://www.phoenix.gov/humanservicessite/Documents/smnwsltr.pdf",
      "rating": 3.8,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Vintage Silver Center",
      "address": "3909 N 16th St, Phoenix, AZ 85016, USA",
      "phone": "(602) 492-2170",
      "website": "https://vintagesilvercenter.org/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "social"
      ]
    },
    {
      "name": "HonorHealth Desert Mission",
      "address": "303 E Eva St, Phoenix, AZ 85020, USA",
      "phone": "(602) 870-6374",
      "website": "http://www.desertmission.com/programs/adult-day-health-care",
      "rating": 4.3,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "careLOFT (Careloft Day Program)",
      "address": "21031 N Cave Creek Rd Ste F3, Phoenix, AZ 85024, USA",
      "phone": "(480) 261-9182",
      "website": "https://careloft.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "One Special Place",
      "address": "14602 N Cave Creek Rd C, Phoenix, AZ 85022, USA",
      "phone": "(602) 992-2533",
      "website": "",
      "rating": 4.8,
      "reviews": 11,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Accel Adult Services",
      "address": "3310 W Cheryl Dr, Phoenix, AZ 85051, USA",
      "phone": "(602) 997-2331",
      "website": "https://www.accel.org/programs/",
      "rating": 4.7,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Foundation For Senior Living",
      "address": "3620 N 4th Ave, Phoenix, AZ 85013, USA",
      "phone": "(602) 297-1840",
      "website": "http://www.fsl.org/",
      "rating": 4.3,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "ArizonAbility Adult Day Program at UCP of Central Arizona",
      "address": "1802 W Parkside Ln Bldg C, Phoenix, AZ 85027, USA",
      "phone": "(602) 313-8884",
      "website": "https://ucpofcentralaz.org/arizonability-adult-day-programs/?utm_source=google&utm_medium=organic&utm_campaign=gbp-arizonability&utm_content=website-button",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Peoria Adult Day Program",
      "address": "8133 W Cactus Rd, Peoria, AZ 85381, USA",
      "phone": "(623) 979-7126",
      "website": "",
      "rating": 4,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Diane And Bruce Halle Adult Day Health Services",
      "address": "16143 N 67th Ave, Glendale, AZ 85306, USA",
      "phone": "(602) 532-2983",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mary's Place Memory Care",
      "address": "14601 N Del Webb Blvd, Sun City, AZ 85351, USA",
      "phone": "(623) 815-1031",
      "website": "http://www.benevilla.org/marys-place/",
      "rating": 4.4,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Elder Law of Arizona - Charlotte C. Johnson",
      "address": "2020 S McClintock Dr #107, Tempe, AZ 85282, USA",
      "phone": "(602) 358-8606",
      "website": "http://www.elderlawofaz.com/",
      "rating": 5,
      "reviews": 23,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Emily R. Taylor, Attorney PLLC",
      "address": "1747 E Morten Ave Ste 105, Phoenix, AZ 85020, USA",
      "phone": "(480) 699-3145",
      "website": "https://emilytaylorlaw.com/",
      "rating": 5,
      "reviews": 150,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bivens & Associates, PLLC",
      "address": "8283 Hayden Rd #195, Scottsdale, AZ 85258, USA",
      "phone": "(480) 922-1010",
      "website": "http://www.bivenslaw.com/",
      "rating": 4.8,
      "reviews": 64,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Offices of Paula Hannah, PLC",
      "address": "4742 N 24th St Suite 300, Phoenix, AZ 85016, USA",
      "phone": "(602) 922-4010",
      "website": "https://www.paulahannahlaw.com/?utm_source=Google+My+Business&utm_medium=GMB+profile&utm_campaign=GMB-Website",
      "rating": 5,
      "reviews": 144,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Marsha Goodman",
      "address": "3411 N 5th Ave #307, Phoenix, AZ 85013, USA",
      "phone": "(602) 710-2209",
      "website": "https://www.specificlawfirm.com/",
      "rating": 4.1,
      "reviews": 18,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Berk Law Group, PC",
      "address": "14220 N Northsight Blvd #135, Scottsdale, AZ 85260, USA",
      "phone": "(480) 907-0078",
      "website": "http://berklawgroup.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.9,
      "reviews": 88,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Dayes Law Firm",
      "address": "3101 N Central Ave #1300, Phoenix, AZ 85012, USA",
      "phone": "(602) 786-5356",
      "website": "https://dayeslawfirm.com/?utm_source=GBP&utm_medium=GBP&utm_campaign=GBP_Phoenix&utm_id=GBP_Phoenix",
      "rating": 4.5,
      "reviews": 219,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Lincoln & Lauer, PLLC",
      "address": "3514 E Indian School Rd, Phoenix, AZ 85018, USA",
      "phone": "(602) 955-9555",
      "website": "http://www.lincolnandlauer.com/",
      "rating": 4.9,
      "reviews": 10,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Office of Jared Russell Causey",
      "address": "11811 N Tatum Blvd Unit 3031, Phoenix, AZ 85028, USA",
      "phone": "(602) 529-8049",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "JDR LAW PLLC",
      "address": "13951 N Scottsdale Rd #131, Scottsdale, AZ 85254, USA",
      "phone": "(602) 877-8780",
      "website": "https://www.jdrlawaz.com/",
      "rating": 4.6,
      "reviews": 10,
      "cats": [
        "legal"
      ]
    }
  ],
  "philadelphia-pa": [
    {
      "name": "YR Kitchen & Bath",
      "address": "1551 Washington Ave #2B, Philadelphia, PA 19146, USA",
      "phone": "(215) 545-9188",
      "website": "http://www.yrkitchenbath.com/",
      "rating": 4.7,
      "reviews": 47,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Chester County",
      "address": "81 Lancaster Ave Suite 306, Malvern, PA 19355, USA",
      "phone": "(484) 272-2272",
      "website": "https://www.mrhandymanchestercounty.com/",
      "rating": 4.8,
      "reviews": 562,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath4All",
      "address": "712 S 12th St #312, Philadelphia, PA 19147, USA",
      "phone": "(201) 688-0271",
      "website": "http://www.bath4all.com/",
      "rating": 5,
      "reviews": 66,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Rittenhouse Hardware",
      "address": "2001 Pine St, Philadelphia, PA 19103, USA",
      "phone": "(215) 735-6311",
      "website": "https://rittenhousehw.com/",
      "rating": 4.9,
      "reviews": 516,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Newtown and Yardley",
      "address": "54 Friends Ln Ste 114, Newtown, PA 18940, USA",
      "phone": "(215) 315-7171",
      "website": "https://www.mrhandymannewtown.com/",
      "rating": 4.9,
      "reviews": 151,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "18 Campus Blvd, Newtown Square, PA 19073, USA",
      "phone": "(215) 302-3420",
      "website": "https://www.lifewaymobility.com/philadelphia/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Philadelphia",
      "rating": 4.9,
      "reviews": 197,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "The Home Depot",
      "address": "1651 S Christopher Columbus Blvd, Philadelphia, PA 19148, USA",
      "phone": "(215) 218-0600",
      "website": "https://www.homedepot.com/l/South-Philadelphia/PA/Philadelphia/19148/4101?emt=MSGoogleMaps",
      "rating": 4,
      "reviews": 2620,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Fairmount Hardware",
      "address": "2011 Fairmount Ave, Philadelphia, PA 19130, USA",
      "phone": "(215) 765-5829",
      "website": "http://www.acehardware.com/store-details/15977?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=15977",
      "rating": 4.5,
      "reviews": 668,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "3rd St. Hardware Ace",
      "address": "153 N 3rd St, Philadelphia, PA 19106, USA",
      "phone": "(267) 541-2110",
      "website": "http://www.3rdstreethardware.com/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=17348",
      "rating": 4.6,
      "reviews": 173,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Showcase Remodels",
      "address": "2558 Grant Ave Ste B, Philadelphia, PA 19114, USA",
      "phone": "(267) 209-8811",
      "website": "https://showcaseremodels.com/philadelphia",
      "rating": 5,
      "reviews": 52,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "2430 Boulevard of the Generals, Norristown, PA 19403, USA",
      "phone": "(844) 915-1086",
      "website": "https://www.bath-fitter.com/consultation?source=15045&phone=1-844-915-1086&location=Philadelphia,%20PA",
      "rating": 4.7,
      "reviews": 577,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Calm Water Bath",
      "address": "1931 Olney Ave Ste 600, Cherry Hill Township, NJ 08003, USA",
      "phone": "(609) 931-4425",
      "website": "https://www.calmwaterbath.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_cherry_hill_nj",
      "rating": 5,
      "reviews": 44,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Philly Kitchen & Bath",
      "address": "1713 Annin St, Philadelphia, PA 19146, USA",
      "phone": "(267) 754-1818",
      "website": "https://phillykitchenandbathllc.com/",
      "rating": 4.9,
      "reviews": 55,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "A1 Reglaze",
      "address": "3450 Salmon St #305, Philadelphia, PA 19134, USA",
      "phone": "(267) 667-4170",
      "website": "https://www.a1reglaze.com/",
      "rating": 4.7,
      "reviews": 204,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DAB HANDS TUB & TILE REGLAZING, LLC",
      "address": "13109 Bustleton Ave, Philadelphia, PA 19116, USA",
      "phone": "(215) 459-4177",
      "website": "http://dabhandstub.com/",
      "rating": 4.8,
      "reviews": 22,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Premier Home Pros",
      "address": "7203 Browning Rd, Pennsauken, NJ 08109, USA",
      "phone": "(855) 209-7818",
      "website": "https://www.premier-homepros.com/",
      "rating": 4.5,
      "reviews": 295,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "215Mercury Kitchen & Bath Remodeling",
      "address": "1256 Gordon Rd Ste 101, Jenkintown, PA 19046, USA",
      "phone": "(215) 637-2879",
      "website": "https://215mercury.com/",
      "rating": 4.9,
      "reviews": 163,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Shahab Remodeling",
      "address": "727 Claire Rd, Philadelphia, PA 19128, USA",
      "phone": "(646) 462-9213",
      "website": "https://www.shahabremodeling.com/",
      "rating": 4.9,
      "reviews": 143,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "E J Stairlifts & Medical Supply",
      "address": "2100 Byberry Rd SUITE 202, Philadelphia, PA 19116, USA",
      "phone": "(215) 942-9263",
      "website": "https://www.ejmedical.com/",
      "rating": 5,
      "reviews": 182,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Greater Philadelphia",
      "address": "3370 Progress Dr Ste A, Bensalem, PA 19020, USA",
      "phone": "(215) 782-6527",
      "website": "https://www.101mobility.com/greater-philadelphia/?utm_source=GBP_Philadelphia&utm_medium=organic&y_source=1_MTAzMzU5Njk2Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 219,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "STI Mobility LLC",
      "address": "9004 Cloverly Rd, Philadelphia, PA 19136, USA",
      "phone": "(267) 210-8499",
      "website": "http://www.softnetcity.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Freedom Stairlifts",
      "address": "1319 Wellington St, Philadelphia, PA 19111, USA",
      "phone": "(215) 974-0042",
      "website": "https://freedomstairlift.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stairlift For Vets",
      "address": "1610 S 12th St, Philadelphia, PA 19148, USA",
      "phone": "(814) 500-5438",
      "website": "https://stairliftforvets.org/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stair Ride Company",
      "address": "819 Nina Way, Warminster, PA 18974, USA",
      "phone": "(215) 442-1531",
      "website": "https://stairrideco.com/",
      "rating": 4.5,
      "reviews": 59,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stannah Stairlifts Inc",
      "address": "4726 Blakiston St, Philadelphia, PA 19136, USA",
      "phone": "(215) 335-7940",
      "website": "https://www.stannah.com/en-us/dealers/interstate-lift",
      "rating": 4.8,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Stairlift Medics",
      "address": "300 E Godfrey Ave Ste 309, Philadelphia, PA 19120, USA",
      "phone": "(301) 717-6152",
      "website": "https://www.stairliftmedics.com/",
      "rating": 4.3,
      "reviews": 6,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "PA Stair Lifts Inc",
      "address": "2727 Philmont Ave #310, Huntingdon Valley, PA 19006, USA",
      "phone": "(215) 914-0800",
      "website": "http://www.pastairlifts.com/",
      "rating": 3.2,
      "reviews": 18,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Philadelphia & Delaware",
      "address": "630 Parkway Dr, Broomall, PA 19008, USA",
      "phone": "(484) 562-4302",
      "website": "https://amramp.com/philadelphia-delaware/?utm_source=gmb&utm_medium=yext",
      "rating": 4.9,
      "reviews": 109,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "GreenLight Mobility Greater Philadelphia",
      "address": "321 Morris Rd, Fort Washington, PA 19034, USA",
      "phone": "(215) 273-6399",
      "website": "https://greaterphillynw.greenlightmobility.com/",
      "rating": 5,
      "reviews": 22,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "EZ Living Concepts, LLC",
      "address": "2947 Dutton Mill Rd, Aston Township, PA 19014, USA",
      "phone": "(610) 583-9000",
      "website": "https://ezlivingconcepts.com/",
      "rating": 4.7,
      "reviews": 36,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Easwe Mobility LLC",
      "address": "1916 Welsh Rd ste 6, Philadelphia, PA 19115, USA",
      "phone": "(888) 468-0788",
      "website": "https://easwe.com/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Liberty Wheels",
      "address": "112 N 8th St #600, Philadelphia, PA 19107, USA",
      "phone": "(267) 765-1530",
      "website": "http://libertywheels.net/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Philadelphia West & Delaware County, PA",
      "address": "501 Abbott Dr, Broomall, PA 19008, USA",
      "phone": "(610) 553-2625",
      "website": "https://www.nextdayaccess.com/west-philadelphia-pa?utm_campaign=gmb",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Almeida Home Remodeling LLC",
      "address": "839 Glenview St, Philadelphia, PA 19111, USA",
      "phone": "(267) 265-5293",
      "website": "https://www.almeidahomeremodelingllc.com/",
      "rating": 4.9,
      "reviews": 35,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Mr. Contractor",
      "address": "2634 Frankford Ave, Philadelphia, PA 19125, USA",
      "phone": "(215) 423-5525",
      "website": "https://www.mrcontractorinc.com/",
      "rating": 4.7,
      "reviews": 504,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "dRemodeling Design-Build",
      "address": "7709 Ridge Ave, Philadelphia, PA 19128, USA",
      "phone": "(215) 848-4444",
      "website": "https://www.dremodeling.com/",
      "rating": 4.8,
      "reviews": 143,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AmeriBest Home Care",
      "address": "990 Spring Garden St Ste 201 (2nd Floor, Philadelphia, PA 19123, USA",
      "phone": "(215) 925-3313",
      "website": "https://www.ameribesthomecare.com/locations/philadelphia-pa/",
      "rating": 4.7,
      "reviews": 527,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Victory Home Care Agency",
      "address": "4946 N Broad St 1st Floor, Philadelphia, PA 19141, USA",
      "phone": "(215) 695-5877",
      "website": "https://victoryhomecarepa.com/?utm_source=google&utm_medium=organic&utm_campaign=seolocale",
      "rating": 4.8,
      "reviews": 84,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "At Peace Home Care Agency In Philadelphia",
      "address": "First Floor / Storefront, 1826 Ridge Ave, Philadelphia, PA 19130, USA",
      "phone": "(484) 468-1492",
      "website": "https://www.atpeacehealth.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Health Care Agencies",
      "address": "7770 Dungan Rd Unit 126, Philadelphia, PA 19111, USA",
      "phone": "(267) 521-0432",
      "website": "https://foxchasewc.com/",
      "rating": 5,
      "reviews": 27,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Care Home Care Services",
      "address": "2001 Market St #2500, Philadelphia, PA 19103, USA",
      "phone": "(484) 200-5204",
      "website": "http://www.visitingcareservice.com/",
      "rating": 4.9,
      "reviews": 51,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Pristine Home Care",
      "address": "5924 N Broad St, Philadelphia, PA 19141, USA",
      "phone": "(215) 621-7431",
      "website": "http://www.pristinehcs.com/",
      "rating": 5,
      "reviews": 508,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Miracles Home Care",
      "address": "2748 Hellerman St, Philadelphia, PA 19149, USA",
      "phone": "(267) 961-5801",
      "website": "http://www.miracleshc.com/",
      "rating": 5,
      "reviews": 191,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "All American Home Care",
      "address": "3231 N 2nd St, Philadelphia, PA 19140, USA",
      "phone": "(215) 494-9902",
      "website": "https://myallamericancare.com/service-area/philadelphia-pa/?utm_source=GMB&utm_medium=Profile&utm_campaign=Philadelphia-PA",
      "rating": 4.7,
      "reviews": 847,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "365 Health Services, LLC",
      "address": "325 Chestnut St #1005, Philadelphia, PA 19106, USA",
      "phone": "(215) 309-5654",
      "website": "https://365healthservices.com/philadelphia-pa/",
      "rating": 4.9,
      "reviews": 832,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Prestige Home Care Agency",
      "address": "10890 Bustleton Ave #211, Philadelphia, PA 19116, USA",
      "phone": "(215) 677-3299",
      "website": "https://www.prestigehca.com/",
      "rating": 4.9,
      "reviews": 127,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "1628 John F Kennedy Blvd #1900, Philadelphia, PA 19103, USA",
      "phone": "(215) 974-6012",
      "website": "https://www.homeinstead.com/home-care/usa/pa/philadelphia/517/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.6,
      "reviews": 48,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Philadelphia",
      "address": "3675 Market St, Philadelphia, PA 19104, USA",
      "phone": "(610) 924-9663",
      "website": "https://www.visitingangels.com/philadelphia/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors NW Philadelphia",
      "address": "40 W Evergreen Ave Ste 101, Philadelphia, PA 19118, USA",
      "phone": "(267) 267-4860",
      "website": "https://shsphilanw.com/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sharing Love Home Care LLC",
      "address": "229 W Lehigh Ave Ste 201-FL2, Philadelphia, PA 19133, USA",
      "phone": "(215) 914-6917",
      "website": "http://www.sharinglovehomecare.com/",
      "rating": 4.9,
      "reviews": 87,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Care of Philadelphia",
      "address": "7148 Frankford Ave, Philadelphia, PA 19135, USA",
      "phone": "(215) 941-7370",
      "website": "https://homecareofphila.com/",
      "rating": 4.6,
      "reviews": 9,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Open Arms Home Care",
      "address": "4346 Frankford Ave, Philadelphia, PA 19124, USA",
      "phone": "(267) 900-3127",
      "website": "https://openarmshc.org/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.7,
      "reviews": 208,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Correct Choice Home Care",
      "address": "714 W Porter St, Philadelphia, PA 19148, USA",
      "phone": "(267) 323-1700",
      "website": "https://www.correctchoicehomecare.com/",
      "rating": 4.8,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "GPS Transportation (God's People Serving)",
      "address": "E Roosevelt Blvd, Philadelphia, PA 19149, USA",
      "phone": "(215) 500-5220",
      "website": "http://www.gpstransportation.net/",
      "rating": 4.7,
      "reviews": 43,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Be Safe Transport",
      "address": "110A Baltimore Pike Ste 1007, Springfield, PA 19064, USA",
      "phone": "(484) 326-4555",
      "website": "http://www.bsafetransport.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Gps Transportation",
      "address": "9237 Roosevelt Blvd Suite 203, Philadelphia, PA 19114, USA",
      "phone": "",
      "website": "http://www.gpstransportation.net/",
      "rating": 4.8,
      "reviews": 50,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "CCT Connect",
      "address": "1234 Market St, Philadelphia, PA 19107, USA",
      "phone": "(215) 580-7145",
      "website": "http://www.septa.org/",
      "rating": 2.6,
      "reviews": 162,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Citizen Care Medical Transport",
      "address": "1817 E Venango St, Philadelphia, PA 19134, USA",
      "phone": "(215) 423-1405",
      "website": "https://citizencaretransport.com/",
      "rating": 4,
      "reviews": 20,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Victory Support Services-Home Care-Rental Housing- Wheelchair Transportation and Affordable Private Pay Rates",
      "address": "935 N 42nd St, Philadelphia, PA 19104, USA",
      "phone": "(215) 382-2938",
      "website": "",
      "rating": 3.8,
      "reviews": 4,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Philadelphia Senior Center",
      "address": "509 S Broad St, Philadelphia, PA 19147, USA",
      "phone": "(215) 546-5879",
      "website": "https://www.newcourtland.org/senior-center/",
      "rating": 4.6,
      "reviews": 95,
      "cats": [
        "social"
      ]
    },
    {
      "name": "West Philadelphia Senior Community Center",
      "address": "1016 N 41st St, Philadelphia, PA 19104, USA",
      "phone": "(215) 386-0379",
      "website": "http://westphilaseniorcenter.org/",
      "rating": 4.6,
      "reviews": 114,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Philadelphia Senior Center – Allegheny Branch",
      "address": "1900 W Allegheny Ave, Philadelphia, PA 19132, USA",
      "phone": "(267) 286-1455",
      "website": "https://www.newcourtland.org/senior-centers/",
      "rating": 4.4,
      "reviews": 29,
      "cats": [
        "social"
      ]
    },
    {
      "name": "South Philadelphia Older Adult Center",
      "address": "1430 Passyunk Ave, Philadelphia, PA 19147, USA",
      "phone": "(215) 685-1697",
      "website": "",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "social"
      ]
    },
    {
      "name": "West Oak Lane Senior Center",
      "address": "7210-18 Ogontz Ave, Philadelphia, PA 19138, USA",
      "phone": "(215) 685-3511",
      "website": "https://www.facebook.com/WOLseniorcenter/",
      "rating": 4.4,
      "reviews": 82,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Older Adult Sunshine Center",
      "address": "5331 Haverford Ave, Philadelphia, PA 19139, USA",
      "phone": "(215) 472-6188",
      "website": "https://seniorcenter.us/sc/older_adult_sunshine_center_philadelphia_pa",
      "rating": 4.4,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northeast Older Adult Center",
      "address": "8101 Bustleton Ave, Philadelphia, PA 19152, USA",
      "phone": "(215) 685-0576",
      "website": "",
      "rating": 4.2,
      "reviews": 30,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Southwest Senior Center",
      "address": "6916 Elmwood Ave #22, Philadelphia, PA 19142, USA",
      "phone": "(215) 937-1880",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Star Harbor Senior Community Center",
      "address": "4700 Springfield Ave, Philadelphia, PA 19143, USA",
      "phone": "(215) 727-0100",
      "website": "",
      "rating": 4.4,
      "reviews": 37,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Peter Bressi Northeast Senior Center",
      "address": "4744 Frankford Ave #46, Philadelphia, PA 19124, USA",
      "phone": "(215) 831-2926",
      "website": "http://www.neccbh.org/peter-bressi-senior-center/",
      "rating": 3.9,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Penn Village Adult Daycare",
      "address": "Located Behind Wendy's, 5536 Wayne Ave, Philadelphia, PA 19144, USA",
      "phone": "(267) 437-2898",
      "website": "http://www.pennvillage.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Grace Adult Day Care Center",
      "address": "101 E Olney Ave, Philadelphia, PA 19120, USA",
      "phone": "(215) 549-3444",
      "website": "https://gracewecare.com/",
      "rating": 4.7,
      "reviews": 52,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northeast Adult Day Care",
      "address": "11048 Rennard St, Philadelphia, PA 19116, USA",
      "phone": "(215) 671-0200",
      "website": "http://www.northeastadc.com/",
      "rating": 4.8,
      "reviews": 57,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Happy Life Adult Day Center",
      "address": "1001 Vine St 5th Floor, Philadelphia, PA 19107, USA",
      "phone": "(267) 927-8886",
      "website": "http://happylifeadultdaycenter.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "A to Z Care - Adult Day Care Center",
      "address": "5050 Parkside Ave Unit 101, Philadelphia, PA 19131, USA",
      "phone": "(215) 877-8600",
      "website": "http://www.atozadultcare.com/",
      "rating": 4.7,
      "reviews": 54,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Germantown Adult Day Center",
      "address": "Rear parkinglot, 4811 Germantown Ave, Philadelphia, PA 19144, USA",
      "phone": "(215) 438-2000",
      "website": "",
      "rating": 4.7,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "99 Adult Daycare",
      "address": "1019 Cherry St, Philadelphia, PA 19107, USA",
      "phone": "(267) 909-8884",
      "website": "http://www.99adc.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northeast Older Adult Center",
      "address": "1401 John F Kennedy Blvd, Philadelphia, PA 19102, USA",
      "phone": "(215) 685-0576",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Premier Adult DayCare",
      "address": "5000 N Palethorp St, Philadelphia, PA 19120, USA",
      "phone": "(215) 398-3373",
      "website": "https://www.premieradc.com/",
      "rating": 4.8,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Circle of Friends Adult Day Health Care Center",
      "address": "9405 Bustleton Ave, Philadelphia, PA 19115, USA",
      "phone": "(215) 856-9100",
      "website": "http://www.circleofriendscare.com/",
      "rating": 4.8,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "SeniorLAW Center",
      "address": "1650 Arch St Ste 1820, Philadelphia, PA 19103, USA",
      "phone": "(215) 988-1244",
      "website": "http://www.seniorlawcenter.org/",
      "rating": 3.5,
      "reviews": 57,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Debra Speyer Law Offices",
      "address": "1515 Market St 12th Floor, Philadelphia, PA 19103, USA",
      "phone": "(215) 238-1980",
      "website": "http://www.speyerlaw.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Elder Care Law Center, LLC",
      "address": "101 Greenwood Ave #300, Jenkintown, PA 19046, USA",
      "phone": "",
      "website": "https://www.elderlawofpa.com/",
      "rating": 4.1,
      "reviews": 9,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Senior Justice Law Firm | Nursing Home Abuse Attorneys",
      "address": "123 S Broad St #2250B, Philadelphia, PA 19109, USA",
      "phone": "(215) 399-9200",
      "website": "https://seniorjustice.com/philadelphia-nursing-home-abuse-lawyer/?utm_source=google&utm_medium=gbp&utm_campaign=philadelphia",
      "rating": 4.9,
      "reviews": 30,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Office of Steven M. Zelinger, LLC",
      "address": "1650 Market St Ste 3623, Philadelphia, PA 19103, USA",
      "phone": "(267) 209-6103",
      "website": "https://www.stevenzelinger.com/?utm_source=google-local&utm_medium=organic&utm_campaign=1927",
      "rating": 4.9,
      "reviews": 49,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Adam S. Bernick",
      "address": "123 S Broad St Ste. 1507, Philadelphia, PA 19109, USA",
      "phone": "(215) 645-7866",
      "website": "https://www.bernicklaw.com/?npcmp=dir:local:3385472:19109",
      "rating": 4.8,
      "reviews": 19,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Estate Planning and Elder Law Offices of Gerhard & Gerhard, P.C.",
      "address": "815 Greenwood Ave #8, Jenkintown, PA 19046, USA",
      "phone": "(215) 885-6785",
      "website": "https://www.paelderlaw.net/",
      "rating": 4.9,
      "reviews": 62,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "PA Nursing Home Lawyers",
      "address": "1800 John F Kennedy Blvd Ste 1500-B, Philadelphia, PA 19103, USA",
      "phone": "(215) 240-7771",
      "website": "https://panursinghomelawyers.com/?utm_source=gbp_listing&utm_medium=ecg",
      "rating": 4.9,
      "reviews": 45,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bratton Law Group",
      "address": "1515 Market St Suite 1200, Philadelphia, PA 19102, USA",
      "phone": "(267) 323-4038",
      "website": "https://www.brattonlawgroup.com/areas-we-serve/philadelphia-pa/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Schuster Law",
      "address": "1339 Chestnut St #500, Philadelphia, PA 19107, USA",
      "phone": "(215) 383-1074",
      "website": "https://www.schusterlaw.com/philadelphia/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "legal"
      ]
    }
  ],
  "san-antonio-tx": [
    {
      "name": "Genie Bath Systems",
      "address": "5680 Randolph Blvd, San Antonio, TX 78233, USA",
      "phone": "(210) 405-6440",
      "website": "http://www.geniebathsystems.com/",
      "rating": 4.8,
      "reviews": 976,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "5911 Rittiman Plaza #2, San Antonio, TX 78218, USA",
      "phone": "(210) 294-5102",
      "website": "https://www.bathfitter.com/us-en/location/sanantonio/?&utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.8,
      "reviews": 161,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of San Antonio",
      "address": "109 Connelly St, San Antonio, TX 78203, USA",
      "phone": "(210) 796-5982",
      "website": "https://fivestarbathsolutions.com/san-antonio-tx",
      "rating": 4.7,
      "reviews": 51,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Texas Bathtub Refinishers, Inc.",
      "address": "1327 Basse Rd, San Antonio, TX 78212, USA",
      "phone": "(210) 804-1189",
      "website": "http://www.bathtubrefinishing.com/",
      "rating": 4.5,
      "reviews": 17,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "leo Flores handyman",
      "address": "1215 McIlvaine, San Antonio, TX 78201, USA",
      "phone": "(210) 823-6838",
      "website": "https://leofloreshandyman.com/",
      "rating": 4.7,
      "reviews": 46,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Next Day Access San Antonio TX",
      "address": "11930 Starcrest Dr Ste 104, San Antonio, TX 78247, USA",
      "phone": "(210) 762-4205",
      "website": "https://www.nextdayaccess.com/san-antonio-tx/",
      "rating": 4.8,
      "reviews": 88,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Miracle Method",
      "address": "847 Isom Rd, San Antonio, TX 78216, USA",
      "phone": "(210) 610-7585",
      "website": "http://www.miraclemethod.com/san-antonio-north?utm_source=Google&utm_medium=GMB&utm_content=MMMS",
      "rating": 4.9,
      "reviews": 121,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Moore Supply",
      "address": "817 N Frio St, San Antonio, TX 78207, USA",
      "phone": "(210) 342-9612",
      "website": "http://www.mooresupply.com/",
      "rating": 4.1,
      "reviews": 152,
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
      "name": "Avalon Walkin Tubs",
      "address": "6931 Evening Sun St, San Antonio, TX 78238, USA",
      "phone": "(512) 988-0449",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Sweetwater Hot Tubz",
      "address": "19422 US-281 #103, San Antonio, TX 78258, USA",
      "phone": "(210) 494-7070",
      "website": "https://sweetwaterhottubz.com/",
      "rating": 4.8,
      "reviews": 90,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Southern Leisure Spas & Wellness - San Antonio",
      "address": "903 E Bitters Rd #316, San Antonio, TX 78216, USA",
      "phone": "(210) 910-4772",
      "website": "https://www.southernleisurespas.com/san-antonio-hot-tubs/",
      "rating": 5,
      "reviews": 93,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Hill Country Tub and Shower",
      "address": "851 Gulf St, Cibolo, TX 78108, USA",
      "phone": "(210) 997-1720",
      "website": "https://www.hillcountrytubandshower.com/",
      "rating": 4.9,
      "reviews": 83,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Legacy Bath & Kitchen",
      "address": "15705 San Pedro Ave, San Antonio, TX 78232, USA",
      "phone": "(210) 361-3587",
      "website": "https://www.legacybathandkitchen.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb&utm_content=website",
      "rating": 4.8,
      "reviews": 295,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Planet of San Antonio",
      "address": "11823 Starcrest Dr, San Antonio, TX 78247, USA",
      "phone": "(830) 590-2105",
      "website": "https://www.bp-hq.com/",
      "rating": 4.9,
      "reviews": 1866,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Sweetwater Hot Tubz",
      "address": "8202 N Loop 1604 E #102, San Antonio, TX 78249, USA",
      "phone": "(210) 561-8829",
      "website": "http://www.sweetwaterhottubz.com/",
      "rating": 4.4,
      "reviews": 126,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "6450 N Loop 1604 E, San Antonio, TX 78247, USA",
      "phone": "(210) 255-2117",
      "website": "https://www.rebath.com/location/sanantonio/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 887,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "101 Mobility of San Antonio",
      "address": "12500 Network Blvd Ste 101, San Antonio, TX 78249, USA",
      "phone": "(210) 796-8082",
      "website": "https://www.101mobility.com/sanantonio/?utm_source=GBP_SanAntonio&utm_medium=organic&y_source=1_MTAzMzU5Njk1Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.9,
      "reviews": 90,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Home Elevator of Texas",
      "address": "12106 Colwick St, San Antonio, TX 78216, USA",
      "phone": "(210) 340-5702",
      "website": "http://homeelevator.com/",
      "rating": 4.3,
      "reviews": 32,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Liftology of San Antonio",
      "address": "4503 N Stahl Park Unit 105, San Antonio, TX 78217, USA",
      "phone": "(830) 253-4288",
      "website": "https://liftology.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Precision Mobility",
      "address": "3822 SE Military Dr Ste 112, San Antonio, TX 78223, USA",
      "phone": "(830) 443-2854",
      "website": "https://www.precisionmobilitysa.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Total Mobility Services, Inc.",
      "address": "5131 Roosevelt Ave, San Antonio, TX 78214, USA",
      "phone": "(210) 626-5213",
      "website": "http://www.totalmobilityinc.com/",
      "rating": 4.5,
      "reviews": 57,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Project MEND",
      "address": "5015 Wurzbach Rd, San Antonio, TX 78238, USA",
      "phone": "(210) 223-6363",
      "website": "http://www.projectmend.org/",
      "rating": 4.8,
      "reviews": 254,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Medical Equipment",
      "address": "7007 San Pedro Ave Ste. 102, San Antonio, TX 78216, USA",
      "phone": "(210) 745-2829",
      "website": "http://mobilitymedequip.com/",
      "rating": 4.8,
      "reviews": 41,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "6473 De Zavala Rd, San Antonio, TX 78249, USA",
      "phone": "(210) 714-4851",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-san-antonio-texas?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=dezalva",
      "rating": 3.9,
      "reviews": 87,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "6325 Bandera Rd, San Antonio, TX 78238, USA",
      "phone": "(210) 405-4859",
      "website": "https://mobilitycity.com/san-antonio-tx/?utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 39,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Numotion",
      "address": "11979 Starcrest Dr, San Antonio, TX 78247, USA",
      "phone": "(210) 696-1084",
      "website": "https://www.numotion.com/locations/san-antonio-tx",
      "rating": 4.7,
      "reviews": 305,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "National Seating & Mobility",
      "address": "8666 Huebner Rd Suite 200, San Antonio, TX 78240, USA",
      "phone": "(210) 520-6481",
      "website": "https://locations.nsm-seating.com/tx/san-antonio/8666-huebner-rd-suite-200",
      "rating": 4,
      "reviews": 87,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "AG Home Improvement LLC",
      "address": "79 Viking Oak, San Antonio, TX 78247, USA",
      "phone": "(210) 788-7926",
      "website": "",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "AccessAbility Home Modifications",
      "address": "618 W Rhapsody Dr # A, San Antonio, TX 78216, USA",
      "phone": "(210) 414-5600",
      "website": "https://accessability1.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Lifestyle Remodeling LLC",
      "address": "12703 Spectrum Dr #103, San Antonio, TX 78249, USA",
      "phone": "(210) 272-7560",
      "website": "https://www.lrpros.com/",
      "rating": 5,
      "reviews": 66,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Garcia Remodeling and construction",
      "address": "7650 W US Hwy 90, San Antonio, TX 78227, USA",
      "phone": "(210) 723-0759",
      "website": "https://garciaremodeling.org/",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Ace Handyman Services Northwest San Antonio",
      "address": "28720 I-10 Ste 420, Boerne, TX 78006, USA",
      "phone": "(210) 549-9714",
      "website": "http://www.acehandymanservices.com/offices/nw-san-antonio",
      "rating": 4.9,
      "reviews": 450,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "1st Rate Remodeling",
      "address": "401 Isom Rd Ste 310, San Antonio, TX 78216, USA",
      "phone": "(210) 451-0003",
      "website": "https://www.1strateremodeling.com/?utm_source=omg-gbp&utm_medium=webclick",
      "rating": 4.8,
      "reviews": 78,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Advanced Remodeling Of San Antonio",
      "address": "9947 Fall Harvest, San Antonio, TX 78254, USA",
      "phone": "(210) 629-4335",
      "website": "",
      "rating": 4.7,
      "reviews": 3,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Area Agency on Aging of Bexar County",
      "address": "2700 NE Interstate 410 Loop Ste 101, San Antonio, TX 78217, USA",
      "phone": "(210) 477-3275",
      "website": "https://www.aacog.com/aging-services",
      "rating": 3.7,
      "reviews": 10,
      "cats": [
        "remodel",
        "transport"
      ]
    },
    {
      "name": "Affordable Renovation Services",
      "address": "1777 NE Interstate 410 Loop Ste 600, San Antonio, TX 78217, USA",
      "phone": "(210) 570-3620",
      "website": "http://affordablerenovationssa.com/",
      "rating": 3.7,
      "reviews": 9,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "San Antonio Home Health",
      "address": "85 NE Interstate 410 Loop #607, San Antonio, TX 78216, USA",
      "phone": "(210) 787-3343",
      "website": "https://www.aspenhealthcare.net/",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Legacy Home Health Agency",
      "address": "6655 First Park Ten Blvd Ste 200, San Antonio, TX 78213, USA",
      "phone": "(210) 736-1855",
      "website": "http://www.legacyhhc.com/",
      "rating": 4.8,
      "reviews": 389,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Avenues Home Care | San Antonio",
      "address": "909 NE Interstate 410 Loop #100, San Antonio, TX 78209, USA",
      "phone": "(210) 236-5582",
      "website": "https://avenueshomecare.com/in-home-care-san-antonio/",
      "rating": 4.6,
      "reviews": 94,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Access Home Health Agency Inc",
      "address": "8741 Grissom Rd #101, San Antonio, TX 78251, USA",
      "phone": "(210) 451-8940",
      "website": "",
      "rating": 4.2,
      "reviews": 20,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Griswold Home Care for San Antonio",
      "address": "1314 E Sonterra Blvd Ste 2101, San Antonio, TX 78258, USA",
      "phone": "(210) 496-9993",
      "website": "https://www.griswoldcare.com/san-antonio/",
      "rating": 4.8,
      "reviews": 84,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FirstLight Home Care of Central and North San Antonio",
      "address": "900 Isom Rd Ste 228, San Antonio, TX 78216, USA",
      "phone": "(210) 898-4499",
      "website": "https://www.firstlighthomecare.com/home-healthcare-central-north-sa/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 5,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Capitol Home Health",
      "address": "7800 I-10 Ste 800, San Antonio, TX 78230, USA",
      "phone": "(210) 538-9090",
      "website": "http://www.capitolhh.com/",
      "rating": 4.9,
      "reviews": 246,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "1 World Home Care",
      "address": "1933 Fredericksburg Rd #101, San Antonio, TX 78201, USA",
      "phone": "(210) 315-3669",
      "website": "https://www.1worldhomecare.com/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "First Home Healthcare, LLC",
      "address": "111 Rayburn Dr Ste 100, San Antonio, TX 78221, USA",
      "phone": "(210) 272-0250",
      "website": "https://www.firsthomehealthcarellc.com/",
      "rating": 5,
      "reviews": 28,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Amedisys Home Health Care",
      "address": "45 NE Interstate 410 Loop Ste 904, San Antonio, TX 78216, USA",
      "phone": "(210) 558-9606",
      "website": "https://locations.amedisys.com/tx/san-antonio/home-health-0781/?utm_source=google&utm_medium=organic&utm_campaign=locallisting",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Buddies In Home Care",
      "address": "24137 Boerne Stage Rd, San Antonio, TX 78255, USA",
      "phone": "(210) 391-0948",
      "website": "https://www.senior-buddies.com/",
      "rating": 4.9,
      "reviews": 111,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Northeast San Antonio",
      "address": "8940 Fourwinds Dr #313, Windcrest, TX 78239, USA",
      "phone": "(210) 951-0702",
      "website": "https://www.visitingangels.com/northeastsa/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 155,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in San Antonio",
      "address": "1846 N Loop 1604 W Ste 205, San Antonio, TX 78248, USA",
      "phone": "(210) 940-1087",
      "website": "https://alwaysbestcare.com/san-antonio/",
      "rating": 4.9,
      "reviews": 17,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "6391 De Zavala Rd Ste 104, San Antonio, TX 78249, USA",
      "phone": "(210) 762-6460",
      "website": "https://www.visitingangels.com/sanantoniotx/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 40,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Affinity Senior Care of Texas",
      "address": "Venture X, 7550 I-10 Suite 800, San Antonio, TX 78229, USA",
      "phone": "(210) 540-4535",
      "website": "https://affinitysenior.care/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "201 E Park Ave Ste 100, San Antonio, TX 78212, USA",
      "phone": "(210) 791-0084",
      "website": "https://caringseniorservice.com/san-antonio/?utm_source=gmb&utm_medium=referral-link&utm_campaign=google-my-business",
      "rating": 4.8,
      "reviews": 46,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "Amada Senior Care",
      "address": "1350 N Loop 1604 E Ste 106, San Antonio, TX 78232, USA",
      "phone": "(210) 960-4304",
      "website": "https://www.amadaseniorcare.com/san-antonio-senior-care/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=san-antonio",
      "rating": 4.9,
      "reviews": 126,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of San Antonio, Texas",
      "address": "4466 Lockhill Selma Rd #101, San Antonio, TX 78249, USA",
      "phone": "(210) 998-6046",
      "website": "https://www.homeinstead.com/home-care/usa/tx/san-antonio/192/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.4,
      "reviews": 26,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Promise Senior Solutions",
      "address": "4606 Centerview Dr #255, San Antonio, TX 78228, USA",
      "phone": "(210) 736-4677",
      "website": "http://www.promiseseniorsolutions.com/",
      "rating": 4.8,
      "reviews": 59,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Ride Connect Texas",
      "address": "2201 St Cloud, San Antonio, TX 78228, USA",
      "phone": "(210) 558-0007",
      "website": "http://www.rideconnecttexas.org/",
      "rating": 3.5,
      "reviews": 6,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Northeast Senior Assitance",
      "address": "2903 Nacogdoches Rd, San Antonio, TX 78217, USA",
      "phone": "(210) 967-6372",
      "website": "http://www.neseniorassistance.org/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "texas medical transportation",
      "address": "139 Lanark Dr, San Antonio, TX 78218, USA",
      "phone": "(210) 455-0226",
      "website": "",
      "rating": 2.6,
      "reviews": 78,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Northeast Senior Center",
      "address": "4135 Thousand Oaks Dr, San Antonio, TX 78217, USA",
      "phone": "(210) 207-4590",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/Northeast",
      "rating": 4.7,
      "reviews": 313,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "Drive A Senior - ATX",
      "address": "located at back of building, 2601 Exposition Blvd, Austin, TX 78703, USA",
      "phone": "(512) 472-6339",
      "website": "http://driveasenioratx.org/",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Medi-Ryde, LLC",
      "address": "10615 Perrin Beitel Bldg 4, San Antonio, TX 78217, USA",
      "phone": "(210) 868-9972",
      "website": "http://www.mediryde.com/",
      "rating": 4.8,
      "reviews": 36,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "R&A Non Emergency Medical Transportation LLC",
      "address": "12541 S U.S. Hwy 181, San Antonio, TX 78223, USA",
      "phone": "(210) 310-3003",
      "website": "https://www.ramedicaltrans.com/",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Doris Griffin Senior One Stop Center",
      "address": "6157 Northwest Loop 410 #410, San Antonio, TX 78238, USA",
      "phone": "(210) 780-7444",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/Doris-Griffin",
      "rating": 4.8,
      "reviews": 221,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "Walker Ranch Senior Center",
      "address": "835 W Rhapsody Dr, San Antonio, TX 78216, USA",
      "phone": "(210) 207-5280",
      "website": "http://sanantonio.gov/humanservices/SeniorServices",
      "rating": 4.8,
      "reviews": 111,
      "cats": [
        "social"
      ]
    },
    {
      "name": "West End Park Senior Center Department of Human Services",
      "address": "1226 NW 18th St, San Antonio, TX 78207, USA",
      "phone": "(210) 207-1720",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/West-End-Park",
      "rating": 4.4,
      "reviews": 79,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Bob Ross Senior Center",
      "address": "2219 Babcock Rd, San Antonio, TX 78229, USA",
      "phone": "(210) 207-5300",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/Bob-Ross",
      "rating": 4.7,
      "reviews": 187,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Southside Lions Senior Center",
      "address": "3303 Pecan Valley Dr, San Antonio, TX 78210, USA",
      "phone": "(210) 207-1760",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/Southside-Lions",
      "rating": 4.7,
      "reviews": 83,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Alicia Trevino Lopez Senior One-Stop Center",
      "address": "8353 Culebra Rd, San Antonio, TX 78251, USA",
      "phone": "(210) 558-0178",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/Alicia-Trevino-Lopez",
      "rating": 4.6,
      "reviews": 243,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Granados Adult & Senior Center",
      "address": "500 Freiling, San Antonio, TX 78213, USA",
      "phone": "(210) 207-3285",
      "website": "https://www.sa.gov/Directory/Departments/Parks/Parks-Facilities/Buildings-Centers/Granados-Adult-and-Senior-Center",
      "rating": 4.5,
      "reviews": 48,
      "cats": [
        "social"
      ]
    },
    {
      "name": "District 2 Senior Center",
      "address": "1751 S WW White Rd, San Antonio, TX 78220, USA",
      "phone": "(210) 207-5390",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/District-2",
      "rating": 4.6,
      "reviews": 93,
      "cats": [
        "social"
      ]
    },
    {
      "name": "District 5 Senior Center",
      "address": "2701 S Presa St, San Antonio, TX 78210, USA",
      "phone": "(210) 207-5270",
      "website": "https://www.sa.gov/Directory/Departments/DHS/Senior-Services/Senior-Centers/Locations/District-5",
      "rating": 4.4,
      "reviews": 49,
      "cats": [
        "social"
      ]
    },
    {
      "name": "ACTS - Adult Day & Activity Center",
      "address": "328 W Mayfield Blvd, San Antonio, TX 78221, USA",
      "phone": "(210) 932-2287",
      "website": "http://www.actsadultdaycare.com/",
      "rating": 4.1,
      "reviews": 55,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mother Earth Adult Day Care",
      "address": "8464 Barron Dr, San Antonio, TX 78240, USA",
      "phone": "(210) 691-1778",
      "website": "http://motherearthadc.com/",
      "rating": 4.2,
      "reviews": 58,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Alamocare Health Services",
      "address": "1300 West Ave, San Antonio, TX 78201, USA",
      "phone": "(210) 435-7800",
      "website": "https://alamocarehealthservices.com/",
      "rating": 4.1,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Clearday Clubs of Leon Valley",
      "address": "6812 Bandera Rd #124, San Antonio, TX 78238, USA",
      "phone": "(210) 647-8300",
      "website": "https://www.facebook.com/profile.php?id=61572687405712",
      "rating": 4.9,
      "reviews": 28,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Seniors 2000 Adult Health and Activity Center",
      "address": "4396 Callaghan Rd, San Antonio, TX 78228, USA",
      "phone": "(210) 435-1800",
      "website": "https://www.seniors2000.com/",
      "rating": 4.2,
      "reviews": 34,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Heavenly Hearts Adult daycare",
      "address": "4252 Thousand Oaks Dr, San Antonio, TX 78217, USA",
      "phone": "(210) 646-0407",
      "website": "",
      "rating": 3,
      "reviews": 39,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Careplex Adult Day Care Center",
      "address": "7519 Marbach Rd #106, San Antonio, TX 78227, USA",
      "phone": "(210) 675-3255",
      "website": "http://www.careplexadc.com/",
      "rating": 4,
      "reviews": 39,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Exclusive Adult Daycare",
      "address": "6810 Bandera Rd #1, San Antonio, TX 78238, USA",
      "phone": "(210) 522-0911",
      "website": "",
      "rating": 4.9,
      "reviews": 30,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Sterling Adult Day Care",
      "address": "543 Pinn Rd, San Antonio, TX 78227, USA",
      "phone": "(210) 920-6491",
      "website": "",
      "rating": 4.7,
      "reviews": 30,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Texcare Adult Day Services",
      "address": "1915 La Manda Blvd, San Antonio, TX 78201, USA",
      "phone": "(210) 541-8111",
      "website": "https://www.texcareadultdayservices.com/",
      "rating": 4,
      "reviews": 18,
      "cats": [
        "social"
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
    },
    {
      "name": "Marquardt Law Firm, P.C.",
      "address": "14603 Huebner Rd Ste 3801, San Antonio, TX 78230, USA",
      "phone": "(210) 530-4278",
      "website": "http://www.marquardtlawfirm.com/",
      "rating": 4.8,
      "reviews": 452,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Voeller Law Firm",
      "address": "19311 FM 2252 Ste 103, San Antonio, TX 78266, USA",
      "phone": "(210) 651-3851",
      "website": "https://voellerlaw.com/?npcmp=dir:local:3339716:78266",
      "rating": 4.9,
      "reviews": 193,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Loke Moore Law, PLLC",
      "address": "2135 E Hildebrand Ave, San Antonio, TX 78209, USA",
      "phone": "(210) 944-4930",
      "website": "http://www.lokemoorelaw.com/",
      "rating": 5,
      "reviews": 71,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Office of Ryan C. Moe, PLLC",
      "address": "613 Northwest Loop 410 #850, San Antonio, TX 78216, USA",
      "phone": "(210) 861-6000",
      "website": "https://www.sanantonio-law.com/?utm_source=google&utm_medium=San_Antonio_gmb&utm_campaign=gmb_website_button",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Lisa Uresti, PLLC",
      "address": "234 Bandera Rd, San Antonio, TX 78228, USA",
      "phone": "(210) 914-8493",
      "website": "https://www.urestilegal.com/?utm_source=google&utm_medium=organic&utm_campaign=bandera-gbp",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Aldrich Law Firm, PLLC",
      "address": "8700 Crownhill Blvd Ste 200, San Antonio, TX 78209, USA",
      "phone": "(210) 399-3964",
      "website": "https://www.aldrichfirm.com/",
      "rating": 4.6,
      "reviews": 67,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Office of Yvette M. Salinas",
      "address": "319 Probandt St, San Antonio, TX 78204, USA",
      "phone": "(210) 415-4917",
      "website": "http://yvettesalinaslaw.com/",
      "rating": 4.7,
      "reviews": 93,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Skeen Law",
      "address": "200 E Grayson St Ste 210, San Antonio, TX 78215, USA",
      "phone": "(210) 202-1141",
      "website": "http://skeenlawfirm.com/",
      "rating": 4.9,
      "reviews": 107,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Jacobson Law Firm, P.C.",
      "address": "6391 De Zavala Rd Ste 301, San Antonio, TX 78249, USA",
      "phone": "(210) 341-1333",
      "website": "https://jacobsonlawsa.com/?utm_source=google-local&utm_medium=organic&utm_campaign=4016",
      "rating": 4.9,
      "reviews": 100,
      "cats": [
        "legal"
      ]
    }
  ],
  "san-diego-ca": [
    {
      "name": "IE Grab Bars-Grab Bar Installers",
      "address": "134 Pueblo Rd, Corona, CA 92882, USA",
      "phone": "(714) 658-9137",
      "website": "https://iegrabbars.com/",
      "rating": 5,
      "reviews": 422,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "221 N Johnson Ave, El Cajon, CA 92020, USA",
      "phone": "(858) 201-6997",
      "website": "https://www.bathfitter.com/us-en/location/sandiegosw/",
      "rating": 4.8,
      "reviews": 747,
      "cats": [
        "bathroom"
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
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "San Diego Walk In Tubs",
      "address": "180 Mace St A9, Chula Vista, CA 91911, USA",
      "phone": "(619) 708-3358",
      "website": "http://www.sandiegowalkintubs.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "NuFinishPro of San Diego",
      "address": "12707 High Bluff Dr, San Diego, CA 92130, USA",
      "phone": "(619) 304-8935",
      "website": "https://www.nufinishpro.com/san-diego/",
      "rating": 5,
      "reviews": 242,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Nulux Baths",
      "address": "525 N Andreasen Dr Ste C, Escondido, CA 92029, USA",
      "phone": "(760) 705-8944",
      "website": "http://nuluxbaths.com/",
      "rating": 5,
      "reviews": 50,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions San Diego",
      "address": "8949 Kenamar Dr Ste 111, San Diego, CA 92121, USA",
      "phone": "(858) 402-0667",
      "website": "https://fivestarbathsolutions.com/san-diego-ca",
      "rating": 4.9,
      "reviews": 102,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "NuFinishPro of Mission Valley",
      "address": "3111 Camino Del Rio N, San Diego, CA 92108, USA",
      "phone": "(619) 304-8935",
      "website": "https://www.nufinishpro.com/mission-valley-san-diego/",
      "rating": 5,
      "reviews": 42,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Perfect Walk-In Bath Tubs",
      "address": "840 La Bonita Dr, San Marcos, CA 92078, USA",
      "phone": "(760) 845-1406",
      "website": "https://www.perfectwalkinbathtubs.com/?utm_source=Google_My_Business&utm_medium=Organic&utm_campaign=SERPs_and_Maps",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Action Spa Repair of San Diego",
      "address": "1455 Frazee Rd Ste 500, San Diego, CA 92108, USA",
      "phone": "(619) 399-2370",
      "website": "https://actionsparepair.com/service-areas/san-diego-county-ca/san-diego/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "7450 Ronson Rd, San Diego, CA 92111, USA",
      "phone": "(858) 290-3525",
      "website": "https://www.lifewaymobility.com/san-diego/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_San_Diego",
      "rating": 4.9,
      "reviews": 108,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Pacific Mobility Center Stairlifts Chairlifts and More",
      "address": "1355 Grand Ave #102, San Marcos, CA 92078, USA",
      "phone": "(844) 900-0714",
      "website": "https://www.pacificmobility.com/?utm_source=gmb&utm_medium=gmburl&utm_campaign=gmburl",
      "rating": 4.9,
      "reviews": 93,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of San Diego",
      "address": "5661 Palmer Way Ste k, Carlsbad, CA 92010, USA",
      "phone": "(858) 258-9669",
      "website": "https://www.101mobility.com/sandiego/?utm_source=GBP_SanDiego&utm_medium=organic&y_source=1_MTAzMzU5Njk1Ny03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 179,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access San Diego County",
      "address": "9692 Via Excelencia #101, San Diego, CA 92126, USA",
      "phone": "(619) 815-8359",
      "website": "https://www.nextdayaccess.com/san-diego-county",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Access to Freedom: San Diego Stairlifts",
      "address": "1485 Poinsettia Ave Unit 114, Vista, CA 92081, USA",
      "phone": "(760) 295-8080",
      "website": "http://www.socalstairlifts.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Harmony Home Medical Supply San Diego",
      "address": "7640 Clairemont Mesa Blvd, San Diego, CA 92111, USA",
      "phone": "(858) 560-8177",
      "website": "http://www.harmonyhomemedical.com/",
      "rating": 4.9,
      "reviews": 388,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "United Access",
      "address": "4797 Ruffner St, San Diego, CA 92111, USA",
      "phone": "(858) 541-0552",
      "website": "https://www.unitedaccess.com/us/en/locations/san-diego-ca.html",
      "rating": 4.7,
      "reviews": 84,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "National Seating & Mobility",
      "address": "4235 Ponderosa Ave A, San Diego, CA 92123, USA",
      "phone": "(858) 689-7070",
      "website": "https://locations.nsm-seating.com/ca/san-diego/4235-ponderosa-avenue",
      "rating": 3.6,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "4921 Clairemont Dr Ste B, San Diego, CA 92117, USA",
      "phone": "(858) 371-7157",
      "website": "https://mobilitycity.com/san-diego-ca/?utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 187,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Solutions Inc",
      "address": "7895 Convoy Ct #11, San Diego, CA 92111, USA",
      "phone": "(858) 278-0591",
      "website": "http://www.mobility-solutions.com/",
      "rating": 3.3,
      "reviews": 48,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "8130 Parkway Dr, La Mesa, CA 91942, USA",
      "phone": "(619) 567-3118",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-la-mesa-san-diego-california?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=san_diego",
      "rating": 4,
      "reviews": 61,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "GoldenBoy Mobility",
      "address": "12130 Dearborn Pl, Poway, CA 92064, USA",
      "phone": "(858) 748-9414",
      "website": "http://www.goldenboymobility.com/",
      "rating": 4.6,
      "reviews": 44,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Home Care Placement",
      "address": "5090 Shoreham Pl Unit 114, San Diego, CA 92122, USA",
      "phone": "(858) 412-5725",
      "website": "http://homecareplacement.com/",
      "rating": 5,
      "reviews": 75,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "San Diego Home Caregivers",
      "address": "3443 Camino del Rio S #202, San Diego, CA 92108, USA",
      "phone": "(619) 487-9000",
      "website": "https://www.sandiegohomecaregivers.com/?utm_source=GBPlisting&utm_medium=organic",
      "rating": 4.8,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Finding Homecare LLC",
      "address": "4290 Mt Abernathy Ave, San Diego, CA 92117, USA",
      "phone": "(858) 344-1555",
      "website": "https://findinghomecare.net/",
      "rating": 4.9,
      "reviews": 147,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "At Home Nursing Care - San Diego",
      "address": "531 Encinitas Blvd #120, Encinitas, CA 92024, USA",
      "phone": "(760) 493-2924",
      "website": "https://athomenursingcare.com/location-san-diego-home-care/",
      "rating": 4.9,
      "reviews": 51,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Danny's Home Healthcare",
      "address": "2667 Camino del Rio S Suite 308, San Diego, CA 92108, USA",
      "phone": "(619) 908-1934",
      "website": "https://www.dannyshomehealthsd.com/",
      "rating": 4.9,
      "reviews": 63,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Nurse Next Door Home Care Services",
      "address": "7840 Mission Center Ct Ste 100, San Diego, CA 92108, USA",
      "phone": "(619) 880-5334",
      "website": "https://nursenextdoor.com/locations/south-san-diego-ca/",
      "rating": 4.9,
      "reviews": 60,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "San Diego Home Health",
      "address": "5050 Avenida Encinas #200, Carlsbad, CA 92008, USA",
      "phone": "(760) 436-7344",
      "website": "http://www.sandiegohh.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "GrandCare Health Services San Diego",
      "address": "2535 Camino del Rio S #120, San Diego, CA 92108, USA",
      "phone": "(619) 220-6980",
      "website": "https://grandcarehealth.com/",
      "rating": 4.9,
      "reviews": 246,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "ComForCare Home Care San Diego & La Jolla",
      "address": "9619 Chesapeake Dr #200, San Diego, CA 92123, USA",
      "phone": "(858) 270-1700",
      "website": "https://www.comforcare.com/california/san-diego",
      "rating": 4.9,
      "reviews": 51,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Arosa San Diego",
      "address": "2650 Camino Del Rio N Suite 304, San Diego, CA 92108, USA",
      "phone": "(619) 544-1622",
      "website": "https://arosacare.com/locations/san-diego/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "San Diego Senior Caregivers",
      "address": "2033 San Elijo Ave #1022, Cardiff, CA 92007, USA",
      "phone": "(760) 209-5597",
      "website": "https://sandiegoseniorcaregivers.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "2615 Camino del Rio S #308, San Diego, CA 92108, USA",
      "phone": "(619) 488-6265",
      "website": "https://www.visitingangels.com/centralsandiego/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 97,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in San Diego",
      "address": "3665 Ruffin Rd Ste 202, San Diego, CA 92123, USA",
      "phone": "(858) 299-6900",
      "website": "https://alwaysbestcare.com/san-diego/",
      "rating": 4.8,
      "reviews": 41,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Aloha Senior Home Care | 24/7 Home Care in San Diego",
      "address": "8825 Aero Dr Unit 300, San Diego, CA 92123, USA",
      "phone": "(858) 399-1400",
      "website": "http://www.alohaseniorhomecare.com/",
      "rating": 4.8,
      "reviews": 22,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors® San Diego",
      "address": "10755 Scripps Poway Pkwy Ste F #426, San Diego, CA 92131, USA",
      "phone": "(619) 957-3817",
      "website": "https://homecarebyseniors.com/",
      "rating": 5,
      "reviews": 59,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Carmel Valley San Diego",
      "address": "12636 High Bluff Dr Ste 400 #37, San Diego, CA 92130, USA",
      "phone": "(858) 552-5900",
      "website": "https://www.visitingangels.com/carmelvalleysd/home?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=carmel-valley-san-diego",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "5464 Grossmont Center Dr #330, La Mesa, CA 91942, USA",
      "phone": "(619) 830-4313",
      "website": "https://www.seniorhelpers.com/ca/san-diego-east/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 180,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care North San Diego",
      "address": "9939 Hibert St #107, San Diego, CA 92131, USA",
      "phone": "(855) 862-6435",
      "website": "https://www.visitingangels.com/northsandiego/home-care-san-diego-ca/?utm_source=GBP&utm_medium=organic",
      "rating": 4.7,
      "reviews": 15,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "3645 Ruffin Rd Ste 100, San Diego, CA 92123, USA",
      "phone": "(858) 727-4982",
      "website": "https://www.homeinstead.com/home-care/usa/ca/san-diego/158/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 59,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Rides & Smiles",
      "address": "9001 Towne Centre Dr, San Diego, CA 92122, USA",
      "phone": "(858) 637-7320",
      "website": "https://www.jfssd.org/our-services/older-adults/on-the-go-transportation-solutions-for-older-adults/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Happy2Help Transportation",
      "address": "8947 Complex Dr B, San Diego, CA 92123, USA",
      "phone": "(619) 885-3737",
      "website": "http://www.happy2helpsd.com/",
      "rating": 5,
      "reviews": 499,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "SB SENIOR & MEDICAL TRANSPORT",
      "address": "7902 Dagget St Ste FB, San Diego, CA 92111, USA",
      "phone": "(619) 347-3243",
      "website": "https://sbmedtransport.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Nexus Point Transportation",
      "address": "4421 Glacier Ave suite 301-13, San Diego, CA 92120, USA",
      "phone": "(619) 383-0028",
      "website": "https://www.nexuspointhealth.com/",
      "rating": 4.5,
      "reviews": 212,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Comfort Ride Transport",
      "address": "6760 University Ave Ste.210, San Diego, CA 92115, USA",
      "phone": "(619) 855-5113",
      "website": "https://www.comfortridetransport.com/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Serving Seniors",
      "address": "1525 Fourth Ave, San Diego, CA 92101, USA",
      "phone": "(619) 235-6538",
      "website": "http://www.servingseniors.org/",
      "rating": 4.4,
      "reviews": 89,
      "cats": [
        "transport",
        "social"
      ]
    },
    {
      "name": "Royal Medical Transport",
      "address": "13543 Zinnia Hills Pl #85, San Diego, CA 92130, USA",
      "phone": "(858) 405-7290",
      "website": "https://rymaps.xyz/business/royal-medical-transport-z0gnq2",
      "rating": 4.5,
      "reviews": 17,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Care7 Transport",
      "address": "3443 Camino del Rio S, San Diego, CA 92108, USA",
      "phone": "(619) 795-2163",
      "website": "",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Gary and Mary West Senior Wellness Center",
      "address": "1525 Fourth Ave, San Diego, CA 92101, USA",
      "phone": "(619) 235-6572",
      "website": "https://servingseniors.org/what-we-do/gary-mary-west-senior-wellness-center/overview.html",
      "rating": 4.6,
      "reviews": 45,
      "cats": [
        "social"
      ]
    },
    {
      "name": "George L. Stevens Senior Center",
      "address": "570 S 65th St, San Diego, CA 92114, USA",
      "phone": "(619) 266-2066",
      "website": "http://fdsrc.org/",
      "rating": 4.5,
      "reviews": 79,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Memorial Senior Center",
      "address": "610 S 30th St, San Diego, CA 92113, USA",
      "phone": "(619) 235-1141",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Verne Goodwin Mira Mesa Senior Center",
      "address": "8460 Mira Mesa Blvd, San Diego, CA 92126, USA",
      "phone": "(858) 860-5355",
      "website": "http://miramesacenter.org/",
      "rating": 4.5,
      "reviews": 80,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Ed Brown Senior Center at Rancho Bernardo",
      "address": "18402 W Bernardo Dr, San Diego, CA 92127, USA",
      "phone": "(858) 487-9324",
      "website": "http://www.edbrowncenter.org/",
      "rating": 4.4,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Fourth District Seniors Resource Center",
      "address": "570 S 65th St, San Diego, CA 92114, USA",
      "phone": "(619) 266-2066",
      "website": "https://fdsrc.org/",
      "rating": 4.9,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Cathy Hopper Clairemont Friendship Center",
      "address": "4425 Bannock Ave, San Diego, CA 92117, USA",
      "phone": "(619) 235-1113",
      "website": "http://www.sandiego.gov/agewell",
      "rating": 4.6,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "San Diego Square",
      "address": "1055 Ninth Ave, San Diego, CA 92101, USA",
      "phone": "(619) 239-2073",
      "website": "http://hdpartners.org/properties/san-diego-square/",
      "rating": 4.6,
      "reviews": 26,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Senior Community Centers",
      "address": "525 14th St #200, San Diego, CA 92101, USA",
      "phone": "(619) 235-6538",
      "website": "http://www.servingseniors.org/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "SAN DIEGO FAMILY CIRCLE ADULT DAY HEALTH CENTER",
      "address": "4428 Convoy St Ste 288, San Diego, CA 92111, USA",
      "phone": "(858) 244-4555",
      "website": "http://www.sandiegofamilycircle.com/",
      "rating": 4.3,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Legacy Care ADHC/CBAS",
      "address": "11239 Camino Ruiz, San Diego, CA 92126, USA",
      "phone": "(858) 348-4074",
      "website": "https://www.legacyadhc.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Loving Care ADHC",
      "address": "2565 Camino del Rio S #201, San Diego, CA 92108, USA",
      "phone": "(619) 718-9777",
      "website": "https://www.lovingcareadhc.org/",
      "rating": 4.6,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Casa Pacifica ADHC",
      "address": "1424 30th St C, San Diego, CA 92154, USA",
      "phone": "(619) 424-8181",
      "website": "https://www.casa-pacifica.com/",
      "rating": 4.2,
      "reviews": 23,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Poway Adult Day Health Care Center",
      "address": "12250 Crosthwaite Cir, Poway, CA 92064, USA",
      "phone": "(858) 748-5044",
      "website": "http://powayadhc.org/",
      "rating": 4.4,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "AmeriCare ADHC Adult Day Care Center",
      "address": "340 Rancheros Dr #196, San Marcos, CA 92069, USA",
      "phone": "(760) 682-2424",
      "website": "https://americareadhc.com/",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Open Arms Adult Day Healthcare",
      "address": "301 E J St, Chula Vista, CA 91910, USA",
      "phone": "(619) 420-1404",
      "website": "http://openarmsadhc.com/",
      "rating": 4.5,
      "reviews": 10,
      "cats": [
        "social"
      ]
    },
    {
      "name": "George G. Glenner Alzheimer's Family Centers, Inc.",
      "address": "3686 Fourth Ave, San Diego, CA 92103, USA",
      "phone": "(619) 543-4704",
      "website": "https://glenner.org/",
      "rating": 4.5,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Horizon CBAS - Adult Day Health Care Center",
      "address": "1035 S Harbison Ave, National City, CA 91950, USA",
      "phone": "(619) 474-1822",
      "website": "https://www.horizoncbas.com/",
      "rating": 4.2,
      "reviews": 19,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Magnolia Adult Day Healthcare Center",
      "address": "490 Magnolia Ave, El Cajon, CA 92020, USA",
      "phone": "(619) 444-1522",
      "website": "https://magnoliaadhc.com/",
      "rating": 4.1,
      "reviews": 9,
      "cats": [
        "social"
      ]
    },
    {
      "name": "San Diego Elder Law Center",
      "address": "7880 Golfcrest Dr, San Diego, CA 92119, USA",
      "phone": "(619) 235-4357",
      "website": "https://www.sandiegoelderlaw.com/",
      "rating": 4.6,
      "reviews": 46,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Berman & Riedel, LLP - San Diego Elder Abuse & Personal Injury Lawyer",
      "address": "12264 El Camino Real Unit 300, San Diego, CA 92130, USA",
      "phone": "(858) 842-5219",
      "website": "https://www.bermanlawyers.com/?utm_source=gmb&utm_medium=organic&utm_campaign=listing&utm_content=san_diego",
      "rating": 5,
      "reviews": 29,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Elder Law & Advocacy",
      "address": "5151 Murphy Canyon Rd #110, San Diego, CA 92123, USA",
      "phone": "(858) 565-1392",
      "website": "http://www.elaca.org/",
      "rating": 3.7,
      "reviews": 31,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ratner & Pinchman, APLC",
      "address": "11622 El Camino Real, San Diego, CA 92130, USA",
      "phone": "(888) 336-1645",
      "website": "http://www.calelderfirm.com/",
      "rating": 5,
      "reviews": 103,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Pick Law | Elder Abuse Attorney San Diego",
      "address": "2495 Truxtun Rd Ste 201, San Diego, CA 92106, USA",
      "phone": "(619) 800-4869",
      "website": "https://picklaw.com/areas-served/san-diego-elder-abuse-attorney/",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "California Estate and Elder Law",
      "address": "9820 Willow Creek Rd Ste 460, San Diego, CA 92131, USA",
      "phone": "(619) 282-1194",
      "website": "http://estate-elderlaw.com/",
      "rating": 4.4,
      "reviews": 12,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "San Diego Legacy Law, PC",
      "address": "3517 Camino del Rio S Unit 406, San Diego, CA 92108, USA",
      "phone": "(619) 550-3080",
      "website": "https://www.sdlegacylaw.com/",
      "rating": 4.9,
      "reviews": 52,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Weiner Law: Trust, Probate & Litigation Lawyers APC",
      "address": "402 W Broadway Ste 400 – B, San Diego, CA 92101, USA",
      "phone": "(858) 333-8876",
      "website": "https://weinerlawfirm.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing_sandiego",
      "rating": 4.9,
      "reviews": 112,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Preston Estate Planning",
      "address": "12396 World Trade Dr Unit 301, San Diego, CA 92128, USA",
      "phone": "(858) 365-8794",
      "website": "http://www.prestonestateplanning.com/",
      "rating": 4.9,
      "reviews": 1006,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "D. Robert Dieringer, Esq.",
      "address": "402 W Broadway #2700, San Diego, CA 92101, USA",
      "phone": "(619) 831-6984",
      "website": "http://www.expertelderlaw.com/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "legal"
      ]
    }
  ],
  "dallas-tx": [
    {
      "name": "Next Day Access Central Dallas",
      "address": "4653 Nall Rd Ste 33, Farmers Branch, TX 75244, USA",
      "phone": "(214) 981-1488",
      "website": "https://www.nextdayaccess.com/dallas-tx/",
      "rating": 5,
      "reviews": 29,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "XD Contractors in Dallas",
      "address": "1901 Central Dr Ste 404, Bedford, TX 76021, USA",
      "phone": "(903) 600-0095",
      "website": "https://xdcontractors.com/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Dallas",
      "address": "5930 Lyndon B Johnson Fwy #250, Dallas, TX 75240, USA",
      "phone": "(214) 838-7162",
      "website": "https://www.mrhandymandallastx.com/",
      "rating": 4.6,
      "reviews": 548,
      "cats": [
        "bathroom",
        "remodel"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "2000 E Lamar Blvd #600, Arlington, TX 76006, USA",
      "phone": "(972) 408-3335",
      "website": "https://www.lifewaymobility.com/dallas/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Dallas",
      "rating": 4.9,
      "reviews": 154,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Melesh Construction Dallas",
      "address": "5930 Lyndon B Johnson Fwy #250, Dallas, TX 75240, USA",
      "phone": "(972) 866-7781",
      "website": "https://www.meleshconstructiondallas.com/?utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 1,
      "reviews": 1,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "ABCS Truck Accessories",
      "address": "11259 Goodnight Ln Suite 1111, Dallas, TX 75229, USA",
      "phone": "(214) 544-6602",
      "website": "https://www.abcstruckaccessories.com/",
      "rating": 4.9,
      "reviews": 94,
      "cats": [
        "bathroom"
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
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "James Earl Jones LLC",
      "address": "600 E Main St, Lancaster, TX 75146, USA",
      "phone": "(972) 780-6011",
      "website": "http://www.burglarbarsdfw.com/",
      "rating": 4.2,
      "reviews": 10,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Royal Bathroom Remodeling Dallas",
      "address": "2323 Bryan St, Dallas, TX 75201, USA",
      "phone": "(469) 249-8764",
      "website": "https://royalbathroomremodelingdallas.com/",
      "rating": 5,
      "reviews": 35,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Bluestone Bathroom Remodeling",
      "address": "13154 Coit Rd #222, Dallas, TX 75240, USA",
      "phone": "(214) 203-1030",
      "website": "https://callbluestone.com/",
      "rating": 5,
      "reviews": 31,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DFW Bathroom Remodeling",
      "address": "4831 McKinney Ave, Dallas, TX 75205, USA",
      "phone": "(214) 305-2229",
      "website": "http://www.dfwbathroomremodeling.com/",
      "rating": 5,
      "reviews": 72,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DFW Bathroom & Kitchen Solution",
      "address": "4300 MacArthur Ave, Highland Park, TX 75209, USA",
      "phone": "(817) 697-0335",
      "website": "http://www.dfwbathandkitchensolution.com/",
      "rating": 5,
      "reviews": 99,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of South Dallas",
      "address": "1202 S Alexander Ave, Duncanville, TX 75137, USA",
      "phone": "(681) 484-8117",
      "website": "http://fivestarbathsolutions.com/south-dallas-tx",
      "rating": 4.9,
      "reviews": 62,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lone Star Home Remodeling Pros of Dallas",
      "address": "3634 Mockingbird Ln, Dallas, TX 75205, USA",
      "phone": "(214) 751-6984",
      "website": "https://www.lonestarhomeremodelingpros.com/locations-dallas-texas-usa",
      "rating": 5,
      "reviews": 36,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "744 Ave H East, Arlington, TX 76011, USA",
      "phone": "(682) 206-3531",
      "website": "https://www.bathfitter.com/us-en/location/dallasfortworth/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.6,
      "reviews": 153,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "New Tech Bathroom Remodeling Dallas",
      "address": "1910 Pacific Ave Ste 17177, Dallas, TX 75201, USA",
      "phone": "(469) 489-3976",
      "website": "https://www.newbathtech.com/bathroom-remodeling-dallas-tx/?utm_source=GMBDallas&utm_medium=organic",
      "rating": 5,
      "reviews": 25,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "NOMI - Bathroom Remodeling Dallas TX",
      "address": "5956 Sherry Ln #1000, Dallas, TX 75225, USA",
      "phone": "(800) 371-8970",
      "website": "https://nomibath.com/location/bathroom-remodel-dallas/",
      "rating": 5,
      "reviews": 23,
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
      "reviews": 603,
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
      "name": "Leaf Home Stair Lift",
      "address": "2550 114th St #150, Grand Prairie, TX 75050, USA",
      "phone": "(469) 751-7071",
      "website": "https://www.leafhome.com/locations/texas/dallas/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_MzMyOTI5NTUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Ascend Accessibility",
      "address": "2910 Belmeade Dr #101, Carrollton, TX 75006, USA",
      "phone": "(214) 319-8907",
      "website": "https://ascendaccessibility.com/?utm_source=google&utm_medium=organic&utm_campaign=google_business_profile&utm_content=carrollton-tx",
      "rating": 5,
      "reviews": 9,
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
      "name": "BEK Home Medical Equipment",
      "address": "9151 Forest Ln, Dallas, TX 75243, USA",
      "phone": "(972) 231-1129",
      "website": "https://www.bekmedical.com/?y_source=1_OTkwMjE0Ni03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.4,
      "reviews": 67,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "4150 I-30, Mesquite, TX 75150, USA",
      "phone": "(214) 736-1710",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-mesquite-dallas-texas?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=dallas",
      "rating": 4.6,
      "reviews": 94,
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
      "name": "NG Platinum Homes",
      "address": "9330 Lyndon B Johnson Fwy Ste 905, Dallas, TX 75243, USA",
      "phone": "(469) 667-3334",
      "website": "https://ngplatinumhomes.com/kitchen-remodeler-in-dallas-texas/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "BRYJO Roofing and Remodeling",
      "address": "913 18th St, Plano, TX 75074, USA",
      "phone": "(972) 669-7807",
      "website": "https://www.bryjo.com/",
      "rating": 4.8,
      "reviews": 50,
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
      "name": "Luxury Home Remodeling",
      "address": "10434 Stone Canyon Rd, Dallas, TX 75230, USA",
      "phone": "(817) 727-8252",
      "website": "https://www.luxuryhomeremodeling.net/",
      "rating": 5,
      "reviews": 43,
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
      "reviews": 641,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Aging In Wellness LLC",
      "address": "6750 Hillcrest Plaza Dr Ste 206, Dallas, TX 75230, USA",
      "phone": "(972) 824-3413",
      "website": "https://aginginwellness.com/",
      "rating": 5,
      "reviews": 21,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "ON Group Remodeling & Construction",
      "address": "2727 Lyndon B Johnson Fwy #568, Dallas, TX 75234, USA",
      "phone": "(469) 324-2888",
      "website": "https://ongroupconstructions.com/",
      "rating": 5,
      "reviews": 110,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "At Home Personal Care - Home Health Care, In-Home Care, Caregivers, and Personal Care for Dallas and Fort Worth",
      "address": "8330 Lyndon B Johnson Fwy Ste B240, Dallas, TX 75243, USA",
      "phone": "(214) 997-6092",
      "website": "https://www.athomeprctexas.com/",
      "rating": 4.8,
      "reviews": 86,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Stay In Home Care",
      "address": "8300 Douglas Ave, Dallas, TX 75225, USA",
      "phone": "(214) 612-6686",
      "website": "http://www.stayinhomecare.net/",
      "rating": 5,
      "reviews": 32,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "9330 Lyndon B Johnson Fwy Ste 1125, Dallas, TX 75243, USA",
      "phone": "(214) 340-9900",
      "website": "https://www.rightathome.net/north-dallas/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1102",
      "rating": 4.9,
      "reviews": 84,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "DFW Home Health",
      "address": "13140 Coit Rd #450, Dallas, TX 75240, USA",
      "phone": "(214) 891-8700",
      "website": "https://lhcgroup.com/locations/dfw-home-health-of-dallas/?utm_source=GMB&utm_campaign=Google_Local_Listing&utm_medium=referral&utm_content=DFW_Home_Health_Fort_Worth_TX_76104-4137",
      "rating": 2.9,
      "reviews": 27,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "All Is Well Home Care",
      "address": "4417 S Lancaster Rd #2280, Dallas, TX 75216, USA",
      "phone": "(214) 426-1900",
      "website": "http://www.alliswelldfw.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Care Assistance of Park Cities",
      "address": "4305 Maple Ave Ste C, Dallas, TX 75219, USA",
      "phone": "(214) 363-3400",
      "website": "https://homecareassistanceofdallas.com/?utm_source=GMB&utm_campaign=gmb_park_cities",
      "rating": 4.8,
      "reviews": 78,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "24-7 HOMEHEALTH LLC",
      "address": "621 Avenue G Suite 200, Dallas, TX 75203, USA",
      "phone": "(972) 803-3433",
      "website": "https://24x7homehealth.com/",
      "rating": 4.8,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Newport Home Health Agency",
      "address": "2919 Commerce St Ste 158, Dallas, TX 75226, USA",
      "phone": "(972) 602-3500",
      "website": "https://newporthomehealth.com/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Dallas - Park Cities",
      "address": "8350 N US, 75 N Central Expy 1000 #M1018, Dallas, TX 75206, USA",
      "phone": "(214) 368-2225",
      "website": "https://www.visitingangels.com/parkcities/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 5,
      "reviews": 18,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Divine Roses Home Health and Palliative Care",
      "address": "3000 Keller Springs Rd Apt 406, Carrollton, TX 75006, USA",
      "phone": "(469) 758-0070",
      "website": "http://northtexasbesthomehealth.com/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Matters Caregiving",
      "address": "8330 Lyndon B Johnson Fwy Ste B230, Dallas, TX 75243, USA",
      "phone": "(214) 427-4006",
      "website": "https://homematters.com/north-dallas-tx",
      "rating": 4.9,
      "reviews": 66,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Always Best Care Senior Services - Home Care Services in Dallas",
      "address": "13101 Preston Rd #515, Dallas, TX 75240, USA",
      "phone": "(972) 460-6802",
      "website": "https://alwaysbestcare.com/dallas/",
      "rating": 4.3,
      "reviews": 32,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Amada Senior Care",
      "address": "13610 Midway Rd Suite 240, Dallas, TX 75244, USA",
      "phone": "(972) 440-1941",
      "website": "https://www.amadaseniorcare.com/dallas-senior-care/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=dallas",
      "rating": 4.9,
      "reviews": 64,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Mom's Best Friend Senior Care & Elderly Care",
      "address": "5949 Sherry Ln Ste 1675, Dallas, TX 75225, USA",
      "phone": "(214) 239-4339",
      "website": "https://mbfseniorcare.com/",
      "rating": 5,
      "reviews": 22,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Care Dallas Aging Gracefully",
      "address": "10611 Garland Rd #218B, Dallas, TX 75218, USA",
      "phone": "(972) 222-1500",
      "website": "http://www.seniorcaredallas.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Granny NANNIES of Dallas, TX",
      "address": "17290 Preston Rd Suite 300-C1, Dallas, TX 75252, USA",
      "phone": "(972) 544-1169",
      "website": "https://grannynannies.com/Dallas?utm_source=google&utm_medium=organic&utm_campaign=gbp-dallas&utm_id=local&utm_content=dallas",
      "rating": 4.8,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "My Ride Dallas",
      "address": "1341 W Mockingbird Ln #1000w, Dallas, TX 75247, USA",
      "phone": "(972) 855-8084",
      "website": "http://myridedallas.org/",
      "rating": 3.7,
      "reviews": 6,
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
      "name": "The Senior Source",
      "address": "3910 Harry Hines Blvd, Dallas, TX 75219, USA",
      "phone": "(469) 557-5914",
      "website": "https://www.theseniorsource.org/?utm_campaign=gmb",
      "rating": 4.6,
      "reviews": 179,
      "cats": [
        "transport",
        "social"
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
      "name": "Metroplex Senior Transport (NEMT)",
      "address": "2100 N Hwy 360 Ste 2007B, Grand Prairie, TX 75050, USA",
      "phone": "(972) 482-1026",
      "website": "https://metroplexseniortransportation.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Life Care Non Emergency Medical Transport LLC",
      "address": "280 W Renner Rd, Richardson, TX 75080, USA",
      "phone": "(682) 338-3640",
      "website": "https://lifecarenemt.com/",
      "rating": 4.9,
      "reviews": 17,
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
      "reviews": 23,
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
      "name": "Sunrise Senior Center",
      "address": "13521 Method St, Dallas, TX 75243, USA",
      "phone": "(469) 583-9832",
      "website": "https://sunriseseniorcenter.com/",
      "rating": 4.8,
      "reviews": 8,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Catholic Charities of Dallas Brady Senior Center",
      "address": "2843 Lapsley St, Dallas, TX 75212, USA",
      "phone": "(214) 826-8335",
      "website": "https://ccdallas.org/",
      "rating": 4.1,
      "reviews": 8,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Richardson Senior Citizen Center",
      "address": "820 W Arapaho Rd #100, Richardson, TX 75080, USA",
      "phone": "(972) 744-7800",
      "website": "http://www.cor.net/",
      "rating": 4.6,
      "reviews": 161,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Carrollton Senior Center",
      "address": "1720 Keller Springs Rd, Carrollton, TX 75006, USA",
      "phone": "(972) 466-4850",
      "website": "http://www.cityofcarrollton.com/departments/departments-g-p/parks-recreation/facilities/senior-center",
      "rating": 4.6,
      "reviews": 188,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Heritage Senior Center",
      "address": "200 S Jefferson St, Irving, TX 75060, USA",
      "phone": "(972) 721-2496",
      "website": "https://irvingtx.gov/seniors",
      "rating": 4.6,
      "reviews": 220,
      "cats": [
        "social"
      ]
    },
    {
      "name": "D.L. Hopkins Jr. Senior Center",
      "address": "206 James Collins Blvd, Duncanville, TX 75116, USA",
      "phone": "(972) 780-5073",
      "website": "http://www.duncanvilletx.gov/",
      "rating": 4.6,
      "reviews": 92,
      "cats": [
        "social"
      ]
    },
    {
      "name": "DeSoto Senior Center",
      "address": "204 Lion St, DeSoto, TX 75115, USA",
      "phone": "(972) 230-5826",
      "website": "https://desototexas.gov/departments/parks___recreation/facilities/senior_activity_center/index.php",
      "rating": 4.7,
      "reviews": 87,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Branch Connection Active Adult Center",
      "address": "14055 Dennis Ln, Farmers Branch, TX 75234, USA",
      "phone": "(972) 919-8740",
      "website": "http://www.thebranchconnection.com/",
      "rating": 4.9,
      "reviews": 148,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The Rose Community Center",
      "address": "1949 N Washington Ave, Dallas, TX 75204, USA",
      "phone": "(972) 331-4774",
      "website": "http://www.behindeverydoor.org/",
      "rating": 4.5,
      "reviews": 19,
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
      "name": "We Care Adult Day Services",
      "address": "3200 S Lancaster Rd #609, Dallas, TX 75216, USA",
      "phone": "",
      "website": "",
      "rating": 3.7,
      "reviews": 30,
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
      "name": "An Angel's Touch ISS & Therapy Facility",
      "address": "5409 N Jim Miller Rd Ste 211, Dallas, TX 75227, USA",
      "phone": "(214) 280-0379",
      "website": "http://anangelstouchhcs.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Bright Horizons Adult Day Center",
      "address": "3424 Midcourt Rd, Carrollton, TX 75006, USA",
      "phone": "(214) 762-6392",
      "website": "https://brighthorizonsadultdaycenter.com/",
      "rating": 5,
      "reviews": 1,
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
      "name": "A Higher Learning Activity Center, Inc",
      "address": "1150 Empire Central Pl Ste 106, Dallas, TX 75247, USA",
      "phone": "(214) 499-8202",
      "website": "http://ahigherlearningactivitycenter.com/",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Scenario Adult Restorative Nursing & Day Services",
      "address": "3257 W Northwest Hwy, Dallas, TX 75220, USA",
      "phone": "(214) 351-1212",
      "website": "",
      "rating": 5,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Michael B Cohen & Associates",
      "address": "12201 Merit Dr Ste 230, Dallas, TX 75251, USA",
      "phone": "(214) 720-0102",
      "website": "http://www.dallaselderlawyer.com/",
      "rating": 4.9,
      "reviews": 125,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "McNair Dallas Law",
      "address": "5050 Quorum Dr Ste 700, Dallas, TX 75254, USA",
      "phone": "(469) 210-8371",
      "website": "https://mcnair-dallaslaw.com/",
      "rating": 4.8,
      "reviews": 41,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Wendy Whiteman Law",
      "address": "2626 Cole Ave suit 300, Dallas, TX 75204, USA",
      "phone": "(214) 210-2928",
      "website": "http://www.wendywhitemanlaw.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Pyke, Balen, & Moncure, P.C.",
      "address": "7557 Rambler Rd #850, Dallas, TX 75231, USA",
      "phone": "(214) 866-0133",
      "website": "http://www.dallasprobatelaw.com/",
      "rating": 4.8,
      "reviews": 86,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ellen Williamson Law, PC",
      "address": "2626 Cole Ave suit 300, Dallas, TX 75204, USA",
      "phone": "(214) 842-6462",
      "website": "http://ellenwilliamsonlaw.com/",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Vermillion Law Firm LLC",
      "address": "12655 N US 75, N Central Expy 1000 #250, Dallas, TX 75251, USA",
      "phone": "(972) 386-4560",
      "website": "http://www.vermillionlawfirm.com/",
      "rating": 4.2,
      "reviews": 5,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Duran Firm",
      "address": "LB 20A, 13355 Noel Rd Ste 1100, Dallas, TX 75240, USA",
      "phone": "(469) 708-6050",
      "website": "https://duranfirm.com/",
      "rating": 4.9,
      "reviews": 170,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Krupa Downs Law, PLLC (Chris Krupa Downs, Attorney)",
      "address": "400 Chisholm Pl Ste 216, Plano, TX 75075, USA",
      "phone": "(214) 556-3862",
      "website": "https://www.krupadownslaw.com/estate-planning-attorney-in-plano-tx/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 5,
      "reviews": 123,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "D.P.WOOD LAW, PLLC",
      "address": "17177 Preston Rd #340, Dallas, TX 75248, USA",
      "phone": "(469) 310-3377",
      "website": "https://www.dpwoodlaw.com/",
      "rating": 5,
      "reviews": 30,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Holman Law",
      "address": "12222 Merit Dr Ste 1200, Dallas, TX 75251, USA",
      "phone": "(972) 474-7828",
      "website": "https://holmanlawllp.com/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 49,
      "cats": [
        "legal"
      ]
    }
  ],
  "jacksonville-fl": [
    {
      "name": "Install Don't Fall Fl.",
      "address": "1265 Arredondo Grant Rd, De Leon Springs, FL 32130, USA",
      "phone": "(407) 496-6066",
      "website": "http://installdontfall.com/",
      "rating": 4.9,
      "reviews": 66,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Mr. Handyman serving Greater Jacksonville",
      "address": "1107 Park Ave, Orange Park, FL 32073, USA",
      "phone": "(904) 329-7535",
      "website": "https://www.mrhandyman.com/greater-jacksonville/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.8,
      "reviews": 848,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Premier Home Pros",
      "address": "5105 Philips Hwy Ste 4-5, Jacksonville, FL 32207, USA",
      "phone": "(855) 209-7818",
      "website": "https://premier-homepros.com/",
      "rating": 4.8,
      "reviews": 148,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of Jacksonville",
      "address": "5783 Mining Terrace #9, Jacksonville, FL 32257, USA",
      "phone": "(904) 775-7757",
      "website": "https://fivestarbathsolutions.com/jacksonville-fl",
      "rating": 4.9,
      "reviews": 235,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Bath Planet of Jacksonville",
      "address": "2410 Lucy Branch Ave, Orange Park, FL 32073, USA",
      "phone": "(904) 320-1961",
      "website": "https://bathplanetjacksonville.com/",
      "rating": 4.5,
      "reviews": 105,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Next Day Access Northeast Florida",
      "address": "6370 US-1 Bldg 1, St. Augustine, FL 32095, USA",
      "phone": "(904) 650-4573",
      "website": "https://www.nextdayaccess.com/",
      "rating": 5,
      "reviews": 94,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Lifegrip Solutions",
      "address": "1260 Vanderbilt Dr, Ormond Beach, FL 32174, USA",
      "phone": "(386) 627-9238",
      "website": "https://www.lifegripsolutions.com/",
      "rating": 5,
      "reviews": 160,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Preston Home Medical Supplies",
      "address": "6022 Atlantic Blvd B, Jacksonville, FL 32211, USA",
      "phone": "(904) 722-1882",
      "website": "http://www.jacksonvillehomemedicalsupplies.com/",
      "rating": 4.8,
      "reviews": 69,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "One & Done Bath Solutions",
      "address": "6800 Southpoint Pkwy Ste 150, Jacksonville, FL 32216, USA",
      "phone": "(855) 444-3689",
      "website": "https://www.oneanddonebaths.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp_jacksonville",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Love Your Bath, LLC",
      "address": "9075 Warwickshire Rd, Jacksonville, FL 32257, USA",
      "phone": "(866) 530-9805",
      "website": "https://loveyourbath.com/",
      "rating": 4.6,
      "reviews": 10,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "4163 Philips Hwy, Jacksonville, FL 32207, USA",
      "phone": "(855) 229-7708",
      "website": "https://www.bathfitter.com/us-en/location/jacksonville/",
      "rating": 4.4,
      "reviews": 191,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Long Home",
      "address": "4110 Southpoint Blvd Ste 215, Jacksonville, FL 32216, USA",
      "phone": "(904) 943-2284",
      "website": "https://longhome.com/locations/florida/?utm_source=gbp&utm_medium=local&utm_campaign=jacksonvillefl",
      "rating": 4.9,
      "reviews": 16,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "11048 Baymeadows Rd Ste 5, Jacksonville, FL 32256, USA",
      "phone": "(904) 209-9629",
      "website": "https://www.rebath.com/location/jacksonville/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 176,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "1333 Tradeport Dr, Jacksonville, FL 32218, USA",
      "phone": "(904) 844-0849",
      "website": "https://westshorehome.com/locations/jacksonville-fl/?utm_source=gbp&utm_medium=organic&utm_branch=jacksonville",
      "rating": 4.8,
      "reviews": 793,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "RF Remodeling Solutions| Kitchen & Bath Remodeling",
      "address": "12932 Tree Way Ln, Jacksonville, FL 32258, USA",
      "phone": "",
      "website": "http://www.rfremodelingsolutions.com/",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "HandiLift Jacksonville",
      "address": "5220 Shad Rd #205, Jacksonville, FL 32257, USA",
      "phone": "(904) 903-7759",
      "website": "https://www.handiliftjacksonville.com/",
      "rating": 4.6,
      "reviews": 32,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Accessibility Specialists-Fl",
      "address": "9556 Historic Kings Rd S #107, Jacksonville, FL 32257, USA",
      "phone": "(904) 260-6675",
      "website": "http://asioffl.com/",
      "rating": 5,
      "reviews": 9,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Equipment Jacksonville",
      "address": "7660 Philips Hwy Unit #4, Jacksonville, FL 32217, USA",
      "phone": "(904) 903-7759",
      "website": "https://mobilityequipmentjacksonville.com/",
      "rating": 4.7,
      "reviews": 130,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Home Ability Store",
      "address": "3728 Philips Hwy #22, Jacksonville, FL 32207, USA",
      "phone": "(904) 999-4705",
      "website": "https://www.homeabilitystore.com/",
      "rating": 4.7,
      "reviews": 77,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "6000 Lake Gray Blvd a01, Jacksonville, FL 32244, USA",
      "phone": "(904) 694-3378",
      "website": "https://mobilitycity.com/jacksonville-fl/?utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 95,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "NewDay Mobility",
      "address": "6835 Narcoossee Rd Unit 19, Orlando, FL 32822, USA",
      "phone": "(855) 368-2729",
      "website": "https://newdaymobility.com/",
      "rating": 5,
      "reviews": 32,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "11651 Central Pkwy Unit 117, Jacksonville, FL 32224, USA",
      "phone": "(904) 582-8808",
      "website": "https://www.leafhome.com/locations/florida/jacksonville/stair-lift?y_source=1_MTA5NDQ0NzEwOS03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 1,
      "reviews": 1,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "EZ4U Mobility",
      "address": "1719 Girvin Rd, Jacksonville, FL 32225, USA",
      "phone": "(904) 299-4599",
      "website": "https://ezumobility.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "2727 St Johns Bluff Rd S, Jacksonville, FL 32246, USA",
      "phone": "(904) 383-3180",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-jacksonville-florida/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=jacksonville",
      "rating": 4.4,
      "reviews": 42,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "RampDR",
      "address": "12950 58th St N Unit 19, Clearwater, FL 33760, USA",
      "phone": "(727) 336-9881",
      "website": "https://www.rampdr.com/",
      "rating": 5,
      "reviews": 61,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Amramp Accessibility of Jacksonville",
      "address": "3025 Southshore Cir, Tallahassee, FL 32312, USA",
      "phone": "(850) 988-7264",
      "website": "https://amramp.com/north-florida/?utm_source=gmb&utm_medium=yext",
      "rating": null,
      "reviews": null,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Action Disability Resources",
      "address": "5609 Timuquana Rd, Jacksonville, FL 32210, USA",
      "phone": "(904) 777-1979",
      "website": "https://actiondisabilityresourcesreviews.com/",
      "rating": 4.5,
      "reviews": 46,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "AP Advanced Construction",
      "address": "11527 San Jose Blvd, Jacksonville, FL 32223, USA",
      "phone": "(904) 298-7463",
      "website": "https://apadvanced.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp-listing-jacksonville",
      "rating": 4.5,
      "reviews": 130,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Legacy Renovations LLC",
      "address": "2210 Corporate Square Blvd #4, Jacksonville, FL 32216, USA",
      "phone": "(904) 586-8233",
      "website": "http://legacyrenovations.com/",
      "rating": 4.9,
      "reviews": 113,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Inga Home Renovations",
      "address": "130 Corridor Rd Unit 774, Ponte Vedra Beach, FL 32004, USA",
      "phone": "(904) 834-1464",
      "website": "http://www.ingahome.com/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Designer Lifestyles LLC - Home Design Center",
      "address": "5065 St Augustine Rd #5, Jacksonville, FL 32207, USA",
      "phone": "(904) 631-8954",
      "website": "https://designerlifestyles.com/",
      "rating": 4.6,
      "reviews": 94,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Ace Handyman Services Jacksonville",
      "address": "701 Market St Ste 111, St. Augustine, FL 32095, USA",
      "phone": "(904) 436-5977",
      "website": "https://www.acehandymanservices.com/offices/jacksonville?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_id=2060digital",
      "rating": 4.9,
      "reviews": 324,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Excellsior Home Health",
      "address": "11437 Central Pkwy Ste 106, Jacksonville, FL 32224, USA",
      "phone": "(904) 203-1323",
      "website": "http://www.excellsiorhomehealth.com/",
      "rating": 4.9,
      "reviews": 73,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Choice Matters Home Healthcare, Inc.",
      "address": "4741 Atlantic Blvd d, Jacksonville, FL 32207, USA",
      "phone": "(904) 680-1256",
      "website": "http://www.choicemattershhc.com/",
      "rating": 4.9,
      "reviews": 72,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "BAYADA Home Health | Personal & Companion Care Services, Jacksonville, FL",
      "address": "4651 Salisbury Rd Ste 430, Jacksonville, FL 32256, USA",
      "phone": "(904) 341-4916",
      "website": "https://www.bayada.com/personal-and-companion-care/duval-county-94533",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Allstar Home Care",
      "address": "12724 Gran Bay Pkwy Ste 410, Jacksonville, FL 32258, USA",
      "phone": "(904) 688-5100",
      "website": "http://www.allstar-homecare.com/",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "American In-Home Care - Jacksonville",
      "address": "9471 Baymeadows Rd Ste 401, Jacksonville, FL 32256, USA",
      "phone": "(904) 737-7667",
      "website": "https://www.americaninhomecare.com/location/jacksonville/",
      "rating": 4.9,
      "reviews": 24,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Diligent Home Health Care",
      "address": "5757 Booth Rd Bldg 100, Jacksonville, FL 32216, USA",
      "phone": "(904) 425-1414",
      "website": "http://diligenthomecare.com/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Welcome Homecare",
      "address": "9570 Regency Square Blvd, Jacksonville, FL 32225, USA",
      "phone": "(904) 474-5455",
      "website": "http://www.welcomehomecare.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Assisting Hands Home Care",
      "address": "263 River Hills Dr #2, Jacksonville, FL 32216, USA",
      "phone": "(904) 543-2300",
      "website": "https://assistinghands.com/95/florida/jacksonvillebeaches/",
      "rating": 5,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "10175 Fortune Pkwy #202, Jacksonville, FL 32256, USA",
      "phone": "(904) 201-3566",
      "website": "https://www.rightathome.net/jacksonville/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1586",
      "rating": 4.9,
      "reviews": 110,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of Jacksonville",
      "address": "9191 R G Skinner Pkwy Suite 801, Jacksonville, FL 32256, USA",
      "phone": "(904) 644-5585",
      "website": "https://www.homeinstead.com/home-care/usa/fl/jacksonville/183/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 58,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors",
      "address": "2021 Art Museum Dr #115, Jacksonville, FL 32207, USA",
      "phone": "(904) 525-7236",
      "website": "https://locations.seniorshelpingseniors.com/fl/jacksonville/117.html",
      "rating": 5,
      "reviews": 36,
      "cats": [
        "homecare",
        "transport"
      ]
    },
    {
      "name": "Amada Senior Care",
      "address": "13400 Sutton Park Dr S #1402, Jacksonville, FL 32224, USA",
      "phone": "(904) 506-4597",
      "website": "https://www.amadaseniorcare.com/jacksonville-senior-care/?utm_source=gbp&utm_medium=organic&utm_campaign=gbp-listing&utm_content=jacksonville",
      "rating": 4.9,
      "reviews": 64,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "A Place At Home - Jacksonville Southeast",
      "address": "4237 Salisbury Rd Bldg 3, Suite 305, Jacksonville, FL 32216, USA",
      "phone": "(904) 539-4688",
      "website": "https://aplaceathome.com/jacksonville-southeast/",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors® Northeast FL",
      "address": "10151 Deerwood Park Blvd Bldg 200, Ste 250, Jacksonville, FL 32256, USA",
      "phone": "(904) 344-8826",
      "website": "https://locations.seniorshelpingseniors.com/fl/jacksonville/91.html",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Cornerstone Caregiving",
      "address": "1628 San Marco Blvd Ste 9, San Marco, FL 32207, USA",
      "phone": "(904) 830-6360",
      "website": "https://cornerstonecaregiving.com/locations/south-jacksonville-fl/?utm_source=google&utm_medium=yext",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care South Jacksonville",
      "address": "3733 University Blvd W #212, Jacksonville, FL 32217, USA",
      "phone": "(904) 891-5943",
      "website": "http://www.visitingangels.com/southjax/home/?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.4,
      "reviews": 20,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Granny NANNIES | Senior Home Care Jacksonville",
      "address": "8130 Baymeadows Cir W Ste 110, Jacksonville, FL 32256, USA",
      "phone": "(904) 731-2100",
      "website": "https://grannynannies.com/jacksonville",
      "rating": 4.8,
      "reviews": 30,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "JTA Connexion",
      "address": "100 Myrtle Ave N, Jacksonville, FL 32204, USA",
      "phone": "(904) 265-6999",
      "website": "https://rymap.org/business/jta-connexion-hnxu82",
      "rating": 3.7,
      "reviews": 271,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Angels Of Service Transportation, L.L.C.",
      "address": "4444 Ish Brant Rd W, Jacksonville, FL 32210, USA",
      "phone": "(833) 878-5683",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Advanced Care Transportation dba ACCESS",
      "address": "6501 Arlington Expy Bldg A #202, Jacksonville, FL 32211, USA",
      "phone": "(904) 539-8484",
      "website": "http://www.myrideaccess.com/",
      "rating": 4.9,
      "reviews": 68,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Aging True",
      "address": "4250 Lakeside Dr #116, Jacksonville, FL 32210, USA",
      "phone": "(904) 807-1203",
      "website": "http://agingtrue.org/",
      "rating": 3.9,
      "reviews": 50,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Found-A-Ride Jacksonville",
      "address": "841 Prudential Dr Ste 1200, Jacksonville, FL 32207, USA",
      "phone": "(800) 999-8552",
      "website": "https://foundaride.com/jacksonville-car-service/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Southside Community Center",
      "address": "10080 Beach Blvd, Jacksonville, FL 32246, USA",
      "phone": "(904) 255-6940",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/southside-community-center",
      "rating": 4.5,
      "reviews": 58,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mary L. Singleton Senior Center",
      "address": "150 E 1st St, Jacksonville, FL 32206, USA",
      "phone": "(904) 255-6666",
      "website": "https://www.jacksonville.gov/",
      "rating": 4.4,
      "reviews": 108,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lane Wiley Senior Center",
      "address": "6710 Wiley Rd, Jacksonville, FL 32210, USA",
      "phone": "(904) 783-6589",
      "website": "http://www.coj.net/Departments/Recreation-and-Community-Services/Adult-Services/Community-and-Senior-Centers/Lane-Wiley-Senior-Center,-6710-Wiley-Road.aspx",
      "rating": 4.5,
      "reviews": 185,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Mandarin Senior Center",
      "address": "3848 Hartley Rd, Jacksonville, FL 32257, USA",
      "phone": "(904) 255-6750",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/mandarin-senior-center",
      "rating": 4.7,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Frances Padgett Senior Center",
      "address": "1078 Rogero Rd, Jacksonville, FL 32211, USA",
      "phone": "(904) 723-6142",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/frances-padgett-arlington-senior-center",
      "rating": 4.4,
      "reviews": 62,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Jim Fortuna Senior Center",
      "address": "11751 McCormick Rd, Jacksonville, FL 32225, USA",
      "phone": "(904) 996-0211",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/jim-fortuna-senior-center",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Oceanway Senior Center",
      "address": "12215 Sago Ave W, Jacksonville, FL 32218, USA",
      "phone": "(904) 696-4331",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/oceanway-senior-center",
      "rating": 4.5,
      "reviews": 42,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Charlie Joseph Senior Center",
      "address": "6943 Buffalo Ave, Jacksonville, FL 32208, USA",
      "phone": "(904) 255-6822",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/charlie-t-joseph-senior-center",
      "rating": 4.5,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Long Branch Senior Center",
      "address": "4110 Franklin St, Jacksonville, FL 32206, USA",
      "phone": "(904) 630-0893",
      "website": "",
      "rating": 4.9,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lincoln Villa Senior Center",
      "address": "7866 New Kings Rd, Jacksonville, FL 32219, USA",
      "phone": "(904) 765-2654",
      "website": "https://www.jacksonville.gov/departments/parks-and-recreation/senior-services/community-and-senior-center-services/community-and-senior-centers/lincoln-villa-senior-center",
      "rating": 4.5,
      "reviews": 61,
      "cats": [
        "social"
      ]
    },
    {
      "name": "River Garden Adult Day Care Program",
      "address": "11401 Old St Augustine Rd, Jacksonville, FL 32258, USA",
      "phone": "(904) 288-7858",
      "website": "http://www.rivergarden.org/adultday",
      "rating": 4.6,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Almost Home DayBreak",
      "address": "3604 Cardinal Point Dr, Jacksonville, FL 32257, USA",
      "phone": "(904) 731-4002",
      "website": "https://www.almosthomeseniorservices.com/",
      "rating": 4.1,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Her Heart Gardens Adult Daytime Care",
      "address": "9150 Fort Caroline Rd, Jacksonville, FL 32225, USA",
      "phone": "(904) 743-3315",
      "website": "http://herheartalf.com/adult-day-service/",
      "rating": 5,
      "reviews": 14,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Peaches-Na-Basket Adult Day Care",
      "address": "2040 Soutel Dr, Jacksonville, FL 32208, USA",
      "phone": "(904) 766-4993",
      "website": "",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Stay For The Day Adult Day Care",
      "address": "5800 Beach Blvd #111, Jacksonville, FL 32207, USA",
      "phone": "(904) 400-5020",
      "website": "http://stayforthedayjax.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "TruCare Health Services",
      "address": "1068 Arlington Rd N, Jacksonville, FL 32211, USA",
      "phone": "(904) 866-2659",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Utopia living adult day training/daycare/ Group Home",
      "address": "7230 Lem Turner Cir, Jacksonville, FL 32208, USA",
      "phone": "(904) 333-4946",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Porter's Adult Care and Training",
      "address": "PERSONAL CARE OR HANDS ON SERVICES ARE NOT ALLOWED WITH HOMEMAKER & COMPANION SERVICES WE PROVIDE FINGERPRINTING AND NOTARY MOBILE SERVICES, 700 Day Ave, Jacksonville, FL 32205, USA",
      "phone": "(904) 349-1420",
      "website": "https://portersadultcare.com/",
      "rating": 5,
      "reviews": 6,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Life On Turton Avenue LLC",
      "address": "3534 Turton Ave, Jacksonville, FL 32208, USA",
      "phone": "(904) 713-8890",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Toney Adult Day Care",
      "address": "4406 Notter Ave, Jacksonville, FL 32206, USA",
      "phone": "(904) 355-2075",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Berg Bryant Elder Law Group, PLLC",
      "address": "7545 Centurion Pkwy N Ste 108, Jacksonville, FL 32256, USA",
      "phone": "(904) 736-7432",
      "website": "http://www.bbelderlaw.com/",
      "rating": 4.9,
      "reviews": 243,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Senior Counsel, Attorneys at Law",
      "address": "2318 Park St, Jacksonville, FL 32204, USA",
      "phone": "(904) 619-8890",
      "website": "https://www.seniorcounsellaw.com/",
      "rating": 4.6,
      "reviews": 25,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Boykin Elder Law, P.A.",
      "address": "6160 Arlington Expy, Jacksonville, FL 32211, USA",
      "phone": "(904) 632-4836",
      "website": "http://www.boykinelderlaw.com/",
      "rating": 4.4,
      "reviews": 39,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Nobles Elder Law PLLC",
      "address": "13475 Atlantic Blvd Unit 8, Jacksonville, FL 32225, USA",
      "phone": "(904) 404-5891",
      "website": "http://www.nobleselderlaw.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Schnauss Naugle Law",
      "address": "810 Margaret St, Jacksonville, FL 32204, USA",
      "phone": "(904) 366-2703",
      "website": "https://www.jaxlawteam.com/?npcmp=dir:local:4207469:32204",
      "rating": 4.9,
      "reviews": 65,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Bowers and Associates, P.A.",
      "address": "6789 Southpoint Pkwy Ste 300, Jacksonville, FL 32216, USA",
      "phone": "(904) 998-0724",
      "website": "http://bowerselderlaw.com/",
      "rating": 5,
      "reviews": 12,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Offices of Mark F. Moss, P.A.",
      "address": "12276 San Jose Blvd Ste 520, Jacksonville, FL 32223, USA",
      "phone": "(904) 329-7242",
      "website": "http://www.markmosslaw.com/",
      "rating": 5,
      "reviews": 246,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Legacy Planning Law Group",
      "address": "3430 Kori Rd Ste 4, Jacksonville, FL 32257, USA",
      "phone": "(904) 880-5554",
      "website": "https://legacyplanninglawgroup.com/",
      "rating": 4.9,
      "reviews": 193,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Edwards Law Firm",
      "address": "3030 Hartley Rd Ste 210, Jacksonville, FL 32257, USA",
      "phone": "(904) 672-7600",
      "website": "https://edwardslawfirm.com/",
      "rating": 4.6,
      "reviews": 48,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Ailish O'Connor P.A.",
      "address": "11555 Central Pkwy Ste 1001, Jacksonville, FL 32224, USA",
      "phone": "(904) 998-9050",
      "website": "http://aoelderlaw.com/",
      "rating": 4.9,
      "reviews": 14,
      "cats": [
        "legal"
      ]
    }
  ],
  "fort-worth-tx": [
    {
      "name": "Five Star Bath Solutions of Fort Worth",
      "address": "2527-J Minnis Dr, Haltom City, TX 76117, USA",
      "phone": "(817) 873-0723",
      "website": "http://fivestarbathsolutions.com/fort-worth-tx",
      "rating": 5,
      "reviews": 98,
      "cats": [
        "bathroom",
        "tubs"
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
        "bathroom"
      ]
    },
    {
      "name": "Ace Handyman Services Fort Worth SW",
      "address": "3421 S Grove St, Fort Worth, TX 76110, USA",
      "phone": "(682) 282-6815",
      "website": "https://www.acehandymanservices.com/offices/fort-worth-sw?utm_source=google&utm_medium=gbp",
      "rating": 4.9,
      "reviews": 560,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Next Day Access Fort Worth",
      "address": "600 W 6th St Fourth Floor, Fort Worth, TX 76102, USA",
      "phone": "(817) 646-7176",
      "website": "http://nextdayaccess.com/fort-worth-tx?utm_campaign=gmb",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Fort Worth Bathroom Remodelers",
      "address": "3201 Browning Ct W, Fort Worth, TX 76111, USA",
      "phone": "(817) 813-8774",
      "website": "https://fortworthbathroomremodelers.com/",
      "rating": null,
      "reviews": null,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Apex Supply Company",
      "address": "2200 Montgomery St, Fort Worth, TX 76107, USA",
      "phone": "(817) 732-8183",
      "website": "https://apexsupplyco.com/pages/location/fort-worth-cultural-district",
      "rating": 4.7,
      "reviews": 45,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Fort Worth Home Repair",
      "address": "2216 Mistletoe Ave, Fort Worth, TX 76110, USA",
      "phone": "(817) 201-7100",
      "website": "https://www.fortworthhomerepair.com/",
      "rating": 4.9,
      "reviews": 155,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Mr. Handyman of Arlington, Mansfield and Grapevine",
      "address": "719 W Harris Rd Ste E20-5, Arlington, TX 76001, USA",
      "phone": "(817) 567-2433",
      "website": "https://www.mrhandyman.com/arlington/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.7,
      "reviews": 482,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Ready Cable Inc. - Post Tension, Rebar, & Lumber",
      "address": "4416 Keller Hicks Rd, Fort Worth, TX 76244, USA",
      "phone": "(817) 379-6553",
      "website": "http://www.readycable.net/",
      "rating": 4.3,
      "reviews": 62,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "New Bathroom Remodeling Technologies Fort Worth",
      "address": "1201 Evans Ave #226, Fort Worth, TX 76104, USA",
      "phone": "(469) 457-4719",
      "website": "https://www.newbathtech.com/?utm_source=GMBFortWorth&utm_medium=organic",
      "rating": 4.9,
      "reviews": 86,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "DFW Bathroom Remodeling",
      "address": "5436 Blackmore Ave, Fort Worth, TX 76107, USA",
      "phone": "(817) 518-7895",
      "website": "https://www.dfwbathroomremodeling.com/",
      "rating": 5,
      "reviews": 49,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lone Star Home Remodeling Pros | Bathroom & Kitchen Remodeling",
      "address": "4200 Bridgeview Dr #0215, Fort Worth, TX 76109, USA",
      "phone": "(817) 859-8382",
      "website": "https://www.lonestarhomeremodelingpros.com/",
      "rating": 4.9,
      "reviews": 94,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lone Star Home Remodeling",
      "address": "5521 Cedar Breaks Dr B, Fort Worth, TX 76137, USA",
      "phone": "(817) 662-6791",
      "website": "https://www.lonestarhomeremodelingpros.com/locations-north-fort-worth-texas-usa",
      "rating": 4.9,
      "reviews": 49,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Luxury Home Remodeling DFW",
      "address": "3825 South Dr, Fort Worth, TX 76109, USA",
      "phone": "(817) 697-0158",
      "website": "https://www.luxuryhomeremodeling.net/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Five Star Bath Solutions of Alliance",
      "address": "305 Austin St, Keller, TX 76248, USA",
      "phone": "(817) 854-2584",
      "website": "http://fivestarbathsolutions.com/alliance-tx",
      "rating": 5,
      "reviews": 68,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Fort Worth Refinishing",
      "address": "2627 S Cooper St Suite E12, Arlington, TX 76015, USA",
      "phone": "(817) 633-9100",
      "website": "https://ftworthrefinishing.com/?utm_campaign=google&utm_medium=organic&utm_source=google_business_profile",
      "rating": 4.9,
      "reviews": 21,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Solutions",
      "address": "111 Melbourne Rd, Hurst, TX 76053, USA",
      "phone": "(817) 429-2318",
      "website": "http://www.bathsolutionsdfw.com/",
      "rating": 5,
      "reviews": 23,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "744 Ave H East, Arlington, TX 76011, USA",
      "phone": "(682) 206-3531",
      "website": "https://www.bathfitter.com/us-en/location/dallasfortworth/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.6,
      "reviews": 153,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "2000 E Lamar Blvd #600, Arlington, TX 76006, USA",
      "phone": "(972) 408-3335",
      "website": "https://www.lifewaymobility.com/dallas/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Dallas",
      "rating": 4.9,
      "reviews": 154,
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
      "name": "Leaf Home Stair Lift",
      "address": "2550 114th St #150, Grand Prairie, TX 75050, USA",
      "phone": "(469) 751-7071",
      "website": "https://www.leafhome.com/locations/texas/dallas/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_MzMyOTI5NTUtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 3.9,
      "reviews": 7,
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
      "name": "MobilityWorks",
      "address": "2110 N Beach St, Haltom City, TX 76111, USA",
      "phone": "(682) 316-1947",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-fort-worth-texas?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=fort_worth",
      "rating": 4.1,
      "reviews": 98,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lift Aids, Inc.",
      "address": "1500 Westpark Wy, Euless, TX 76040, USA",
      "phone": "(817) 835-0035",
      "website": "http://www.lift-aids.com/",
      "rating": 4.5,
      "reviews": 53,
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
      "name": "Numotion",
      "address": "2331 Gravel Dr, Fort Worth, TX 76118, USA",
      "phone": "(817) 921-3100",
      "website": "https://www.numotion.com/locations/fort-worth-tx",
      "rating": 4.6,
      "reviews": 244,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Salvation Home Remodeling",
      "address": "7716 Westwind Dr, Fort Worth, TX 76179, USA",
      "phone": "(817) 210-7117",
      "website": "https://shrtarrant.com/",
      "rating": 5,
      "reviews": 120,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Enduring Home Solutions",
      "address": "6412 Heidelburg Ct, North Richland Hills, TX 76180, USA",
      "phone": "(817) 642-7077",
      "website": "http://enduringhomesolutions.com/",
      "rating": 5,
      "reviews": 32,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Stanton & Co",
      "address": "4824 Camp Bowie Blvd, Fort Worth, TX 76107, USA",
      "phone": "(817) 731-5855",
      "website": "http://www.stantonandco.net/",
      "rating": 4.9,
      "reviews": 74,
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
      "name": "The Aging and Disability Resource Center of Tarrant County",
      "address": "201 N Rupert St Ste 107, Fort Worth, TX 76107, USA",
      "phone": "(855) 937-2372",
      "website": "http://tarrantcountyadrc.org/",
      "rating": 4.2,
      "reviews": 14,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Shawn M Cowdin Construction, LLC",
      "address": "7355 W Vickery Blvd B-9, Fort Worth, TX 76126, USA",
      "phone": "(817) 886-3386",
      "website": "http://www.smccllc.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "The Area Agency on Aging",
      "address": "1500 N Main St #200, Fort Worth, TX 76164, USA",
      "phone": "(817) 258-8081",
      "website": "http://www.unitedwaytarrant.org/aaa",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Tarrant County Area Agency on Aging",
      "address": "201 N Rupert St Ste 107, Fort Worth, TX 76107, USA",
      "phone": "(817) 258-8125",
      "website": "https://www.unitedwaytarrant.org/aaatc/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "remodel"
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
      "name": "Care Mountain Fort Worth",
      "address": "777 Main St Ste 600, Fort Worth, TX 76102, USA",
      "phone": "(817) 552-3914",
      "website": "https://www.caremountain.com/fort-worth-texas/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Family Tree Private Care",
      "address": "6100 Western Pl Ste 902, Fort Worth, TX 76107, USA",
      "phone": "(817) 921-9500",
      "website": "https://familytreecares.com/locations/in-home-care-fort-worth/",
      "rating": 5,
      "reviews": 40,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Devine Home Health Care Agency",
      "address": "6036 Meadowbrook Dr, Fort Worth, TX 76112, USA",
      "phone": "(817) 475-7089",
      "website": "https://mydevinecare.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Texas Angels Home Care",
      "address": "6310 Southwest Blvd Ste 202, Fort Worth, TX 76109, USA",
      "phone": "(817) 727-4525",
      "website": "https://www.texasangelshomecare.com/",
      "rating": 4.6,
      "reviews": 27,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Assisting Hands Home Care - Fort Worth & Surrounding Areas",
      "address": "4521 S Hulen St #110, Fort Worth, TX 76109, USA",
      "phone": "(817) 646-2970",
      "website": "https://assistinghands.com/15/texas/fortworthwest/?utm_source=google&utm_medium=gbp",
      "rating": 4.8,
      "reviews": 21,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "HEAVENLY HANDS HOME CARE",
      "address": "5009 Brentwood Stair Rd, Fort Worth, TX 76112, USA",
      "phone": "(817) 888-3112",
      "website": "http://www.heavenlyhandshomecarellc.com/",
      "rating": 5,
      "reviews": 8,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Nurse Next Door Home Care Services - Fort Worth, TX",
      "address": "4200 S Hulen St #650, Fort Worth, TX 76109, USA",
      "phone": "(817) 900-3800",
      "website": "https://www.nursenextdoor.com/locations/fort-worth-tx/",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "At Home Personal Care - Home Health Care, Home Care, Caregivers of Fort Worth",
      "address": "5601 Bridge St Ste 300, Fort Worth, TX 76112, USA",
      "phone": "",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "DFW Home Health",
      "address": "3909 Hulen St 3rd Floor, Fort Worth, TX 76107, USA",
      "phone": "(817) 529-7555",
      "website": "https://lhcgroup.com/locations/dfw-home-health-of-fort-worth/?utm_source=GMB&utm_campaign=Google_Local_Listing&utm_medium=referral&utm_content=DFW_Home_Health_Dallas_TX_75231",
      "rating": 2.6,
      "reviews": 18,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care Fort Worth",
      "address": "930 W 1st St #203, Fort Worth, TX 76102, USA",
      "phone": "(817) 877-1616",
      "website": "https://www.visitingangels.com/fortworth/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.7,
      "reviews": 55,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "4833 Bryant Irvin Ct Ste 100, Fort Worth, TX 76107, USA",
      "phone": "(682) 499-2926",
      "website": "https://www.homeinstead.com/home-care/usa/tx/fort-worth/451/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 34,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "TheKey - Senior Home Care",
      "address": "3601 NE Loop 820 Ste 104, Fort Worth, TX 76137, USA",
      "phone": "(682) 900-2806",
      "website": "https://thekey.com/fort-worth?utm_source=gmb&utm_medium=Yext",
      "rating": 4.9,
      "reviews": 78,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers Home Care",
      "address": "6777 Camp Bowie Blvd #301, Fort Worth, TX 76116, USA",
      "phone": "(817) 662-4270",
      "website": "https://www.comfortkeepers.com/offices/texas/fort-worth/?utm_source=local&utm_medium=organic",
      "rating": 4.8,
      "reviews": 75,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Overture Home Care",
      "address": "4200 S Hulen St #320, Fort Worth, TX 76109, USA",
      "phone": "(817) 887-9401",
      "website": "https://www.overturehomecare.com/fort-worth",
      "rating": 4.4,
      "reviews": 35,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Homewatch CareGivers of SW Fort Worth",
      "address": "5350 W Vickery Blvd, Fort Worth, TX 76107, USA",
      "phone": "(817) 904-4634",
      "website": "https://www.homewatchcaregivers.com/sw-fort-worth/?utm_source=gbp&utm_medium=organic&utm_campaign=sw-fort-worth",
      "rating": 4.9,
      "reviews": 19,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Fort Worth Non-Emergency Transportation \"NEMT\"",
      "address": "5413 Regal Ridge Dr #3102, Fort Worth, TX 76119, USA",
      "phone": "(682) 221-8746",
      "website": "https://fortworthnemt.net/",
      "rating": 4.9,
      "reviews": 77,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Seniors Transportation Services",
      "address": "2001 E Loop 820 S, Fort Worth, TX 76112, USA",
      "phone": "(817) 921-3700",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Just Ride Transportation LLC",
      "address": "2900 SE Loop 820, Fort Worth, TX 76140, USA",
      "phone": "(940) 210-7433",
      "website": "http://www.justride4u.com/",
      "rating": 4.9,
      "reviews": 24,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Serving Our Seniors Texas",
      "address": "3401 S Booth Calloway Rd, Richland Hills, TX 76118, USA",
      "phone": "(817) 282-0531",
      "website": "http://servingourseniorstexas.org/",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Social Transportation for Seniors",
      "address": "6000 Hawk Ave, North Richland Hills, TX 76180, USA",
      "phone": "(817) 427-6696",
      "website": "https://www.stsrides.org/contact/",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "4200 South Fwy #265, Fort Worth, TX 76115, USA",
      "phone": "(817) 765-6375",
      "website": "https://caringseniorservice.com/fort-worth/?utm_source=gmb&utm_medium=referral-link&utm_campaign=google-my-business",
      "rating": 4.7,
      "reviews": 15,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Senior's Transportation",
      "address": "5500 E Loop 820 S, Fort Worth, TX 76119, USA",
      "phone": "(817) 478-6633",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Lake Worth Senior Citizens Center",
      "address": "7005 Charbonneau Rd, Lake Worth, TX 76135, USA",
      "phone": "(817) 237-3281",
      "website": "https://www.lakeworthtx.org/senior-center",
      "rating": 4.6,
      "reviews": 67,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Casa Senior Center",
      "address": "3201 Sondra Dr, Fort Worth, TX 76107, USA",
      "phone": "(817) 332-7276",
      "website": "",
      "rating": 4.6,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Hurst Senior Citizens Activities Center",
      "address": "700 Heritage Cir, Hurst, TX 76053, USA",
      "phone": "(817) 788-7710",
      "website": "https://www.hursttx.gov/Home/Components/ServiceDirectory/ServiceDirectory/155/33",
      "rating": 4.8,
      "reviews": 136,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Saginaw Senior Citizen's Center",
      "address": "300 W McLeroy Blvd, Saginaw, TX 76179, USA",
      "phone": "(817) 230-0459",
      "website": "https://www.ci.saginaw.tx.us/departments/senior_center/index.php",
      "rating": 4.6,
      "reviews": 67,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Haltom City Senior Center",
      "address": "3201 Friendly Ln, Haltom City, TX 76117, USA",
      "phone": "(817) 834-8021",
      "website": "https://haltomcitytx.com/247/Senior-Center",
      "rating": 4.7,
      "reviews": 124,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northside Community Center",
      "address": "1100 NW 18th St, Fort Worth, TX 76164, USA",
      "phone": "(817) 392-5992",
      "website": "https://www.fortworthtexas.gov/departments/parks/services/community-centers/northside-community-center",
      "rating": 4.4,
      "reviews": 264,
      "cats": [
        "social"
      ]
    },
    {
      "name": "White Settlement - Senior Activity and Social Center",
      "address": "8211 White Settlement Rd, White Settlement, TX 76108, USA",
      "phone": "(817) 246-6619",
      "website": "https://www.wstx.us/209/Senior-Services",
      "rating": 4.5,
      "reviews": 65,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Keller Senior Activities Center",
      "address": "640 Johnson Rd Bldg C, Keller, TX 76248, USA",
      "phone": "(817) 743-4370",
      "website": "http://www.cityofkeller.com/seniorcenter",
      "rating": 4.8,
      "reviews": 73,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Como Community Center",
      "address": "4660 Horne St, Fort Worth, TX 76107, USA",
      "phone": "(817) 392-5300",
      "website": "https://www.fortworthtexas.gov/departments/parks/services/community-centers/como-community-center",
      "rating": 4.7,
      "reviews": 255,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Southside Community Center",
      "address": "959 E Rosedale St, Fort Worth, TX 76104, USA",
      "phone": "(817) 392-6605",
      "website": "https://www.fortworthtexas.gov/departments/parks/services/community-centers/southside-community-center",
      "rating": 4.6,
      "reviews": 169,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Northside Adult Daycare",
      "address": "1401 Clinton Ave, Fort Worth, TX 76164, USA",
      "phone": "(817) 740-1611",
      "website": "",
      "rating": 4,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Dorsey's House Adult Day Center",
      "address": "5415 E Lancaster Ave, Fort Worth, TX 76112, USA",
      "phone": "(682) 328-1214",
      "website": "https://dorseyhouseadultdaycenter.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Trinity River Adult Daycare Center",
      "address": "401 N Riverside Dr, Fort Worth, TX 76111, USA",
      "phone": "(682) 841-1588",
      "website": "https://myadultdaycare.com/adult-daycare-list/TRINITY-RIVER-ADULT-DAYCARE-CENTER-INC",
      "rating": 4.5,
      "reviews": 11,
      "cats": [
        "social"
      ]
    },
    {
      "name": "James L West Senior Day Program and Home Care",
      "address": "6050 Harris Pkwy, Fort Worth, TX 76132, USA",
      "phone": "(817) 877-1199",
      "website": "https://www.jameslwest.org/day-program/senior-day-program",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Arlington Adult Day Health Care",
      "address": "2117 Roosevelt Dr, Pantego, TX 76013, USA",
      "phone": "(817) 795-8066",
      "website": "http://aadhc.org/",
      "rating": 4.6,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Texas Golden Age ADC",
      "address": "1115 W Pioneer Pkwy, Arlington, TX 76013, USA",
      "phone": "(817) 459-3311",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Encore Memory Care Day Center",
      "address": "2928 Blue Quail Ln, Bedford, TX 76021, USA",
      "phone": "(817) 857-7200",
      "website": "http://www.encoredaycare.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Lone Star Adult Day Care Center",
      "address": "3812 Merrett Dr, Lake Worth, TX 76135, USA",
      "phone": "",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Able's Front Porch",
      "address": "298 Municipal Dr, Kennedale, TX 76060, USA",
      "phone": "(817) 535-9362",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "James L. West Center for Dementia Care",
      "address": "1111 Summit Ave, Fort Worth, TX 76102, USA",
      "phone": "(817) 765-8945",
      "website": "http://www.jameslwest.org/?utm_campaign=gmb",
      "rating": 4.7,
      "reviews": 57,
      "cats": [
        "social"
      ]
    },
    {
      "name": "McGee Law Firm",
      "address": "810 W 10th St, Fort Worth, TX 76102, USA",
      "phone": "(817) 899-3286",
      "website": "https://mcgeelawdfw.com/",
      "rating": 4.9,
      "reviews": 53,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Telschow Johnson Law PLLC",
      "address": "4200 S Hulen St Ste 340, Fort Worth, TX 76109, USA",
      "phone": "(817) 632-7711",
      "website": "http://tjlawpllc.com/",
      "rating": 4.9,
      "reviews": 113,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Davidson Law Group",
      "address": "3343 Locke Ave #103, Fort Worth, TX 76107, USA",
      "phone": "(682) 235-6138",
      "website": "https://www.yourtexaslegacy.com/",
      "rating": 4.7,
      "reviews": 63,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Breshears Law | Texas Estate Planning & Administration",
      "address": "5049 Edwards Ranch Rd Ste 400, Fort Worth, TX 76109, USA",
      "phone": "(817) 500-0155",
      "website": "https://breshearslaw.com/",
      "rating": 4.6,
      "reviews": 45,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Benson Monica A",
      "address": "4763 Barwick Dr #100, Fort Worth, TX 76132, USA",
      "phone": "(817) 263-5190",
      "website": "http://www.kattenbenson.com/",
      "rating": 4.6,
      "reviews": 19,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Michelle Simpson Law, PLLC",
      "address": "8901 Tehama Ridge Pkwy Ste 127-152, Fort Worth, TX 76177, USA",
      "phone": "(817) 984-4355",
      "website": "https://www.michellesimpsonlaw.com/",
      "rating": 4.8,
      "reviews": 19,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Katten Benson Zachry Golightly, LLP",
      "address": "4763 Barwick Dr #100, Fort Worth, TX 76132, USA",
      "phone": "(817) 263-5190",
      "website": "https://www.kbzglaw.com/?npcmp=dir:local:1145674:76132",
      "rating": 4.1,
      "reviews": 12,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Thomas-Walters Pllc",
      "address": "2800 S Hulen St #101, Fort Worth, TX 76109, USA",
      "phone": "(817) 258-5908",
      "website": "https://thomas-walters.com/",
      "rating": 5,
      "reviews": 188,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Keith Morris Attorney at Law",
      "address": "1212 W El Paso St, Fort Worth, TX 76102, USA",
      "phone": "(817) 438-8797",
      "website": "https://theestatelawyer.com/?utm_source=google&utm_medium=gbp&utm_campaign=fortworth",
      "rating": 4.5,
      "reviews": 74,
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
    }
  ],
  "columbus-oh": [
    {
      "name": "Next Day Access Columbus, OH",
      "address": "303 Conover Dr, Franklin, OH 45005, USA",
      "phone": "(937) 519-3150",
      "website": "https://www.nextdayaccess.com/columbus-oh/",
      "rating": 5,
      "reviews": 194,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "Innovate Building Solutions",
      "address": "3091 E 14th Ave Ste C, Columbus, OH 43219, USA",
      "phone": "(614) 252-7294",
      "website": "http://innovatebuildingsolutions.com/",
      "rating": 4.8,
      "reviews": 294,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Miracle Method Surface Refinishing",
      "address": "1575 Integrity Dr E, Columbus, OH 43209, USA",
      "phone": "(614) 362-5926",
      "website": "https://www.miraclemethod.com/columbus?utm_source=Google&utm_medium=GMB&utm_content=MMMS",
      "rating": 4.9,
      "reviews": 572,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "7500 Green Meadows Dr Unit 5103, Lewis Center, OH 43035, USA",
      "phone": "(614) 254-5829",
      "website": "https://www.lifewaymobility.com/columbus-ohio/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Columbus",
      "rating": 5,
      "reviews": 171,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "4744 Bridgeway Ave, Columbus, OH 43219, USA",
      "phone": "(740) 480-3866",
      "website": "https://westshorehome.com/locations/columbus-oh/?utm_source=gbp&utm_medium=organic&utm_branch=columbus",
      "rating": 4.9,
      "reviews": 494,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Columbus Walk In Bath Solutions",
      "address": "341 S 3rd St Ste 100-323, Columbus, OH 43215, USA",
      "phone": "(614) 412-4622",
      "website": "https://columbuswalkinbathsolutions.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Bath Tune-Up of Columbus North",
      "address": "705 Lakeview Plaza Blvd Suite J, Columbus, OH 43085, USA",
      "phone": "(614) 931-0802",
      "website": "https://www.bathtune-up.com/columbus-north-oh?utm_source=google&utm_medium=organic&utm_campaign=gbplisting",
      "rating": 4.9,
      "reviews": 53,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "Bath Fitter",
      "address": "7465 Worthington Galena Rd, Worthington, OH 43085, USA",
      "phone": "(844) 915-1086",
      "website": "http://www.bathfitter.com/us-en/location/columbus/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.7,
      "reviews": 354,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Easy Bath",
      "address": "5756 Westbourne Ave, Columbus, OH 43213, USA",
      "phone": "(614) 501-2911",
      "website": "http://easybathohio.com/",
      "rating": 4.9,
      "reviews": 99,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Experts",
      "address": "3341 Centerpoint Dr Ste D, Urbancrest, OH 43123, USA",
      "phone": "(614) 929-3852",
      "website": "https://www.bathexperts.com/locations/columbus/",
      "rating": 4.8,
      "reviews": 337,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Revive Bathroom Remodel Columbus",
      "address": "780 King Ave ste 104, Columbus, OH 43212, USA",
      "phone": "(614) 339-6918",
      "website": "https://www.revivebathroomremodelcolumbus.com/",
      "rating": 4.7,
      "reviews": 11,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Otterly Baths",
      "address": "7780 Corporate Blvd #8313, Plain City, OH 43064, USA",
      "phone": "(614) 379-8193",
      "website": "https://otterlybaths.com/columbus-oh/?utm_source=google&utm_medium=gbp&utm_campaign=plain-city",
      "rating": 5,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Simple Bath and Kitchen",
      "address": "4235 Leap Rd, Hilliard, OH 43026, USA",
      "phone": "(614) 888-2284",
      "website": "https://www.simplebathandkitchen.com/",
      "rating": 4.7,
      "reviews": 272,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "New Bath Today",
      "address": "490 Hill Rd N, Pickerington, OH 43147, USA",
      "phone": "(614) 524-4230",
      "website": "https://newbathtoday.com/service-areas/columbus-oh/?utm_source=4301&utm_medium=organic&utm_campaign=pickerington-oh-gbp",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Fast Bath Makeover",
      "address": "2025 Riverside Dr Ste 520, Upper Arlington, OH 43221, USA",
      "phone": "(614) 265-8803",
      "website": "http://fastbathmakeover.com/",
      "rating": 5,
      "reviews": 84,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Columbus Bath Design",
      "address": "8596 Cotter St, Lewis Center, OH 43035, USA",
      "phone": "(614) 907-4558",
      "website": "https://www.columbusbathdesign.com/",
      "rating": 4.7,
      "reviews": 141,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "RIGHT NOW MOBILITY STAIRLIFTS",
      "address": "545 Metro Pl S Suite 100, Dublin, OH 43017, USA",
      "phone": "(614) 792-0001",
      "website": "http://www.rightnowmobility.com/",
      "rating": 5,
      "reviews": 72,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Columbus",
      "address": "4706 Trabue Rd, Columbus, OH 43228, USA",
      "phone": "(740) 520-8026",
      "website": "https://www.101mobility.com/columbus/?utm_source=GBP_Columbus&utm_medium=organic&y_source=1_MTAzMzU5NzAwNy03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.7,
      "reviews": 102,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Arrow Lift",
      "address": "262 E Campus View Blvd, Columbus, OH 43235, USA",
      "phone": "(614) 334-6900",
      "website": "https://arrowlift.com/about/all-locations/columbus-oh/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.6,
      "reviews": 25,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Med Mart Stairlift + Elevator + Home Modification",
      "address": "341 S 3rd St Ste E120, Columbus, OH 43215, USA",
      "phone": "(800) 793-5980",
      "website": "http://medmarthome.com/",
      "rating": 4,
      "reviews": 4,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "2725 Westbelt Dr, Columbus, OH 43228, USA",
      "phone": "(614) 655-6505",
      "website": "https://www.leafhome.com/locations/ohio/columbus/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_NDE1Njc4ODgtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 4.5,
      "reviews": 19,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "7233 Industrial Pkwy, Plain City, OH 43064, USA",
      "phone": "(614) 289-8138",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-plain-city-columbus-ohio/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=columbus",
      "rating": 4.3,
      "reviews": 96,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Columbus Mobility Specialists",
      "address": "6330 Proprietors Rd # C, Worthington, OH 43085, USA",
      "phone": "(614) 825-8996",
      "website": "http://www.columbusmobility.com/",
      "rating": 4.4,
      "reviews": 54,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Right Now Mobility - Family Owned: Stair Lifts + Elevator Experts",
      "address": "6504 Corporate Dr, Cincinnati, OH 45242, USA",
      "phone": "(513) 795-8585",
      "website": "http://www.rightnowmobility.com/",
      "rating": 5,
      "reviews": 341,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "National Seating & Mobility",
      "address": "306 E 5th Ave, Columbus, OH 43201, USA",
      "phone": "(614) 294-5585",
      "website": "https://locations.nsm-seating.com/oh/columbus/306-e-5th-ave",
      "rating": 4.4,
      "reviews": 127,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Miller's Rental and Sales, Inc.",
      "address": "777 Dearborn Park Ln Suite S, Columbus, OH 43085, USA",
      "phone": "(614) 547-4000",
      "website": "https://www.millers.com/?utm_source=google&utm_medium=gbp&utm_campaign=columbus",
      "rating": 4.9,
      "reviews": 68,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility City",
      "address": "4506 Cemetery Rd, Hilliard, OH 43026, USA",
      "phone": "(614) 756-4622",
      "website": "https://mobilitycity.com/columbus-oh/?utm_campaign=gmb",
      "rating": 4.8,
      "reviews": 104,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Numotion",
      "address": "6171-M Huntley Rd M, Columbus, OH 43229, USA",
      "phone": "(614) 515-2156",
      "website": "https://www.numotion.com/locations/columbus-oh",
      "rating": 4.8,
      "reviews": 465,
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
      "name": "Central Ohio Area Agency on Aging",
      "address": "3776 S High St, Columbus, OH 43207, USA",
      "phone": "(800) 589-7277",
      "website": "http://www.coaaa.org/",
      "rating": 4.3,
      "reviews": 72,
      "cats": [
        "remodel",
        "transport",
        "social"
      ]
    },
    {
      "name": "Pat Scales Remodeling & Home Renovation",
      "address": "2339 W Dublin-Granville Rd, Columbus, OH 43235, USA",
      "phone": "(614) 810-4144",
      "website": "https://patscalesremodeling.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.7,
      "reviews": 48,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Ohio-At-Home Health Care Agency, LLC",
      "address": "875 N High St Ste 300, Columbus, OH 43201, USA",
      "phone": "(614) 800-0672",
      "website": "http://www.ohioathome.com/",
      "rating": 5,
      "reviews": 7,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Ohio Senior Home Health Care, LLC",
      "address": "6004 Cleveland Ave, Columbus, OH 43231, USA",
      "phone": "(614) 470-6070",
      "website": "http://www.oshhc.com/",
      "rating": 4,
      "reviews": 8,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Caring Heart Home Health Agency",
      "address": "4207 E Broad St 2nd floor, Columbus, OH 43213, USA",
      "phone": "(614) 231-2442",
      "website": "http://www.caringhearthha.com/",
      "rating": 4.7,
      "reviews": 26,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Complete Homecare Inc.",
      "address": "2021 E Dublin Granville Rd #190, Columbus, OH 43229, USA",
      "phone": "(614) 704-5500",
      "website": "http://completehomecareoh.com/",
      "rating": 5,
      "reviews": 46,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Assisting Hands Columbus Home Care",
      "address": "438 E Wilson Bridge Rd Ste 108, Worthington, OH 43085, USA",
      "phone": "(614) 481-4141",
      "website": "https://assistinghandscolumbus.com/",
      "rating": 5,
      "reviews": 123,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Health Agency - FrankLove Home Health Services",
      "address": "2323 Lake Club Dr Ste 300, Columbus, OH 43232, USA",
      "phone": "(614) 559-9918",
      "website": "https://www.franklovehomehealth.com/contact.html",
      "rating": 4.4,
      "reviews": 5,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Helpers Home Care of Columbus",
      "address": "10 E Weber Rd #202, Columbus, OH 43202, USA",
      "phone": "(614) 768-6185",
      "website": "https://www.homehelpershomecare.com/columbus/?utm_source=gbp+listing&utm_medium=organic",
      "rating": 4.7,
      "reviews": 44,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Easton Healthcare Agency Inc",
      "address": "5100 Cleveland Ave, Columbus, OH 43231, USA",
      "phone": "(614) 880-9402",
      "website": "https://www.eastonhealthcareagency.com/",
      "rating": 4.6,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Supreme Touch Home Health Services Corp",
      "address": "2547 W Broad St, Columbus, OH 43204, USA",
      "phone": "(614) 488-2266",
      "website": "https://supremetouchcare.com/",
      "rating": 4.2,
      "reviews": 17,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "3C Home Health Care LLC",
      "address": "2720 Airport Dr #140, Columbus, OH 43219, USA",
      "phone": "(614) 471-4300",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care - Columbus",
      "address": "41 Croswell Rd 2nd FL, Columbus, OH 43214, USA",
      "phone": "(614) 538-1234",
      "website": "https://www.visitingangels.com/columbuswest/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.8,
      "reviews": 104,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Amada Senior Care Columbus",
      "address": "579 Executive Campus Dr Ste 230, Westerville, OH 43082, USA",
      "phone": "(614) 721-0070",
      "website": "https://www.amadaseniorcare.com/columbus-senior-care/",
      "rating": 4.9,
      "reviews": 61,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead, Home Care Services of Columbus",
      "address": "3040 Riverside Dr #117, Columbus, OH 43221, USA",
      "phone": "(614) 869-4607",
      "website": "https://www.homeinstead.com/home-care/usa/oh/gahanna/132/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Options Home Services",
      "address": "786 Northwest Blvd, Columbus, OH 43212, USA",
      "phone": "(614) 947-8888",
      "website": "https://www.optionshomeservices.com/",
      "rating": 4.6,
      "reviews": 48,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care - Westerville",
      "address": "100 Dorchester Square #101, Westerville, OH 43081, USA",
      "phone": "(614) 392-2820",
      "website": "https://www.visitingangels.com/columbusnorth/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.8,
      "reviews": 34,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "TheKey - Senior Home Care",
      "address": "1880 Mackenzie Drive Ste 201, Columbus, OH 43220, USA",
      "phone": "(614) 524-5970",
      "website": "https://www.thekey.com/locations/ohio/columbus?utm_source=gmb&utm_medium=Yext",
      "rating": 4.7,
      "reviews": 40,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "1675 Gateway Cir, Grove City, OH 43123, USA",
      "phone": "(380) 286-0604",
      "website": "http://www.seniorhelpers.com/oh/grove-city?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 5,
      "reviews": 10,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Transportation Connection",
      "address": "4735 W 150th St A, Cleveland, OH 44135, USA",
      "phone": "(216) 265-1489",
      "website": "http://ridestc.org/",
      "rating": 4.3,
      "reviews": 37,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Precise Mobility Solutions, Inc",
      "address": "6161 Busch Blvd, Columbus, OH 43229, USA",
      "phone": "(614) 987-6737",
      "website": "http://www.precisemobility.com/",
      "rating": 3.1,
      "reviews": 228,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Caring Senior Service",
      "address": "4625 Morse Rd Ste 100, Gahanna, OH 43230, USA",
      "phone": "(614) 963-8342",
      "website": "https://caringseniorservice.com/columbus/?utm_source=gmb&utm_medium=referral-link&utm_campaign=google-my-business",
      "rating": 4.6,
      "reviews": 38,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Tristar Transportation",
      "address": "682 E Lincoln Ave, Columbus, OH 43229, USA",
      "phone": "(614) 430-1688",
      "website": "http://www.tristarcolumbus.com/?utm_source=google&utm_medium=wix_google_business_profile&utm_campaign=16884529289904817702",
      "rating": 3.5,
      "reviews": 55,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Providence Senior Transportation",
      "address": "4684 Massillon Rd, North Canton, OH 44720, USA",
      "phone": "(855) 850-5555",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Gillie Senior Community Center",
      "address": "2100 Morse Rd, Columbus, OH 43229, USA",
      "phone": "(614) 645-3106",
      "website": "https://columbusrecparks.com/community-center/gillie/",
      "rating": 4.6,
      "reviews": 101,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Westerville Senior Center",
      "address": "350 N Cleveland Ave, Westerville, OH 43082, USA",
      "phone": "(614) 901-6560",
      "website": "https://parks.westerville.org/programs/older-adults",
      "rating": 4.6,
      "reviews": 59,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Marion Franklin Senior Center",
      "address": "2801 Lockbourne Rd, Columbus, OH 43207, USA",
      "phone": "(614) 645-3612",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Reynoldsburg Seniors Citizens Center",
      "address": "1520 Davidson Dr, Reynoldsburg, OH 43068, USA",
      "phone": "(614) 866-5890",
      "website": "https://www.reynoldsburg.gov/210/Reynoldsburg-Senior-Center",
      "rating": 4.6,
      "reviews": 54,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Evans Senior Center",
      "address": "4330 Dudley Ave, Grove City, OH 43123, USA",
      "phone": "(614) 277-1060",
      "website": "https://www.grovecityohio.gov/187/55-Programs",
      "rating": 4.8,
      "reviews": 46,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Ohio Association Of Senior Centers",
      "address": "3757 Indianola Ave, Columbus, OH 43214, USA",
      "phone": "(800) 796-6272",
      "website": "http://www.ohioasc.org/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Hilltop Senior Village",
      "address": "300 Overstreet Way, Columbus, OH 43228, USA",
      "phone": "(614) 274-3648",
      "website": "",
      "rating": 4.2,
      "reviews": 50,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Gahanna Senior Center",
      "address": "480 Rocky Fork Blvd, Gahanna, OH 43230, USA",
      "phone": "(614) 342-4265",
      "website": "http://www.gahanna.gov/seniorcenter/",
      "rating": 4.4,
      "reviews": 22,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Blendon Township Senior Center",
      "address": "6330 S Hempstead Rd, Westerville, OH 43081, USA",
      "phone": "(614) 882-1260",
      "website": "https://www.blendontwp.org/government/departments/senior-services",
      "rating": 4.8,
      "reviews": 30,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Washington's Intergenerational Adult Daycare",
      "address": "4241 Eastland Square Dr Ste A, Columbus, OH 43232, USA",
      "phone": "(614) 866-0100",
      "website": "",
      "rating": 4.4,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Buckeye Adult Day Care",
      "address": "2643 Northland Plaza Dr, Columbus, OH 43231, USA",
      "phone": "(614) 476-0388",
      "website": "",
      "rating": 4.8,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Franklin Adult Day Care",
      "address": "1472 Morse Rd, Columbus, OH 43229, USA",
      "phone": "(614) 845-5551",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Atlas Adult Day Center LLC",
      "address": "1414 Oakland Park Ave ste b, Columbus, OH 43224, USA",
      "phone": "(614) 805-0106",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Beloved One Adult Day Center",
      "address": "4004 Alum Creek Dr, Columbus, OH 43207, USA",
      "phone": "(614) 483-6514",
      "website": "",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Complete Adult Daycare",
      "address": "242 W Johnstown Rd, Columbus, OH 43230, USA",
      "phone": "(614) 505-8665",
      "website": "",
      "rating": 4.3,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Second Home Adult Day Care & Transportation Center",
      "address": "2556 Morse Rd, Columbus, OH 43231, USA",
      "phone": "(614) 414-0077",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Columbus Adult Daycare",
      "address": "5930 Sharon Woods Blvd, Columbus, OH 43229, USA",
      "phone": "(614) 392-2017",
      "website": "http://www.chaturbate.com/",
      "rating": 2,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "The James LJ Center LLC",
      "address": "5320 E Main St #100, Columbus, OH 43213, USA",
      "phone": "(614) 515-7570",
      "website": "",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "WESTGATE DAY HEALTH CENTER",
      "address": "3636 Soldano Boulevard, Columbus, OH 43228, USA",
      "phone": "(614) 966-1102",
      "website": "http://coaaa.org/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Golowin Legal - Wills Trusts Elder Law",
      "address": "5060 Parkcenter Ave Ste a, Dublin, OH 43017, USA",
      "phone": "(614) 453-5208",
      "website": "https://www.columbuselderlawattorney.com/",
      "rating": 5,
      "reviews": 100,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "R.F. Meyer & Associates, LLC",
      "address": "450 W Wilson Bridge Rd Ste 380, Worthington, OH 43085, USA",
      "phone": "(614) 407-7900",
      "website": "http://www.elderlaw.us/",
      "rating": 4.8,
      "reviews": 19,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Roush Elder Law",
      "address": "1900 Polaris Pkwy #450, Columbus, OH 43240, USA",
      "phone": "",
      "website": "http://roushelderlaw.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Collins & Kruse Law Office",
      "address": "1421 W 3rd Ave, Columbus, OH 43212, USA",
      "phone": "(614) 369-8634",
      "website": "http://www.ckelderlaw.com/",
      "rating": 4.9,
      "reviews": 28,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Elder Law Connection",
      "address": "1421 W 3rd Ave, Columbus, OH 43212, USA",
      "phone": "(614) 568-1237",
      "website": "https://elderlawconnection.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "AlerStallings LLC",
      "address": "535 Metro Pl S #200, Dublin, OH 43017, USA",
      "phone": "(614) 798-9800",
      "website": "https://www.alerstallings.com/locations/columbus/",
      "rating": 4.8,
      "reviews": 54,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Winkler Legal",
      "address": "490 City Park Ave, Columbus, OH 43215, USA",
      "phone": "(614) 461-5708",
      "website": "https://dirkwinklerlaw.com/",
      "rating": 4.7,
      "reviews": 34,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Jarvis Law Office, P.C.",
      "address": "5100 Bradenton Ave Ste B, Dublin, OH 43017, USA",
      "phone": "(740) 273-6023",
      "website": "https://jarvisfirm.com/?utm_source=google&utm_medium=gbp&utm_campaign=dublin",
      "rating": 4.9,
      "reviews": 155,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Taps Sutton & Roshon, LLC",
      "address": "400 S 5th St #103, Columbus, OH 43215, USA",
      "phone": "(614) 443-8000",
      "website": "http://www.ohioseniorlaw.com/",
      "rating": 4.7,
      "reviews": 18,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Gasper Legal",
      "address": "3492 Snouffer Rd Ste 200, Columbus, OH 43235, USA",
      "phone": "(614) 845-1923",
      "website": "https://www.gasperlegal.com/",
      "rating": 4.6,
      "reviews": 47,
      "cats": [
        "legal"
      ]
    }
  ],
  "charlotte-nc": [
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
      "name": "Mr. Handyman of Charlotte, Gastonia and Monroe",
      "address": "4400 Stuart Andrew Blvd # G, Charlotte, NC 28217, USA",
      "phone": "(704) 272-4782",
      "website": "https://www.mrhandyman.com/east-west-charlotte-belmont/?cid=LSTL_MHM000197&utm_source=gmb&utm_campaign=local&utm_medium=organic",
      "rating": 4.6,
      "reviews": 255,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Little Hardware",
      "address": "1400 S Mint St, Charlotte, NC 28203, USA",
      "phone": "(704) 333-3133",
      "website": "https://www.littlehardware.com/",
      "rating": 4.7,
      "reviews": 684,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Ferguson Plumbing Supply",
      "address": "129 W Summit Ave, Charlotte, NC 28203, USA",
      "phone": "(704) 332-7355",
      "website": "https://www.ferguson.com/store/nc/charlotte/plumbingpvf-1150?utm_source=google&utm_medium=organic&utm_campaign=rt_lis_listingtraffic&utm_content=listing",
      "rating": 3.7,
      "reviews": 77,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Ground Up Construction",
      "address": "6501 Woodthrush Dr, Charlotte, NC 28227, USA",
      "phone": "(704) 806-7895",
      "website": "http://groundupcarolinas.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Five Star Bath Solutions of Charlotte",
      "address": "7714 Matthews-Mint Hill Rd, Mint Hill, NC 28227, USA",
      "phone": "(980) 705-8511",
      "website": "https://fivestarbathsolutions.com/charlotte-nc/",
      "rating": 4.9,
      "reviews": 85,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Carolina Creek Tub & Shower, LLC",
      "address": "152 Ervin Rd, Mooresville, NC 28117, USA",
      "phone": "(704) 781-8646",
      "website": "https://carolinacreekbath.com/?utm_source=google&utm_medium=business_profile&utm_campaign=website",
      "rating": 5,
      "reviews": 70,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Carolina Home Remodeling",
      "address": "372 Crompton St, Charlotte, NC 28273, USA",
      "phone": "(704) 714-1257",
      "website": "https://carolinahomeremodeling.com/?utm_source=google&utm_medium=gbp&utm_campaign=organic",
      "rating": 4.8,
      "reviews": 1435,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Charlotte bath remodeling",
      "address": "8532 Stoneface Rd, Charlotte, NC 28214, USA",
      "phone": "(704) 923-9140",
      "website": "https://www.charlottebathremodeling.com/",
      "rating": 5,
      "reviews": 54,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Premier Home Pros",
      "address": "330 E Hebron St Suites C&D, Charlotte, NC 28273, USA",
      "phone": "(855) 209-7818",
      "website": "http://www.premier-homepros.com/",
      "rating": 4.7,
      "reviews": 140,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Bath Tune-Up",
      "address": "10810 Independence Pointe Pkwy K, Matthews, NC 28105, USA",
      "phone": "(980) 400-1043",
      "website": "https://bathtune-up.com/charlotte-nc/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Re-Bath",
      "address": "8700 Pineville-Matthews Rd #680, Charlotte, NC 28210, USA",
      "phone": "(704) 440-4726",
      "website": "https://www.rebath.com/location/charlotte/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.9,
      "reviews": 963,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "West Shore Home",
      "address": "3318 Lakemont Blvd Ste. 101, Fort Mill, SC 29708, USA",
      "phone": "(704) 486-1428",
      "website": "https://westshorehome.com/locations/charlotte-nc/?utm_source=gbp&utm_medium=organic&utm_branch=charlotte",
      "rating": 4.9,
      "reviews": 2245,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "EZPro Express",
      "address": "9115 Old Statesville Rd Ste. D, Charlotte, NC 28269, USA",
      "phone": "(980) 247-4798",
      "website": "https://ezproexpress.com/?utm_source=gbp_charlotte&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 173,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "The Bath Authority of Charlotte",
      "address": "3101 Yorkmont Rd Ste 300, Charlotte, NC 28208, USA",
      "phone": "(704) 935-2273",
      "website": "https://www.thebathauthority.com/charlotte/",
      "rating": 4.4,
      "reviews": 102,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "11101 Park Charlotte Blvd D, Charlotte, NC 28273, USA",
      "phone": "(704) 266-1599",
      "website": "https://www.lifewaymobility.com/charlotte-nc/?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Charlotte",
      "rating": 4.9,
      "reviews": 121,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Next Day Access Charlotte",
      "address": "10809 Southern Loop Blvd #2, Pineville, NC 28134, USA",
      "phone": "(704) 245-6062",
      "website": "https://www.nextdayaccess.com/charlotte",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Carolina Lift and Elevator",
      "address": "658 Griffith Rd #101, Charlotte, NC 28217, USA",
      "phone": "(704) 521-1115",
      "website": "http://www.carolinaliftandelevator.com/",
      "rating": 4.6,
      "reviews": 8,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "10525 Granite St Ste C, Charlotte, NC 28273, USA",
      "phone": "(980) 231-1003",
      "website": "https://www.leafhome.com/locations/north-carolina/charlotte/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_MjQyNDI0NDEtNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 3.3,
      "reviews": 25,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "MobilityWorks",
      "address": "4025 Queen City Dr, Charlotte, NC 28208, USA",
      "phone": "(980) 256-6601",
      "website": "https://www.mobilityworks.com/locations/wheelchair-vans-for-sale-in-charlotte-north-carolina/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=charlotte",
      "rating": 4.6,
      "reviews": 126,
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
      "name": "Mobility & More - Medical Equipment & Supplies",
      "address": "2301 Crownpoint Executive Dr Ste A, Charlotte, NC 28227, USA",
      "phone": "(704) 821-7777",
      "website": "http://www.shopmobility.com/",
      "rating": 5,
      "reviews": 170,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Carolina Ramp Solutions",
      "address": "3224 Westwood Industrial Dr, Monroe, NC 28110, USA",
      "phone": "(704) 635-7766",
      "website": "http://carolinarampsolutions.com/",
      "rating": 3.7,
      "reviews": 3,
      "cats": [
        "stairs"
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
      "name": "Carolina Home Health Care",
      "address": "9935 Rea Rd D, Charlotte, NC 28277, USA",
      "phone": "(704) 548-8949",
      "website": "https://carolinahomehealthcare.com/",
      "rating": 4.8,
      "reviews": 44,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "My Angels Home Health Care Charlotte North Carolina",
      "address": "1213 W Morehead St Ste 522, Charlotte, NC 28208, USA",
      "phone": "(704) 486-5855",
      "website": "https://www.myangelshomehealth.com/",
      "rating": 4.9,
      "reviews": 17,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Care Freedom",
      "address": "10130 Mallard Creek Rd #300, Charlotte, NC 28262, USA",
      "phone": "(704) 944-3501",
      "website": "http://www.homecarefreedom.com/",
      "rating": 5,
      "reviews": 41,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "PHC Home Health",
      "address": "1515 Mockingbird Ln #520, Charlotte, NC 28209, USA",
      "phone": "(704) 522-6144",
      "website": "http://www.phcnc.com/",
      "rating": 4.9,
      "reviews": 152,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Lux Home Care",
      "address": "6047 Tyvola Glen Cir Ste 208, Charlotte, NC 28217, USA",
      "phone": "(704) 718-0328",
      "website": "http://www.luxhomecare.org/",
      "rating": 4.9,
      "reviews": 58,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "EULA Home Care Agency",
      "address": "8430 University Executive Park Dr Ste 606, Charlotte, NC 28262, USA",
      "phone": "(704) 741-0047",
      "website": "https://eulahomecare.com/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Helping Hands Home Care of the Carolinas LLC",
      "address": "5732 Susan Dr Ste A, Charlotte, NC 28215, USA",
      "phone": "(980) 222-0006",
      "website": "http://www.helpinghandscarolinas.com/",
      "rating": 4.9,
      "reviews": 16,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Honest Home Care",
      "address": "8501 Tower Point Dr Ste B40, Charlotte, NC 28227, USA",
      "phone": "(980) 339-8535",
      "website": "https://honesthomecare.org/#utm_source=GBP&utm_medium=GBP&utm_campaign=GBP&utm_id=GBP",
      "rating": 5,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "FirstLight Home Care of Greater Charlotte",
      "address": "219 Greenwich Rd, Charlotte, NC 28211, USA",
      "phone": "(704) 879-2394",
      "website": "https://www.firstlighthomecare.com/home-healthcare-charlotte/?utm_source=google&utm_medium=organic&utm_campaign=gbp",
      "rating": 4.8,
      "reviews": 45,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "7301 Carmel Executive Park Dr Ste 214, Charlotte, NC 28226, USA",
      "phone": "(704) 841-1160",
      "website": "https://www.visitingangels.com/scharlotte/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.9,
      "reviews": 270,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "801 Clanton Rd Suite 110, Charlotte, NC 28217, USA",
      "phone": "(704) 769-5282",
      "website": "https://www.homeinstead.com/home-care/usa/nc/charlotte/303/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 60,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Senior Helpers",
      "address": "9101 Pineville-Matthews Rd M, Pineville, NC 28134, USA",
      "phone": "(704) 728-0053",
      "website": "https://www.seniorhelpers.com/nc/charlotte/?utm_source=google&utm_medium=organic&utm_campaign=gmb",
      "rating": 4.7,
      "reviews": 97,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "125 Sweet Mdw Blvd #180, Charlotte, NC 28262, USA",
      "phone": "(704) 549-4010",
      "website": "https://www.visitingangels.com/charlotte/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.1,
      "reviews": 13,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Cornerstone Caregiving",
      "address": "1230 W Morehead St STE 106, Charlotte, NC 28208, USA",
      "phone": "(704) 459-3600",
      "website": "https://cornerstonecaregiving.com/locations/west-charlotte-nc/?utm_source=google&utm_medium=yext",
      "rating": 4.9,
      "reviews": 54,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Golden Heart Senior Care",
      "address": "1211 Spring St, Charlotte, NC 28206, USA",
      "phone": "(704) 376-1060",
      "website": "http://www.goldenheartcharlotte.com/",
      "rating": 4.8,
      "reviews": 60,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Comfort Keepers Home Care",
      "address": "8000 Corporate Center Dr STE 111, Charlotte, NC 28226, USA",
      "phone": "(704) 980-7620",
      "website": "https://www.comfortkeepers.com/offices/north-carolina/charlotte",
      "rating": 4.4,
      "reviews": 38,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors North Charlotte",
      "address": "101 S Tryon St UNIT 2700, Charlotte, NC 28280, USA",
      "phone": "(980) 704-2747",
      "website": "https://locations.seniorshelpingseniors.com/nc/charlotte/212.html",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Preferred Care at Home of Charlotte South",
      "address": "6201 Fairview Rd #236, Charlotte, NC 28210, USA",
      "phone": "(704) 626-1237",
      "website": "https://preferhome.com/locations/charlotte-south/?utm_source=google&utm_medium=local&utm_campaign=gmb",
      "rating": 5,
      "reviews": 37,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Seniors Helping Seniors Charlotte",
      "address": "10801 Johnston Rd Ste 130, Charlotte, NC 28226, USA",
      "phone": "(704) 573-6838",
      "website": "https://locations.seniorshelpingseniors.com/nc/charlotte/69.html",
      "rating": 4.3,
      "reviews": 12,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Secure Comfort Care, LLC",
      "address": "1001 E W.T. Harris Blvd, Charlotte, NC 28213, USA",
      "phone": "(704) 701-7392",
      "website": "https://securecomfortcare.com/",
      "rating": 4.7,
      "reviews": 110,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Ride With The Reids",
      "address": "9805 Statesville Rd Ste 4291, Charlotte, NC 28269, USA",
      "phone": "(980) 432-3830",
      "website": "https://ridewiththereids.info/",
      "rating": 5,
      "reviews": 2,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Community Partners Transportation",
      "address": "10224 Hickorywood Hill Ave STE 101A, Huntersville, NC 28078, USA",
      "phone": "(704) 601-6271",
      "website": "https://www.communitypartnerstransportation.com/",
      "rating": 5,
      "reviews": 26,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Quality of Life Transit Services",
      "address": "9805 Statesville Rd PMB 4174, Charlotte, NC 28269, USA",
      "phone": "(980) 406-4846",
      "website": "http://www.qoltransitservices.com/",
      "rating": 4.7,
      "reviews": 13,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Caspian Transportation INC",
      "address": "9037 Bishop Crest Ln, Charlotte, NC 28277, USA",
      "phone": "(704) 995-7444",
      "website": "https://transportcaspian.com/",
      "rating": 4.9,
      "reviews": 282,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "THE WRIGHT MEDICAL TRANSPORTATION, LLC",
      "address": "10926 David Taylor Dr STE 120, Charlotte, NC 28262, USA",
      "phone": "(980) 230-5409",
      "website": "https://www.thewrightmedicaltransportation.com/",
      "rating": 5,
      "reviews": 86,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Sperry Transport",
      "address": "8301 University Executive Park Dr Ste 105, Charlotte, NC 28262, USA",
      "phone": "(833) 993-6400",
      "website": "https://sperrymedicaltransport.com/",
      "rating": 4.9,
      "reviews": 52,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "A -1 Wheelchair Patient Transport Inc",
      "address": "7561 Orr Rd. Ste A, Charlotte, NC 28213, USA",
      "phone": "(704) 333-9741",
      "website": "http://www.a1patienttransport.com/",
      "rating": 3.6,
      "reviews": 54,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Tyvola Senior Center SHIIP",
      "address": "2225 Tyvola Rd, Charlotte, NC 28210, USA",
      "phone": "(980) 314-1320",
      "website": "https://parkandrec.mecknc.gov/Places-to-Visit/Rec-Centers/tyvola-senior-center",
      "rating": 4.7,
      "reviews": 111,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Charlotte Mecklenburg Senior Center",
      "address": "2225 Tyvola Rd, Charlotte, NC 28210, USA",
      "phone": "",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Levine Senior Center",
      "address": "1050 Devore Ln, Matthews, NC 28105, USA",
      "phone": "(704) 846-4654",
      "website": "http://www.levineseniorcenter.org/",
      "rating": 4.8,
      "reviews": 102,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Eastway Regional Recreation Center",
      "address": "3150 Eastway Pk Dr, Charlotte, NC 28213, USA",
      "phone": "(980) 314-3772",
      "website": "https://parkandrec.mecknc.gov/Places-to-Visit/Rec-Centers/eastway-regional-recreation-center",
      "rating": 4.7,
      "reviews": 530,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Bette Rae Thomas Recreation Center",
      "address": "2921 Tuckaseegee Rd, Charlotte, NC 28208, USA",
      "phone": "(980) 314-1111",
      "website": "https://parkandrec.mecknc.gov/Places-to-Visit/Rwu.j)ec-Centers/bette-rae-thomas-recreation-center",
      "rating": 4.5,
      "reviews": 249,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Marion Diehl Recreation Center and Pool",
      "address": "2219 Tyvola Rd, Charlotte, NC 28210, USA",
      "phone": "(980) 314-1300",
      "website": "https://parkandrec.mecknc.gov/places-to-visit/rec-centers/marion-diehl-recreation-center-and-indoor-pool",
      "rating": 4.6,
      "reviews": 206,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Bethlehem Center of Charlotte",
      "address": "2711 Norfolk Ave H, Charlotte, NC 28203, USA",
      "phone": "(704) 372-7982",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Shepherd's Center of Charlotte",
      "address": "300 Hawthorne Ln, Charlotte, NC 28204, USA",
      "phone": "(704) 365-1995",
      "website": "https://www.shepherdscharlotte.org/",
      "rating": 3.8,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Methodist Home Recreation Center",
      "address": "3200 Shamrock Dr, Charlotte, NC 28215, USA",
      "phone": "(980) 314-1123",
      "website": "https://parkandrec.mecknc.gov/places-to-visit/rec-centers/methodist-home-recreation-center",
      "rating": 4.4,
      "reviews": 149,
      "cats": [
        "social"
      ]
    },
    {
      "name": "SENIOR CITIZEN CENTER",
      "address": "Charlotte, NC 28269, USA",
      "phone": "",
      "website": "",
      "rating": 4,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "University Adult Care",
      "address": "1324 John Kirk Dr, Charlotte, NC 28262, USA",
      "phone": "(704) 510-0030",
      "website": "http://www.universityadultcare.com/",
      "rating": 4.5,
      "reviews": 21,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Blessed Assurance Adult Day",
      "address": "13001 Idlewild Rd, Matthews, NC 28105, USA",
      "phone": "(704) 845-1359",
      "website": "http://www.blessedadultcare.org/",
      "rating": 4.8,
      "reviews": 74,
      "cats": [
        "social"
      ]
    },
    {
      "name": "CORA'S Intergenerational Center",
      "address": "3301 Beatties Ford Rd, Charlotte, NC 28216, USA",
      "phone": "(704) 391-6682",
      "website": "http://www.corasigcenter.org/",
      "rating": 3.9,
      "reviews": 7,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Raesplayze",
      "address": "7516 E Independence Blvd, Charlotte, NC 28227, USA",
      "phone": "(704) 563-3334",
      "website": "http://raesplayze.com/",
      "rating": 4.3,
      "reviews": 12,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Loving Touch Adult Day/Health",
      "address": "1302 Beatties Ford Rd, Charlotte, NC 28216, USA",
      "phone": "(704) 331-0015",
      "website": "",
      "rating": 4.6,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Gracious Living Adult Day & Health Care Centers",
      "address": "9920 Kincey Ave #110, Huntersville, NC 28078, USA",
      "phone": "(704) 997-5032",
      "website": "https://www.graciouslivingadhcc.com/?utm_medium=paid+&utm_source=2507105-gbp&utm_campaign=fanbase",
      "rating": 4.9,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Samaritan Adult Daycare",
      "address": "2600 Elmin St, Charlotte, NC 28208, USA",
      "phone": "(704) 398-3686",
      "website": "",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Champion House of Care",
      "address": "2230 W Sugar Creek Rd, Charlotte, NC 28262, USA",
      "phone": "(704) 746-8081",
      "website": "http://www.championhouseofcare.org/",
      "rating": 4.9,
      "reviews": 50,
      "cats": [
        "social"
      ]
    },
    {
      "name": "University Adult Care",
      "address": "5224 Silchester Ln, Charlotte, NC 28215, USA",
      "phone": "(704) 609-0402",
      "website": "",
      "rating": 1,
      "reviews": 2,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Grant Adult Care",
      "address": "4934 Providence Rd, Charlotte, NC 28226, USA",
      "phone": "(704) 442-5540",
      "website": "",
      "rating": null,
      "reviews": null,
      "cats": [
        "social"
      ]
    },
    {
      "name": "McIntyre Elder Law",
      "address": "112 S Tryon St Ste 700, Charlotte, NC 28284, USA",
      "phone": "(704) 749-9244",
      "website": "http://mcelderlaw.com/",
      "rating": 4.9,
      "reviews": 594,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Collins Family & Elder Law Group",
      "address": "228 East Blvd, Charlotte, NC 28203, USA",
      "phone": "(704) 289-3250",
      "website": "https://www.collinsfamilylaw.com/",
      "rating": 4.8,
      "reviews": 51,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Collins Family & Elder Law Group",
      "address": "15720 Brixham Hill Ave #309, Charlotte, NC 28277, USA",
      "phone": "(704) 289-3250",
      "website": "https://www.collinsfamilylaw.com/locations/ballantyne-north-carolina/",
      "rating": 5,
      "reviews": 13,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Sabrina Winters, Attorney at Law, PLLC",
      "address": "6406 Carmel Rd #301, Charlotte, NC 28226, USA",
      "phone": "(704) 843-1446",
      "website": "http://www.ncestateplanninginfo.com/",
      "rating": 4.8,
      "reviews": 115,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "North Carolina Estate Planning & Fiduciary Law",
      "address": "5605 Carnegie Blvd Ste 420, Charlotte, NC 28209, USA",
      "phone": "(704) 248-6325",
      "website": "https://charlotteestatelawyer.com/?utm_source=google-local&utm_medium=organic&utm_campaign=4092",
      "rating": 4.9,
      "reviews": 48,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Orsbon & Fenninger, LLP",
      "address": "4201 Congress St Ste 110, Charlotte, NC 28209, USA",
      "phone": "(704) 556-9600",
      "website": "http://www.orsbonandfenninger.com/",
      "rating": 5,
      "reviews": 112,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Simpson Law Firm",
      "address": "17250 Lancaster Hwy #601, Charlotte, NC 28277, USA",
      "phone": "(803) 764-9555",
      "website": "https://simpsonestatelaw.com/?utm_source=googlesearch&utm_campaign=gbp",
      "rating": 5,
      "reviews": 254,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Potter Law Firm",
      "address": "15720 Brixham Hill Ave #300, Charlotte, NC 28277, USA",
      "phone": "(704) 944-3245",
      "website": "https://www.potterestateplanning.com/communities-serve-charlotte/",
      "rating": 4.9,
      "reviews": 18,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Linville Law Office, PLLC",
      "address": "7300 Carmel Executive Park Dr Ste 350, Charlotte, NC 28226, USA",
      "phone": "(704) 323-6712",
      "website": "http://linvillelaw.com/",
      "rating": 4.9,
      "reviews": 22,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "THB Law Group",
      "address": "3566 N Davidson St, Charlotte, NC 28205, USA",
      "phone": "(704) 299-5000",
      "website": "http://ncscattorneys.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    }
  ],
  "indianapolis-in": [
    {
      "name": "Bath Fitter",
      "address": "5701 W 85th St, Indianapolis, IN 46278, USA",
      "phone": "(317) 280-3152",
      "website": "https://www.bathfitter.com/us-en/location/indianapolis/?utm_source=gmb&utm_medium=organic&utm_campaign=gmb-google-seo",
      "rating": 4.8,
      "reviews": 251,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Next Day Access North Indianapolis",
      "address": "7168 Zionsville Rd, Indianapolis, IN 46268, USA",
      "phone": "(463) 210-2534",
      "website": "https://www.nextdayaccess.com/indianapolis-in",
      "rating": 4.9,
      "reviews": 58,
      "cats": [
        "bathroom",
        "stairs"
      ]
    },
    {
      "name": "General Devices Company, Inc.",
      "address": "1410 S Post Rd, Indianapolis, IN 46239, USA",
      "phone": "(317) 897-7000",
      "website": "https://www.generaldevices.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "KJK Service",
      "address": "8770 Guion Rd Ste G, Indianapolis, IN 46268, USA",
      "phone": "(866) 886-2009",
      "website": "http://www.kjkservice.com/",
      "rating": 5,
      "reviews": 98,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Indy Renovation",
      "address": "7155 Southeastern Ave, Indianapolis, IN 46239, USA",
      "phone": "(317) 680-7464",
      "website": "https://www.indyrenovation.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb-indianapolis",
      "rating": 4.4,
      "reviews": 122,
      "cats": [
        "bathroom",
        "tubs"
      ]
    },
    {
      "name": "3R Products & Services",
      "address": "1970 Midwest Blvd, Indianapolis, IN 46214, USA",
      "phone": "(317) 271-7670",
      "website": "https://www.3rindy.com/?utm_source=listingnetwork&utm_medium=organic&utm_campaign=listings",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "bathroom"
      ]
    },
    {
      "name": "Bath & Cabinet Experts",
      "address": "4011 Vincennes Rd, Indianapolis, IN 46268, USA",
      "phone": "(317) 576-4721",
      "website": "https://www.bathexperts.com/locations/indianapolis/?utm_source=google&utm_medium=gbp&utm_campaign=Baths",
      "rating": 4.8,
      "reviews": 727,
      "cats": [
        "tubs",
        "remodel"
      ]
    },
    {
      "name": "Baths R Us",
      "address": "5701 Fortune Cir S # G, Indianapolis, IN 46241, USA",
      "phone": "(463) 223-4560",
      "website": "https://bathsrus.com/in/indianapolis/?lsn=Google_BusinessProfile",
      "rating": 4.8,
      "reviews": 92,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Baths By Bee",
      "address": "115 Shadowlawn Dr, Fishers, IN 46038, USA",
      "phone": "(317) 653-6617",
      "website": "http://www.dreambathsbybee.com/",
      "rating": 4.8,
      "reviews": 93,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Superior Bath System",
      "address": "10089 Allisonville Rd Ste c-3, Fishers, IN 46038, USA",
      "phone": "(317) 942-3277",
      "website": "https://www.superiorbathsystem.com/",
      "rating": 4.8,
      "reviews": 310,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Chapman Custom Baths",
      "address": "601 E Main St, Brownsburg, IN 46112, USA",
      "phone": "(317) 939-5962",
      "website": "https://www.chapmancustombaths.com/?utm_source=google&utm_medium=organic&utm_campaign=gmb-brownsburg",
      "rating": 4.9,
      "reviews": 155,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Leaf Home Bath",
      "address": "1810 S Lynhurst Dr # A, Indianapolis, IN 46241, USA",
      "phone": "(463) 232-6637",
      "website": "https://www.leafhomebath.com/?y_source=1_MTAyNzExNDQxNy03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 182,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "New Bath Today",
      "address": "5520 W 76th St, Indianapolis, IN 46268, USA",
      "phone": "(317) 653-3834",
      "website": "https://newbathtoday.com/service-areas/indianapolis-in/?utm_source=4063&utm_medium=organic&utm_campaign=indianapolis-in-gbp",
      "rating": 4.7,
      "reviews": 750,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Sho-Pro of Indiana & Bath Planet of Indianapolis",
      "address": "12262 Hancock St, Carmel, IN 46032, USA",
      "phone": "(317) 676-1811",
      "website": "https://www.sho-proinc.com/",
      "rating": 4.7,
      "reviews": 477,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "Premier Home Pros",
      "address": "5760 W 79th St, Indianapolis, IN 46268, USA",
      "phone": "(855) 208-7818",
      "website": "https://premier-homepros.com/",
      "rating": 4.8,
      "reviews": 138,
      "cats": [
        "tubs"
      ]
    },
    {
      "name": "101 Mobility of Indianapolis",
      "address": "7161 E 87th St, Indianapolis, IN 46256, USA",
      "phone": "(317) 203-8917",
      "website": "https://www.101mobility.com/indianapolis/?utm_source=GBP_Indianapolis&utm_medium=organic&y_source=1_MTAzMzU5Njk5NC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 4.8,
      "reviews": 142,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Lifeway Mobility",
      "address": "8070 Castleton Rd Unit 822, Indianapolis, IN 46250, USA",
      "phone": "(317) 773-1996",
      "website": "https://www.lifewaymobility.com/indianapolis?utm_source=GMB&utm_medium=organic&utm_campaign=Lifeway_Indianapolis",
      "rating": 4.7,
      "reviews": 92,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Southern Stairlifts",
      "address": "7555 Terrace Beach, Indianapolis, IN 46240, USA",
      "phone": "(317) 937-8867",
      "website": "https://southernstairlifts.com/indianapolis/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Access Mobility Inc.",
      "address": "4855 S Emerson Ave Ste 101, Indianapolis, IN 46203, USA",
      "phone": "(317) 784-2255",
      "website": "https://www.accessmobility.com/",
      "rating": 4.9,
      "reviews": 339,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Altamira Ltd.",
      "address": "5316 W 79th St, Indianapolis, IN 46268, USA",
      "phone": "(800) 343-1066",
      "website": "http://www.altamiraltd.com/",
      "rating": 5,
      "reviews": 88,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Hoosier Mobility Solutions",
      "address": "162 W Carmel Dr, Carmel, IN 46032, USA",
      "phone": "(317) 660-5132",
      "website": "https://www.hoosiermobility.com/carmel-in/",
      "rating": 5,
      "reviews": 74,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "The Lift Man",
      "address": "4023 Heiney Rd Ste c, Indianapolis, IN 46241, USA",
      "phone": "(317) 830-6562",
      "website": "http://www.theliftman.com/",
      "rating": 4,
      "reviews": 7,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Leaf Home Stair Lift",
      "address": "1810 S Lynhurst Dr # A, Indianapolis, IN 46241, USA",
      "phone": "(317) 758-8818",
      "website": "https://www.leafhome.com/locations/indiana/indianapolis/stair-lift?utm_source=41DG&utm_medium=yext&utm_campaign=listings&y_source=1_MjgwNTk0MzctNzE1LWxvY2F0aW9uLndlYnNpdGU%3D",
      "rating": 3.3,
      "reviews": 12,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Mobility Indy",
      "address": "5532 W Raymond St, Indianapolis, IN 46241, USA",
      "phone": "(833) 463-9668",
      "website": "https://mobilityindy.com/?utm_campaign=gmb",
      "rating": 5,
      "reviews": 188,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "101 Mobility of Northwest Indiana",
      "address": "1454 86th Pl, Merrillville, IN 46410, USA",
      "phone": "(219) 356-0998",
      "website": "https://www.101mobility.com/nwi/?utm_source=GBP_NorthwestIndiana&utm_medium=organic&y_source=1_MTAzMzU5Njk3MC03MTUtbG9jYXRpb24ud2Vic2l0ZQ%3D%3D",
      "rating": 5,
      "reviews": 111,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Servants At Work, Inc",
      "address": "8427 Zionsville Rd, Indianapolis, IN 46268, USA",
      "phone": "(317) 844-7664",
      "website": "http://www.sawsramps.org/",
      "rating": 4.9,
      "reviews": 112,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "National Seating & Mobility",
      "address": "3164 Shadeland Ave, Indianapolis, IN 46226, USA",
      "phone": "(317) 454-7670",
      "website": "https://locations.nsm-seating.com/in/indianapolis/7050-guion-road",
      "rating": 3.6,
      "reviews": 77,
      "cats": [
        "stairs"
      ]
    },
    {
      "name": "Numotion",
      "address": "7802 Moller Rd, Indianapolis, IN 46268, USA",
      "phone": "(317) 334-9460",
      "website": "https://www.numotion.com/locations/indianapolis-in",
      "rating": 4.4,
      "reviews": 387,
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
      "name": "Green Men Restoration Group",
      "address": "16 S Keystone Ave, Indianapolis, IN 46201, USA",
      "phone": "(317) 339-0213",
      "website": "https://greenmenrestoration.com/",
      "rating": 5,
      "reviews": 33,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Indiana Home Remodel",
      "address": "2201 E 46th St Ste 196, Indianapolis, IN 46205, USA",
      "phone": "(317) 922-4222",
      "website": "https://indianahomeremodel.com/",
      "rating": 4.8,
      "reviews": 31,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Aging & Active Personal Services LLC",
      "address": "1111 E 54th St Ste 170, Indianapolis, IN 46220, USA",
      "phone": "(317) 497-0594",
      "website": "https://www.theagingactive.com/",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "CICOA Aging & In-Home Solutions",
      "address": "8440 Woodfield Crossing Blvd #175, Indianapolis, IN 46240, USA",
      "phone": "(317) 254-5465",
      "website": "https://cicoa.org/",
      "rating": 3.8,
      "reviews": 133,
      "cats": [
        "remodel",
        "transport"
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
      "name": "The Happy Handyman",
      "address": "Indianapolis, IN 46205, USA",
      "phone": "(317) 333-4693",
      "website": "https://www.happyhandymanindy.com/",
      "rating": 4.9,
      "reviews": 127,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Gettum Remodeling",
      "address": "4984 W Smith Valley Rd, Greenwood, IN 46142, USA",
      "phone": "(317) 888-5681",
      "website": "http://www.gettum.com/",
      "rating": 4.6,
      "reviews": 48,
      "cats": [
        "remodel"
      ]
    },
    {
      "name": "Tendercare Home Health Services Inc",
      "address": "6308 Rucker Rd Ste d, Indianapolis, IN 46220, USA",
      "phone": "(317) 251-0700",
      "website": "http://www.tchhs.net/",
      "rating": 4.7,
      "reviews": 84,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Care United Home Care Agency",
      "address": "5519 E 82nd St Ste D, Indianapolis, IN 46250, USA",
      "phone": "(317) 436-8133",
      "website": "https://careunitedservices.com/",
      "rating": 4.8,
      "reviews": 56,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Enchanted Hearts Home Care",
      "address": "650 N Girls School Rd, Indianapolis, IN 46214, USA",
      "phone": "(800) 239-1897",
      "website": "http://enchantedheartsllc.com/",
      "rating": 4.9,
      "reviews": 35,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Evelyn's Home Care LLC",
      "address": "4701 N Keystone Ave Ste 260 Level 2, Indianapolis, IN 46205, USA",
      "phone": "(317) 870-3106",
      "website": "https://evelynshomecare.com/",
      "rating": 5,
      "reviews": 43,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Good Hands Home Care LLC",
      "address": "5610 Crawfordsville Rd Ste 102, Indianapolis, IN 46224, USA",
      "phone": "(317) 759-2207",
      "website": "http://www.goodhandshomecareservices.com/",
      "rating": 5,
      "reviews": 51,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Heal at Home",
      "address": "1335 Sadlier Cir E Dr, Indianapolis, IN 46239, USA",
      "phone": "(317) 429-9875",
      "website": "http://healathomeindy.com/",
      "rating": 4.9,
      "reviews": 44,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Passion to Care Home Care",
      "address": "8604 Allisonville Rd #325, Indianapolis, IN 46250, USA",
      "phone": "(317) 537-1811",
      "website": "https://passiontocarehc.com/",
      "rating": 4.9,
      "reviews": 307,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Above and Beyond Homecare Services",
      "address": "3250 N Post Rd, Indianapolis, IN 46226, USA",
      "phone": "(317) 625-0822",
      "website": "http://www.abhscare.org/",
      "rating": 5,
      "reviews": 11,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Right at Home",
      "address": "2346 S Lynhurst Dr Ste 101, Indianapolis, IN 46241, USA",
      "phone": "(317) 956-5935",
      "website": "https://www.rightathome.net/indianapolis-west/?utm_source=google&utm_medium=local&utm_campaign=localmaps&utm_content=1726",
      "rating": 5,
      "reviews": 130,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "941 E 86th St #250, Indianapolis, IN 46240, USA",
      "phone": "(317) 493-8947",
      "website": "https://www.homeinstead.com/home-care/usa/in/indianapolis/141/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 5,
      "reviews": 48,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Graceful Aging Home Care",
      "address": "8888 Keystone Crossing STE 1300, Indianapolis, IN 46240, USA",
      "phone": "(866) 675-7850",
      "website": "https://www.gracefulaginghomecare.com/",
      "rating": 5,
      "reviews": 15,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Advantage Senior Care",
      "address": "3905 Vincennes Rd Suite 315, Indianapolis, IN 46268, USA",
      "phone": "(317) 986-5814",
      "website": "http://advantageseniorcareindy.com/",
      "rating": 5,
      "reviews": 71,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Servant Home Care",
      "address": "2346 S Lynhurst Dr Suite E 107 & D 201, Indianapolis, IN 46241, USA",
      "phone": "(317) 688-8395",
      "website": "http://www.servanthomecare.com/",
      "rating": 5,
      "reviews": 27,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Visiting Angels Senior Home Care",
      "address": "3815 River Crossing Pkwy #100, Indianapolis, IN 46240, USA",
      "phone": "(317) 284-6867",
      "website": "https://www.visitingangels.com/indianapolis/home?utm_source=gmb&utm_medium=organic&utm_campaign=local",
      "rating": 4.8,
      "reviews": 22,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Home Instead",
      "address": "2611 Waterfront Pkwy E Dr Suite 305, Indianapolis, IN 46214, USA",
      "phone": "(317) 624-2025",
      "website": "https://www.homeinstead.com/home-care/usa/in/indianapolis/638/?utm_source=google&utm_medium=organic&utm_campaign=google_organic_businesslisting_y",
      "rating": 4.8,
      "reviews": 59,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Changes Home Care – In-Home Senior Care in Indianapolis",
      "address": "8355 Rockville Rd Ste 35, Indianapolis, IN 46234, USA",
      "phone": "(317) 271-3800",
      "website": "http://www.changeshomecare.com/",
      "rating": 4.6,
      "reviews": 57,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Sovereign Care Services",
      "address": "1040 E 86th St Ste 48 a, Indianapolis, IN 46240, USA",
      "phone": "(317) 942-3397",
      "website": "https://sovereigncare.net/?utm_source=GMB&utm_medium=organic&utm_campaign=seo&utm_id=SEO",
      "rating": 5,
      "reviews": 25,
      "cats": [
        "homecare"
      ]
    },
    {
      "name": "Transportation Care",
      "address": "9165 Otis Ave Ste 109, Indianapolis, IN 46216, USA",
      "phone": "(317) 579-5416",
      "website": "http://www.transportationcare.org/",
      "rating": 4.5,
      "reviews": 8,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Johnson County Senior Services",
      "address": "36 Tracy Rd, Whiteland, IN 46184, USA",
      "phone": "(317) 738-4544",
      "website": "http://jcseniorservices.org/",
      "rating": 4.7,
      "reviews": 36,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Affordable Care Transportation",
      "address": "305 E 38th St, Anderson, IN 46013, USA",
      "phone": "(765) 620-7810",
      "website": "https://www.canva.com/design/DAEm5uqmX2g/view?utm_content=DAEm5uqmX2g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
      "rating": 4.6,
      "reviews": 16,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Hancock County Senior Services",
      "address": "1870 Fields Blvd, Greenfield, IN 46140, USA",
      "phone": "(317) 462-3758",
      "website": "http://hcssi.org/",
      "rating": 4.7,
      "reviews": 23,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Kenney Non-Emergency Medical Transportation, LLC",
      "address": "2346 S Lynhurst Dr Suite B105F, Indianapolis, IN 46241, USA",
      "phone": "(317) 385-8606",
      "website": "https://www.kenneynemtllc.com/",
      "rating": 2.8,
      "reviews": 15,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Arbor Village Services LLC",
      "address": "5200 Shadeland Ave, Indianapolis, IN 46226, USA",
      "phone": "(317) 947-7024",
      "website": "https://arborvillageservicesllc.com/",
      "rating": 4.7,
      "reviews": 36,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Need-A-Lift",
      "address": "8237 Indy Ln, Indianapolis, IN 46214, USA",
      "phone": "(317) 244-1314",
      "website": "http://www.needaliftin.com/",
      "rating": 3.8,
      "reviews": 22,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "INcareTrans",
      "address": "500 Polk St Ste 19, Greenwood, IN 46143, USA",
      "phone": "(317) 528-0018",
      "website": "https://www.incaretrans.com/",
      "rating": 4.8,
      "reviews": 322,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "Door2Door Transportation Service, LLC",
      "address": "9165 Otis Ave #242, Indianapolis, IN 46216, USA",
      "phone": "(317) 284-1273",
      "website": "",
      "rating": 3.6,
      "reviews": 14,
      "cats": [
        "transport"
      ]
    },
    {
      "name": "The Mid-North Shepherd's Center",
      "address": "3808 N Meridian St, Indianapolis, IN 46208, USA",
      "phone": "(317) 924-0959",
      "website": "https://www.midnorthshepherdscenter.com/",
      "rating": 4.8,
      "reviews": 5,
      "cats": [
        "social"
      ]
    },
    {
      "name": "John H Boner Community Center",
      "address": "2236 E 10th St, Indianapolis, IN 46201, USA",
      "phone": "(317) 633-8210",
      "website": "http://www.jbncenters.org/",
      "rating": 4.2,
      "reviews": 1006,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Beech Grove Senior Citizen Center",
      "address": "602 Main St, Beech Grove, IN 46107, USA",
      "phone": "(317) 788-4987",
      "website": "http://www.beechgrove.com/",
      "rating": 4.8,
      "reviews": 39,
      "cats": [
        "social"
      ]
    },
    {
      "name": "37th Place Community Center",
      "address": "2605 E 25th St, Indianapolis, IN 46218, USA",
      "phone": "",
      "website": "",
      "rating": 5,
      "reviews": 3,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Perry Senior Citizens Services Inc",
      "address": "6901 Derbyshire Rd, Indianapolis, IN 46227, USA",
      "phone": "(317) 783-9231",
      "website": "https://perryseniors.org/special-events/",
      "rating": 4.8,
      "reviews": 16,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Heritage Place of Indianapolis",
      "address": "4550 N Illinois St, Indianapolis, IN 46208, USA",
      "phone": "(317) 283-6662",
      "website": "http://heritageplaceindy.org/",
      "rating": 4.5,
      "reviews": 13,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Hawthorne Community Center",
      "address": "2440 W Ohio St, Indianapolis, IN 46222, USA",
      "phone": "(317) 637-4312",
      "website": "https://www.hawthornecenter.org/",
      "rating": 4.4,
      "reviews": 96,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Angelic Senior Care",
      "address": "6919 E 10th St D5, Indianapolis, IN 46219, USA",
      "phone": "(317) 529-2053",
      "website": "",
      "rating": 4.8,
      "reviews": 24,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Flanner House",
      "address": "2424 Doctor M.L.K. Jr St, Indianapolis, IN 46208, USA",
      "phone": "(317) 925-4231",
      "website": "https://flannerhouse.org/",
      "rating": 4.5,
      "reviews": 135,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Still Waters Adult Day Center",
      "address": "7160 Shadeland Station Way, Indianapolis, IN 46256, USA",
      "phone": "(317) 284-0837",
      "website": "http://stillwatersadc.org/",
      "rating": 4.8,
      "reviews": 40,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Independent Adult Day Centers",
      "address": "2225 Shelby St, Indianapolis, IN 46203, USA",
      "phone": "(317) 296-8811",
      "website": "https://adultday.com/",
      "rating": 4.2,
      "reviews": 42,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Independent Adult Day Centers - Northwest",
      "address": "8755 Guion Rd Ste A, Indianapolis, IN 46268, USA",
      "phone": "(463) 223-8242",
      "website": "https://www.adultday.com/",
      "rating": 4,
      "reviews": 31,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Autumn Leaves Adult Day Center",
      "address": "8100 E 16th St, Indianapolis, IN 46219, USA",
      "phone": "(317) 820-3233",
      "website": "http://autumnleavesofeastgate.org/",
      "rating": 5,
      "reviews": 20,
      "cats": [
        "social"
      ]
    },
    {
      "name": "SarahCare of Indianapolis",
      "address": "2805 E 96th St, Indianapolis, IN 46240, USA",
      "phone": "(317) 815-8300",
      "website": "https://sarahcare.com/affiliate-home-indianapolis-in/",
      "rating": 4.2,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Joy's House Broad Ripple",
      "address": "2028 Broad Ripple Ave, Indianapolis, IN 46220, USA",
      "phone": "(317) 254-0828",
      "website": "https://joyshouse.org/",
      "rating": 4.8,
      "reviews": 38,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Active Day of Indianapolis Northwest",
      "address": "4697, 6620 Parkdale Pl r, Indianapolis, IN 46254, USA",
      "phone": "(317) 297-3730",
      "website": "https://www.activeday.com/locations/active-day-of-indianapolis-northwest/",
      "rating": 4.1,
      "reviews": 15,
      "cats": [
        "social"
      ]
    },
    {
      "name": "BB's Home Away From Home Adult Day Center INC",
      "address": "1090 W 23rd St, Indianapolis, IN 46208, USA",
      "phone": "(317) 908-6669",
      "website": "http://bbshomeawayfromhome.org/",
      "rating": 4.4,
      "reviews": 17,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Golden Gardens",
      "address": "2636 N Mitthoefer Rd, Indianapolis, IN 46229, USA",
      "phone": "(317) 897-8555",
      "website": "https://www.thegoldengardens.com/",
      "rating": 4.3,
      "reviews": 34,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Independent Adult Day Centers - Northeast / Hamilton County",
      "address": "7318 Crossing Pl, Fishers, IN 46038, USA",
      "phone": "(463) 220-2828",
      "website": "http://www.adultday.com/",
      "rating": 3.8,
      "reviews": 4,
      "cats": [
        "social"
      ]
    },
    {
      "name": "Dillman & Owen Estate and Elder Law",
      "address": "2344 S Tibbs Ave, Indianapolis, IN 46241, USA",
      "phone": "(317) 492-9569",
      "website": "https://www.applegate-dillman.com/",
      "rating": 4.6,
      "reviews": 175,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Law Office of Claire E. Lewis",
      "address": "115 N Girls School Rd, Indianapolis, IN 46214, USA",
      "phone": "(317) 953-2452",
      "website": "https://www.clairelewis.net/?npcmp=dir:local:3083415:46214",
      "rating": 4.4,
      "reviews": 20,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Indiana Estate & Elder Law",
      "address": "10412 Allisonville Rd Unit 113, Fishers, IN 46038, USA",
      "phone": "(317) 863-2030",
      "website": "https://www.indianaestateelderlaw.com/",
      "rating": 4.9,
      "reviews": 88,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Norton Estate Planning & Elder Law Firm",
      "address": "3750 N Meridian St #300, Indianapolis, IN 46208, USA",
      "phone": "(317) 572-8696",
      "website": "http://www.estate-planners.org/",
      "rating": 4.9,
      "reviews": 200,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Severns & Howard, P.C.",
      "address": "10293 N Meridian St Suite 150, Indianapolis, IN 46290, USA",
      "phone": "(800) 335-3971",
      "website": "https://www.severns.com/",
      "rating": 5,
      "reviews": 16,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Life By Design Estate and Elder Law, LLC",
      "address": "10475 Crosspoint Blvd Suite 250, Indianapolis, IN 46256, USA",
      "phone": "(317) 348-2013",
      "website": "https://www.lifebydesignlaw.com/",
      "rating": 5,
      "reviews": 4,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "The Law Office of Clifton Dennis - Indianapolis & Greenwood Elder Law Attorney",
      "address": "380 Main St, Beech Grove, IN 46107, USA",
      "phone": "(317) 500-4883",
      "website": "https://cliftondennis.com/",
      "rating": 5,
      "reviews": 1,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Gilbert Legal Services LLC",
      "address": "7271 Shadeland Ave, Indianapolis, IN 46250, USA",
      "phone": "(317) 855-9922",
      "website": "https://www.gilbertlegalservices.com/",
      "rating": 5,
      "reviews": 36,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Slater Law Office, LLC",
      "address": "600 E Carmel Dr Ste. 128, Carmel, IN 46032, USA",
      "phone": "(317) 571-9600",
      "website": "http://www.slaterelderlaw.com/",
      "rating": 5,
      "reviews": 30,
      "cats": [
        "legal"
      ]
    },
    {
      "name": "Frank & Kraft, Attorneys at Law",
      "address": "135 N Pennsylvania St #1100, Indianapolis, IN 46204, USA",
      "phone": "(317) 684-1100",
      "website": "https://www.frankkraft.com/",
      "rating": 4.9,
      "reviews": 47,
      "cats": [
        "legal"
      ]
    }
  ],
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

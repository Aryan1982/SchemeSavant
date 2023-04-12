const schemes=[
    {
        scheme_name:"scheme ka naaam",
        about_scheme:"scheme ke baarein me",
        min_age:20,// inverted me matt likhna ye
        min_income:234223, // aur ye bhi
        caste:"general",
        gender:"vo bhi small me no spaces (male) aisa",
        scheme_sector:"jo bhi ho small me",
        scheme_url:"gov ki website ka link",
        scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    },
    // {
    //     scheme_name:"Pradhan Mantri Kisan Samman Nidhi",
    //     about_scheme:"The scheme aims to supplement the financial needs of all landholding farmers’ families in procuring various inputs to ensure proper crop health and appropriate yields, commensurate with the anticipated farm income as well as for domestic needs. Under the Scheme an amount of Rs.6000/- per year is released by the Central Government online directly into the bank accounts of the eligible farmers under Direct Benefit Transfer mode, subject to certain exclusions.",
    //     min_age: 0,
    //     min_income:250000,
    //     caste:"general",
    //     gender:"male",
    //     scheme_sector:"agriculture",
    //     scheme_url:"https://pmkisan.gov.in/RegistrationFormNew.aspx",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    // {
    //     scheme_name:"Janta Juth Accidental Insurance Scheme",
    //     about_scheme:"Janta Juth is a Farmers Accidental Insurance Scheme launched by the Govt. of Gujarat on 26th January 1996 to provide economic assistance of upto ₹ 2,00,000 to Farmers in case of Death or Disability. It is a 100% state-sponsored scheme. The main objective is to assist the successor of the farmer in case of death or disability due to an accident. In this scheme, insurance premium is paid by the State Government for all farmers. This scheme is implemented under the Gujarat Community Group-Janta Accidental Insurance Scheme from 01/04/08 through Director of Insurance, Gandhinagar. In case of accidental death or permanent disability, all registered farmers, any child (son/daughter) of the farmer and husband/wife of the farmer having age of 5 to 70 years are beneficiaries for the scheme." ,
    //     min_age:5, //isme 5-70 saal ke liye eligibility hai
    //     min_income: 0 ,//no income criteria
    //     caste:"general",
    //     gender:"female",
    //     scheme_sector:"agriculture",
    //     scheme_url:"offline form",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    // {
    //     scheme_name:"Deen Dayal Upadhyay Grameen Kaushalya Yojana",
    //     about_scheme:"Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), the skill training and placement program of the Ministry of Rural Development (MoRD), occupies a unique position amongst other skill training programs, due to its focus on the rural poor youth and its emphasis on sustainable employment through the prominenceand incentives are given to post-placement tracking, retention, and career progression",
    //     min_age:15, // 15 to 35 ki age limit hai to apne aap se dekh liyo ki kese ho salta hai
    //     min_income: 0 , //isme koi income criteria nai diya hai
    //     caste:"sc", //sc aur st dono ke liye hai
    //     gender:"Female", //isme only female ke liye nai hai st/sc caste nd agar female ho aur sc/st se belong na krti hol to bhi wo eligible hai aisa hai
    //     scheme_sector:"agriculture",
    //     scheme_url:"https://kaushalpanjee.nic.in/",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    // {
    //     scheme_name:"Pradhan Mantri Mudra Yojana",
    //     about_scheme:"Pradhan Mantri Mudra Yojana (PMMY) is a flagship scheme of Government of India. The scheme facilitates micro credit/Loan up to Rs. 10 lakh to income generating micro enterprises engaged in the non farm sector in manufacturing, processing, trading or service sector. MUDRA supports Financial Intermediaries to extend loans to the non-corporate, non-farm sector income generating activities of micro and small entities.These Micro and small entities comprises of millions of proprietorship / partnership firms running as small manufacturing units, service sector units, shopkeepers, fruits / vegetable vendors, truck operators, food-service units, repair shops, machine operators, small industries, artisans, food processors and others, in rural and urban",
    //     min_age:18,// isme age criteria 18 to 65 hai 
    //     min_income:0, //isme income criteria nai hai 
    //     caste:"obc", //isme 3 hai st/sc nd obc par mene sirf obc likha hai ... idk add karna hai ki nai so
    //     gender:"male",
    //     scheme_sector:"banking",
    //     scheme_url:"https://www.jansamarth.in/home",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    {
        scheme_name:"Pradhan Mantri Jeevan Jyoti Bima Yojana",
        about_scheme:"PMJJBY is an insurance scheme by Ministry of Finance, offering life insurance cover for death due to any reason. It is a one-year cover, renewable from year to year. The scheme is offered / administered through LIC and other Life Insurance companies willing to offer the product on similar terms with necessary approvals and tie ups with Banks / Post office for this purpose. All individual account holders of participating banks/ Post office in the age group of 18 to 50 years are entitled to join. Aadhaar is the primary KYC for the bank / Post office account.",
        min_age:18,// isme 18 se 50 ka age criteria hai
        min_income:0, // no income specify
        caste:"st",
        gender:"female",
        scheme_sector:"banking",
        scheme_url:"https://jansuraksha.gov.in/",
    },
    // {
    //     scheme_name:"Indira Gandhi National Old Age Pension Scheme",
    //     about_scheme:"scheme ke baarein me",
    //     min_age:60,// isme age criteria 60 se above ke liye hai so mene min age 60 likhi hai
    //     min_income:0, // aur ye bhi
    //     caste:"obc", //isme sari caste ke liye eligible hai per wo below povert line me hone chiye tab hi....
    //     gender:"male",
    //     scheme_sector:"b",
    //     scheme_url:"https://nsap.nic.in/",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },

    // {
    //     scheme_name:"PM Street Vendors AtmaNirbhar Nidhi (PM SVANidhi)",
    //     about_scheme:"PM SVANidhi is a central-sector micro-credit scheme launched on 1st June 2020 by the Ministry of Housing and Urban Affairs (MoHUA) to provide handholding support to street vendors. The scheme facilitates a working capital collateral-free loan of ₹10,000, with subsequent loans of ₹20,000 and ₹50,000 with a 7% interest subsidy. The scheme focuses on increasing the digital footprint in India by promoting the use of digital transactions among street vendors. To incentivize the adoption of digital transactions, a cashback of up to ₹100 per month is given to Street Vendors. The scheme aims to formalize the street vendors and open up new opportunities for this sector to move up the economic ladder.Street vendors represent a very important constituent of the urban informal economy and play a significant role in ensuring availability of the goods and services at affordable rates at the doorstep of the city dwellers. They are known as vendors, hawkers, thelewala, rehriwala, theliphadwala, etc. in different areas/ contexts. The goods supplied by them include vegetables, fruits, ready-to-eat street food, tea, pakodas, bread, eggs, textile, apparel, footwear, artisan products, books/ stationary, etc. The services include barber shops, cobblers, pan shops, laundry services, etc. ",
    //     min_age:18,//min 18 nd max 60
    //     min_income:0, // aur ye bhi
    //     caste:"obc",
    //     gender:"male",
    //     scheme_sector:"business",
    //     scheme_url:"https://pmsvanidhi.mohua.gov.in/",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    // {
    //     scheme_name:"Credit Based Schemes For SC - Mahila Samriddhi Yojana",
    //     about_scheme:"scheme ke baarein me",
    //     min_age:18,
    //     min_income:300000, //pehli aisi scheme mile jisme sidha sidha sab kuch apne dhache me set ho rahaa hai.... uff stuggle is real...
    //     caste:"general",
    //     gender:"female",
    //     scheme_sector:"business",
    //     scheme_url:"http://hsfdc.org.in/mainAll.php",
    //     scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    // },
    {
        scheme_name:"Unnati Scheme",
        about_scheme:"Unnati, a first of its kind initiative of the Department of Social Welfare, Government of Karnataka intends to provide a comprehensive entrepreneurship platform for startups. The aim of this program is to cater to the end to end requirements of a startup i.e. from identifying the innovation, validating it, providing seed capital and eventually giving them the market accessUnder the Unnati Yojana for SC/ST community of Karnataka state government will give up to Rs 50 lakhs rupee financial support to the winning entrepreneurs to develop tech-based solutions. The total investment under the Scheme for Entrepreneurs is Rs 20 crore. This Scheme will be implemented under the two categories. In the first stage of implementation, the Government will provide financial support to the SC/ST Entrepreneurs.",
        min_age:18,// inverted me matt likhna ye
        min_income:500000, // aur ye bhi
        caste:"st",
        gender:"male",
        scheme_sector:"business",
        scheme_url:"karnataka.gov.in",
        scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
    },
    {
        scheme_name:"Pradhan Mantri Kisan Samman Nidhi",
        about_scheme:"The scheme aims to supplement the financial needs of all landholding farmers’ families in procuring various inputs to ensure proper crop health and appropriate yields, commensurate with the anticipated farm income as well as for domestic needs. Under the Scheme an amount of Rs.6000/- per year is released by the Central Government online directly into the bank accounts of the eligible farmers under Direct Benefit Transfer mode, subject to certain exclusions.",
        min_age: 0,
        min_income:250000,
        caste:"general",
        gender:"all",
        scheme_sector:"agriculture",
        scheme_url:"https://pmkisan.gov.in/RegistrationFormNew.aspx",
        scheme_img_url : "https://pmmodiyojana.in/wp-content/uploads/2022/10/image-197.png"
    },
    {
        scheme_name:"Janta Juth Accidental Insurance Scheme",
        about_scheme:"Janta Juth is a Farmers Accidental Insurance Scheme launched by the Govt. of Gujarat on 26th January 1996 to provide economic assistance of upto ₹ 2,00,000 to Farmers in case of Death or Disability. It is a 100% state-sponsored scheme. The main objective is to assist the successor of the farmer in case of death or disability due to an accident. In this scheme, insurance premium is paid by the State Government for all farmers. This scheme is implemented under the Gujarat Community Group-Janta Accidental Insurance Scheme from 01/04/08 through Director of Insurance, Gandhinagar. In case of accidental death or permanent disability, all registered farmers, any child (son/daughter) of the farmer and husband/wife of the farmer having age of 5 to 70 years are beneficiaries for the scheme." ,
        min_age:5, //isme 5-70 saal ke liye eligibility hai
        min_income: 0 ,//no income criteria
        caste:"obc",
        gender:"all",
        scheme_sector:"agriculture",
        scheme_url:"offline form",
        scheme_img_url :"https://www.bookmycrop.com/storage/blog/miAeUmQhEeRMPnJ3vejqFXPNZbkmZq2Jpnvzpn8Z.jpg"
    },
    {
        scheme_name:"Deen Dayal Upadhyay Grameen Kaushalya Yojana",
        about_scheme:"Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY), the skill training and placement program of the Ministry of Rural Development (MoRD), occupies a unique position amongst other skill training programs, due to its focus on the rural poor youth and its emphasis on sustainable employment through the prominenceand incentives are given to post-placement tracking, retention, and career progression",
        min_age:15, // 15 to 35 ki age limit hai to apne aap se dekh liyo ki kese ho salta hai
        min_income: 0 , //isme koi income criteria nai diya hai
        caste:"sc", //sc aur st dono ke liye hai
        gender:"Female", //isme only female ke liye nai hai st/sc caste nd agar female ho aur sc/st se belong na krti hol to bhi wo eligible hai aisa hai
        scheme_sector:"agriculture",
        scheme_url:"https://kaushalpanjee.nic.in/",
        scheme_img_url :"https://www.civilhindipedia.com/upload/blog/post/foundation-day-of-deen-dayal-upadhyaya-grameen-kaushalya-yojana-ddu-gky-being-celebrated-tomorrow-on-the-occasion-of-antyodaya-diwas-kaushal-se-kal-badlenge.jpg"
    },
    {
        scheme_name:"Pradhan Mantri Mudra Yojana",
        about_scheme:"Pradhan Mantri Mudra Yojana (PMMY) is a flagship scheme of Government of India. The scheme facilitates micro credit/Loan up to Rs. 10 lakh to income generating micro enterprises engaged in the non farm sector in manufacturing, processing, trading or service sector. MUDRA supports Financial Intermediaries to extend loans to the non-corporate, non-farm sector income generating activities of micro and small entities.These Micro and small entities comprises of millions of proprietorship / partnership firms running as small manufacturing units, service sector units, shopkeepers, fruits / vegetable vendors, truck operators, food-service units, repair shops, machine operators, small industries, artisans, food processors and others, in rural and urban",
        min_age:18,// isme age criteria 18 to 65 hai 
        min_income:0, //isme income criteria nai hai 
        caste:"obc", //isme 3 hai st/sc nd obc par mene sirf obc likha hai ... idk add karna hai ki nai so
        gender:"all",
        scheme_sector:"b",
        scheme_url:"https://www.jansamarth.in/home",
        scheme_img_url :"https://uxdt.nic.in/wp-content/uploads/2020/06/Pradhanmantri-Mudra-Yojna_Preview.png?x19428"
    },
    {
        scheme_name:"Pradhan Mantri Jeevan Jyoti Bima Yojana",
        about_scheme:"PMJJBY is an insurance scheme by Ministry of Finance, offering life insurance cover for death due to any reason. It is a one-year cover, renewable from year to year. The scheme is offered / administered through LIC and other Life Insurance companies willing to offer the product on similar terms with necessary approvals and tie ups with Banks / Post office for this purpose. All individual account holders of participating banks/ Post office in the age group of 18 to 50 years are entitled to join. Aadhaar is the primary KYC for the bank / Post office account.",
        min_age:18,// isme 18 se 50 ka age criteria hai
        min_income:0, // no income specify
        caste:"general",
        gender:"all",
        scheme_sector:"banking",
        scheme_url:"https://jansuraksha.gov.in/",
        scheme_img_url :"https://i.ytimg.com/vi/MAU1XX3yVG4/maxresdefault.jpg"
    },
    {
        scheme_name:"Indira Gandhi National Old Age Pension Scheme",
        about_scheme:"scheme ke baarein me",
        min_age:60,// isme age criteria 60 se above ke liye hai so mene min age 60 likhi hai
        min_income:0, // aur ye bhi
        caste:"obc", //isme sari caste ke liye eligible hai per wo below povert line me hone chiye tab hi....
        gender:"all",
        scheme_sector:"banking",
        scheme_url:"https://nsap.nic.in/",
        scheme_img_url :"https://yojanalabh.com/wp-content/uploads/2021/09/IGNOAPS-min.jpg"
    },
    {
        scheme_name:"PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)",
        about_scheme:"PM SVANidhi is a central-sector micro-credit scheme launched on 1st June 2020 by the Ministry of Housing and Urban Affairs (MoHUA) to provide handholding support to street vendors. The scheme facilitates a working capital collateral-free loan of ₹10,000, with subsequent loans of ₹20,000 and ₹50,000 with a 7% interest subsidy. The scheme focuses on increasing the digital footprint in India by promoting the use of digital transactions among street vendors. To incentivize the adoption of digital transactions, a cashback of up to ₹100 per month is given to Street Vendors. The scheme aims to formalize the street vendors and open up new opportunities for this sector to move up the economic ladder.Street vendors represent a very important constituent of the urban informal economy and play a significant role in ensuring availability of the goods and services at affordable rates at the doorstep of the city dwellers. They are known as vendors, hawkers, thelewala, rehriwala, theliphadwala, etc. in different areas/ contexts. The goods supplied by them include vegetables, fruits, ready-to-eat street food, tea, pakodas, bread, eggs, textile, apparel, footwear, artisan products, books/ stationary, etc. The services include barber shops, cobblers, pan shops, laundry services, etc. ",
        min_age:18,//min 18 nd max 60
        min_income:0, // aur ye bhi
        caste:"general",
        gender:"all",
        scheme_sector:"business",
        scheme_url:"https://pmsvanidhi.mohua.gov.in/",
        scheme_img_url :"https://www.india.gov.in/sites/upload_files/npi/files/spotlights/svanidhi_spotlight.jpg"
    },
    // {
    //     scheme_name:"Credit Based Schemes For SC - Mahila Samriddhi Yojana",
    //     about_scheme:"scheme ke baarein me",
    //     min_age:18,
    //     min_income:300000, //pehli aisi scheme mile jisme sidha sidha sab kuch apne dhache me set ho rahaa hai.... uff stuggle is real...
    //     caste:"sc",
    //     gender:"female",
    //     scheme_sector:"business",
    //     scheme_url:"http://hsfdc.org.in/mainAll.php",
    //     scheme_img_url :"https://www.statusin.in/uploads/images2022/59785-1.jpg"
    // },
    {
        scheme_name:"Unnati Scheme",
        about_scheme:"Unnati, a first of its kind initiative of the Department of Social Welfare, Government of Karnataka intends to provide a comprehensive entrepreneurship platform for startups. The aim of this program is to cater to the end to end requirements of a startup i.e. from identifying the innovation, validating it, providing seed capital and eventually giving them the market accessUnder the Unnati Yojana for SC/ST community of Karnataka state government will give up to Rs 50 lakhs rupee financial support to the winning entrepreneurs to develop tech-based solutions. The total investment under the Scheme for Entrepreneurs is Rs 20 crore. This Scheme will be implemented under the two categories. In the first stage of implementation, the Government will provide financial support to the SC/ST Entrepreneurs.",
        min_age:18,// inverted me matt likhna ye
        min_income:500000, // aur ye bhi
        caste:"st",
        gender:"all",
        scheme_sector:"business",
        scheme_url:"karnataka.gov.in",
        scheme_img_url :"data:image/png;base64,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"
    }
    //chalo ho gayaa... agar koi galti ho to thike kar lena ya phir call karna bol dena ye thik kar de...thikeee
    
]





// const schemes=[
//     {
//         scheme_name:"Kisan Samman Nidhi Yojana",
//         about_scheme:"This scheme provides financial assistance to farmers for their agricultural needs.",
//         min_age:18,
//         min_income:60000,
//         caste:"All",
//         gender:"All",
//         scheme_sector:"agriculture",
//         scheme_url:"https://pmkisan.gov.in/",
//         scheme_img_url:"https://example.com/images/kisan_samman_nidhi.jpg"
//     },
//     {
//         scheme_name:"Pradhan Mantri Awas Yojana",
//         about_scheme:"This scheme provides affordable housing to the economically weaker sections of the society.",
//         min_age:21,
//         min_income:120000,
//         caste:"general",
//         gender:"All",
//         scheme_sector:"agriculture",
//         scheme_url:"https://pmaymis.gov.in/",
//         scheme_img_url:"https://example.com/images/pm_awas_yojana.jpg"
//     },
//     {
//         scheme_name:"Pradhan Mantri Jan Dhan Yojana",
//         about_scheme:"This scheme aims to provide financial inclusion to all households in India by providing them with a bank account, a RuPay debit card and an insurance cover.",
//         min_age:18,
//         min_income:0,
//         caste:"general",
//         gender:"All",
//         scheme_sector:"business",
//         scheme_url:"https://pmjdy.gov.in/",
//         scheme_img_url:"https://example.com/images/pm_jan_dhan_yojana.jpg"
//     },
//     {
//         scheme_name:"Sukanya Samriddhi Yojana",
//         about_scheme:"This scheme is designed for the welfare of the girl child and encourages parents to save for their girl child's future education and marriage expenses.",
//         min_age:0,
//         min_income:25000,
//         caste:"general",
//         gender:"Female",
//         scheme_sector:"business",
//         scheme_url:"https://www.indiapost.gov.in/VAS/Pages/Content/Sukanya-Samriddhi-Account.aspx",
//         scheme_img_url:"https://example.com/images/sukanya_samriddhi_yojana.jpg"
//     },
//     {
//         scheme_name:"National Pension System",
//         about_scheme:"This scheme is a voluntary contribution pension system for individuals aged 18 to 60 years and aims to provide retirement income to its subscribers.",
//         min_age:18,
//         min_income:0,
//         caste:"sc",
//         gender:"All",
//         scheme_sector:"banking",
//         scheme_url:"https://www.npscra.nsdl.co.in/",
//         scheme_img_url:"https://example.com/images/national_pension_system.jpg"
//     },
//     {
//         scheme_name:"Pradhan Mantri Fasal Bima Yojana",
//         about_scheme:"This scheme aims to provide insurance coverage and financial support to farmers in the event of crop damage due to natural calamities, pests or diseases.",
//         min_age:18,
//         min_income:0,
//         caste:"sc",
//         gender:"All",
//         scheme_sector:"agriculture",
//         scheme_url:"https://pmfby.gov.in/",
//         scheme_img_url:"https://example.com/images/pm_fasal_bima_yojana.jpg"
//     },
//     {
//         scheme_name:"Digital India",
//         about_scheme:"This scheme aims to transform India into a digitally empowered society and knowledge economy.",
//         min_age:0,
//         min_income:0,
//         caste:"st",
//         gender:"All",
//         scheme_sector:"education",
//         scheme_url:"https://www.digitalindia.gov.in/",
//         scheme_img_url:"https://example.com/images/digital_india.jpg"
//     }]

// const schemes=[
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,// inverted me matt likhna ye
// 				min_income:234223, // aur ye bhi
// 				caste:"general",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"agriculture",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"general",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"agriculture",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"general",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"agriculture",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"general",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"agriculture",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"general",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"business",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"sc",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"business",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"sc",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"business",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"business",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"business",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"education",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"education",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"health",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			{
// 				scheme_name:"scheme ka naaam",
// 				about_scheme:"scheme ke baarein me",
// 				min_age:20,
// 				min_income:234223,
// 				caste:"st",
// 				gender:"vo bhi small me no spaces (male) aisa",
// 				scheme_sector:"banking",
// 				scheme_url:"gov ki website ka link",
// 			},
// 			//aage aise hi add karte rehna
// ]

export default schemes;
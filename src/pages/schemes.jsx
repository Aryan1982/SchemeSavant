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
    {
				scheme_name:"AICTE  Mitacs Globalink Research Internship (GRI) Scheme",
				about_scheme:"AICTE, on 23rd February 2018, entered into a Memorandum of Understanding with Mathematics of Information Technology and Computer Systems (MITACS) Canada for AICTE  MITACS Globalink Research Internships (GRI) Program to foster cross-border partnerships focused on creating a platform that opens the path for collaborative research between Canada and India to a wider pool of student talent in India.",
				min_age:18,// inverted me matt likhna ye
				min_income:12345, // aur ye bhi
				caste:"all",
				gender:"all",
				scheme_sector:"rural",
				scheme_url:"https://www.mitacs.ca/en/programs/globalink/globalink-research-internship",
			},
			{
				scheme_name:"Research Grant For In-Service Faculty Members",
				about_scheme:"The scheme Research Grant for In-Service Faculty Members was introduced by the University Grants Commission (UGC), Department of Higher Education (DoHE). The objective of this research grant is to provide opportunities to regularly appointed faculty members of Universities/ Institutes/ Colleges (hereinafter “Institutions”) to pursue research in their area(s).",
				min_age:18,
				min_income:12345,
				caste:"all",
				gender:"all",
				scheme_sector:"urban",
				scheme_url:"https://frg.ugc.ac.in/",
			},
			{
				scheme_name:"Loan Based Schemes For Safai Karamchari - Education Loan Scheme (ELS)",
				about_scheme:"Under this scheme, term loans are extended through State Channelising Agencies (SCA), Regional Rural Banks(RRBs) and Nationalised Banks to the target group.",
				min_age:20,
				min_income:12345,
				caste:"general",
				gender:"female",
				scheme_sector:"rural",
				scheme_url:"https://www.myscheme.gov.in/schemes/lbssf-els",
			},
			{
				scheme_name:"CBSE Merit Scholarship Scheme For Single Girl Child",
				about_scheme:"A scholarship scheme by the Ministry of Education for meritorious Single Girl Students, who are the only child of their parents; and have passed the CBSE Class 10th Examination with 60% or more marks and are continuing their further school education of Class 11th and 12th.",
				min_age:20,
				min_income:234223,
				caste:"general",
				gender:"female",
				scheme_sector:"urban",
				scheme_url:"https://www.myscheme.gov.in/schemes/msssgc",
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
    },
    {
        scheme_name:"AICTE – Mitacs Globalink Research Internship (GRI) Scheme",
        about_scheme:"AICTE, on 23rd February 2018, entered into a Memorandum of Understanding with Mathematics of Information Technology and Computer Systems (MITACS) Canada for AICTE – MITACS Globalink Research Internships (GRI) Program to foster cross-border partnerships focused on creating a platform that opens the path for collaborative research between Canada and India to a wider pool of student talent in India.",
        min_age:18,// inverted me matt likhna ye
        min_income:800000, // aur ye bhi
        caste:"all",
        gender:"all",
        scheme_sector:"education",
        scheme_url:"https://www.mitacs.ca/en/programs/globalink/globalink-research-internship",
        scheme_img_url:"https://www.latestlaws.com/media/2021/09/mitacs-globalink-research-internships-0.png"
    },
    {
        scheme_name:"Research Grant For In-Service Faculty Members",
        about_scheme:"The scheme Research Grant for In-Service Faculty Members was introduced by the University Grants Commission (UGC), Department of Higher Education (DoHE). The objective of this research grant is to provide opportunities to regularly appointed faculty members of Universities/ Institutes/ Colleges (hereinafter “Institutions”) to pursue research in their area(s).",
        min_age:18,
        min_income:0,
        caste:"all",
        gender:"all",
        scheme_sector:"education",
        scheme_url:"https://frg.ugc.ac.in/",
        scheme_img_url:"https://www.successcds.net/wp-content/uploads/2022/09/Research-Grant-for-In-service-Faculty-Members.png"
    },
    {
        scheme_name:"Loan Based Schemes For Safai Karamchari - Education Loan Scheme (ELS)",
        about_scheme:"Under this scheme, term loans are extended through State Channelising Agencies (SCA), Regional Rural Banks(RRBs) and Nationalised Banks to the target group.",
        min_age:20,
        min_income:450000,
        caste:"general",
        gender:"female",
        scheme_sector:"education",
        scheme_url:"https://www.myscheme.gov.in/schemes/lbssf-els",
        scheme_img_url:"https://nskfdc.nic.in/sites/all/themes/nskfdctheme/images/logo-big.png"
    },
    {
        scheme_name:"CBSE Merit Scholarship Scheme For Single Girl Child",
        about_scheme:"A scholarship scheme by the Ministry of Education for meritorious Single Girl Students, who are the only child of their parents; and have passed the CBSE Class 10th Examination with 60% or more marks and are continuing their further school education of Class 11th and 12th.",
        min_age:20,
        min_income:0,
        caste:"general",
        gender:"female",
        scheme_sector:"education",
        scheme_url:"https://www.myscheme.gov.in/schemes/msssgc",
        scheme_img_url:"https://pmmodiyojana.in/wp-content/uploads/2020/11/singlegirlchild.jpg"
    },
    //aage aise hi add karte rehna
    {
        scheme_name:"Atal Mission For Rejuvenation And Urban Transformation",
        about_scheme:"",
        min_age:20,// inverted me matt likhna ye
        min_income:234223, // aur ye bhi
        caste:"sc",
        gender:"vo bhi small me no spaces (male) aisa",
        scheme_sector:"health",
        scheme_url:"gov ki website ka link",
        scheme_img_url:"https://www.papertyari.com/wp-content/uploads/2019/03/AMRUT-1024x378.png"
    },
    {
        scheme_name:"Swachh Bharat Mission – Urban 2.0",
        about_scheme:"To accelerate the efforts to achieve universal sanitation coverage and to put the focus on sanitation, the Prime Minister of India had launched the Swachh Bharat Mission on 2nd October 2014. Under the mission, all villages, Gram Panchayats, Districts, States and Union Territories in India declared themselves open-defecation free (ODF) by 2 October 2019, the 150th birth anniversary of Mahatma Gandhi, by constructing over 100 million toilets in rural India. To ensure that the open defecation free behaviours are sustained, no one is left behind, and that solid and liquid waste management facilities are accessible, the Mission is moving towards the next Phase II of SBMG i.e ODF-Plus. ODF Plus activities under Phase II of Swachh Bharat Mission (Grameen) will reinforce ODF behaviours and focus on providing interventions for the safe management of solid and liquid waste in villages.The Swachh Bharat Mission (Gramin) launched on 2nd October, 2014, by modifying the erstwhile Nirmal Bharat Abhiyan (NBA), is a community-led and people-oriented program aimed at universalizing safe sanitation. Swachh Bharat Mission (Gramin) is the only sanitation programme implemented by the Ministry of Drinking Water and Sanitation (now Ministry of Jal Shakti)Financial support of Rs - 12,000 for APL and BPL Rural households  including storage for handwashing and cleaning of the toiletPayment of incentives may be in cash or in the form of construction materials or credit vouchers for such materials.",
        min_age:20,// inverted me matt likhna ye
        min_income:234223, // aur ye bhi
        caste:"st",
        gender:"vo bhi small me no spaces (male) aisa",
        scheme_sector:"health",
        scheme_url:"gov ki website ka link",
        scheme_img_url:"data:image/jpeg;base64,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"
    },
    {
        scheme_name:"Swachh Bharat Mission – Grameen PHASE I",
        about_scheme:"To accelerate the efforts to achieve universal sanitation coverage and to put focus on sanitation, the Prime Minister of India had launched the Swachh Bharat Mission on 2nd October 2014.",
        min_age:20,// inverted me matt likhna ye
        min_income:234223, // aur ye bhi
        caste:"general",
        gender:"vo bhi small me no spaces (male) aisa",
        scheme_sector:"health",
        scheme_url:"gov ki website ka link",
        scheme_img_url:"data:image/jpeg;base64,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"
    },
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
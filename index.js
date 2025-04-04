const allGameChangers = [
    { name: "Kabelo", surname: "Dipholo", place: "North West-Vryburg", course: "Bsc in IT With Computer Science and Mathematics", room: 61 },
    { name: "Sifundo", surname: "Mdlalose", place: "KZN-Nongoma", course: "Bachelor of Arts in general", room: 61 },
    { name: "Mpho", surname: "Tsotetsi", place: "Gauteng-Soweto", course: "LLB Law", room: 60 },
    { name: "Samuel", surname: "Ibe", place: "Gauteng-Springs", course: "Bachelor of administration", room: 31 },
    { name: "Rethabile", surname: "Ramoupi", place: "Gauteng-Johannesburg", course: "Bachelor of social science", room: 74 },
    { name: "Mlondi", surname: "Ngwane", place: "KZN-Port Shepstone", course: "Bachelor of administration", room: 17 },
    { name: "Peter", surname: "Akindele", place: "Mpumalanga-Nelspruit", course: "Bachelor of medicine and surgery", room: 70 },
    { name: "Zenzile", surname: "Saul", place: "Free state-Botshabelo", course: "Bcom accounting", room: 82 },
    { name: "Imange", surname: "Magqabi", place: "Gauteng-Johannesburg", course: "Bachelor of Accounting", room: 74 },
    { name: "Mokete", surname: "Khoantle", place: "Free state-Botshabelo", course: "Bcom Economics", room: 1 },
    { name: "Kamogelo", surname: "Moagi", place: "Gauteng-Johannesburg", course: "Bsc IT With Data Science", room: 57 },
    { name: "Zipho", surname: "Mabentsela", place: "Eastern Cape", course: "Bcom Accounting", room: 17 },
    {name:"Percy", surname:"Khoza",place:"Limpopo",course:"LLB Law",room:38},
    {name:"Sanele",surname:"Dyantyi",place:"Ladysmith",course:"Bachelor of social science",room:10},
    {name:"Phalanndwa",surname:"Ndingoho",place:"Venda",course:"Bsc Construction economics & Management",room:65},
    {name:"Asanda",surname:"Bhengu",place:"KZN-Durban",course:"LLB Law",room:4},
    {name:"Lethu",surname:"Kubheka",place:"Free state-Harrismith",course:"Bcom Law",room:69},
    {name:"Sibongakonke",surname:"Mhlekwa",place:"Gauteng-Germiston",course:"Bsc IT With Computer Science & Chemistry",room:13},
    {name:"Siyabonga",surname:"Hadebe",place:"KZN-NewCastle",course:"Bsc Forensic Science",room:79},
    {name:"Kwanele",surname:"Coshiwe",place:"KZN-Ladysmith",course:"Bsc Forensic science",room:4},
    {name:"Lungelo",surname:"Zibani",place:"KZN-Mtubatuba",course:"Bachelor of Science in Physiotherapy",room:67},
    {name:"Lindelani",surname:"LDlamini",place:"KZN-Pietermaritzburg",course:"Bsc Forensic Science",room:51},
    {name:"Joshua",surname:"Beukes",place:"Northern Cape-Kimberly",course:"Education specializing in Afrikaans English",room:15},
    {name:"Thabang",surname:"TDlamini",place:"North West-Mahikeng",course:"Bsc in Agricultural economics",room:20},
    {name:"Siyavuya",surname:"Xhali",place:"Eastern Cape-Gqeberha",course:"Bsc in administration",room:25},
    {name:"Bandile",surname:"Xulu",place:"KZN-Eshowe",course:"Bsc Construction Econoics and Management",room:65},
    {name:"Tlaka",surname:"Phagamiso",place:"Limpopo",course:"Education",room:40},
    {name:"Bongani",surname:"Makharara",place:"Free State-Qwaqwa",course:"Bcom Finance",room:12},
    {name:"Lucas",surname:"Mothiba",place:"Limpopo",course:"Bsc in Actuarial Science",room:9},
    {name:"Lungelo",surname:"Zondi",place:"KZN-Pietermaritzburg",course:"Bsc Agric Plant Breeding science",room:6},
    {name:"Aphiwe",surname:"Ngalo",place:"Eastern Cape-Gqeberha",course:"Bcom in Business Management",room:66},
    {name:"Thulani",surname:"Ngubeni",place:"Free State-Vrede",course:"Bsc in Computer Information Systems",room:57},
    {name:"Mobai",surname:"Morgan",place:"Limpopo-Tzaneen",course:"Bsc in Geological Sciences",room:18},
    {name:"Hope",surname:"Tawane",place:"Northern Cape-Kimberly",course:"Bsc Forensic Sciences",room:40},
    {name:"Aobakwe",surname:"Mosinki",place:"Northern Cape-Kimberly",course:"Bachelor of Social Science",room:25},
    {name:"Asanda",surname:"Chili",place:"KZN-Mtuba",course:"Bsc in Forensic Science",room:7},
    {name:"Junior",surname:"Mashamba",place:"Gauteng-Pretoria",course:"Bachelor of accounting",room:6},
    {name:"Unarine",surname:"Mualusi",place:"Limpopo",course:"Bachelor of accounting",room:41},
    {name:"Dwala",surname:"Mbunyuza",place:"Eastern Cape-Dutywa",course:"Bcom Accounting",room:64},
    {name:"Walter",surname:"Potsanyane",place:"Cape Town-Strand",course:"Bachelor of Arts",room:65},
    {name:"Ginel",surname:"Macebele",place:"Limpopo-Malamulele",course:"Bachelor of Arts specializing in Languages"},
    {name:"Alex",surname:"Mailula",place:"Limpopo-Polokwane",course:"LLB Law",room:15},
    {name:"Appearance",surname:"Magada",place:"Limpopo-Thohoyandou",course:"Education specializing in History and English",room:18},
    {name:"Wongalethu",surname:"Ngongo",place:"Eastern Cape-Libode",course:"Bachelor of Administration",room:59},
    {name:"Madumetja",surname:"Thantsha",place:"Limpopo",course:"Bsc in Construction Economics and Management",room:5},
    {name:"Rachuene",surname:"Nkgodi",place:"Limpopo",course:"Bachelor of Accounting",room:52},
    {name:"Thamsanqa",surname:"Zwane",place:"KZN-PMB",course:"Bachelor of Arts with IsiZulu and Linguistics",room:20},
    {name:"Olerato",surname:"Ngaka",place:"Western Cape-Atlantis",course:"Education majoring in History & Sesotho",room:10},
    {name:"Shawn",surname:"Khumalo",place:"Gauteng-Kempton Park",course:"Bachelor of Arts in Journalism",room:56},
    {name:"Itumeleng",surname:"Segoe",place:"North West-Rustenburg",course:"Bcom Accounting",room:21},
    {name:"Muzi",surname:"Tshabalala",place:"Gauteng-Johannesburg",course:"Bcom Finance",room:13},
    {name:"Sinethemba",surname:"Mgwenya",place:"Gauteng-Soweto",course:"Bsc with Biochemistry and Zoology",room:31},
    {name:"Bandiswa",surname:"Gumede",place:"Gauteng-Heidelberg",course:"LLB Law",room:1},
    {name:"Lekhooe",surname:"Segalo",place:"Gauteng-Pretoria",course:"Bcom Accounting",room:35},
    {name:"Smangaliso",surname:"Tjale",place:"Limpopo",course:"Bachelor of social science",room:50},
    {name:"Odwa",surname:"Khambula",place:"Eastern Cape-Flagstaff",course:"Bachelor of social science",room:76},
    {name:"Unam",surname:"Ngxale",place:"Gauteng-Pretoria",course:"Astrophysics",room:56},
    {name:"Mavela",surname:"Malwane",place:"Mpumalanga",course:"Bsc in Phyics-Engineering studies",room:58},
    {name:"Theo",surname:"Motshelabola",place:"North West",course:"LLB Law",room:51},
    {name:"Neo",surname:"Malimabe",place:"Free State-Qwaqwa",course:"Bsc in Construction Economics and Management",room:48}
];  
function Login(){
    const name=document.getElementById("name-login").value.trim();
    const password=document.getElementById("password").value.trim();
    if(findName(name) && verifyPassword(password)){
        //Allow access
        document.getElementById("invalidCredentials").classList.add("hide");
        window.location.href='quiz.html';
        document.getElementById("name-login").value='';
    }
    else{
        document.getElementById("invalidCredentials").classList.remove("hide");
    }
}
function verifyPassword(p){
    const size=p.length;
    const firstPart='GC-';
    if(size===4){
        if(firstPart==`${p[0]}`+`${p[1]}`+`${p[2]}` && checkRoomNumber(parseInt(`${p[3]}`))){
            return true;
        }
        else{
            return false;
        }
    }
    else if(size===5){
        if(firstPart==`${p[0]}`+`${p[1]}`+`${p[2]}` && checkRoomNumber(parseInt(`${p[3]}${p[4]}`))){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}
function checkRoomNumber(r){
    const size=allGameChangers.length;
    let found=false;
    for(var i=0;i<size;i++){
        if(allGameChangers[i].room==r){
            found=true;
        }
    }
    return found;
}
function findName(n){
    const size=allGameChangers.length;
    let found=false;
    for(var i=0;i<size;i++){
        if(allGameChangers[i].name==n){
            found=true;
        }

    }
    return found;
}

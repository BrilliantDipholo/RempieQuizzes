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
    {name:"Phalanndwa",surname:"Ndingoho",place:"Venda",course:"Bsc Construction economics & Management",room:64},
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
let quizImages = [];// Array to store used images for randomization
let wrongRempies=[];//Array to store rempies that the user got wrong
let correctRempies=[];
let count = 0;
let totalMark=0;//records total mark obtained for the whole quiz
let questionMark=0;//records the total mark obtained for each question
let selectPlaceMark=0;
let selectCourseMark=0;
let lastOne;
// Function to get a random image that hasn't been used
function getRandomImage() {
    let num;
    do {
        num = Math.floor(Math.random() * (allGameChangers.length-1));
    } while (quizImages.includes(num)); // Keep generating until we get a unique number
    quizImages.push(num); // Store the used number
    return num;
}
// Image rendering function
// function renderImage() {
//     const num = getRandomImage();
//     document.getElementById("image").src = `${allGameChangers[num].surname}.jpeg`;
// }
function getCourses(element){
    let randomPosition=Math.floor(Math.random() * 8) + 1;
    document.getElementById('personcourse').innerHTML='<option value="none" id="none">Choose Course</option>'
    for(var i=1;i<=8;i++){
        if(i===randomPosition){
            const option=document.createElement("option");
            option.textContent=`${allGameChangers[element].course}`;
            option.value=`${allGameChangers[element].course}`;
            document.getElementById("personcourse").append(option);
        }
        else{
            let el=Math.floor(Math.random() * allGameChangers.length);
            if(el!==element){
                const option=document.createElement("option");
                option.textContent=`${allGameChangers[el].course}`;
                option.value=`${allGameChangers[el].course}`;
                document.getElementById("personcourse").append(option);
            }
            // else{
            //     el--;
            //     const option=document.createElement("option");
            //     option.textContent=`${allGameChangers[el].course}`;
            //     option.value=`${allGameChangers[el].course}`;
            //     document.getElementById("personcourse").append(option);
            // }
        }
    }
}
function getPlaces(element){
    let randomPosition=Math.floor(Math.random() * 8) + 1;
    document.getElementById('personplace').innerHTML='<option value="none" disabled selected>Choose Place</option>';
    for(var i=1;i<=9;i++){
        if(i===randomPosition){
            document.getElementById('personplace').innerHTML+=`<option value="${allGameChangers[element].place}">${allGameChangers[element].place}</option>`;
        }
        else{
            let el=Math.floor(Math.random() * allGameChangers.length);
            if(el!==element){
                document.getElementById('personplace').innerHTML+=`<option value="${allGameChangers[el].place}">${allGameChangers[el].place}</option>`;
            }
                // }
            // else{
            //     el-=2;
            //     document.getElementById('personplace').innerHTML+=`<option value="${allGameChangers[el].place}">${allGameChangers[el].place}</option>`
            // }
        }
    }
}
document.getElementById("personplace").addEventListener("change", function() {
    let place;
    place = this.value;
    console.log(`selected:${place}, from array we have:${allGameChangers[quizImages[count]].place}`);
    if (`${allGameChangers[quizImages[count]].place}`===place) {
        console.log("Everything correct!!.");
        selectPlaceMark+=1;
        console.log("Correct! Marks: " + marks);
    } else {
        console.log("Incorrect details. Try again.");
        if(selectPlaceMark>0){
            selectPlaceMark--;
        }
        else{
            selectPlaceMark=0;
        }
    }
});
document.getElementById("personcourse").addEventListener("change", function() {
    let course;
    course = this.value;
    console.log(`selected Course:${course}, from array: ${allGameChangers[quizImages[count]].course}`);
    if (`${allGameChangers[quizImages[count]].course}`===course) {
        selectCourseMark+=1;
        console.log("Correct! Marks: " + marks);
    } else {
        console.log("Incorrect details. Try again.");
        if(selectCourseMark>0){
            selectCourseMark-=1;
        }
        else{
            selectCourseMark=0;
        }
    }
});
document.getElementById("nextPhoto").onclick = function () {
    console.log(`marks for selects: ${selectCourseMark+selectPlaceMark}`)
    const num = getRandomImage();
    getCourses(num);
    getPlaces(num);
    const name = document.getElementById("personname").value;
    const surname = document.getElementById("personsurname").value.trim();
    const room = parseInt(document.getElementById("personroom").value, 10);
    if(name===allGameChangers[quizImages[count]].name){
        console.log("Name correct !!");
        questionMark+=1;
    }if(surname===allGameChangers[quizImages[count]].surname){
        console.log("Surname correct !!");
        questionMark+=1;
    }if(room===allGameChangers[quizImages[count]].room){
        console.log("Room correct !!");
        questionMark+=1;
    }
    questionMark+=selectPlaceMark;
    questionMark+=selectCourseMark;
    totalMark=totalMark+(parseInt(questionMark/5));
    document.getElementById("displayMarks").textContent=`Total:${totalMark}`;
    if(totalMark===count+1){
        correctRempies.push(num);
    }
    if (count < 4) {
        document.getElementById("photo").src = `${allGameChangers[num].surname}.jpeg`;
        count++;
    }
    if(count===4){
        lastOne=num;
        document.getElementById("submitQuiz").classList.remove("hide");
        document.getElementById("nextPhoto").classList.add("hide");
    }
    console.log(totalMark);
    document.getElementById("personname").value='';
    document.getElementById("personsurname").value='';
    document.getElementById("personroom").value='';
    selectCourseMark=0;//reset the marks for the next question to start on a clean slate
    selectPlaceMark=0;//reset the marks for the next question to start on a clean slate
    questionMark=0;//reset the marks for the next question
};

//submission of quiz
document.getElementById("submitQuiz").onclick=function(){
    document.getElementById("footer").classList.add("hide");
    const name = document.getElementById("personname").value;
    const surname = document.getElementById("personsurname").value.trim();
    const room = parseInt(document.getElementById("personroom").value, 10);
    if(name===allGameChangers[quizImages[count]].name){
        console.log("Name correct !!");
        questionMark+=1;
    }if(surname===allGameChangers[quizImages[count]].surname){
        console.log("Surname correct !!");
        questionMark+=1;
    }if(room===allGameChangers[quizImages[count]].room){
        console.log("Room correct !!");
        questionMark+=1;
    }
    totalMark=totalMark+(parseInt((questionMark+selectCourseMark+selectPlaceMark)/5));
    if(totalMark===5){
        correctRempies.push(lastOne);
    }
    console.log(`Last person: ${allGameChangers[lastOne].name}`);
    console.log(`Correct ones: ${correctRempies}`);
    console.log(totalMark);
    document.getElementById("marks").classList.remove("hide");
    document.getElementById("markObtained").textContent=`Quiz Complete.You got ${totalMark}`;
    document.getElementById("fill-quiz").classList.add("hide");
    count=0;
}
document.getElementById('reviewButton').onclick=function(){
    let size=correctRempies.length;
    document.getElementById("reviewPage").innerHTML+=`
            <h2>Review</h2>
            <div class="firstRowReview">
                <div class="">
                    <figure id="1">
                        <img src="${allGameChangers[quizImages[0]].surname}.jpeg">
                        <figcaption>
                            <span>Name: ${allGameChangers[quizImages[0]].name}</span>
                            <span>Surname: ${allGameChangers[quizImages[0]].surname}</span>
                            <span>Place: ${allGameChangers[quizImages[0]].place}</span>
                            <span>Course: ${allGameChangers[quizImages[0]].course}</span>
                            <span>Room number: ${allGameChangers[quizImages[0]].room}</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="">
                    <figure id="2">
                        <img src="${allGameChangers[quizImages[1]].surname}.jpeg">
                        <figcaption>
                            <span>Name: ${allGameChangers[quizImages[1]].name}</span>
                            <span>Surname: ${allGameChangers[quizImages[1]].surname}</span>
                            <span>Place: ${allGameChangers[quizImages[1]].place}</span>
                            <span>Course: ${allGameChangers[quizImages[1]].course}</span>
                            <span>Room number: ${allGameChangers[quizImages[1]].room}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="secondRowReview">
                <div class="">
                    <figure id="3">
                        <img src="${allGameChangers[quizImages[2]].surname}.jpeg">
                        <figcaption>
                            <span>Name: ${allGameChangers[quizImages[2]].name}</span>
                            <span>Surname: ${allGameChangers[quizImages[2]].surname}</span>
                            <span>Place: ${allGameChangers[quizImages[2]].place}</span>
                            <span>Course: ${allGameChangers[quizImages[2]].course}</span>
                            <span>Room number: ${allGameChangers[quizImages[2]].room}</span>
                        </figcaption>
                    </figure>
                </div>
                <div class="">
                    <figure id="4">
                        <img src="${allGameChangers[quizImages[3]].surname}.jpeg">
                        <figcaption>
                            <span>Name: ${allGameChangers[quizImages[3]].name}</span>
                            <span>Surname: ${allGameChangers[quizImages[3]].surname}</span>
                            <span>Place: ${allGameChangers[quizImages[3]].place}</span>
                            <span>Course: ${allGameChangers[quizImages[3]].course}</span>
                            <span>Room number: ${allGameChangers[quizImages[3]].room}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="thirdRowReview">
                <div class="">
                    <figure id="5">
                        <img src="${allGameChangers[quizImages[4]].surname}.jpeg">
                        <figcaption>
                            <span>Name: ${allGameChangers[quizImages[4]].name}</span>
                            <span>Surname: ${allGameChangers[quizImages[4]].surname}</span>
                            <span>Place: ${allGameChangers[quizImages[4]].place}</span>
                            <span>Course: ${allGameChangers[quizImages[4]].course}</span>
                            <span>Room number: ${allGameChangers[quizImages[4]].room}</span>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="start-again-button" onclick="startAfresh()">
                <button id="start-afresh">Start quiz</button>
            </div>
    `;
    document.getElementById("reviewPage").classList.remove("hide");
    document.getElementById("marks").classList.add("hide");
}
//Finish Review
function startAfresh(){
    document.getElementById("footer").classList.remove("hide");
    document.getElementById("reviewPage").classList.add("hide");
    document.getElementById("quiz-choosing").classList.remove("hide");
    location.reload();
    quizImages = []; // Array to store used images for randomization
    count = 0;
    totalMark=0;
}
document.getElementById("start-quiz").onclick = function () {
    const number2 = Math.floor(Math.random() * (allGameChangers.length-1));
    quizImages.push(number2);
    getCourses(number2);
    getPlaces(number2);
    document.getElementById("fill-quiz").classList.remove("hide");
    document.getElementById("quiz-choosing").classList.add("hide");
    document.getElementById("displayMarks").textContent=`Total:${totalMark}`;
    document.getElementById("photo").src = `${allGameChangers[number2].surname}.jpeg`;
};

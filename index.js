
  
const myDictionary = {
"kdhanush862@gmail.com"	: "KANCHAMIREDDY DHANUSH KUMAR REDDY ",
"dineshpabbisetty2002@gmail.com"	: "Pabbisetty Dinesh ",
"keertana02@gmail.com"	: "ARAVAPALLI KEERTANA ",
"owkukrishnapriya@gmail.com"	: "Krishna Priya ",
"katuruakhila@gmail.com"	: "Akhila K",
"nithishakandukuri07@gmail.com"	: "Nithisha ",
"sneha.veerabathini@gmail.com"	: "Sneha V",
"navyasrionly1@gmail.com"	: "Navyasri ",
"sarikiswetha2002@gmail.com"	: "S Swetha ",
"lochu5vilehya@gmail.com"	: "S.Lochani ",
"sripilla94@gmail.com"	: "Sri jyothsna ",
"kashyapsanthoshi20@gmail.com"	: "Santhoshi Kumari ",
"bebirani711.2017@gmail.com"	: "KILLI BEBI RANI",
"pravalikareddynedula@gmail.com"	: "Nedula Pravalika Reddy",
"surendra20030509@gmail.com"	: "Surendra Kumar",
"sairavula2002@gmail.com"	: "Sainath",
"kaliseerapu2001@gmail.com"	: "Seerapu kali ",
"anudeepchebrolu467@gmail.com"	: "Anudeep",
"vinodh068322@gmail.com"	: "Vinod",
"sravyabharaniannavarapu@gmail.com"	: "Sravya",
"charithar992@gmail.com"	: "Charitha",
"sureshnaidu10159@gmail.com": "Suresh Naidu",
"saibanumula955@gmail.com"	: "M Saibhanu ",
"ingolepadmavathi@gmail.com"	: "I. Padmavathi",
"bandiprudhvi143@gmail.com"	: "Bandi prudhvi",
"velichetimaidhile@gmail.com": "V Maidhile ",
"manaswinikinnera1234@gmail.com"	: "Manaswini ",
"divyakadari121@gmail.com"	: "Divya",
"makkenapravallika777@gmail.com"	: "Pravallika.M",
"p.upendra8010@gmail.com" : "Upendra",
"bhavanipadala430@gmail.com"	: "PADALA BHAVANI",
"shaikreshma7979@gmail.com" : "Shaik Reshma",
"gowthaminarayanasetti850@gmail.com" : "Narayanasetti Gowthami ",
"varalaxmiganta066@gmail.com" : "Ganta Varalaxmi",
"ramuraparthi193@gmail.com" : "Ram",
"ladduc177@gmail.com" : "Laddu",
"abhishekweslee@gmail.com" : "Abhishek john weslee Malaka",
"natarajaddagatla@gmail.com" : "Nataraj",
"srinathtingilkar@gmail.com" : "Srinath",
"tejaschandradesaboina@gmail.com" :	"Tejas",
"deepakvemula16@gmail.com" :	"Deepak vemula"
  };

const pairs = {
"KILLI BEBI RANI" : "Srinath",
"Deepak vemula" : "Nataraj",
"Ganta Varalaxmi" : "KANCHAMIREDDY DHANUSH KUMAR REDDY",
"Abhishek john weslee Malaka" : "Sneha V",
"Srinath" : "Akhila K",
"Nataraj" : "Manaswini",
"KANCHAMIREDDY DHANUSH KUMAR REDDY" : "Suresh Naidu",
"Sneha V" : "Navyasri",
"Akhila K" : "Pabbisetty Dinesh",
"Manaswini" : "Seerapu kali",
"Suresh Naidu" : "V Maidhile",
"Navyasri" : "Charitha",
"Pabbisetty Dinesh" : "Anudeep",
"Seerapu kali" : "Vinod",
"V Maidhile" : "Ram",
"Charitha" : "Sainath",
"Anudeep" : "Narayanasetti Gowthami",
"Vinod" : "PADALA BHAVANI",
"Ram" : "Divya",
"Sainath" : "Sri jyothsna",
"Narayanasetti Gowthami" : "Santhoshi Kumari",
"PADALA BHAVANI" : "Nedula Pravalika Reddy",
"Divya" : "Krishna Priya",
"Sri jyothsna" : "S Swetha",
"Santhoshi Kumari" : "Surendra Kumar",
"Nedula Pravalika Reddy" : "Upendra",
"Krishna Priya" : "Pravallika.M",
"S Swetha" : "M Saibhanu",
"Surendra Kumar" : "Shaik Reshma",
"Upendra" : "Tejas",
"Pravallika.M" : "I. Padmavathi",
"M Saibhanu" : "S.Lochani",
"Shaik Reshma" : "Bandi prudhvi",
"Tejas" : "ARAVAPALLI KEERTANA",
"I. Padmavathi" : "Nithisha",
"S.Lochani" : "Sravya",
"Bandi prudhvi" : "KILLI BEBI RANI",
"ARAVAPALLI KEERTANA" : "Deepak vemula",
"Nithisha" : "Ganta Varalaxmi",
"Sravya" : "Abhishek john weslee Malaka",
}




function  buttonClicked() { 
    console.log("Uday Kiran");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    console.log(name);
    var flag = 0;
    for (const key in myDictionary) {
        if(myDictionary[key] == name && key == email){
            flag = 1;
            // console.log("You are a Santa for " + pairs[myDictionary[key]]);
            document.getElementById("error").innerHTML = "You are a Santa for " + pairs[myDictionary[key]];
            break;
        }
    }
    if(flag == 0){
    document.getElementById("error").innerHTML = "Enter Valid Credentials";
    }

}

function checkRollNumber() {
  const rollNumberInput = document.getElementById("roll");
  const nameInput = document.getElementById("name");

  const rollNumber = rollNumberInput.value;

  // Replace this with your logic to fetch the name based on the roll number
  const name = getStudentName(rollNumber);

  nameInput.value = name;
}

function getStudentName(rollNumber) {
  const students = {
    "29": "MUSADDIK SHABBIR MULANI",
    "1": "BAGDE GAYATRI AVINASH",
    "2": "BAKADE BHAKTI MAHESH",
    "3": "BARGE SHUBHAM PANDURANG",
    "4": "BHOSALE SAMIKSHA DEVIDAS",
    "5": "BHOSALE VEDANT SANDIP",
    "6": "DUDE SHUBHAM PRAKASH",
    "7": "GAIKWAD APEKSHA SHARAD",
    "8": "GHADGE ASMITA ANIL",
    "9": "GULDAGAD SURVANTA SHANKAR",
    "10": "JADHAV PRATHAMESH GORAKHNATH",
    "11": "JADHAV TANMAY SURYAKANT",
    "12": "JADHAV VIRAJ SANJAY",
    "13": "JAGTAP JAY RAJENDRA",
    "14": "JAMADADE MANTHAN SOMΑΝΑΤΗ",
    "15": "JAMDAR KARTIK ANKUSHRAJ",
    "16": "JEDHE AADINATH DNYANDEV",
    "17": "KADAM ABHISHEK VILAS",
    "18": "KADAM AKSHADA DASHARATH",
    "19": "KANASE SHREYASH JITENDRA",
    "20": "KARANDE GAURAVI SACHIN",
    "21": "KATE MANASVI SACHIN",
    "22": "KATKAR YASH SANTOSH",
    "23": "KHANDEKAR VISHRANTI VILAS",
    "24": "KOLEKAR VAISHNAVI SHIVAJI",
    "25": "LADE SHRADDHA PANDURANG",
    "26": "MAGAR SANKET LAXMAN",
    "27": "MALI SRUSHTI RAJENDRA",
    "28": "MATHANE ROSHAN DNYANESHWAR",
    "30": "MULIK CHAITRALI KRUSHNAT",
    "31": "NANAVARE SHUBHAM VISHAL",
    "32": "NIGADE SHIVRAJ TARACHAND",
    "33": "NIMBALKAR SHUBHANGI LAHU A/CAP",
    "34": "NIMBALKAR YOGESHWARI ANKUSH",
    "35": "PATIL VIRANGANA RAKESH",
    "36": "PAWAR SHRUTI SHASHIKANT",
    "37": "PHALKE VAISHNAVI KISHOR",
    "38": "RUPNAWAR ANIKET JAGANNATH",
    "39": "SALUNKHE OM ANANDRAO",
    "40": "SAWANT SHUBHAM HARIBA",
    "41": "SHAIKH IMRAN ILIYAS",
    "42": "SHAIKH SAJID JABBAR",
    "43": "SHAIKH SANA RAMJAN",
    "44": "SHINDE SAMRUDHI ANIL",
    "45": "SHIRKE SOHAM SANJAY",
    "46": "SULE SHUBHANGI SANJAY",
    "47": "SULKE VEDANT AMOL",
    "48": "TEWARE RUTUJA KIRAN",
    "49": "WAGHAMARE ABHISHEK SATISH",
    "50": "WAGHMARE PRIYA BHAGAVAT",
    "51": "WARE SHIVAM SAMBHAJI"
  };

  return students[rollNumber] || "Student not found";
}

document.getElementById('studentForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const rollNumber = document.getElementById('roll').value;
            const fullName = document.getElementById('name').value;
           
            if (fullName === "Student not found") {
        alert("Invalid roll number!");
        return;
            }
            // Save student info in local storage
            const existingStudent = localStorage.getItem('student_' + rollNumber);

            if (existingStudent) {
                // If the student has already taken the test, redirect to the 3rd website
                window.location.href = "3rd_website_already_taken.html"; // Change to the actual URL of the 3rd website
            } else {
                // Save student info in local storage for future reference
                localStorage.setItem('currentStudent', JSON.stringify({
                    rollNumber: rollNumber,
                    fullName: fullName
                }));

                // Redirect to the 2nd website (MCQ Questions)
                window.location.href = "https://Musaddik09.github.io/second-website/"; // Change to the actual URL of the 2nd website
            }
        });
      //</s</b

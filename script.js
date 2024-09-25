function checkRollNumber() {
  const rollNumberInput = document.getElementById("roll");
  const nameInput = document.getElementById("name");

  const rollNumber = rollNumberInput.value;

  // Replace this with your logic to fetch the name based on the roll number
  const name = getStudentName(rollNumber);

  nameInput.value = name;
}

function getStudentName(rollNumber) {
  // This is a placeholder function. Replace it with your actual logic to fetch the name from a database or other source
  if (rollNumber === "29") {
    return "MUSADDIK SHABBIR MULANI";
  } else if (rollNumber === "1") {
    return "BAGDE GAYATRI AVINASH";
  } else if (rollNumber === "2") {
    return "BAKADE BHAKTI MAHESH";
  } else if (rollNumber === "3") {
    return "BARGE SHUBHAM PANDURANG"
  } else if (rollNumber === "4") {
    return "BHOSALE SAMIKSHA DEVIDAS";
  } else if (rollNumber === "5") {
    return "BHOSALE VEDANT SANDIP";
  } else if (rollNumber === "6") {
    return "DUDE SHUBHAM PRAKASH";
  } else if (rollNumber === "7") {
    return "GAIKWAD APEKSHA SHARAD";
  } else if (rollNumber === "8") {
    return "GHADGE ASMITA ANIL";
  } else if (rollNumber === "9") {
    return "GULDAGAD SURVANTA SHANKAR";
  } else if (rollNumber === "10") {
    return "JADHAV PRATHAMESH GORAKHNATH";
  } else if (rollNumber === "11") {
    return "JADHAV TANMAY SURYAKANT";
  } else if (rollNumber === "12") {
    return "JADHAV VIRAJ SANJAY";
  } else if (rollNumber === "13") {
    return "JAGTAP JAY RAJENDRA";
  } else if (rollNumber === "14") {
    return "JAMADADE MANTHAN SOMΑΝΑΤΗ";
  } else if (rollNumber === "15") {
    return "JAMDAR KARTIK ANKUSHRAJ";
  } else if (rollNumber === "16") {
    return "JEDHE AADINATH DNYANDEV";
  } else if (rollNumber === "17") {
    return "KADAM ABHISHEK VILAS";
  } else if (rollNumber === "18") {
    return "KADAM AKSHADA DASHARATH";
  } else if (rollNumber === "19") {
    return "KANASE SHREYASH JITENDRA";
  } else if (rollNumber === "20") {
    return "KARANDE GAURAVI SACHIN";
  } else if (rollNumber === "21") {
    return "KATE MANASVI SACHIN";
  } else if (rollNumber === "22") {
    return "KATKAR YASH SANTOSH";
  } else if (rollNumber === "23") {
    return "KHANDEKAR VISHRANTI VILAS";
  } else if (rollNumber === "24") {
    return "KOLEKAR VAISHNAVI SHIVAJI";
  } else if (rollNumber === "25") {
    return "LADE SHRADDHA PANDURANG";
  } else if (rollNumber === "26") {
    return "MAGAR SANKET LAXMAN";
  } else if (rollNumber === "27") {
    return "MALI SRUSHTI RAJENDRA";
  } else if (rollNumber === "28") {
    return "MATHANE ROSHAN DNYANESHWAR";
  } else if (rollNumber === "30") {
    return "MULIK CHAITRALI KRUSHNAT";
  } else if (rollNumber === "31") {
    return "NANAVARE SHUBHAM VISHAL";
  } else if (rollNumber === "32") {
    return "NIGADE SHIVRAJ TARACHAND";
  } else if (rollNumber === "33") {
    return "NIMBALKAR SHUBHANGI LAHU A/CAP";
  } else if (rollNumber === "34") {
    return "NIMBALKAR YOGESHWARI ANKUSH";
  } else if (rollNumber === "35") {
    return "PATIL VIRANGANA RAKESH";
  } else if (rollNumber === "36") {
    return "PAWAR SHRUTI SHASHIKANT";
  } else if (rollNumber === "37") {
    return "PHALKE VAISHNAVI KISHOR";
  } else if (rollNumber === "38") {
    return "RUPNAWAR ANIKET JAGANNATH";
  } else if (rollNumber === "39") {
    return "SALUNKHE OM ANANDRAO";
  } else if (rollNumber === "40") {
    return "SAWANT SHUBHAM HARIBA";
  } else if (rollNumber === "41") {
    return "SHAIKH IMRAN ILIYAS";
  } else if (rollNumber === "42") {
    return "SHAIKH SAJID JABBAR";
  } else if (rollNumber === "43") {
    return "SHAIKH SANA RAMJAN";
  } else if (rollNumber === "44") {
    return "SHINDE SAMRUDHI ANIL";
  } else if (rollNumber === "45") {
    return "SHIRKE SOHAM SANJAY";
  } else if (rollNumber === "46") {
    return "SULE SHUBHANGI SANJAY";
  } else if (rollNumber === "47") {
    return "SULKE VEDANT AMOL";
  } else if (rollNumber === "48") {
    return "TEWARE RUTUJA KIRAN";
  } else if (rollNumber === "49") {
    return "WAGHAMARE ABHISHEK SATISH";
  } else if (rollNumber === "50") {
    return "WAGHMARE PRIYA BHAGAVAT";
  } else if (rollNumber === "51") {
    return "WARE SHIVAM SAMBHAJI";
  } else {
    return "Student not found";
  }
}
document.getElementById('studentForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const rollNumber = document.getElementById('rollNumber').value;
            const fullName = document.getElementById('fullName').value;

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
                window.location.href = "2nd_website_mcq.html"; // Change to the actual URL of the 2nd website
            }
        });
      //</s</b
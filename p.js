
const navbar = document.getElementById('navBar');
if (navbar) { 
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled'); 
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}


const submitButton = document.getElementById("submit");
if (submitButton) {
    submitButton.onclick = function(event) {
        event.preventDefault(); 
        const userName = document.getElementById("userName").value;
        const pass = document.getElementById("pass").value;
        const pN = document.getElementById("pN").value;

        console.log("Name: " + userName);
        console.log("Password: " + pass);
        console.log("Phone Number: " + pN);

        localStorage.setItem("userName", userName);
        localStorage.setItem("password", pass);
        localStorage.setItem("phoneNumber", pN);
    
        console.log("המידע נשמר בהצלחה!");
    };
}
window.onload = function() {
    // שליפת המידע מה-Local Storage
    const userName = localStorage.getItem("userName");
    const pass = localStorage.getItem("password");
    const pN = localStorage.getItem("phoneNumber");

    // בדיקה אם המידע קיים
    if (userName && pass && pN) {
        console.log("Name: " + userName);
        console.log("Password: " + pass);
        console.log("Phone Number: " + pN);
    } else {
        console.log("No data found in Local Storage.");
    }
};


// פונקציה לחזרה לאתר הראשי
function goToHome() {
    window.location.href = "p.html"; // דף הבית
}

// נתוני הסרטים
const movies = [
    {
        title: "The Black Phone",
        subtitle: "הטלפון השחור",
        description: "פיני, נער מתבגר שנחטף על ידי רוצח ילדים סדרתי הידוע בכינויו החוטף.",
        genre: "אימה",
        duration: "102 דקות",
        releaseDate: "24/6/2022",
        ageLimit: "12 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=3eGP6im8AZA",
        image: "assest/black phone.jpeg"
    },
    {
        title: "Five Nights at Freddy's",
        subtitle: "חמש לילות אצל פרדי",
        description: "מאבטח בעייתי כשהוא מתחיל לעבוד בפיצרייה...",
        genre: "אימה",
        duration: "110 דקות",
        releaseDate: "27/10/2022",
        ageLimit: "13 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=0VH9WCFV6XQ",
        image: "assest/Five_Nights_At_Freddy's_poster.jpeg"
    },
    {
        title: "Get Out",
        subtitle: "תברח",
        description: "גבר שחור צעיר יוצא לצפון המדינה כדי לפגוש את המשפחה הלבנה...",
        genre: "אימה",
        duration: "104 דקות",
        releaseDate: "24/2/2017",
        ageLimit: "10 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=DzfpyUB60YY",
        image: "assest/getout!!!!.jpg"
    },
    {
        title: "Superhero Movie",
        subtitle: "סופרהירו",
        description: "סרט קומדיה על ספיידרמן המקורי, ילד חטיבה לא פופרלי",
        genre: "קומדיה",
        duration: "90 דקות",
        releaseDate: "27/10/2022",
        ageLimit: "13 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=0VH9WCFV6XQ",
        image: "assest/superheroposter.jpg"
    },
    {
        title: "Ted",
        subtitle: "טד",
        description: "קומדיה על ילד שמתבגר עם בובת דוב חי.",
        genre: "קומדיה",
        duration: "105 דקות",
        releaseDate: "27/6/2012",
        ageLimit: "18 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=tQK4sFqaY4g",
        image: "assest/ted.jpg"
    },
    {
        title: "Free Guy",
        subtitle: "פרי גאי",
        description: "גיא, דמות במשחק וידאו, מגלה שהוא חלק ממשחק עולם פתוח.",
        genre: "אקשן",
        duration: "115 דקות",
        releaseDate: "13/8/2021",
        ageLimit: "12 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=YckHguCo9uo",
        image: "assest/free guy.jpg"
    },
    {
        title: "The Platform",
        subtitle: "הפלטפורמה",
        description: "סיפור על מערכת דיכוי במגדל עם אוכל שמורד בחלוקות האי-שוויון.",
        genre: "דרמה",
        duration: "95 דקות",
        releaseDate: "20/3/2019",
        ageLimit: "16 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=EkfGkjh9w4g",
        image: "assest/theplatfrom.jpg"
    },
    {
        title: "Pay It Forward",
        subtitle: "תעביר את זה הלאה",
        description: "סיפור על ילד שמבצע מעשים טובים ומבקש מהסובלים להעביר את טובת הלב הלאה.",
        genre: "דרמה",
        duration: "123 דקות",
        releaseDate: "20/12/2000",
        ageLimit: "13 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=Le1cX7M_X54",
        image: "assest/pay it forword.jpg"
    },
    {
        title: "The Truman Show",
        subtitle: "ההצגה של טרומן",
        description: "סיפור על אדם שחי חיים מלאים בתשומת לב מדיה תמידית.",
        genre: "דרמה",
        duration: "103 דקות",
        releaseDate: "5/6/1998",
        ageLimit: "13 ומעלה",
        trailerUrl: "https://www.youtube.com/watch?v=k2VddoG5dA0",
        image: "assest/thetruemanshow.jpg"
    }
];

// מספר הכרטיסים בשורה
const cardsPerRow = 3;

// יצירת כרטיסים לכל סרט
const moviesContainer = document.getElementById("movies-container");

// פונקציה ליצירת כרטיס
function createCard(movie) {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front">
                <img src="${movie.image}" alt="${movie.title}">
            </div>
            <div class="card-back">
                <div class="card-content">
                    <h2 class="card-title">${movie.title}</h2>
                    <h3 class="card-subtitle">${movie.subtitle}</h3>
                    <p>${movie.description}</p>
                    <p><strong>סיווג:</strong> ${movie.genre}</p>
                    <p><strong>אורך:</strong> ${movie.duration}</p>
                    <p><strong>תאריך בכורה:</strong> ${movie.releaseDate}</p>
                    <p><strong>הגבלת צפייה:</strong> ${movie.ageLimit}</p>
                    <a href="${movie.trailerUrl}" class="card-link" target="_blank">טריילר</a>
                </div>
            </div>
        </div>
    `;

    return card;
}

// יצירת שורות
for (let i = 0; i < movies.length; i += cardsPerRow) {
    const row = document.createElement("div");
    row.classList.add("movie-row");  // כל שורה תקבל מחלקה 'movie-row'

    for (let j = i; j < i + cardsPerRow && j < movies.length; j++) {
        const card = createCard(movies[j]);  // יצירת כרטיס עבור הסרט
        row.appendChild(card);  // הוספת כרטיס לשורה
    }

    moviesContainer.appendChild(row);  // הוספת השורה ל-container
}


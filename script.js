document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    console.log(`Registering User: ${username}, Email: ${email}`);
    // هنا يمكنك إضافة الكود لتقديم البيانات إلى الخادم
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    console.log(`Logging in User: Email: ${email}`);
    // هنا يمكنك إضافة الكود للتحقق من بيانات المستخدم مع الخادم
});

// إضافة خاصية التحركات السلسة للنزول عند الضغط على الروابط
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // التنقل السلس
            });
        }
    });
});

// وظيفة البحث
function search() {
    let query = document.getElementById('searchBox').value;
    alert('بحث عن: ' + query);
}

// نظام التعليقات
let comments = [];
function addComment() {
    let commentText = document.getElementById('newComment').value;
    if(commentText) {
        comments.push(commentText);
        document.getElementById('newComment').value = '';
        displayComments();
    } else {
        alert('يرجى كتابة تعليق');
    }
}
function displayComments() {
    let commentsDiv = document.getElementById('comments');
    commentsDiv.innerHTML = '';
    comments.forEach(comment => {
        let commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsDiv.appendChild(commentElement);
    });
}

// نظام التقييم بالنجوم
let rating = 0;
function rate(stars) {
    rating = stars;
    document.getElementById('ratingValue').textContent = 'تقييم: ' + stars;
    let starElements = document.querySelectorAll('.star');
    starElements.forEach((star, index) => {
        if(index < stars) {
            star.style.color = 'gold';
        } else {
            star.style.color = 'black';
        }
    });
}

// قائمة القراءة
let readingList = [];
function addToReadingList() {
    let itemText = document.getElementById('readingItem').value;
    if(itemText) {
        readingList.push(itemText);
        document.getElementById('readingItem').value = '';
        displayReadingList();
    } else {
        alert('يرجى كتابة اسم الرواية أو المانجا');
    }
}
function displayReadingList() {
    let readingListUl = document.getElementById('readingList');
    readingListUl.innerHTML = '';
    readingList.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = item;
        readingListUl.appendChild(listItem);
    });
}

// إشعارات فورية
function notifyUser() {
    if (!("Notification" in window)) {
        alert("المتصفح لا يدعم الإشعارات");
    } else if (Notification.permission === "granted") {
        new Notification("لديك إشعار جديد!");
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                new Notification("لديك إشعار جديد!");
            }
        });
    }
    }

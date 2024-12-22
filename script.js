<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مختبر بيسكا🔬</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .star {
            font-size: 2em;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <header>
        <h1>🌙 مختبر بيسكا🔬</h1>
        <nav>
            <ul>
                <li><a href="#">الرئيسية</a></li>
                <li><a href="#">التصنيفات</a></li>
                <li><a href="#">القصص المميزة</a></li>
                <li><a href="#">تسجيل الدخول</a></li>
                <li><a href="#">التسجيل</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section>
            <h2>روايات مميزة</h2>
            <!-- إضافة محتوى الروايات المميزة هنا -->
        </section>
        <section>
            <h2>مانجا جديدة</h2>
            <!-- إضافة محتوى المانجا الجديدة هنا -->
        </section>
        <section>
            <h2>أكثر الأعمال قراءةً</h2>
            <!-- إضافة محتوى الأعمال الأكثر قراءةً هنا -->
        </section>
    </main>
    <footer>
        <p>&copy; 2024 مختبر بيسكا🔬</p>
    </footer>

    <div id="searchSection">
        <input type="text" id="searchBox" placeholder="ابحث عن روايات أو مانجا...">
        <button onclick="search()">بحث</button>
    </div>

    <div id="commentSection">
        <h3>التعليقات</h3>
        <div id="comments"></div>
        <textarea id="newComment" placeholder="أضف تعليقًا..."></textarea>
        <button onclick="addComment()">إرسال</button>
    </div>

    <div id="ratingSection">
        <h3>التقييم</h3>
        <span class="star" onclick="rate(1)">&#9733;</span>
        <span class="star" onclick="rate(2)">&#9733;</span>
        <span class="star" onclick="rate(3)">&#9733;</span>
        <span class="star" onclick="rate(4)">&#9733;</span>
        <span class="star" onclick="rate(5)">&#9733;</span>
        <p id="ratingValue">تقييم: 0</p>
    </div>

    <div id="readingListSection">
        <h3>قائمة القراءة</h3>
        <input type="text" id="readingItem" placeholder="أضف إلى قائمة القراءة...">
        <button onclick="addToReadingList()">إضافة</button>
        <ul id="readingList"></ul>
    </div>

    <button onclick="notifyUser()">أرسل إشعار</button>

    <script>
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
    </script>
</body>
</html>

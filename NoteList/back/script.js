//Симуляция подгрузки с сервера
//хранилище логов пользователей
let users = {
    'login': 'password',
    'nerevar': 'CasiusCurino'
}
//хранилище данных
let notes = {
    'login': [['Заголовок 25 Июля 20:15', 'Check'],['Заголовок 25 Июля 20:16', 'Check'],['Заголовок 25 Июля 20:17', 'Check']],
    'nerevar':[['Вивек 25 Июля 21:15', 'Сходить в Вивек и купить книги про "Аргониан" первый и второй том'],['Автор 25 Июля 21:15', 'Зайти к автору книг и поросить автограф'],['PS 25 Июля 21:15', 'Главное к ниму не приблежаться']]
}
//----------------------------------------------


//------------------------------------------html страницы----------------------------------
//стартовая страница
const log = `
<link rel="stylesheet" href="./style/log.css">
<header>
    <img src="../front/images/logo.svg" alt="LOGO">
</header>
<section>
    <div class="log-space">
        <div class="select-btn">
            <button id="SignUp" onclick="SignIn()">Sign in</button>
            <button id="SignIn" onclick="SignUp()">Sign up</button>
        </div>
        
        <div class="input-space">
            <input type="text" placeholder="Login" id="Login" value="">
            <input type="password" placeholder="Password" id="Password" value="">
        </div>

        <div class="atention-space">
            <p id="erCom"></p>
        </div>

        <div class="confirm-space">
            
            <button id="Sign_Up" onclick="Sign_Up()">Sign up</button>
            <button id="Sign_In" onclick="Sign_In()">Sign in</button>
        </div>
        
        <a href="#" onclick="lost()" id="Fogot">Forgot your password</a>
    </div>
    <div class="text-space">
        <p class="text-head">Hello user!</p>
        <p class="text-cont">Here you can<br>post your<br>notes.<p>
    </div>
</section>
<footer>
    <a href="#" onclick="winOpen()" style="color: rgb(157,185,111);">Создатель с<span style="color: rgb(228,252,202);">его шедевра</span></a>
</footer>`

//страница со списком записей
const lib =`
<link rel="stylesheet" href="./style/lib.css">
<header>
    <div class="title">
        <img src="../front/images/icon.svg" alt="LOGO">
        <p>Notes</p>
        <a href="#" onclick="SignOut()">SignOut</a>
    </div>
</header>
<section>
    <div class="NewNote" onclick="CreateNote()"><a href="#">Create New Note<span>+</span></a></div>
    <div class="noteList" id="noteList"></div>
</section>
<footer>
    <div class="title">
        <img src="../front/images/icon.svg" alt="LOGO">
        <a href="#" onclick="winOpen()">Создатель сего шедевра</a>
        <a href="#" onclick="SignOut()">SignOut</a>
    </div>
</footer>`

//страница с полем создания Note
const create =`
<link rel="stylesheet" href="./style/create.css">
<header>
    <div class="title">
        <img src="../front/images/icon.svg" alt="LOGO">
        <p>Notes</p>
    </div>
</header>
<section>
    <p>Add your new note</p>
    <div class="title">
        <p>Title</p>
        <input type="text" id="title" placeholder="Enter title">
    </div>
    <div class="text">
        <p for="story">Tell us your story:</p>
        <textarea id="text">
        </textarea>
    </div>
</section>
<footer>
    <div class="title">
        <button onclick=save()>Save</button>
        <button onclick=exit()>Exit</button>
    </div>
</footer>`
//----------------------------------------------------------------------



//функуия перехода по ссылкам (для открытия окна паролельно)
function winOpen(){
    window.open("https://vk.com/id445680362")
}

//----------------------------Сценарии стартовой страницы
//-----------------------------LogBlok-------------------------------------
//загрузка страницы
const body = document.getElementById('blok')
body.innerHTML = log


//объявление переменных
const Sign_UpButton = document.getElementById('Sign_Up')
const Sign_InButton = document.getElementById('Sign_In')
const SignUpButton = document.getElementById('SignUp')
const SignInButton = document.getElementById('SignIn')
const Fogot = document.getElementById('Fogot')
const login = document.getElementById('Login')
const password = document.getElementById('Password')
const erCom = document.getElementById('erCom')
let user


//настройка сценария
erCom.innerHTML = ''
Fogot.style.display = 'none'
Sign_InButton.style.display = 'none'
Sign_UpButton.style.display = 'block'
SignUpButton.style.backgroundColor = '#718752'
SignInButton.style.backgroundColor = '#BDE08C'


//проверка авторизации
if (localStorage.getItem('login') != null){
    user = localStorage.getItem('login')
    body.innerHTML = lib
    showNotes()
}


//---------------------------------------обработка сценариев и ошибок ввода--------------------------------
function lost(){
    if (users[login.value] != undefined){
        alert(users[login.value])
    }
    else{
        alert('login undefined')
    }
}
function SignIn(){
    Fogot.style.display = 'flex'
    Sign_UpButton.style.display = 'none'
    Sign_InButton.style.display = 'block'
    SignInButton.style.backgroundColor = '#718752'
    SignUpButton.style.backgroundColor = '#BDE08C'
}

function SignUp(){
    Fogot.style.display = 'none'
    Sign_InButton.style.display = 'none'
    Sign_UpButton.style.display = 'block'
    SignUpButton.style.backgroundColor = '#718752'
    SignInButton.style.backgroundColor = '#BDE08C'
}


function Sign_In(){
    erCom.innerHTML = ''

    if (users[login.value] == password.value){
        localStorage.setItem('login', login.value);
        localStorage.setItem('password', password.value);
        user = login.value
        body.innerHTML = lib
        showNotes()
    }
    else{
        erCom.innerHTML = 'check your password'
    }

}

function Sign_Up(){
    erCom.innerHTML = ''

    if (login.value != "" || password.value != ""){
        if (login.value != ""){
            key = Object.keys(users)
            for (k in key){
                console.log(login.value ,key[k])
                if (login.value == key[k]){
                    erCom.innerHTML = 'login is busy'
                    return
                }
            }
            if (password.value == ""){
                erCom.innerHTML = 'check your password'
                return
            }
        }
        else{
            erCom.innerHTML = 'check your login'
            return
        }
        users[login.value] = password.value
        localStorage.setItem('login', login.value);
        localStorage.setItem('password', password.value);
        user = login.value
        body.innerHTML = lib
        showNotes()
    }
}
//----------------------------------------------------------------------

//-----------------------------LibBlok-------------------------------------

//отображение записей
function showNotes(){

    class Create_Note {
        constructor(title = 'Title', text = NaN) {

            this.name = title
            this.text = text 
            this.chat = document.getElementById('noteList')
            this.message = document.createElement('div');
    
            this.areaName = document.createElement('h1')
            this.areaText = document.createElement('p')
    
            this.message.classList.add('note')
            this.areaName.classList.add('name');
            this.areaText.classList.add('text')
    
            this.areaName.textContent = this.name
            this.areaText.textContent = this.text
    
            this.message.prepend(this.areaName)
            this.message.prepend(this.areaText)
            this.chat.prepend(this.message)
    
        }
    }
    console.log(notes[user])
    for (let i=0; i<notes[user].length; i++){
       new Create_Note(notes[user][i][1], notes[user][i][0])
    }
}



//разлог
function SignOut(){
    delete localStorage.login;
    delete localStorage.password;
    document.location.reload();
}

//создание записи
function CreateNote(){
    body.innerHTML = create
}


//-----------------------------CreateBlok-------------------------------------
//выход из креата
function exit(){
    body.innerHTML = lib
    showNotes()
}
//сохранение записи
function save(){
    const Month = {
        0 : 'Января',
        1 : 'Февраля',
        2 : 'Марта',
        3 : 'Апреля',
        4 : 'Майя',
        5 : 'Июня',
        6 : 'Июля',
        7 : 'Августа',
        8 : 'Сентября',
        9 : 'Октября',
        10: 'Ноября',
        11: 'Декабря',
    }
    const text = document.getElementById('text')
    const title = document.getElementById('title')
    console.log(title.value, text.value)
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    if (hour < 10){
        hour = '0' + String(hour)
    }
    if (minutes < 10){
        minutes = '0' + String(minutes)
    }
    notes[user] = notes[user].concat([[title.value +' '+ date.getDate() +' '+ Month[date.getMonth()] +' '+ hour +':'+ minutes, text.value]])
    exit()
}

export const log = `
<link rel="stylesheet" href="../front/style/style.css">
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
            <input type="text" placeholder="Password" id="Password" value="">
        </div>

        <div class="atention-space">
            <p id="erCom"></p>
        </div>

        <div class="confirm-space">
            
            <button id="Sign_Up" onclick="Sign_Up()">Sign up</button>
            <button id="Sign_In" onclick="Sign_In()">Sign in</button>
        </div>
        
        <a href="#" onclick="lol()">Forgot your password</a>
    </div>
    <div class="text-space">
        <p class="text-head">Hello user!</p>
        <p class="text-cont">Here you can<br>post your<br>notes.<p>
    </div>
</section>
<footer>
    <a href="https://vk.com/uvaprol" style="color: rgb(157,185,111);">Создатель с<span style="color: rgb(228,252,202);">его шедевра</span></a>
</footer>
<script src="../back/script.js"></script>`


export const lib =`
<link rel="stylesheet" href="../front/style/lib.css">
<header>
    <div class="title">
        <img src="../front/images/icon.svg" alt="LOGO">
        <p>Notes</p>
        <p>SignOut</p>
    </div>
</header>
<section>
        <div class="NewNote"><p>Create New Note<span>+</span></div>
</section>
<footer>
    <div class="title">
        <img src="../front/images/icon.svg" alt="LOGO">
        <a href="https://vk.com/uvaprol">Создатель сего шедевра</a>
        <p>SignOut</p>
    </div>
</footer>
<script src="../back/script.js"></script>`
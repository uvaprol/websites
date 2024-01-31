const header      = document.querySelector('header')
const slayder     = document.getElementById('slayderContent')
const slayderClip = document.getElementById('slayderClip')
const BlurBGimg      = document.getElementById('BlurBG')

header.style.backdropFilter = 'blur(10px)'
const slayderContent = {
    0:  {
        "bgIMG": 'url(./img/BGIMG1.svg)',
        "text" : '<h3>cкидка до 30 февраля<br><span>для записи по специальной цене нажмите кнопку!</span><h3>',
        "icon" : '<img src="./img/sale2.svg" alt="SaleIcon" ondragstart="return false;">',
        "clip" : '<img src="./img/clip.svg" alt="Clip" onclick="ChangeImg(0)" ondragstart="return false;"> <img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(1)" ondragstart="return false;"> <img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(2)" ondragstart="return false;">'
        },
    1:  {
        "bgIMG": 'url(./img/BGIMG2.svg)',
        "text" : '<h4>Долговременная укладка + ламинирование ресниц<br>+ ботокс ресниц в подарок = <span>4100₽</span> <span>3600₽</span></h4>',
        "icon" : '<img src="./img/sale.svg" alt="SaleIcon" ondragstart="return false;">',
        "clip" : '<img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(0)" ondragstart="return false;"> <img src="./img/clip.svg" alt="Clip" onclick="ChangeImg(1)" ondragstart="return false;"> <img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(2)" ondragstart="return false;">'
        },
    2:  {
        "bgIMG": 'url(./img/BGIMG3.svg)',
        "text" : '<h4>Двойной объем +<br>оформление бровей = <span>3200₽</span> <span>2900₽</span></h4>',
        "icon" : '<img src="./img/sale.svg" alt="SaleIcon" ondragstart="return false;">',
        "clip" : '<img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(0)" ondragstart="return false;"> <img src="./img/nonClip.svg" alt="Clip" onclick="ChangeImg(1)" ondragstart="return false;"> <img src="./img/clip.svg" alt="Clip" onclick="ChangeImg(2)" ondragstart="return false;">'
        }
}


let count = 0
function BGslayderAnimation(Nslide){
    setTimeout(()=>header.style.backgroundImage = slayderContent[Nslide]['bgIMG'], 150)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(5px)', 50)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(10px)', 100)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(15px)', 150)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(10px)', 200)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(5px)', 250)
    setTimeout(()=>BlurBGimg.style.backdropFilter = 'blur(0px)', 300)

    // header.style.backgroundImage = slayderContent[Nslide]['bgIMG']

    setTimeout(()=>{
        slayder.innerHTML = ''
        slayder.innerHTML += slayderContent[Nslide]['icon']
        slayder.innerHTML += slayderContent[Nslide]['text']
        slayderClip.innerHTML = slayderContent[Nslide]['clip']
    }, 150)

}


function autoChangeImg(){
    count++
    if (count >= 3) {
        count = 0
    } 
    BGslayderAnimation(count)
}
function ChangeImg(choice){
    if (choice != count){
        clearTimeout(timerId)
        BGslayderAnimation(choice)
        timerId = setInterval(autoChangeImg, 5000)
        count = choice
    }
    else{return}
}
let timerId = setInterval(autoChangeImg, 5000)
// function print_contact() {
//     alert("skype:helper\n telegram:@helper\n tel 890544477")
// }
// function gift() {
//     alert("Вы получили подарок! Скидка 25%!")
// }

const giftButton = document.getElementById("giftbutton")
const giftModal = document.getElementById("giftmodal")
const giftClose = document.getElementById("giftclose")

console.log(giftbutton, giftmodal, giftClose)
giftButton.onclick = function () {
    giftModal.style.display = "block";
    console.log("открываем модальное окно")
}
// закрываем
giftClose.onclick = function () {
    giftModal.style.display = "none"
    console.log("pfrhsdftv")
}
giftModal.onclick = function (event) {
    if (event.target == giftModal) {
        giftModal.style.display = "none"
    }
}

const helperOpen = document.getElementById("helper")
const helperContent = document.getElementById("helpertext")
const helperClose = document.getElementById("helperclose")

console.log(helperOpen, helperContent, helperClose)
helperOpen.onclick = function () {
    helperContent.style.display = "block";
    console.log("открываем модальное окно")
}
// закрываем
helperClose.onclick = function () {
    helperContent.style.display = "none"
    console.log("pfrhsdftv")
}
giftModal.onclick = function (event) {
    if (event.target == helperContent) {
        helperContent.style.display = "none"
    }
}
// let siteRating=0
// function (starNumber){
//     siteRating= starNumber
//     starNumber= starNumber-1
//     let ids = [ "star-1","star-2","star-3","star-4","star-5"]
//     if(star.src.includes("images/star_2.png")){
//     for (let i=0;i<=starNumber;i++)
//     let id=ids[i];
//     document.getElementById(id).src="images/star_2.png"
//     }

// else {
// for (let i=0;i<ids.length;i++){
//     if (i >starNumber){
//         let id = ids[i]
//         document.getElementById(id).src="images/star_2.png"
// }
// }
// }
// }
// function resetRating(){
//     siteRating=0
//     let ids =["star-1","star-2","star-3","star-4","star-5"]
//     for (let i=0;i< ids.length;i++){
//         let id = ids[i]
//         document.getElementById (id).src = "images/star_2.png"
//     }

// }
// const sendRating = document.getElementById("sendRating")
// sendRatingBtn.addEventListener("click",function(){
// let text = '';
// })
let siteRating = 0;

function star(starNumber) {
    siteRating = starNumber
    starNumber = starNumber - 1
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"]
    let star = document.getElementById(ids[starNumber]);
    //  если звезда пустая
    if (star.src.includes("images/star_2.png")) {
        for (let i = 0; i <= starNumber; i++) {
            let id = ids[i];
            document.getElementById(id).src = "images/star_1.png"
        }
    }
    else {
        for (let i = 0; i < ids.length; i++) {
            if (i > starNumber) {
                id = ids[i];
                document.getElementById(id).src = "images/star_2.png";
            }
        }
    }
}
function resetRating() {
    siteRating = 0
    let ids = ["star-1", "star-2", "star-3", "star-4", "star-5"]
    for (let i = 0; i < ids.length; i++) {
        let id = ids[i];
        document.getElementById(id).src = "images/star_2.png"
    }
    console.log("сброс рейтинга")

}
const sendRatingBtn = document.getElementById("sendRating")
console.log(sendRatingBtn)
sendRatingBtn.addEventListener("click", function () {
    let text = '';
    switch (siteRating) {
        case 1:
            console.log("Вы поставили 1 балл");
            text = "Вы поставили один балл :("
            break;
        case 2:
            console.log("Вы поставили 2 балл");
            text = "Что было не так?"
            break;
        case 3:
            text = "Три балла хорошо ,а четыре лучше !"
            break
        case 4:
            text = "Спасибо за этот балл !"
            break
        case 5:
            text = "Огромное спасибо за пять !:)"
        break
        default:
            text="Вы забыли поставить оценку,поставьте оценку !"

    }
    document.getElementById("ratingText").innerText = text;
})
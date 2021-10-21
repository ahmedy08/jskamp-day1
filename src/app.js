console.log("Merhaba Javascript");

let dolarYesterday = 9.20
let dolarToday = 9.30

{
    let dolarYesterday = 9.10
}
console.log(dolarYesterday)

const euroYesterday = 11.20
//euroYesterday = 11.00//hata
console.log(euroYesterday)

let houseCredits = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]
console.log("<ul>")
for (let i = 0; i < houseCredits.length; i++) {
    console.log(i + 1 + ") " + houseCredits[i])
}
console.log("</ul>")
console.log(houseCredits)

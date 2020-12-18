// structure de base
let section = document.createElement("section")
document.body.append(section);
let div1 = document.createElement("div");
div1.setAttribute("class", "divTitre")
div1.style.backgroundColor =" #f3be0b"
div1.style.margin ="20px"
div1.style.height = "50px"
div1.style.padding ="15px"
div1.style.borderRadius ="10px"

// titre
let titre = document.createElement("h1")
div1.append(titre)
titre.innerHTML ="To-Do-list "
titre.style.color ="white"
titre.style.textAlign ="center"


// div2
let div2 = document.createElement("div");
div2.setAttribute("class", "divContenu");
div2.style.backgroundColor =" #d2c8bd"
div2.style.borderTop =" 5px solid #f3be0b"
div2.style.borderRadius ="10px"

section.append(div1, div2)

// sous div
let diva = document.createElement("div")
let divb = document.createElement("div")
let divc = document.createElement("div")

div2.append(diva, divb,divc)


// diva
// style:
diva.style.borderBottom ="2px solid white"

// contenu
let label = document.createElement("label")
label.innerHTML ="Ajouter une tâche:"
label.style.fontSize = "20px"
label.style.marginTop ="30px"
label.style.paddingTop ="30px"
let br= document.createElement("br")
let input = document.createElement("input")

input.style.margin ="10px"
let bouton1 = document.createElement("button")
bouton1.style.backgroundColor ="#b47227"
bouton1.style.color ="white"
bouton1.style.border ="none"
bouton1.style.margin ="10px"
bouton1.style.padding = "10px"
bouton1.innerHTML = "Ajouter"
bouton1.style.borderRadius ="5px"


diva.append(label, br, input, bouton1)

// divb
// style
divb.style.display ="flex"
divb.style.justifyContent ="flex-end"
// contenu
let boutonTaches
let boutonsTaches


for (let i= 0; i<3; i++){
    boutonTaches = document.createElement("button")
    divb.append(boutonTaches)
    boutonsTaches =divb.querySelectorAll("button")
    boutonTaches.style.backgroundColor = "#b47227"
    boutonTaches.style.color = "white"
    boutonTaches.style.margin = "10px"
    boutonTaches.style.border ="none"
    boutonTaches.style.padding = "10px"
    boutonTaches.style.borderRadius ="5px"
    switch (i) {
        case 0:
            boutonsTaches[0].innerHTML = "A faire"
            break;
        case 0:
            boutonsTaches[1].innerHTML = "Terminées"
            break;
        case 0:
            boutonsTaches[2].innerHTML = "Toutes"
            break;
        
    
        default:
            break;
    }
    
}
boutonsTaches[0].innerHTML = "A faire"
boutonsTaches[1].innerHTML = "Terminées"
boutonsTaches[2].innerHTML = "toutes"



let tacheAjouter
let icone1
let icone2
let icone3
let icone4
let divIcones 
let divNomTache
let inputNew
let valueInputNew

let span 
// click
bouton1.addEventListener("click", function(){
    tacheAjouter = document.createElement("div")
    tacheAjouter.style.height = "100px"
    tacheAjouter.style.backgroundColor ="blue"
    tacheAjouter.style.display ="flex"
    tacheAjouter.style.justifyContent ="space-between"
    tacheAjouter.setAttribute("class", "ajouterTache")
    divc.append(tacheAjouter)

    divNomTache = document.createElement("div")
    span = document.createElement("span")
    span.innerHTML = input.value
    divNomTache.style.margin = "20px"
    divNomTache.append(span)
    
    divIcones = document.createElement("div")
    divIcones.style.margin ="20px"

    icone1 = document.createElement("i")
    icone1.style.margin ="10px"
    icone1.setAttribute("class", "fas fa-check-circle")
    icone1.style.color ="white"

    icone2 = document.createElement("i")
    icone2.style.margin ="10px"
    icone2.setAttribute("class", "fas fa-edit")
    icone2.style.color ="green"

    icone3 = document.createElement("i")
    icone3.style.margin ="10px"
    icone3.setAttribute("class", "fas fa-trash")
    icone3.style.color ="red"

    icone4 = document.createElement("i")
    icone4.style.margin ="10px"
    icone4.setAttribute("class", "fas fa-save")
    icone4.style.display ="none"
    icone4.style.color = "yellow"
    
    divIcones.append(icone1, icone2, icone3, icone4)
    tacheAjouter.append(divNomTache, divIcones)
    input.value =""


    icone1.addEventListener("click", function(){
        if (tacheAjouter.style.backgroundColor =="green") {
            tacheAjouter.style.backgroundColor == "blue"
            
        }
        tacheAjouter.style.backgroundColor ="green"
    })
    icone2.addEventListener("click", function(){
        span.style.display ="none"
        inputNew = document.createElement("input")
        inputNew.style.border ="none"
        divNomTache.append(inputNew)
        icone1.style.display ="none"
        icone2.style.display ="none"
        icone3.style.display ="none"
        icone4.style.display ="block"
        icone4.style.color ="yellow"

        icone4.addEventListener("click",function(){
            valueInputNew = inputNew.value
            span.style.display = "block"
            span.innerHTML = valueInputNew
            inputNew.style.display ="none"
            icone1.style.display ="inline-block"
            icone2.style.display ="inline-block"
            icone3.style.display ="inline-block"
            icone4.style.display ="none"

        })
    })

    let allTaches = divc.querySelectorAll(".ajouterTache")
    icone3.addEventListener("click", function(){


    
    })
    
})

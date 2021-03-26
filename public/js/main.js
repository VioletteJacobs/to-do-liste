// structure de base
let section = document.createElement("section")
document.body.append(section);
document.body.style.backgroundColor ="lightgrey"
section.style.width ="90%"
section.style.margin = "auto"


let div1 = document.createElement("div");
div1.setAttribute("class", "divTitre")
div1.style.backgroundColor =" #A26360"
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
div2.style.backgroundColor ="#9DAAA2"
div2.style.borderTop =" 5px solid #A26360"
div2.style.borderBottom =" 5px solid #A26360"
div2.style.padding ="20px"
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
diva.style.marginBottom = "5px"


// contenu
let label = document.createElement("label")
label.innerHTML ="Ajouter une nouvelle tâche : "
label.style.fontSize = "20px"
label.style.marginTop ="30px"
label.style.paddingTop ="30px"
label.style.fontWeight ="bold"
label.style.color =" white"

let br= document.createElement("br")

let input = document.createElement("input")

input.style.margin ="10px"
input.style.height ="40px"
input.style.width ="500px"
input.style.border ="none"
input.style.borderRadius ="5px"
input.style.fontSize ="20px"

let bouton1 = document.createElement("button")
bouton1.style.backgroundColor ="#BDD1C5"
bouton1.style.color ="white"
bouton1.style.fontWeight ="bold"
bouton1.style.border ="none"
bouton1.style.margin ="10px"
bouton1.style.padding = "20px"
bouton1.innerHTML = "Ajouter"
bouton1.style.borderRadius ="50%"


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

    boutonTaches.style.backgroundColor ="#BDD1C5"
    boutonTaches.style.color ="white"
    boutonTaches.style.fontWeight ="bold"
    boutonTaches.style.border ="none"
    boutonTaches.style.margin ="10px"
    boutonTaches.style.padding = "20px"
    boutonTaches.style.borderRadius ="50%"

    
}
boutonsTaches[0].innerHTML = "A faire"
boutonsTaches[1].innerHTML = "Terminées"
boutonsTaches[2].innerHTML = "Toutes"


// click sur ajouter
bouton1.addEventListener("click", function(){
    if (input.value !="") {
            
        
        let tacheAjouter = document.createElement("div")
        tacheAjouter.style.height = "100px"
        tacheAjouter.style.backgroundColor ="#9DAAA2 "
        tacheAjouter.style.borderBottom ="2px solid white"
        tacheAjouter.style.borderTop ="2px solid white"
        tacheAjouter.style.display ="flex"
        tacheAjouter.style.color ="white"
        tacheAjouter.style.fontSize ="20px"
        tacheAjouter.style.justifyContent ="space-between"
        tacheAjouter.setAttribute("class", "ajouterTache")
        divc.append(tacheAjouter)

        let divNomTache = document.createElement("div")
        let span = document.createElement("span")
        span.innerHTML = input.value
        divNomTache.style.margin = "20px"
        divNomTache.append(span)
        
        let divIcones = document.createElement("div")
        divIcones.style.margin ="20px"

        let icone1 = document.createElement("i")
        icone1.style.margin ="10px"
        icone1.setAttribute("class", "fas  fa-check-circle")
        icone1.style.color ="#EDCC8B"

        let icone2 = document.createElement("i")
        icone2.style.margin ="10px"
        icone2.setAttribute("class", "fas fa-edit")
        icone2.style.color ="#EDCC8B"

        let icone3 = document.createElement("i")
        icone3.style.margin ="10px"
        icone3.setAttribute("class", "fas fa-trash")
        icone3.style.color ="#EDCC8B"

        let icone4 = document.createElement("i")
        icone4.style.margin ="10px"
        icone4.setAttribute("class", "fas fa-save")
        icone4.style.display ="none"
        icone4.style.color = "#EDCC8B"
        
        divIcones.append(icone1, icone2, icone3, icone4)
        tacheAjouter.append(divNomTache, divIcones)
        input.value =""
        
        // icone cheker
        icone1.addEventListener("click", function(){
            if (tacheAjouter.style.backgroundColor == "green") {
                tacheAjouter.style.backgroundColor = "#9DAAA2"
            }else{
                tacheAjouter.style.backgroundColor ="green"
            }
        })
        
        // icone modifier
        icone2.addEventListener("click", function(){
            span.style.display ="none"
            let inputNew = document.createElement("input")
            inputNew.value =""
            inputNew.style.border ="none"
            inputNew.style.height ="40px"
            inputNew.style.borderRadius ="5px"
            divNomTache.append(inputNew)
            icone1.style.display ="none"
            icone2.style.display ="none"
            icone3.style.display ="none"
            icone4.style.display ="block"

            // enregistrer les modifications
            icone4.addEventListener("click",function(){
                let= valueInputNew = inputNew.value
                span.style.display = "block"
                span.innerHTML = valueInputNew
                inputNew.style.display ="none"
                icone1.style.display ="inline-block"
                icone2.style.display ="inline-block"
                icone3.style.display ="inline-block"
                icone4.style.display ="none"

                
            })

            document.body.addEventListener("keydown", function(e){
                if (e.keyCode === 13) {
                    if (inputNew.value != "") {
                        icone4.click()
                    }
                }
            })
        })
    // icone supprimer 
        icone3.addEventListener("click", function(){
            // modifier?
            span.style.display ="none"
            let span2 = document.createElement("span")
            span2.innerHTML = "Etes vous sûre de vouloir supprimer votre tâche?"
            span2.style.fontSize ="20px"
            divNomTache.append(span2)

            // icones et bouton oui ou non
            icone1.style.display ="none"
            icone2.style.display ="none"
            icone3.style.display ="none"

            let oui = document.createElement("button")
            oui.innerHTML ="Oui"
            oui.style.backgroundColor ="#D4A29C"
            oui.style.borderRadius ="5px"
            oui.style.border = "none"
            oui.style.padding = "10px"
            oui.style.margin ="10px"
            oui.style.color ="white"

            let non = document.createElement ("button")
            non.innerHTML = "Non"
            non.style.backgroundColor ="#D4A29C"
            non.style.borderRadius ="5px"
            non.style.border ="none"
            non.style.padding = "10px"
            non.style.margin ="10px"
            non.style.color ="white"

            divNomTache.append(oui, non)

            oui.addEventListener("click",function(){
                divc.removeChild(tacheAjouter)

            })
            non.addEventListener("click", function(){
                icone1.style.display ="inline-block"
                icone2.style.display ="inline-block"
                icone3.style.display ="inline-block"
                oui.style.display ="none"
                non.style.display ="none"
                span.style.display ="block"
                span2.style.display ="none"

            })

        })


        let alltache = document.getElementsByClassName("ajouterTache")
        // bouton à faire
        boutonsTaches[0].addEventListener("click", function(){
            if (tacheAjouter.style.backgroundColor !="green"){
                tacheAjouter.style.display ="flex"
                
            }else{
                tacheAjouter.style.display ="none"
            
            }

        })
        // bouton terminé
        boutonsTaches[1].addEventListener("click", function(){
            if (tacheAjouter.style.backgroundColor !="green"){
                tacheAjouter.style.display ="none"
        
            }else{
                tacheAjouter.style.display ="flex"
            }
            
        })
        // bouton tous
        boutonsTaches[2].addEventListener("click", function(){
            tacheAjouter.style.display ="flex"
            
        })
    }
})
document.body.addEventListener("keydown", function(e){
    if(e.keyCode === 13){
        if(input.value!= ""){
            bouton1.click()
        }
    }
})

    var n=prompt("Choisis ta difficulté")
    n=parseInt(n)
    var k=n-1,l=n-1;
    
    var para=document.getElementById('pg')
    var grille = new Array();
                    var tableau = document.getElementById('tab');
    
                    for(var i=0; i<n; i++){
                        grille[i] = new Array();
                        var ligne= document.createElement('tr');
                        tableau.appendChild(ligne)
                        for(var j=0; j<n; j++){
                            grille[i][j] = i*n+j+1
                            Case=creercase(grille,i,j)
                            ligne.appendChild(Case);
                        }
                    }

function creercase(tableau,i,j){
        var Case= document.createElement('td');
        if (tableau[i][j]!=n*n){
            Case.innerHTML=tableau[i][j]
        }else{
            Case.innerHTML=""
        }
        Case.id=String(i)+String(j)
        Case.addEventListener('click', ()=>permutation(tableau,i,j))
        return Case
}

function actualiserCase(tableau,i,j){
        if (tableau[i][j]!=n*n){
            document.getElementById(String(i)+String(j)).innerHTML=tableau[i][j]
        }
        else {
            document.getElementById(String(i)+String(j)).innerHTML=""
        }
}

function permutation(tableau,i,j){
        if(voisin(i,j,k,l)){
            tableau[k][l]=tableau[i][j]
            tableau[i][j]=n*n
            actualiserCase(tableau,k,l)
            actualiserCase(tableau,i,j)
            k=i
            l=j
            affichage(tableau)
            return (tableau,i,j)
        }
}

function permutationshuffle(tableau,i,j){
    if(voisin(i,j,k,l)){
        tableau[k][l]=tableau[i][j]
        tableau[i][j]=n*n
        actualiserCase(tableau,k,l)
        actualiserCase(tableau,i,j)
        k=i
        l=j
        return (tableau,i,j)
    }
}

function trouverblanc(tableau){
        for(var i=0; i<n; i++){
            for(var j=0; j<n; j++){
                if (tableau[i][j]==n*n){
                    return [i,j]
                }
            }
        }
}
            
function voisin(i,j,k,l){
    if ((i==k)&&(j==l+1)){
        return true
    }else if ((i==k)&&(j==l-1)){
        return true
    }else if ((i==k+1)&&(j==l)){
        return true
    }else if ((i==k-1)&&(j==l)){
        return true
    }else{
        return false
    }

}

function actionhasard(tableau){
    var choix = Math.floor(Math.random()*4)
    switch (choix) {
        case 0:
            if (k!=n-1){
                permutationshuffle(tableau,k+1,l)
            }
            break;
        case 1:
            if (k!=0){
                permutationshuffle(tableau,k-1,l)
            }
            break;
        case 2:
            if (l!=n-1){
                permutationshuffle(tableau,k,l+1)
            }
        break;
        case 3:
            if (l!=0){
                permutationshuffle(tableau,k,l-1)
            }
            break;
    }
}


function shuffle(){
    compteur=0
    while (compteur<200){
        compteur++
        actionhasard(grille)
    }
}

shuffle()

function gagne(grille){
    for(var i=0; i<n; i++){
            for(var j=0; j<n; j++){
                if(grille[i][j] != i*n+j+1){
                    return false
                }
            }
        }    
    return true
   
}

function affichage(grille){
    if (gagne(grille)){
        alert("Bravo vous avez gagné")
        para.innerHTML="c'est gagné"
        para.style.color="green"
        tableau.style.borderColor='green'
        
        
    }
}


      
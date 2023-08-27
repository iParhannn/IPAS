var mamalia = document.getElementsByClassName('canvas1')[0];
var aves = document.getElementsByClassName('canvas2')[0];
var reptil = document.getElementsByClassName('canvas3')[0];
var amfibi = document.getElementsByClassName('canvas4')[0];
var pisces = document.getElementsByClassName('canvas5')[0];
var crdt = document.getElementsByClassName('canvas6')[0];

function Fmamalia() {
    if(mamalia.style.visibility == 'visible') {
        mamalia.style.visibility='hidden';
    } else {
        mamalia.style.visibility='visible';
    }
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Faves() {
    if(aves.style.visibility == 'visible') {
        aves.style.visibility='hidden';
    } else [
        aves.style.visibility='visible'
    ]
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Freptil() {
    if(reptil.style.visibility == 'visible') {
        reptil.style.visibility='hidden'
    } else {
        reptil.style.visibility='visible'
    }
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Famfibi() {
    if(amfibi.style.visibility == 'visible') {
        amfibi.style.visibility='hidden'
    } else {
        amfibi.style.visibility='visible'
    }
    pisces.style.visibility='hidden';
}
function Fpisces() {
    if(pisces.style.visibility == 'visible') {
        pisces.style.visibility='hidden'
    } else {
        pisces.style.visibility='visible'
    }
}
function credit() {
    crdt.style.visibility='visible';
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';   
}
var awal = document.getElementsByClassName('canvas0')[0];
var mamalia = document.getElementsByClassName('canvas1')[0];
var aves = document.getElementsByClassName('canvas2')[0];
var reptil = document.getElementsByClassName('canvas3')[0];
var amfibi = document.getElementsByClassName('canvas4')[0];
var pisces = document.getElementsByClassName('canvas5')[0];
var crdt = document.getElementsByClassName('canvas6')[0];

function Fmamalia() {
    if(mamalia.style.visibility == 'visible') {
        mamalia.style.visibility='hidden';
        awal.style.visibility='visible';
    } else {
        mamalia.style.visibility='visible';
        awal.style.visibility='hidden';
    }
    crdt.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Faves() {
    if(aves.style.visibility == 'visible') {
        aves.style.visibility='hidden';
        awal.style.visibility='visible';
    } else {
        aves.style.visibility='visible'
        awal.style.visibility='hidden';
    }
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Freptil() {
    if(reptil.style.visibility == 'visible') {
        reptil.style.visibility='hidden'
        awal.style.visibility='visible';
    } else {
        reptil.style.visibility='visible';
        awal.style.visibility='hidden';
    }
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Famfibi() {
    if(amfibi.style.visibility == 'visible') {
        amfibi.style.visibility='hidden';
        awal.style.visibility='visible';
    } else {
        amfibi.style.visibility='visible';
        awal.style.visibility='hidden';
    }
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Fpisces() {
    if(pisces.style.visibility == 'visible') {
        pisces.style.visibility='hidden';
        awal.style.visibility='visible';
    } else {
        pisces.style.visibility='visible';
        awal.style.visibility='hidden';
    }
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    crdt.style.visibility='hidden';
    
}
function fCredit() {
    if(crdt.style.visibility == 'visible') {
        crdt.style.visibility='hidden';
        awal.style.visibility='visible';
    } else {
        crdt.style.visibility='visible';
        awal.style.visibility='hidden';
    }
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';   
}
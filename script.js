var mamalia = document.getElementsByClassName('canvas1')[0];
var aves = document.getElementsByClassName('canvas2')[0];
var reptil = document.getElementsByClassName('canvas3')[0];
var amfibi = document.getElementsByClassName('canvas4')[0];
var pisces = document.getElementsByClassName('canvas5')[0];
var crdt = document.getElementsByClassName('canvas6')[0];

function Fmamalia() {
    if(mamalia.style.visibility == 'visible') {
        mamalia.style.visibility='hidden';
        mamalia.classList.add('hidden');
    } else {
        mamalia.style.visibility='visible';
        mamalia.classList.add('show');
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
        aves.classList.add('hidden');
    } else [
        aves.style.visibility='visible',
        aves.classList.add('show')
    ]
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Freptil() {
    if(reptil.style.visibility == 'visible') {
        reptil.style.visibility='hidden'
        reptil.classList.add('hidden')
    } else {
        reptil.style.visibility='visible'
        reptil.classList.add('show')
    }
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Famfibi() {
    if(amfibi.style.visibility == 'visible') {
        amfibi.style.visibility='hidden'
        amfibi.classList.add('hidden')
    } else {
        amfibi.style.visibility='visible'
        amfibi.classList.add('show')
    }
    crdt.style.visibility='hidden';
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    pisces.style.visibility='hidden';
}
function Fpisces() {
    if(pisces.style.visibility == 'visible') {
        pisces.style.visibility='hidden'
        pisces.classList.add('hidden')
    } else {
        pisces.style.visibility='visible'
        pisces.classList.add('show')
    }
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    crdt.style.visibility='hidden';
    
}
function fCredit() {
    if(crdt.style.visibility == 'visible') {
        crdt.style.visibility='hidden'
        crdt.classList.add('hidden')
    } else {
        crdt.style.visibility='visible'
        crdt.classList.add('show')
    }
    mamalia.style.visibility='hidden';
    aves.style.visibility='hidden';
    reptil.style.visibility='hidden';
    amfibi.style.visibility='hidden';
    pisces.style.visibility='hidden';   
}
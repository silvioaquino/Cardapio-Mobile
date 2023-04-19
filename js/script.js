function iniciaMostrar(modalID) {
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
}
function paraMostrar(modalIDD) {
    const modal = document.getElementById(modalIDD);
    modal.classList.remove('mostrar');
}
// set chekcboxes using localstorage onload page
var now = new Date();
var dias = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sabado");

var check35statusStorage = dias[now.getDay()];
var check36statusStorage = dias[now.getDay()];
var check37statusStorage = dias[now.getDay()];
var check38statusStorage = dias[now.getDay()];
var check39statusStorage = dias[now.getDay()];
var check40statusStorage = dias[now.getDay()];
var check41statusStorage = dias[now.getDay()];
var check42statusStorage = dias[now.getDay()];
var check43statusStorage = dias[now.getDay()];
var check44statusStorage = dias[now.getDay()];
var check45statusStorage = dias[now.getDay()];

var check54statusStorage = dias[now.getDay()];


if (check35statusStorage == 'terça') {
    paraMostrar('mDivespa');
} else {
    iniciaMostrar('mDivespa');
}

if (check36statusStorage == 'segunda') {
    paraMostrar('mDivacharque');
} else {
    iniciaMostrar('mDivacharque');
}

if (check37statusStorage == 'segunda') {
    paraMostrar('mDivb2');
} else {
    iniciaMostrar('mDivb2');
}

if (check38statusStorage == 'quarta') {
    paraMostrar('mDivcmolho');
} else {
    iniciaMostrar('mDivcmolho');
}

if (check39statusStorage == 'quarta') {
    paraMostrar('mDivstrf');
} else {
    iniciaMostrar('mDivstrf');
}

if (check40statusStorage == 'terça') {
    paraMostrar('mDivpfrango');
} else {
    iniciaMostrar('mDivpfrango');
}

if (check41statusStorage == 'quinta') {
    paraMostrar('mDivlfrango');
} else {
    iniciaMostrar('mDivlfrango');
}

if (check42statusStorage == 'quinta') {
    paraMostrar('mDivlcarne');
} else {
    iniciaMostrar('mDivlcarne');
}

if (check43statusStorage == 'sexta') {
    paraMostrar('mDivpcoco');
} else {
    iniciaMostrar('mDivpcoco');
}

if (check44statusStorage == 'sexta') {
    paraMostrar('mDivpfrito');
} else {
    iniciaMostrar('mDivpfrito');
}

if (check45statusStorage == 'sabado') {
    paraMostrar('mDivmvaca');
} else {
    iniciaMostrar('mDivmvaca');
}

if (check54statusStorage == 'segunda'){
    paraMostrar('mDivasol');
}else{
    iniciaMostrar('mDivasol');
}
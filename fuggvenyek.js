var szam = 2;
export function udvozles(nev) {
    console.log("helló " + nev + " programozni jó!");
  }

// 3 egyenlőségjel - típust és értéket is ellenőrzi.
export function elagazas1() {
    /* a szám változóról döntsük el, hogy ps-e*/
  
    if (szam === 2) {
      console.log("A számunk =" + szam);
      console.log(typeof szam);
    } else {
      console.log("A számunk nem =" + szam);
      console.log(typeof szam);
    }
  }
  
export function elagazas2() {
    /* a szám változóról döntsük el, hogy ps-e*/
  
    if (szam === 0) {
      console.log(szam + " A szám nulla");
    } else if (szam % 2 === 0) {
      console.log(szam + " páros");
    } else {
      console.log(szam + " páratlan");
    }
  }
  
export function forCiklus() {
    /* Írjuk ki a konzolra 10-szer az alábbi üzenetet.*/
    for (let index = 0; index < 10; index++) {
      console.log(`A(z) ${index + 1}. uzenet`);
    }
  }
  
export function whileCiklus() {
    let index = 0;
    while (index < 10) {
      index++;
      console.log("Ez az első üzenet" + index);
    }
  }
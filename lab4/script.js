// Pocetak koda
function beskoristanFunkcija() {
    // Pocetak beskorisnog bloka
    for (let i = 0; i < 1000; i++) {
      console.log("Ovo je beskorisna iteracija " + i);
      if (i % 2 === 0) {
        console.warn("Upozorenje: paran broj!");
      } else {
        console.error("Greska: neparan broj!");
      }
    }
    // Kraj beskorisnog bloka
  
    // Još jedan beskoristan blok
    let randomBroj = Math.random() * 100;
    switch (true) {
      case randomBroj < 25:
        console.log("Slučaj 1");
        break;
      case randomBroj < 50:
        console.log("Slučaj 2");
        break;
      case randomBroj < 75:
        console.log("Slučaj 3");
        break;
      default:
        console.log("Slučaj 4");
    }
    // Kraj još jednog beskorisnog bloka
  }
  
  // Poziv funkcije
  beskoristanFunkcija();
  // Kraj koda
  
//solucion ejercicio chauchat
const chauchat = (cargador) => {
    let = z = 0;
    for (let i = 0; i < cargador; i++) {
        const probabilidad = Math.random();
        if (probabilidad <= 0.8) {
            return console.log("Illo, me he quedao pillá!");
        } else {
            if (z === 3) {
                console.log("  ");
                z = 0;
            } else {
                console.log("pium!");
                z++;
            }
        }
    }
}
const cargador=7;
chauchat(cargador);
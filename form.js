//Táblázat törzsének az elérése
const usersData = document.getElementById('usersTable');
//Űrlap elérése , eseményfigyelő hozzáadása
document.getElementById('userForm').addEventListener('submit', (e) => {
    //HTML űrlap alapértelmezett viselkedés megakadályozása
    e.preventDefault();
//FormData objektum létrehozása, az űrlap esemény hozzárendelése
//(e.target) az esemény címzettje
    const myformData = new FormData(e.target);
    //Az űrlap adatok áthelyezése a userData objektumba
    const userData = Object.fromEntries(myformData);

    console.log(userData);
//Másolat készítése a(z) userData objektumról
    const userObject = {
        Vezetéknév: userData.vezeteknev,
        Keresztnév: userData.keresztnev,
        Email: userData.email,
        Telefon: userData.telefonszam

    }

    console.log(userObject);
// A userObject másolatának a létrehozása
    const newObject = userObject;

    console.log(newObject);
})
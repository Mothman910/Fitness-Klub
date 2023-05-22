export function scroll2() {
  console.log("czujka-fujka");
  // Pobierz element, na którym ma zadziałać skrypt
  let element = document.getElementById("shaker");

  // Zdefiniuj funkcję, która sprawdza, czy element jest widoczny
  function isElementVisible(el) {
    // Pobierz położenie elementu
    let rect = el.getBoundingClientRect();
    // Sprawdź, czy górna i dolna krawędź elementu znajdują się w granicach okna
    return rect.top - 100 <= window.innerHeight;
  }

  // Dodaj zdarzenie scroll do okna
  window.addEventListener("scroll", function scrl() {
    // Sprawdź, czy element jest widoczny

    if (isElementVisible(element)) {
      console.log("czujka-lujka");
      // Uruchom skrypt
      anime({
        targets: "#shaker",
        translateX: -200,
        translateY: -300,
        duration: 4000,
        opacity: 1,
        rotate: 1170,
        scale: 1.15,
        easing: "spring(1, 80, 10, 0)",
      });
      // Usuń zdarzenie scroll, aby nie uruchamiać skryptu ponownie
      window.removeEventListener("scroll", scrl);
    }
  });
}

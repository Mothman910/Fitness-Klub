export function scroll3() {
  console.log("czujka-fujka");
  // Pobierz element, na którym ma zadziałać skrypt
  let element =
    document.getElementsByClassName("anim-delay")[
      document.getElementsByClassName("anim-delay").length - 1
    ];

  // Zdefiniuj funkcję, która sprawdza, czy element jest widoczny
  function isElementVisible(el) {
    // Pobierz położenie elementu
    let rect = el.getBoundingClientRect();
    // Sprawdź, czy górna i dolna krawędź elementu znajdują się w granicach okna
    return rect.top <= window.innerHeight;
  }

  // Dodaj zdarzenie scroll do okna
  window.addEventListener("scroll", function scrl() {
    // Sprawdź, czy element jest widoczny

    if (isElementVisible(element)) {
      console.log("czujka-lujka");
      // Uruchom skrypt
      anime({
        targets: ".anim-delay",
        translateX: 540,
        delay: anime.stagger(600),
        opacity: 1,
      });
      // Usuń zdarzenie scroll, aby nie uruchamiać skryptu ponownie
      window.removeEventListener("scroll", scrl);
    }
  });
}

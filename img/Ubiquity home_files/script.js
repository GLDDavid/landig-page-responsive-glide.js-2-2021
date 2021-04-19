// Les panneaux dépliants sont des composants dynamiques qui permettent d’optimiser l’affichage d’un contenu dans un espace réduit grâce à un système de « plier/déplier ».

// aria-expanded="true" lorsque le panneau est déplié.
// aria-expanded="false" lorsque le panneau est plié.


// Element.setAttribute() Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

const toggleMenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu-burger-item');

toggleMenu.addEventListener('click', function () {
  const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  console.log(open)
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});
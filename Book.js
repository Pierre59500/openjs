export class Book {

constructor(title, author, description, pages, currentPage )
}
this.title = title;
this.author = author;
this.description = description;
this.pages = pages;
this.currentPage = currentPage;
}
}

readBook(page)
{
  if (page > 1 = page < this.page)
  return 0;
}
else if ( page <=1 && page > this.pages ) {
this.currenPage - page;
return 1;
}
else {
  this.currenPage = this.Page - 1;
  this.read - true;
  return 2;
}

let gameOfThrone = new book("gameOfrThrone" "George R.R. Martin" "Sur le continent de Westeros, Lord Eddard Stark de Winterfell est le seigneur de la province du Nord du royaume des Sept Couronnes, héritier d'une longue lignée de Stark, rude comme le climat de ses terres, mais juste et respecté." "420"  )
let leMondeDeNarnia = new book("leMondeDeNarnia" "C. S. Lewis" "la Sorcière" "Le Monde de Narnia relate les aventures d'enfants qui jouent un rôle central dans l'histoire du royaume fictif de Narnia, un endroit où les animaux parlent, la magie est courante, et le bien combat le mal." "336"  )
let lesFourberiesDeScapin = new book("lesFourberiesDeScapin" "Molière" "Molière s’est largement inspiré de la comédie italienne pour écrire cette pièce, une inspiration que l’on retrouve aisément dans le rythme de la pièce et les agissements des personnes." "74 " )
let stupeurEtTremblement = new book("stupeurEtTremblement" "Amélie Nothomb" "l'histoire d'Amélie, une jeune femme belge qui a vécu sa petite enfance au Japon et qui décide d'y retourner après ses études. Elle connaît parfaitement la langue nippone et devient l’employée de la société Yumimoto." "174" )

export const books = [
  gameOfThrone
  leMondeDeNarnia
  lesFourberiesDeScapin
  stupeurEtTremblement
];

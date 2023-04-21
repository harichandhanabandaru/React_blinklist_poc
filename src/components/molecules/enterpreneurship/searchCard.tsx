export const searchCard = (input: string) => {
  if (input.length <= 0) return 
  input = input.toLowerCase();
  const json = require("../../../data.json");

  let cardNames:any[] = [
    ...json["trendingBlinks"],
    ...json["justAdded"],
    ...json["featured"],
  ];

  for (let i = 0; i < json["books"].length; i++) {
    if (cardNames.includes(json["books"][i].title)) {
      if (
        !json["books"][i].author.toLowerCase().includes(input) &&
        !json["books"][i].title.toLowerCase().includes(input)
      ) {
        let card = document.getElementById(
          json["books"][i].coverImage
        ) as HTMLElement;
        if (card !== null) card.style.display = "none";
      } else {
        let card = document.getElementById(
          json["books"][i].coverImage
        ) as HTMLElement;

        if (card !== null) card.style.display = "inline-block";
      }
    }
  }

};

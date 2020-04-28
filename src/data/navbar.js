import React from "react";
import { ReactComponent as SportIcon } from "../icons/sport.svg";
import { ReactComponent as CocktailIcon } from "../icons/cocktail.svg";
import { ReactComponent as PoliticianIcon } from "../icons/politician.svg";
import { ReactComponent as CaretIcon } from "../icons/caret.svg";
import { ReactComponent as NewsIcon } from "../icons/newspaper.svg";

export const navbar_data = [
  { id: 1, title: "General", icon: <NewsIcon />, link: "." },
  {
    id: 2,
    title: "Politics",
    icon: <PoliticianIcon />,
    link: "./politics",
  },
  { id: 3, title: "Sports", icon: <SportIcon />, link: "./sports" },
  { id: 4, title: "Celebs", icon: <CocktailIcon />, link: "./celebs" },
  {
    id: 5,
    title: "Caret",
    icon: <CaretIcon />,
    children: [
      {
        id: 1,
        title: "Np A",
        goToMenu: "Np A",
        leftIcon: <NewsIcon />,
        children: [
          {
            id: 1,
            leftIcon: <SportIcon />,
            title: "Sports",
            link: "./bellin",
          },
          {
            id: 2,
            leftIcon: <PoliticianIcon />,
            title: "Politics",
            link: "./pullin",
          },
        ],
      },
      {
        id: 2,
        title: "Np B",
        link: "hellobut",
        leftIcon: <NewsIcon />,
      },
      {
        id: 3,
        title: "Np C",
        leftIcon: <NewsIcon />,
      },
      {
        id: 4,
        title: "Np D",
        leftIcon: <NewsIcon />,
      },
      {
        id: 5,
        title: "Np E",
        leftIcon: <NewsIcon />,
      },
    ],
  },
];

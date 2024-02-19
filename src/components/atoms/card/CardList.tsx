import React, { useState } from "react";
import { Card } from "./Card";
import { User } from "@/app/page";
import { count } from "console";

interface CardListProps {
  items: User[];
  selectCard: string;
  searchuser: string;
  onSelectCard: React.Dispatch<React.SetStateAction<string>>;
  onDeleteCard: (id: string) => void;
}
//  const User = [
//   {
//     id: "1",
//     username: "NA NO",
//     profile: "profile.svg",
//   },
//   {
//     id: "2",
//     username: "En No",
//     profile: "profile.svg",
//   },
//   {
//     id: "3",
//     username: "No Name",
//     profile: "profile.svg",
//   }
// ]



const CardList = ({ items, selectCard, onSelectCard, onDeleteCard, searchuser }: CardListProps) => {
  return (
    <div>
      {searchuser
        ? items
            .filter((item) =>
              item.username.toLowerCase().includes(searchuser.toLowerCase())
            )
            .map((item, index) => (
              <Card
              id={item.id}
              name={item.username}
              key={item.id || index}
              image={item.profile}
              onSelectCard={onSelectCard}
              selectCard={selectCard}
              onDeleteCard={onDeleteCard}
              />
            ))
          : items.map((item, index) => (
            <Card
            id={item.id}
            name={item.username}
            key={item.id || index}
            image={item.profile}
            onSelectCard={onSelectCard}
            selectCard={selectCard}
            onDeleteCard={onDeleteCard}
            />
          ))
      }
    </div>
  );
}
export { CardList };

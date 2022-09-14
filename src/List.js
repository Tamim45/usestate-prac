import React from 'react';
import data from "./data";

const List = ({people}) => {
  return (
    <>
      {people.map((person) => {
        const {id, name, age, image} = person;
        return(
          <article key={id} className="person">
           <img src={image} alt={image} />
           <div>
            <h4>{name}</h4>
           <p>This year {age}</p></div> 
          </article>
        );

      })}
    </>
  );
};

export default List;

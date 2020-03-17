import React from "react";
import Person from "./Person";

function NameList() {

    const personList = [
        {
            id: 1,
            name: 'taoufiq',
            age: 22
        },
        {
            id: 2,
            name: 'Mohammed',
            age: 12
        },
        {
            id: 3,
            name: 'Fatima',
            age: 19
        }
    ];

    const person = personList.map(person => <Person person={person} key={person.id}/>);
    return (
      <div>
          { person }
      </div>
    );

}
export default NameList;
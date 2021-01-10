import React, { useEffect, useState } from 'react';

// simulate a api
async function getPersonList() {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  return ["aa", "bb", "cc"];
}

// there is no need to assign type for usePerson
const usePerson = () => {
  // must use Array<string> instead of [string]
  const [person, setPerson] = useState<Array<string>>([]);
  const reqPerson = async () => {
    let person = await getPersonList();
    setPerson(person);
  };

  useEffect(() => {reqPerson()}, []);
  return person;
};

const AsyncReqDemo: React.FC = () => {
  const person = usePerson();
  return (
    <>
      {person.map(name => <li key={name}>{name}</li>)}
    </>
  );
};

export default AsyncReqDemo;

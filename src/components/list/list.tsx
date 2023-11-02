import { useEffect } from 'react';
import { Card } from '../cards/card';
import { useCharacters } from '../../hooks/hook';

export function List() {
  const { characters, loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);
  return (
    <ul className="characters-list row list-unstyled">
      {characters.map((item) => (
        <Card key={item.name} item={item}></Card>
      ))}
    </ul>
  );
}

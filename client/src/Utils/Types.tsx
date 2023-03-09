export interface Character {
  id: number;
  FirstName: string;
  LastName: string;
  picture: string;
}

export interface ChatBoxProps {
  character: Character;
}

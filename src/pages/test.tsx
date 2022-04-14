import { useCharacters } from "hooks/useCharacters";
import type { NextPage } from "next";
import TestView from "views/testView";

const Test: NextPage = () => {
  const { characters } = useCharacters();

  return <TestView responce={characters} />;
};

export default Test;

// commit + branch dev *
// clean up files *
// move query-creator to hooks *
// create hook wrapper for mutation
// fix query
// fix namingss

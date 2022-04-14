import { useCharacters } from "hooks/useCharacters";
import type { NextPage } from "next";
import TestView from "views/testView";

const Test: NextPage = () => {
  const { fetchResult, mutationResult } = useCharacters();

  return <TestView responce={fetchResult} mutationResponce={mutationResult} />;
};

export default Test;

// commit + branch dev *
// clean up files *
// move query-creator to hooks *
// create hook wrapper for mutation *
// fix query
// fix namingss

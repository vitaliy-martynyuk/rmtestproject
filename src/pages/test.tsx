import { useCharacters } from 'hooks/useCharacters';
import type { NextPage } from 'next'
import { Data, Entity } from 'types/entity-types';
import { List, Typography, Divider } from 'antd';
import TestView from 'views/testView';



const Test: NextPage = () => {
    const { characters, addCharacter, createMutation } = useCharacters();

    return (
        <TestView
            data={characters.data}
            createMutation={createMutation}
        />
    );
}


export default Test

// commit + branch dev
// clean up files
// move query-creator to hooks
// create hook wrapper for mutation
// fix query 
// fix namingss

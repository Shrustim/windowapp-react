import { render, screen, fireEvent } from '@testing-library/react';
import FindAsyncEle from '../FindAsyncEle';
//Finding Async Elements with FindBy
// Mocking Request 
//node_modulues/react-script/script/utils/createJestConfig.js change in this file 
//   -- resetMocks:true   => resetMocks:false


describe('FindAsyncEle',()=>{
    // beforeEach(() => {
    //     jest.mock("../__mocks__/axios")
    // })

    it('should render  element of pokemon', async () => {
        render(
            <FindAsyncEle />
        );
       const pokemonElement  = await screen.findByTestId("pokemon-test-0");
       screen.debug();
        expect(pokemonElement ).toBeInTheDocument();
    });

    it('should render multiple elements of pokemon', async () => {
        render(
            <FindAsyncEle />
        );
       const pokemonElement  = await screen.findAllByTestId(/pokemon-test/i);
        expect(pokemonElement.length).toBe(20);
    });

});

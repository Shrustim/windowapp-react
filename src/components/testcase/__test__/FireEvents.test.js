
import { render, screen, fireEvent } from '@testing-library/react';
import FireEvents from '../FireEvents';
//different FireEvents  examples

//when we pass an function sample as a prop ....... so we can create a sample fun using jest.fn()
const mockedSetTodo = jest.fn();

describe('FireEvents',()=>{
    it('should render input element', () => {
        render(
            <FireEvents />
        );
        // /some text /i   -> this is regular expresion
        const inputElement  = screen.getByPlaceholderText(/Enter here name/i);
        expect(inputElement ).toBeInTheDocument();
    });

    it('should be able to type into input', () => {
        render(
            <FireEvents />
        );
        const inputElement = screen.getByPlaceholderText(/Enter here name/i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it('should have empty input when add button is cliked', () => {
        render(
            <FireEvents />
        );
        const inputElement = screen.getByPlaceholderText(/Enter here name/i);
        fireEvent.click(inputElement)
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } })
        const buttonElement = screen.getByRole("button", { name: /Empty/i});
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe("")
    });

})


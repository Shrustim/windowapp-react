import { render, screen } from '@testing-library/react';
import Testcomponent1 from '../Testcomponent1';

  test('should be check title render or not through prop by getByText method ', () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement = screen.getByText("my heading");
    expect(headerElement).toBeInTheDocument();
  });

  it('should be check title render or not through prop by getByRole method ', () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement = screen.getByRole("heading",{ name: "my heading"})
    expect(headerElement).toBeInTheDocument();
  });


it('should be check title render or not through prop by getByTitle method ', () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement = screen.getByTitle("heading1")
    expect(headerElement).toBeInTheDocument();
  });


it('should be check title render or not through prop by getByTestId method ', () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement = screen.getByTestId("heading2")
    expect(headerElement).toBeInTheDocument();
  });

it('should be check title render or not through prop by findByText method ', async () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement = await screen.findByText("my heading")
    expect(headerElement).toBeInTheDocument();
  });

it('should be check title render or not through prop by queryByText method ',  () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement =  screen.queryByText("hey not this text")
    expect(headerElement).not.toBeInTheDocument();
  });

it('should be check title render or not through prop by getAllByRole method ',  () => {
    render(<Testcomponent1 title="my heading" />);
    const headerElement =  screen.getAllByRole("heading")
    expect(headerElement.length).toBe(2);
  });


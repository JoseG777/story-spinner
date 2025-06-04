import { render, screen } from '@testing-library/react';
import Home from './Home';

test('find text', () => {
    render(<Home/>)
    expect(screen.getByText("this is the home page!")).toBeInTheDocument()
})

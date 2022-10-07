import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders site title', () => {
	render(<MemoryRouter><App /></MemoryRouter>);
	const titleElement = screen.getByText(/MQR/i);
	expect(titleElement).toBeInTheDocument();
});

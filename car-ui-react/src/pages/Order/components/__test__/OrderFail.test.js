import React from 'react';
import { render } from '@testing-library/react';
import { OrderFail } from '../OrderFail';
import '@testing-library/jest-dom';


test('renders order fail message', () => {
    const { getByText } = render(<OrderFail />);
    
    const failMessage = getByText(/Payment failed, please try again/i);
    expect(failMessage).toBeInTheDocument();
    
    // Use a function for text matching to handle multiple elements
    const connectSupportMessage = getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'p' &&
        element.textContent.includes('Connect') &&
        element.textContent.includes('AutoMarket@NashTech.com') &&
        element.textContent.includes('for support')
      );
    });
    expect(connectSupportMessage).toBeInTheDocument();
    
    const checkCartButton = getByText(/Check Cart Again/i);
    expect(checkCartButton).toBeInTheDocument();
  });
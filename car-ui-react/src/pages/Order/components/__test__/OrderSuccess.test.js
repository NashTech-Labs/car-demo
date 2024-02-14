import React from 'react';
import { render, screen } from '@testing-library/react';
import { OrderSuccess } from '../OrderSuccess';
import '@testing-library/jest-dom';


describe('OrderSuccess component', () => {
    test('renders success message with user name and order ID', () => {
      render(<OrderSuccess />);
      expect(screen.getByText(/Thank you user name for order!/i)).toBeInTheDocument();
      expect(screen.getByText(/Your Order ID: user id/i)).toBeInTheDocument();
    });
  
    test('renders confirmation message with email and payment ID', () => {
      render(<OrderSuccess />);
      expect(screen.getByText(/Your order is confirmed\./i)).toBeInTheDocument();
      expect(screen.getByText(/Please check your mail \(user@email\.com\) for the purchased Car\./i)).toBeInTheDocument();
      expect(screen.getByText(/Payment ID: xyz_123456789/i)).toBeInTheDocument();
    });
  
    test('renders continue shopping button', () => {
        render(<OrderSuccess />);
        expect(screen.getByRole('link', { name: /continue shopping/i })).toBeInTheDocument();
      });
  });

import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import  DescriptionCard  from './DescriptionCard';

describe('<DescriptionCard />', () => {
  test('render', () => {
    const { container } = render(<DescriptionCard name="Hades" breed="Común" gender="female" description="descripción test" redirectToWhatsApp={()=>{}} />);
    
    // Verifica que el botón se ha renderizado
    expect(container.querySelector('.card1')).not.toBeNull();
    expect(container.querySelector('.name')).not.toBeNull();

    // Verifica que los valores se pintan
    expect(screen.queryByText('Hades')).toBeTruthy();
    expect(screen.queryByText('Común')).toBeTruthy();
    expect(screen.getByAltText('Female')).toBeTruthy();
    
  });

  test('contact button click', () => {
    const mockData = {
      name: 'Hades',
      breed: 'Común',
      gender: 'female',
      description: 'descripción test.',
      redirectToWhatsApp: vi.fn(), // Mock function for testing
    };
    
    const { container } = render(<DescriptionCard {...mockData} />);
    
    const contactButton = screen.getByText('CONTACTAR');

    // Verifica que el botón "CONTACTAR" se ha renderizado
    expect(contactButton).toBeTruthy();

    // Simula hacer clic en el botón
    contactButton.click();

    // Verifica que la función redirectToWhatsApp se ha llamado
    expect(mockData.redirectToWhatsApp).toHaveBeenCalled();
  });
});
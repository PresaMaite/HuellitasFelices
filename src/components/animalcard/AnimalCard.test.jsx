
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import  AnimalCard  from './AnimalCard';

describe('<AnimalCard />', () => {
  test('AnimalCard render', () => {
    const { container } = render(<AnimalCard name="Test Name" photo="fakePhoto"/>);
    
    // Verifica que el botón se ha renderizado
    expect(container.querySelector('.animalCard')).not.toBeNull();

    // Verifica que el texto del botón sea correcto
    const button = screen.getByAltText('Test Name');
    expect(button).toBeTruthy();
  });

});
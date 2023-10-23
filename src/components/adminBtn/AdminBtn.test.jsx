
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest'
import { AdminBtn } from './AdminBtn';

describe('<AdminBtn />', () => {
  test('AdminBtn render', () => {
    const { container } = render(<AdminBtn text="Test Button" />);
    
    // Verifica que el botón se ha renderizado
    expect(container.querySelector('.adminBtn')).not.toBeNull();

    // Verifica que el texto del botón sea correcto
    const button = screen.getByText('Test Button');
    expect(button).toBeTruthy();
  });

});
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App' // Ajusta la ruta según tu estructura de carpetas

describe('App component', () => {
  it('renders correctly', () => {
    render(<App />)
    expect(screen.getByText('Hello, world!')).toBeInTheDocument() // Ajusta el texto según el componente que estás probando
  })
})

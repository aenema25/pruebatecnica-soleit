import { render } from '@testing-library/react';
import Header from './Header'

test('component should render response title', async () => {
    const { findByText } = render(<Header message={{ welcome: "test" }} />);
    await findByText('test');
});

test('component should render websocket status text', async () => {
    const { findByText } = render(<Header message={{ welcome: "test" }} />);
    await findByText('Desconectado')
});

test('component should render conectar button', async () => {
    const { findByText } = render(<Header message={{ welcome: "test" }} />);
    await findByText('Conectar')
});

test('component should render desconectar button', async () => {
    const { findByText } = render(<Header message={{ welcome: "test" }} />);
    await findByText('Desconectar')
});

test('component should render salir button', async () => {
    const { findByText } = render(<Header message={{ welcome: "test" }} />);
    await findByText('Salir')
});
const { render, screen } = require("@testing-library/react");
import Menu from '.'

test("Renderizar um link para a página inicial", () => {
    render(<Menu />)

    const link = screen.getByText('Inicial');

    expect(link).toBeInTheDocument();
})

test("Renderizar uma lista de links", () => {
    render(<Menu />)
    const listaDelinks = screen.getAllByRole('link');

    expect(listaDelinks).toHaveLength(4);
})

test("Não deve renderizar o link para extrato", () => {
    render(<Menu />)
    const linkExtrato = screen.queryByText('Extrato');

    expect(linkExtrato).not.toBeInTheDocument();
})

test("Deve renderizar uma lista de links com a classe link", () => {
    render(<Menu />)
    const links = screen.getAllByRole('link');

    links.forEach(link => expect(link).toHaveClass('link'));
    expect(links).toMatchSnapshot();
})
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Formulario from ".";

describe('Deve renderizar um campo de input', () => {
    test("No documento", () => {
        render (<Formulario />)
    
        const campoTexto = screen.getByPlaceholderText('Digite um valor');
        expect(campoTexto).toBeInTheDocument();
    })
    
    test("Com o type de number", () => {
        render (<Formulario />)
    
        const campoTexto = screen.getByPlaceholderText('Digite um valor');
        expect(campoTexto).toHaveAttribute('type', 'number');
    })
    
    test("Que pode ser preenchido", () => {
        render (<Formulario />);
    
        const campoTexto = screen.getByPlaceholderText('Digite um valor');
        userEvent.type(campoTexto, '50')
        expect(campoTexto).toHaveValue(50)
    })
})

test("Deve chamar um evento de onSubmit ao clicar em 'Realizar transação'", () => {
    const realizarTransacao = jest.fn();

    render (<Formulario realizarTransacao={realizarTransacao}/>);

    const botao = screen.getByRole('button');
    userEvent.click(botao)
    expect(realizarTransacao).toHaveBeenCalledTimes(1);
})

test("Deve ser possível selecionar uma ppção do elemento <select />", () => {
    render (<Formulario />)

    const selecionado = screen.getByRole('combobox')
    userEvent.selectOptions(selecionado, ['Transferência'])

    expect(screen.getByRole('option', { name: 'Transferência' }).selected).toBe(true)
})
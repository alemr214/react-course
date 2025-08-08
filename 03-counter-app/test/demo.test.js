describe('Prueba en <demo></demo>', () => { 
    test("Esta prueba no deberia fallar", () => {
        const message = "Hola mundo";

        const message2 = message.trim();

        expect(message).toBe(message2);
    })
})
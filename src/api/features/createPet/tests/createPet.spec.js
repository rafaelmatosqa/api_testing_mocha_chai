const { expect } = require('chai');
const request = require('../../support/request');
const { generatePayload } = require('../payloads/payload_create');

describe('Cadastrando um pet na PetStore com sucesso', () => {

    context('Quando envio um payload valido', () => {

        const bodyRequest = generatePayload();

        it('Então o pet é cadastrado com sucesso e o status code é igual a 200', async () => {

            const { body } = await request()
                .post('/pet')
                .send(bodyRequest)
                .expect(200);


        });

    });
});

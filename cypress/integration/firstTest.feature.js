/// <reference types="cypress"/>
import { uniqueAssetName } from './sharedConst'

describe ('Our first suite', () =>{
	describe ('Given  access the localhost assets app', () =>{
		beforeEach(() =>{
			cy.visit('/')
		}) 

		it('Then Description tab should be displayed', () => {
			cy.get('a').contains('Description')
	
		}) 

		it('Then Add Asset tab should be displayed', () => {
			cy.get('a[testid="add-asset"]').contains('Add Asset')
	
		}) 

		it('Then Existing Assets tab should be displayed', () => {
			cy.get('a[href="#/assets"]').contains('Existing Assets')
	
		}) 

		it('Then description page should be displayed', () => {
			cy.get('[class="ui container"]')
			cy.get('h2').contains('System requirements')
		}) 

		describe ("When click on 'Add Asset' tab", () => {
			beforeEach(() => {
				cy.get('a[testid="add-asset"]').click()
			})
			
			it('Then New Asset textbox and default Text should be displayed', () => {
				cy.get('label').contains('New Asset')
				cy.get('input[id="defaultFormAddAsset"]')
					.invoke('attr','placeholder').should('contain','ISIN0000000045')
			})
			it('Then Send button should be displayed', () => {
				cy.get('button[data-test="button"]').contains('Send')
			})

			describe ("Given invalid input data in New Assets textbox", () => {
				beforeEach(() => {
					cy.get('input[id="defaultFormAddAsset"]').type('bbbb9787655998')
				})
				describe ("When click on 'Send' button", () => {

					it('Then HTML validation warning message should be displayed', () => {
					 cy.get('button[data-test="button"]').click()
					 cy.get('input[id="defaultFormAddAsset"]:invalid').should('have.length',1)
					})

				})

			})

			describe ("Given valid input data in New Assets textbox", () => {
				beforeEach(() => {
					cy.get('input[id="defaultFormAddAsset"]').type(uniqueAssetName)
				})

				describe ("When click on 'Send' button", () => {

					it('Then Successful dialog should be displayed', () => {
					 cy.get('button[data-test="button"]').click()
					 cy.get('div[class="modal-content"]')
					  .find('[data-test="modal-header"]')
						 .get('[class="modal-title"]').contains('Sucssess')

						 cy.get('[data-test="modal-footer"]')
						 .find('[data-test="button"]').contains('Close').click()
					   
					})					

				})
				


			})

		})
		


	})
})

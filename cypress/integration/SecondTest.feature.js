/// <reference types="cypress"/>
import { uniqueAssetName } from './sharedConst'

describe ('Our Second suite', () =>{
    describe ('When click on the Existing Assets tab', () =>{

        
        it('Then Show entries should be displayed', () => {
            cy.visit('/')
            cy.get('a[href="#/assets"]').click()
            cy.wait(10000)
            cy.get('div[class="ui container"]')
            cy.get('div[data-test="datatable"]').find('[data-test="datatable-entries"]')
            cy.get('[data-test="datatable-select"]').find('label').contains('Show entries')
            

        })
        it('Then Searchbox should be displayed', () => {
            //cy.get('[data-test="datatable"]').find('div[data-test="datatable-search"]')
            cy.get('div[data-test="datatable-input"]').find('input[placeholder="Search"]').invoke('attr','placeholder').should('contain','Search')

        })
        it('Then Table should be displayed with at least one data row', () => {
            
            cy.get('[data-test="table-body"]').find('tr').eq(1)

        })  

        it('Then pagniation control should be displayed', () => {
            
            cy.get('[data-test="datatable-pagination"]').should('be.visible')

        }) 

        describe ('When searching an existing Assets on the search box', () =>{
            beforeEach(() => {
                cy.get('div[data-test="datatable-input"]').find('input[placeholder="Search"]').type(uniqueAssetName)
            })
            it('Then Search asset item should be displayed in the table', () => {
                cy.get('tbody').contains('tr', uniqueAssetName)
                cy.get('div[data-test="datatable-input"]').find('input[placeholder="Search"]').clear()
                cy.wait(500)
                
            })
        })

        describe ("When select an option '10' at Show entries dropdown ", () =>{
            it("Then asset items in the Table should be less than or equal '10'", () => {
                cy.get('[data-test="datatable-select"]').find('select').select('10')
                cy.get('[data-test="table-body"]').find('tr').its('length').should('be.lte',10)

                
            })

        })

        describe ("When select an option '20' at Show entries dropdown ", () =>{
            it("Then asset items in the Table should be less than or equal '20'", () => {
                cy.get('[data-test="datatable-select"]').find('select').select('20')
                cy.get('[data-test="table-body"]').find('tr').its('length').should('be.lte',20)

                
            })

        })



    })

})
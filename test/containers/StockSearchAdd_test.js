import {renderComponent, expect} from '../test_helper';
import StockSearchAdd from  '../../client/containers/StockSearch/StockSearchAdd';


//Please refer to chai-jquery documentation for more assertion types
// https://github.com/chaijs/chai-jquery
// http://chaijs.com/api/assert/


//Use describe to group together similar tests
describe('Search Container', ()=>{
  let component;
  beforeEach(() => {
  //renderComponent will return jQuery object that contains react component
    component = renderComponent(StockSearchAdd);
  })

  it('shows the correct Heading', ()=>{
    expect(component).to.contain('StockTwits');
  });

  // it('has a input area', () => {
  //   expect(component.find('input')).to.exist;
  // })


 // it('has a Form ', () => {
 //    expect(component.find('Form')).to.exist;
 //  })

 //  //Use 'it' to test one single test
 //  it('has the correct class', ()=>{
 //    //Use 'expect' to make an 'assertion' about a target
 //    expect(component).to.have.class('searchBar');
 //  });


  // it('if user submit, it should clear the input', () => {
  //   component.simulate('submit');
  //   expect(component.find('textarea')).to.have.value('');
  // })


  // it('shows an LI for each item', () => {
  //   expect(component.find('li').length).to.equal(2);
  // })


});



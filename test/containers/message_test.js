import {renderComponent, expect} from '../test_helper';
import MessageContainer from  '../../client/containers/Messages/MessageContainer';


//Please refer to chai-jquery documentation for more assertion types
// https://github.com/chaijs/chai-jquery
// http://chaijs.com/api/assert/

//Use describe to group together similar tests
describe('MessageContainer', ()=>{
  let component;
  beforeEach(() => {
  //renderComponent will return jQuery object that contains react component
    component = renderComponent(MessageContainer);
  })


  it('shows the correct Heading', ()=>{
    expect(component).to.contain('StockTwits');
  });
 // it('has a button ', () => {
 //    expect(component.find('button')).to.exist;
 //  })

 //  //Use 'it' to test one single test
 //  it('has the correct class', ()=>{
 //    //Use 'expect' to make an 'assertion' about a target
 //    expect(component).to.have.class('world');
 //  });


  // it('if user submit, it should clear the input', () => {
  //   component.simulate('submit');
  //   expect(component.find('textarea')).to.have.value('');
  // })


  // it('shows an LI for each item', () => {
  //   expect(component.find('li').length).to.equal(2);
  // })


});



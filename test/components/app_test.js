import {renderComponent, expect} from '../test_helper';

import App from '../../client/components/App.js';

describe('App', ()=> {
  let component;
  before(()=> {
    component = renderComponent(App);
  });

  it('renders something', ()=>{
    expect(component).to.exist;
  });
});
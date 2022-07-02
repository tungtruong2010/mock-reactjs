import { cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount } from 'enzyme'; 
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import FormEdit from "../components/FormEdit";
import React from "react";
import { Button } from "@mui/material";

afterEach(cleanup)

describe('test respo  ', () =>{
    const mockStore = configureStore();
    let state = {
        User: { getUser: {id: "1861402",
        name: "",
        description: "",
        language: "",
        watchers_count: "",
        open_issues: "",
        private:"",} }
    };
    const store = mockStore(() => state);

    it('test Show Update Dialog', () => {
      const wrapper = mount(
          <Provider store={store}>
            <BrowserRouter>
              <FormEdit open={false} setOpens={() => {}}/>
            </BrowserRouter>
          </Provider>
      )
      console.log()
      expect(wrapper.html()).toEqual('')
    });
    it('test Edit', () => {
      const mockCallBack = jest.fn();
      const buttonEdit = mount(<Button onClick={mockCallBack(state.User.getUser.id)}>
        Update
      </Button>);
        buttonEdit.find('button').simulate('click');
      const buttonSave = mount(<Button onClick={mockCallBack(state.User)}>
        Save
      </Button>);
        buttonSave.find('button').simulate('click');
        expect(mockCallBack).toBeCalledTimes(2);
      })
})

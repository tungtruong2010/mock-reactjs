import { cleanup, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { mount, render } from 'enzyme'; 
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import FormEdit from "../components/FormEdit";
import React from "react";
import { Button } from "@mui/material";
import MainTable from "../components/Table";

afterEach(cleanup)

describe('test respo  ', () =>{
    const mockStore = configureStore();
    let state = {
        User: { getUser: {id: "1861402",
        name: "tung",
        description: "",
        language: "",
        watchers_count: "",
        open_issues: "",
        private:"",} }
    };
    const store = mockStore(() => state);
    // const wrapperEdit = mount(
    //   <Provider store={store1}>
    //     <BrowserRouter>
    //       <MainTable />
    //     </BrowserRouter>
    //   </Provider>
    // );
    it('test Show Update Dialog', () => {
      const wrapper = mount(
          <Provider store={store}>
            <BrowserRouter>
              <FormEdit open={false} setOpens={() => {}}/>
            </BrowserRouter>
          </Provider>
      )
      console.log()
      expect(wrapper.html()).toEqual('');
      expect(wrapper).toMatchSnapshot();
    });
    it('test Table', () => {
      let state = {User: {userList: [{id: "1861402",
        name: "tung",
        description: "",
        language: "",
        watchers_count: "",
        open_issues: "",
        private:"",}] }} 
      const store = mockStore(() => state);
        const wrapperTable = mount(
          <Provider store={store}>
            <BrowserRouter>
              <MainTable />
            </BrowserRouter>
          </Provider>
        );
        expect(wrapperTable.find('#tung').first().text()).toEqual('tung');
    })
})

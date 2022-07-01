import { Button, Container } from "@mui/material";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Respo1 from './respo1';
import Home from './Home'
import store from "../redux/store";
import { mount,shallow } from 'enzyme'; 
import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import FormEdit from "../components/FormEdit";
import EditIcon from '@mui/icons-material/Edit';
import React from "react";

afterEach(cleanup)

describe('test respo  ', () =>{
    const mockStore = configureStore();
    let state = {
        open: true,
        setOpens: true
    };
    const store = mockStore(() => state);
    it('test Show Update Dialog', () => {
        const wrapper = mount(
            <Provider store={store}>
              <BrowserRouter>
                <FormEdit open={true} setOpens={true}/>
              </BrowserRouter>
            </Provider>
        )
        expect(wrapper).toMatchSnapshot();
    });
})
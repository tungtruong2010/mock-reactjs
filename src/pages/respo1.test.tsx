import { Container } from "@mui/material";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import Respo1 from './respo1';
import store from "../redux/store";

afterEach(cleanup)

describe('render respo1  ', () =>{
    it('DEMO passing test have ace', () =>{
        const data = document.querySelectorAll('td')
        data.forEach((element:any)=>{
            expect(element).toHaveTextContent("ace")
        })
    });
    
})

// test('make sure I can render respo1', async () =>{
//     const {debug}= render (
//             <Respo1/>  
        
//     );
//     debug();
// });
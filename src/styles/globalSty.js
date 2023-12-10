import { globalCss, styled } from "./Styindex";
import "hamburgers/dist/hamburgers.css"


export const GlobalStyles = globalCss({
    "*": {
        padding:0,
        margin:0,
        boxSizing: "border-box",
        textDecoration: "none",
        listStyle:"none",
        listStyleType: "none",
    },
    input:{outline: 'none'},
    html: {
        fontSize: "62.5%",
        scrollBehavior: 'smooth'
    },
    body: {      
        overflowX:'hidden !important',
        fontFamily: "'atypBLText', sans-serif",
        fontSize: "1rem",
        backgroundColor: "$gray_scale_01",
    },
    ".overN":{
      overflow:'hidden'
    },
    ".img": {
        maxWidth:"100%",
        display: "block"
    },
    button: {
        border: 0,
        backgroundColor: "transparent",
        cursor:"pointer",
    },

    h1: {
        fontSize: '4rem'
      },
      
      h2: {
        fontSize: '3.2rem'
      },
      
      h3: {
        fontSize: '2.8rem'
      },
      
      h4: {
        fontSize: '2.4rem'
      },
      
      h5:{
        fontSize: '2rem'
      },
      
      h6: {
        fontSize: '1.8rem'
      },
      
      p :{
        fontSize: '1.8rem'
      },
      
      a :{
        textDecoration: "none",
        display: "inline-block",
        fontSize: '1.8rem',
        fontWeight: 600,
        color: '$blaCyan',
      },
      
      ul: {
        li :{
          fontSize: '1.8rem'
        }
      },
      
      
      "h1,h2,h3,h4,h5,h6": {
        fontWeight: 600,
        color: 'white',
      },
      
      "p, li" :{
        fontWeight: 400,
        color: 'green',
      },
      

    section :{
        "@lgScreen" :{
            padding: "60px 0px !important"
        },
        "@table": {
            padding: "50px 0 !important"
        },
        "@mobile":{
            padding: "40px 0px !important"
        }
    }
})

export const Conteiner = styled("div" , {
    width: "100%" ,
    maxWidth: "121.6rem",
    margin:"0 auto",
    padding: "0 1.5rem"

})
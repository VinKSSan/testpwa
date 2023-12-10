import { styled } from "@/styles/Styindex"


export const Hed = styled('header',{
    
    width: "100%",
    height: "5rem",
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(180deg,rgba(0, 250, 255,0.2) 68.69%, rgba(0, 250, 255,0.5) 100%)",
    borderBottom:'solid 4px transparent',
    borderImage:"linear-gradient(90deg,rgba(0, 250, 255,0.6) 60%, rgba(0, 250, 255,0.4) 100%)",
    borderImageSlice:1,
    transition:'all .2s ease',
    backdropFilter: "blur(40px)",
    zIndex: 20,
    "&.ativar":{
        backdropFilter: "none",
        border:'none',
        background: "linear-gradient(180deg,rgba(0, 200, 200,0.2) 20%, rgba(0, 250, 255,0.4) 100%)",
        position: "fixed",
        top: 0,
    },
    ".viewPesContains":{
        backgroundColor:'rgba(0,0,0,0.8)',
        zIndex:'100',
        position:'fixed',
        top:'0%',
        left:'0%',    
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height:'100vh',
        width:'100vw',
        ".btnFechaPes":{
            height:'10rem',
            width:'20rem',
            color:'lime',
        }
    },
    ".container": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        ".img":{
            padding:'0.2rem'
        }
    },
    ".hamburger":{
        marginLeft: "2rem",
        display: "none",
        "&.is-active": {
            ".hamburger-inner": {
                backgroundColor:"white",
                "&::before":{
                    backgroundColor:"white",
                },
                "&::after":{
                    backgroundColor:"white",
                }
            }
        },
        ".hamburger-inner": {
            backgroundColor:"white",
            "&::before":{
                backgroundColor:"white",
            },
            "&::after":{
                backgroundColor:"white",
            }
        }
    },
    //menuMob
    ".menu-mobile":{
        position: "fixed",
        top: "5rem",
        width: "100%",
        height: "calc(100vh - 5rem)",
        backgroundColor: "#0a0615",
        padding: "4rem 1.5rem",
        display:'none',
        transition: "all .3s ease",
        ul: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "4rem",
            li: {
                ".item-categorie":{
                    padding: "2rem 0rem",
                    ".img": {
                        width: "3.2rem",
                    },
                    span: {
                        fontSize: "20px",
                    },
                },
            },
        },
        ".search": {
            maxWidth: "100%",
            height: "6rem",
            input: {
                fontSize:"1.6rem",
            },
            button: {
                height: "6rem",
                width: "6rem",
                img: {
                    width: "2.4rem"
                }
            }
        }
    },
    ".menu-opened":{
        display:'block'
    },
    nav:{
        display:"flex",
        alignItems:"center",
        justifyContent: "space-between",
        flex: 1,
        maxWidth: "83.2rem",
        ul :{
            display: "flex",
            alignItems: "center",
            li :{
                "&:not(:first-child)": {
                    marginLeft: "6.4rem",
                }
            }
        }
    },

    ".item-categorie" :{
        display: "flex",
        alignItems: "center",
        "&:hover":{
          span :{
            color: "cyan"
          }
        },
        span: {
          opacity: 0.7,
          color:"#FFFFFF",
          fontSize: "1.4rem",
          lineHeight: "150%",
          fontWeight: 400,
          marginLeft: "0.8rem",
          transition: "color .3s ease"
        }
    },


    ".search":{
        display: "flex",
        alignItems:"center",
        width: "100%",
        maxWidth: "28rem",
        height: "3.6rem",
        input:{
            flex: 1,
            height: "100%",
            backgroundColor: "transparent",
            border: "1px solid rgba(153, 149, 166, 0.25)",
            borderRadius: "4px 0 0 4px",
            padding:"0 1.6rem",
            color: "#ffffff",
            fontFamily: "'$AtypBLText', sans-serif",
            transition: "border .3s ease",
            "&::placeholder": {
                color: "rgba(255, 255, 255, 0.5)"
            },
            "&:focus": {
                border: "1px solid cyan"
            },
        },
        button:{
            width: "3.6rem",
            height: "3.6rem",
            backgroundColor: "cyan",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "2px",
            marginLeft: "-0.rem",
            transition: "filter .3s ease",
            "&:hover":{
                filter: "brightness(0.8)",
            }
        }
    },


    "@lgScreen1" :{
        nav: {
            maxWidth: "100%",
            ".item-categorie" :{
                flexDirection:"column !important",
                span:{
                    marginLeft: "0.2rem",
                }
            }
        },
    },
    "@tablet": {
        ".hamburger":{
            display: "block",
            marginRight:"2rem"
        },
        nav:{
            maxWidth: "100%",
            justifyContent: "flex-end",
            ul:{
                display: "none",
            }
        }
    },
    "@mobile": {
        ".logo":{         
            maxWidth: "30rem",
            transform:"translateX(-25px)"
            
        },
        nav: {
            ".search":{
                display: "none"
            },
           ".hamburger": {
                marginLeft: 0,
                padding: 0,
            }
        }
    },
})


import { styled } from "@/styles/Styindex";

export const SecCa = styled('section',{
    height:'60vh',
    width:"100%",
    backgroundColor:"$pink",
    display:"flex",
    alignItems :"center",
    justifyContent:"center",
    button:{
        border:"solid 2px blue",
        transform:"translateY(20px)",
    },
    ".sli":{
        keyframes:{
            "0%":{
                transform:"translateX(20px)",
            },
            "100%":{
                transform:"translateX(200px)",
            }
        }
    },
    ".sli1":{
        keyframes:{
            "0%":{
                transform:"translateX(20px)",
            },
            "100%":{
                transform:"translateX(200px)",
            }
        }
    },
    ".car":{
        width:"40%",
        padding:"5rem 8rem",
        transition:"all ease 2s",
        transform:"translateX(200px)",
    },
    ".car.pas":{
        keyframes:{
            "0%":{
                transform:"translateX(20px)",
            },
            "100%":{
                transform:"translateX(200px)",
            }
        }
    }

})
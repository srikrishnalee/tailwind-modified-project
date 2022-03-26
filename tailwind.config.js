module.exports = {
  content: ["./public/index.html"],
  theme: {
    screens:{
      sm:"640px",
      md:"768px",
      lg:"1024px",
    },
    borderRaius:{

    },
    fontSize:{
      'H1':['44px',{
        lineHeight:'62px',
        color:"#141414",
      }],
      'H3':['34px',{
        lineHeight:'62px',
        color:"#141414",
      }],
      'H4':['24px',{
        lineHeight:'35px',
        color:"#141414",
      }],
      'H5':['18px',{
        lineHeight:'27px',
        color:"#141414",

      }],
      'BTNS':['16px',{
        lineHeight:"25px",
        color:"#3D61B0",
      }],
      'BTB':['16px',{
        lineHeight:"22px",
        color:"#141414",
      }],
      "BTMB":['16px',{
        lineHeight:"22px",
        color:"#141414",
      }],
      "BTW":['16px',{
        lineHeight:"23px",
        color:"#333333",
        
      }],
      "BTMI":["15px",{
        lineHeight:"23px",
        color:"#333333"
      }],
      "BTW":["15px",{
        lineHeight:"23px",

      }],
      "BTB":["15px",{
        lineHeight:"23px",
        color:"#FFFFFF",
      }],
      "PSB":["15px",{
        color:"#FF6142",
        lineHeight:"23px"
      }],
      "PR":["12px",{
        color:"#FFFFFF",
        lineHeight:"18px",
      }],

    },
    
    extend: {
      colors:{
        'white':"#FFFFFF",
        "yellow":"#FFDB0A",
        "blue":"#3D61B0",
        "black":"#141414",
        "grey":"#F6FAFC",
        "brown":"#333333",
        "red":"#FF6132",
        "navyblue":"#2645BC",
  
      },
      fontFamily:{
        poppins:["poppins,sans-serif"]
      },
    borderRaius:{
      "3xl":"34px",
    },
    },
  },
  plugins: [],
}

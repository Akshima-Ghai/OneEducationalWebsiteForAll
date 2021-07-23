import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot'
import React from "react";
import './Chatbot.css';

const steps = [
    {
      id: '0',
      message: 'Welcome to LearnZania!',
      trigger:'1',
    },
    
    {
      id:'1',
      message:'Do you need some help ?',
      trigger:'2',
    },
    {
      id:'2',
      options:[
        { value:1,label:'Yes',trigger:'3'},
        {value:2,label:'No',trigger:'4'},
      ]
    },
    { id:'3',
    message:'Are you a ?',
    trigger:'5',

    },
    {
      id: '5',
      options: [
        { value: 1, label: 'Student', trigger: '6' },
        { value: 2, label: 'Teacher', trigger: '7' },
      ],
    },
    {
      
        id: '6',
        component:(
          <div>
              <span className="links">Visit this section <a href='./student'>Student</a></span>
              </div>
        ),
         asMessage:true,
        trigger:'8',
      },
      { id:'7',
         component:(
              <div>
               <span className="links">Visit this section <a href='./teacher'>Teacher</a></span>
               </div>
         ),
         asMessage:true,
         trigger:'8',
      },
      { id:'8',
        component: (
          <div>
            <span className="links">Find answer to your questions on <a href="./FAQ">FAQ</a></span>
         </div>
        ),
        asMessage:true,
        trigger: '9'
  
  
    },
    {
      id:'9',
      component:(
        <div>
      <span className="links">Want to have a quiz ? Visit <a href="./quiz">Quiz</a></span>
         
          </div>
      ),
      asMessage:true,
      trigger:'10'
    },
    {
      id:'10',
      component:(
        <div>
          <span className="links">About us <a href='./about'>About</a></span>
          </div>
      ),
      asMessage:true,
      trigger:'11'
    },
    {
      id:'11',
      message:'Have any further doubts ?',
      trigger:'12'
    },
    {
      id:'12',
      options:[
        { value:1,label:'Yes',trigger:'13'},
        {value:2,label:'No',trigger:'14'},
      ]
    },
    { id:'13',
       component:(
<div className="links">Feel free to contact us at : <a href="mailto:example123@gmail.com">Email</a>
<br></br>Thanks for visiting.
</div>
       ),
      asMessage:true,
      end:true
    },

    {
      id:'14',
      component:(
        <div className="links">Hope this was helpful. <br></br>Feel free to contact us at : <a href="mailto:example123@gmail.com"> Email</a>
        </div>
               ),
      asMessage:true,
     trigger:'15'
    },
    {
      id:'15',
      message:'Thanks for visiting...',
     end:true
    },
      {id:'4',
     
      component:(
        <div className="links"> Ok, thanks for visting. Feel free to contact us at : <a href="mailto:example123@gmail.com">Email</a></div>
               ),
      asMessage:true,
      end:true,
  
      }
  ];
  const theme = {
    background: 'whitesmoke',
    fontFamily: 'sans-serif',
    headerBgColor: '#FF6A42',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#FC795F',
    botFontColor: '#fff',
    userBubbleColor: '#FF7F50',
    userFontColor: '#fff',
  };
  const Chatbot=()=>{
      return(
    <ThemeProvider theme={theme}>
    <ChatBot steps={steps} floating={true}/>
    </ThemeProvider>
      );
  }
  export default Chatbot;
  
  
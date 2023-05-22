import React from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './Components/Header.jsx';
import { CallToAction } from './Components/CallToAction.jsx';
import { SectionCard } from './Components/SectionCard.jsx';
import { Footer } from './Components/Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Header/>
    <CallToAction 
    title="A Warm Welcome"
    message="Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique porro in perspiciatis, laboriosam sint praesentium beatae, eveniet nisi voluptatibus quo, commodi iusto obcaecati quos eaque. Adipisci quis fugit consectetur accusamus?"
    labelBtn="Call to Action!"
    />
    <SectionCard/>
    <Footer/>
    </>
  </React.StrictMode>,
)

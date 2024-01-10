'use client';
import React from 'react';
import { Footer, Navbar } from '../components';
import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Explore,
  Feedback,
  GetStarted,
  Hero,
  Insights,
  WhatsNew,
  World,
} from '../sections';
import './page.css';

function Page() {
  return (
    <BrowserRouter>
    <div className="bg-primary-black overflow-hidden bg_pic">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04" />
        <Feedback />
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default Page;

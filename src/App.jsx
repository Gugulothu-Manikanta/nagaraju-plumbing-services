import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { EmergencyBar, FloatingActions, Footer, Navbar } from './components';
import { AboutPage, ContactPage, EmergencyPage, HomePage, ServiceDetailPage, ServicesPage } from './pages';

const titles={ '/':'Nagaraju Plumbing Services | Professional Plumbing Services','/services':'Professional Plumbing Services | Nagaraju Plumbing Services','/about':'About Us | Nagaraju Plumbing Services','/contact':'Contact Us | Nagaraju Plumbing Services','/emergency-plumbing':'Emergency Plumbing | Nagaraju Plumbing Services'};
function Seo(){const {pathname}=useLocation();useEffect(()=>{document.title=titles[pathname]||'Plumbing Service | Nagaraju Plumbing Services';window.scrollTo({top:0,behavior:'instant'})},[pathname]);return null}
export default function App(){return <><Seo/><EmergencyBar/><Navbar/><main><Routes><Route path="/" element={<HomePage/>}/><Route path="/services" element={<ServicesPage/>}/><Route path="/services/:slug" element={<ServiceDetailPage/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/contact" element={<ContactPage/>}/><Route path="/emergency-plumbing" element={<EmergencyPage/>}/><Route path="*" element={<HomePage/>}/></Routes></main><Footer/><FloatingActions/></>}

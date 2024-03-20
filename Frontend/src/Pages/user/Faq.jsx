import React, { useState } from 'react';
import '../../assets/css/faq.css' // Import the FAQ component's CSS file
import Topbar from '../../components/shared/Topbar';
// import FaqNavbar from '../components/faqnavbar';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We offer a wide range of event planning services, including weddings, corporate events, birthday parties, and more. Our goal is to make your event a memorable and stress-free experience.',
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can request a quote by visiting our "Contact Us" page and filling out the form. We will get back to you as soon as possible with a customized quote for your event.',
    },
    {
      question: 'Do you provide event decoration services?',
      answer: 'Yes, we offer event decoration services to make your event aesthetically pleasing. Our team of decorators will work with you to create the perfect ambiance for your event.',
    },
    {
      question: 'Can you handle both small and large events?',
      answer: 'Absolutely! We have experience in organizing events of all sizes, from intimate gatherings to large-scale corporate events. No event is too small or too big for us.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'Our pricing varies depending on the type and scale of the event, as well as the specific services you require. We provide customized quotes to ensure you get the best value for your budget.',
    },
    {
      question: 'How far in advance should I book your services?',
      answer: 'It\'s advisable to book our services at least several months in advance, especially for weddings and large events. However, we can accommodate last-minute requests when possible.',
    },
  ];

  const toggleAnswer = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {/* <FaqNavbar/> */}
      {/* <Topbar/> */}
      <div className="container-fluid p-4 bg-purple-100">
      <div className="faq-container h-[93vh] flex flex-col justify-center bg-purple-100">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{faq.question}</h3>
                <div className={`faq-icon ${index === activeIndex ? 'active' : ''}`}>
                  <span>&#9660;</span>
                </div>
              </div>
              <div className={`faq-answer ${index === activeIndex ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Faq;

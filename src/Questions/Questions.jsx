import React,{useState} from 'react'
import './Question.css'
const faqData = [
    { question: "What's the use of this ?", answer: "To Contact with Professional about career" },
    { question: "How to Contact", answer: "By Simply Contact through Connect page" },
    { question: "For Which People", answer: "Who are waiting for Opportunity to Kick  Start the Career " }
  ];
  
  const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleQuestion = (index) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="faq-container">
        <h1 className='Faq_title'>FAQ's</h1>
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="question-btn" onClick={() => toggleQuestion(index)}>
              {item.question} {openIndex === index ? "▲" : "▼"}
            </button>
            {openIndex === index && <p className="answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    );
  };
  
  export default Questions;

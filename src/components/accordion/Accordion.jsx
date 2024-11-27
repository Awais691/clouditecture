import { useState } from "react";
import arrowDownImg from "../../assets/images/arrow-dwon-img.png"
const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const accordionData = [
        { 
          title: "Enim sodales consequat adipiscing facilisis massa venenatis?",
          content: "Enim sodales consequat adipiscing facilisis massa venenatis?"
        },
        { 
           title: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
           content: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?"
        },
        { 
           title: "Varius ultricies molestie tellus fermentum, viverra ipsum ?",
           content: "Varius ultricies molestie tellus fermentum, viverra ipsum ?"
        },
        { 
            title: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?",
            content: "Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?"
         },
         { 
            title: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
            content: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?"
         },
  
    ];

    return (
        <div className="accordion">

            {accordionData.map((item, index) => (
                <div key={index} className="accordion-item">
                    {/* Accordion Header */}
                    <button
                        className="accordion-title"
                        onClick={() => toggleAccordion(index)}
                    >
                        {item.title}
                        <img src={arrowDownImg} alt="arrow" className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? "rotate-180" : "rotate-0" }`}/> 
                        </button>
                    {/* Accordion Content */}
                    {openIndex === index && (
                        <div className="accordion-content">
                            {item.content}
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
};

export default Accordion;


import "./Form.css";
import React, { useState } from "react";
import MultiStepProgressBar from "../MultiStepProgressBar/MultiStepProgressBar";
import PersonalDetails from "../PersonalDetails";
<<<<<<< HEAD
import Address from "../address";
=======
import FamilyDetail from "../FamilyDetails";
import ContactDetails from "../ContactDetails";
>>>>>>> 37eb5e0ed698f5529862562bab8103378247e14c

function Form() {
    const [page, setPage] = useState("pageone");

    const nextPage = (page) => {
        setPage(page);
    };

    const nextPageNumber = (pageNumber) => {
        switch (pageNumber) {
            case "1":
                setPage("pageone");
                break;
            case "2":
                setPage("pagetwo");
                break;
            case "3":
                setPage("pagethree");
                break;
            case "4":
                setPage("pagefour");
                break;
            case "5":
                alert("Ooops! Seems like you did not fill the form.");
                break;
            default:
                setPage("pageone");
        }
    };

    return (
        <div className="App">
            <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
            {
                {
                    pageone: <PersonalDetails onButtonClick={nextPage} />,
<<<<<<< HEAD
                    pagetwo: <Address onButtonClick={nextPage} />,
                    // pagethree: <PageThree onButtonClick={nextPage} />,
=======
                    pagetwo: <FamilyDetail onButtonClick={nextPage} />,
                    pagethree: <ContactDetails onButtonClick={nextPage} />,
>>>>>>> 37eb5e0ed698f5529862562bab8103378247e14c
                    // pagefour: <PageFour />,
                }[page]
            }
        </div>
    );
}

export default Form;


import "./Form.css";
import React, { useState } from "react";
import MultiStepProgressBar from "../MultiStepProgressBar/MultiStepProgressBar";
import PersonalDetails from "../PersonalDetails";
import Address from "../address";

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
                    pagetwo: <Address onButtonClick={nextPage} />,
                    // pagethree: <PageThree onButtonClick={nextPage} />,
                    // pagefour: <PageFour />,
                }[page]
            }
        </div>
    );
}

export default Form;

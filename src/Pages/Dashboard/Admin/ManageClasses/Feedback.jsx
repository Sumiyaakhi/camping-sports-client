import React from 'react';
import SectionTItle from '../../../../Components/SectionTitle/SectionTItle';


const Feedback = () => {
    const handleSendFeedback = (event) => {
        event.preventDefault();
        const feedback = event.target.feedback.value;
        const feedbackObj = {feedback: feedback}
        console.log(feedbackObj);
      };
    return (
        <div>
            <SectionTItle
            heading="Send feedback"
            ></SectionTItle>
            <form onSubmit={handleSendFeedback}>
                        <textarea
                          type="text"
                          className="textarea textarea-accent w-full my-6"
                          name="feedback"
                          placeholder=" type here"
                        ></textarea>
                        <input
                          className="bg-blue-400 text-white btn"
                          type="submit"
                          value="send"
                        />
                      </form>
        </div>
    );
};

export default Feedback;
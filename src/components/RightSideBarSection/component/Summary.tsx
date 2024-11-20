import React, { useState } from "react";
import "./Summary.scss";
import SummaryIcon from "../../../assets/icons/SummaryIcon";
import { useSelector } from "react-redux";

interface SummaryProps {
  title?: string;
  showHide?: boolean;
}

const Summary: React.FC<SummaryProps> = ({ title = "Summary", showHide }) => {
  const stateData = useSelector((state: any) => state);

  const {
    summaryData,
    todoListData,
    myRequests,
    searchbar: { rightSidebarHidden, chatDetails },
  } = stateData;
  // State to track how many items to display
  const [visibleCount, setVisibleCount] = useState(5);

  // Function to show more items
  const showMore = () => {
    setVisibleCount(chatDetails.length); // Show all items
  };
  console.log("chatDetails", chatDetails);

  return (
    <div className="summary">
      <p className="summary__title">
        <SummaryIcon />
        {title}
      </p>
      {!showHide && (
        <>
          <ul className="summary__content">
            {chatDetails ? (
              chatDetails
                ?.slice(0, visibleCount)
                .map((item: { id: string; question: string }) => (
                  <li className="summary__content__item" key={item?.id}>
                    <p className="item">{item?.question}</p>
                  </li>
                ))
            ) : (
              <p>No summary found</p>
            )}
          </ul>
          {visibleCount < chatDetails.length && (
            <button onClick={showMore}>Show More</button>
          )}
        </>
      )}
    </div>
  );
};

export default Summary;

import React, { useEffect, useState } from "react";
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
  const [showMoreItems, setShowMoreItems] = useState(false);
  const [visibleCount, setVisibleCount] = useState(2);

  const showMore = () => {
    if (showMoreItems) {
      setVisibleCount(chatDetails.length);
      setShowMoreItems(false);
    } else {
      setVisibleCount(2);
      setShowMoreItems(true);
    }
  };

  console.log("chatDetails", chatDetails);
  useEffect(() => {
    if (chatDetails && chatDetails.length > 2 && !showMoreItems)
      setShowMoreItems(true);
  }, [chatDetails]);

  console.log(showMoreItems, visibleCount);
  return (
    <div className="summary">
      <p className="summary__title">
        <SummaryIcon />
        {title}
      </p>
      {!showHide && (
        <>
          <ul className="summary__content">
            {chatDetails && chatDetails.length > 0 ? (
              chatDetails
                ?.slice(0, visibleCount)
                ?.reverse()
                .map((item: { id: string; question: string }) => (
                  <li className="summary__content__item" key={item?.id}>
                    <p className="item">{item?.question}</p>
                  </li>
                ))
            ) : (
              <p className="alert-msg">No summary</p>
            )}
          </ul>
          {chatDetails.length > 2 && (
            <a className="link" onClick={() => showMore()}>
              {showMoreItems ? "Show More" : "show less"}
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default Summary;

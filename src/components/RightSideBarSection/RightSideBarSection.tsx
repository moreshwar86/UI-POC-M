import React, { useEffect } from "react";
import "./RightSideBarSection.scss";
import Summary from "./component/Summary";
import Todo from "./component/ToDo";
import YourRequests from "./component/YourRequests";
import ArrowRight from "../../assets/icons/ArrowRight";
import { useDispatch, useSelector } from "react-redux";
import ArrowLeft from "../../assets/icons/ArrowLeft";
import { hideRightSidebar } from "../../store/searchbar";
import { fetchSummaryDetails } from "../../store/summary/api";
import { fetchTodoList } from "../../store/todoList/api";
import { fetchMyRequestsList } from "../../store/myRequests/api";
import UserIcon from "../../assets/icons/user";
import UserProfileIcon from "../../assets/icons/UserProfileIcon";

interface RightSideBarSectionProps {
  children?: React.ReactNode;
}

const RightSideBarSection: React.FC<RightSideBarSectionProps> = () => {
  const dispatch = useDispatch();
  const stateData = useSelector((state: any) => state);

  const {
    summaryData,
    todoListData,
    myRequests,
    searchbar: { rightSidebarHidden, chatDetails },
    loginDetails: { userDetails },
  } = stateData;
  console.log("login", userDetails);
  const [showHide, setShowHide] = React.useState(false);

  const fetchDetails = async () => {
    await dispatch(fetchSummaryDetails() as any);
    await dispatch(fetchTodoList() as any);
    await dispatch(fetchMyRequestsList() as any);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  useEffect(() => {
    setShowHide(rightSidebarHidden);
  }, [rightSidebarHidden]);

  return (
    <div
      className={`right-side-bar-section ${
        showHide
          ? "right-side-bar-section-close"
          : "right-side-bar-section__widthDiv"
      }`}
    >
      <div
        className="user-profile"
        // onClick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
      >
        <div className="user-profile__details">
          <UserProfileIcon className="user-icon" />

          <div>
            <p>{userDetails?.username}</p>
            {!showHide && <span>{userDetails?.role}</span>}
          </div>
        </div>
        {!showHide ? (
          <ArrowRight
            onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ArrowLeft
            onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {/* {!showHide ? (
        <ArrowRight
          onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
          style={{ cursor: "pointer" }}
        />
      ) : (
        <ArrowLeft
          onclick={() => dispatch(hideRightSidebar(!rightSidebarHidden))}
          style={{ cursor: "pointer" }}
        />
      )} */}
      <Summary showHide={rightSidebarHidden} />
      <Todo showHide={rightSidebarHidden} content={todoListData?.todoList} />
      <YourRequests
        showHide={rightSidebarHidden}
        content={myRequests?.myRequestsData}
      />
    </div>
  );
};
export default RightSideBarSection;

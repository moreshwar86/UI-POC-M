import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import { useDispatch, useSelector } from "react-redux";
import ArrowUpWithCircle from "../../assets/icons/ArrowUpWithCircle";
import { hideRightSidebar, setChatDetails } from "../../store/searchbar";
import { fetchQuery, fetchSuggestions } from "../../store/searchbar/api";
import Loader from "../Loader/Loader";
import RequestPrForm from "../RequestWorkflow/RequestPrForm/RequestPrForm";
import { useNavigate } from "react-router-dom";
import Markdown from "react-markdown";

interface SearchBarProps {
  onSearch?: (searchTerm: string) => void;
}
interface ChatData {
  id: number;
  question: string;
  answer: string;
  loading: boolean;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const answerRef = useRef<(HTMLDivElement | null)[]>([]);
  const questionRef = useRef<(HTMLDivElement | null)[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  // const [chatDetails, setChatData] = useState<ChatData[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState("");

  const searchState = useSelector((state: any) => state?.searchbar);
  const {
    rightSidebarHidden,
    chatAnswer,
    loading,
    suggestionsList,
    chatDetails,
  } = searchState;
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };
  const handleClick = async () => {
    setSearchTerm("");
    setTimeout(() => {
      questionRef.current[chatDetails.length]?.scrollIntoView({
        behavior: "smooth",
      });
    }, 500);
    if (searchTerm) {
      // Dispatch the fetchQuery action
      dispatch(
        hideRightSidebar(searchTerm || chatDetails?.length > 0 ? true : false)
      );
      dispatch(
        setChatDetails([
          ...chatDetails,
          {
            id: chatDetails.length + 1,
            question: searchTerm,
            answer: "",
            loading: true,
          },
        ])
      );
      // setChatData([
      //   ...chatDetails,
      //   {
      //     id: chatDetails.length + 1,
      //     question: searchTerm,
      //     answer: "",
      //     loading: true,
      //   },
      // ]);
      await dispatch(
        fetchQuery({
          query: searchTerm,
        }) as any
      );
    }
  };

  useEffect(() => {
    if (chatAnswer) {
      if (chatDetails?.length > 0) {
        // setChatData(
        //   chatDetails.map((item: any) => {
        //     if (item.id === chatDetails.length) {
        //       return {
        //         ...item,
        //         answer: chatAnswer,
        //         loading: false,
        //       };
        //     }
        //     return item;
        //   })
        // );
        dispatch(
          setChatDetails(
            chatDetails.map((item: any) => {
              if (item.id === chatDetails.length) {
                return {
                  ...item,
                  answer: chatAnswer,
                  loading: false,
                };
              }
              return item;
            })
          )
        );
      }
      setSearchTerm("");
      setSelectedSuggestion("");
      dispatch(hideRightSidebar(true));
      setTimeout(() => {
        answerRef.current[chatDetails.length - 1]?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [chatAnswer]);

  useEffect(() => {
    if (selectedSuggestion) {
      //setChatData([]);
      dispatch(setChatDetails([]));
      dispatch(hideRightSidebar(true));
    }
  }, [selectedSuggestion]);

  const getSuggestions = async () => {
    await dispatch(fetchSuggestions() as any);
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  const handleSuggestionClick = (suggestion: string) => {
    setSelectedSuggestion(suggestion);
    dispatch(hideRightSidebar(true));
    navigate(suggestion.toLowerCase().replace(" ", "-"));
  };

  function convertToBold(text: any) {
    // Find the first and last occurrence of "**" and replace with <b> and </b>
    let firstAsterisk = text.indexOf("**");
    let lastAsterisk = text.lastIndexOf("**");

    if (
      firstAsterisk !== -1 &&
      lastAsterisk !== -1 &&
      firstAsterisk !== lastAsterisk
    ) {
      // Replace the first "**" with <b>
      text =
        text.slice(0, firstAsterisk) + "<b>" + text.slice(firstAsterisk + 2);

      // Replace the last "**" with </b>
      text =
        text.slice(0, lastAsterisk) + "</b>" + text.slice(lastAsterisk + 2);
    }

    return text;
  }

  return (
    <div
      className={`search-bar-container ${
        (chatDetails?.length > 0 || selectedSuggestion) &&
        "search-bar-container__bottom"
      }
          ${rightSidebarHidden && "expanded-search-bar"}
      }`}
    >
      {!(chatDetails?.length > 0) && !selectedSuggestion && (
        <p className="search-bar__title">Hi User! Welcome to Maestro</p>
      )}
      <div className={"chat-main-container"}>
        {chatDetails &&
          chatDetails?.map((chat: any, index: number) => (
            <div key={index} className="chat-container">
              <div
                key={index}
                className="chat-container__question"
                ref={(el) => (questionRef.current[index] = el)}
              >
                <p className="helper-text">You</p>
                <p className="text">{chat.question}</p>
              </div>
              {chat.loading ? (
                <div className="chat-container__answer">
                  <p className="helper-text">Assistance</p>
                  <div className="text-container">
                    <Loader />
                  </div>
                </div>
              ) : (
                <div
                  className="chat-container__answer"
                  ref={(el) => (answerRef.current[index] = el)}
                >
                  <p className="helper-text">Assistance</p>
                  <div className="text-container">
                    <div className="icon">M</div>
                    <div className="text">
                      <Markdown>{chat.answer}</Markdown>
                    </div>
                    {/* <p
                      className="text"
                      dangerouslySetInnerHTML={{
                        __html: chat.answer
                          .replaceAll(/\n/g, "<br>")
                          ?.replaceAll("#", ""),
                      }}
                    /> */}
                  </div>
                </div>
              )}
            </div>
          ))}
        {/* {selectedSuggestion === "Raise PR" && (
          <div className="chat-container">
            <RequestPrForm />
          </div>
        )} */}
      </div>
      <div className="search-bar">
        <ArrowUpWithCircle
          className={`search-bar__icon`}
          fill={searchTerm ? "white" : "lightgray"}
          // ${isBottom ? "rotated" : ""}
          onClick={handleClick}
          style={{
            cursor: searchTerm ? "pointer" : "not-allowed",
          }}
        />
        <input
          type="text"
          placeholder="Message Maestro"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar__input"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
        />
      </div>
      {/* {!(chatDetails?.length > 0) && !selectedSuggestion && (
        <div className="search-bar-container__suggestion">
          {suggestionsList?.map((suggestion: any, index: number) => (
            <div
              key={index}
              className="search-bar-container__suggestion__item"
              onClick={() => handleSuggestionClick(suggestion?.suggestionText)}
            >
              {suggestion?.suggestionText}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;

import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

import "./Tweet.css";

interface TweetProps {
  content: string;
}

export function Tweet(props: TweetProps) {
  return (
    <Link to="/status" className="tweet">
      <img
        src="https://github.com/NicolasLK.png"
        alt="Nicolas Loffi Kaminski"
      />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Nicolas Loffi Kaminski</strong>
          <span>@algumacoisa</span>
        </div>

        <p>{props.content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            16
          </button>
          <button type="button">
            <ArrowsClockwise />
            10
          </button>
          <button type="button">
            <Heart />
            16
          </button>
        </div>
      </div>
    </Link>
  );
}

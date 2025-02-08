import { useState } from "react";
import { Search, BookOpen, Heart, User } from "lucide-react";
import "./style.css";

export default function Navbar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <nav className="navbarH">
      <div className="navbarH-container">
        <h1 className="logo">
          ani<span className="logo-accent">track</span>
        </h1>
        <div className="navbarH-controls">
          <div
            className={`search-container ${isSearchFocused ? "focused" : ""}`}
          >
            <input
              type="text"
              placeholder="Search anime..."
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="search-input"
            />
            <Search className="search-icon" />
          </div>
          <div className="nav-controls">
            <button className="nav-button">
              <BookOpen />
            </button>
            <button className="nav-button">
              <Heart />
            </button>
            <div className="nav-divider"></div>
            <div className="user-avatar">
              <User />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

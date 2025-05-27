import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="flex justify-between items-center shadow-sm p-5">
      <Link to={"/"}>
        <img src="/logo.svg" width={150} height={100} alt="Logo" />
      </Link>
      <ul className="hidden md:flex gap-16">
        <li>
          <Link
            to="/"
            className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/search"
            className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            to="/new"
            className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
          >
            New
          </Link>
        </li>
        <li>
          <Link
            to="/preowned"
            className="font-medium hover:scale-105 transition-all cursor-pointer hover:text-primary"
          >
            Preowned
          </Link>
        </li>
      </ul>

      {isSignedIn ? (
        <div className="flex items-center gap-5">
          <UserButton />
          <Link to="/profile">
            <Button>Submit Listing</Button>
          </Link>
        </div>
      ) : (
        <SignInButton mode="modal" fallbackRedirectUrl="/profile">
          <Button>Submit Listing</Button>
        </SignInButton>
      )}
    </div>
  );
}

export default Header;

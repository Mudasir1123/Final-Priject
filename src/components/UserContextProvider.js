import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [tweetCount, setTweet] = React.useState(null)
    return (
        <UserContext.Provider value={{ tweetCount, setTweet}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
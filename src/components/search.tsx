
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
import search from './../assets/svg/search.svg'

function Search() {
    const [searchResults, setSearchResults] = useState<any>([]);
    const nav = useNavigate();

    const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const res = await api.get(`/profile/search?q=${event.target.value}`);

        console.log(res.data);
        setSearchResults(res.data);
    };
 

  return (
    <div className="menu-container pattern-background purple-pattern">
        <div className="notif-container retro-border-box trans-purple-box menu-box copy-book-background">
          {/* <h2 className="friend-request-link"> Search:</h2> */}
          <img className="svg-text-edit-search" src={search} alt="" />
          <input type="text" className="the-twofa-popup-input" placeholder="Search for a friend" onChange={handleSearchChange}/>
          <div className="notif-list-search scrollable">
        {
          searchResults.map((res: any, index:number) => {
            return (
              <div className="notif-box-search"
              
              style={{
                cursor: "pointer",
              }}
                
              onClick={
                ()=> {
                    nav("/profil/" + res?.login, { replace: true });
                }
                
            }
            >
                <div className=" notif-msg-container-search-name" >
                    {
                        res?.login
                    }
                </div>
              </div>
            );
          })
        }
          </div>
        </div>
      </div>
  );
}

export default Search
import React,{useState,useEffect} from "react";
import './index.css';

const Api = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchName, setSearchName] = useState("welcome");
    const [input,setInput] = useState("");

    const Data = async () =>{

        try{
            const url=`https://api.unsplash.com/search/photos/?client_id=RUDqL7rtFc14Ubym9O-CQ3PrpQ-t8vomxsJSlqHXPfs&query=${searchName}&page=1&per_page=100`;
            const response = await fetch(url)
            const data = await response.json();
            setPhotos(data.results);
            console.log(data.results);
        
        
        setLoading(false);
         }  catch (error) {
            console.error(error);
          }
    };
    useEffect(() => {
        Data();
      }, [searchName]);

      const searchNew = (e) => {
            e.preventDefault();
            if (input) {
              setSearchName(input);
              console.log(searchName)
            }
          };   


          if (loading) {
                return <div className="loading">...Loading...</div>;
              }
    return(
        <div>
             <div className="header-navbar">
            <div className="Name"><span class="logo"><i class='bx bxl-netlify'  ></i></span>PHOTO SHOP</div>
            <div className="nav-components">
                <div><a className="link">Home</a></div>
                <div><a className="link">About Us</a></div>
                <div><a className="link">Contact</a></div>
            </div>
                    
           <form>
                <div className="header-form">
            <div class="input">
                <div className="inside">
                <input
              type="text"
              value={input}
              className="input-text"
              placeholder="search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            ></input>
            </div>
            </div>
            <div class="button">
            <button onClick={(e) => searchNew(e)}>Search</button>
            </div>
            </div>
            </form>
            </div>
        <div className="main-div">
       {photos.length > 0 && photos.map((photo,index)=>(
           <div key={index}>
               <img
                src={photo.urls.small}
                alt={photo.alt_description}
                className="resize-image"
              />
           </div>
       )
        )
        }
        </div>
        </div>
    );
};

export default Api;












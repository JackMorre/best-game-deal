import "../components/SelectedGame/SelectedGame.css"
import { Stack } from "react-bootstrap";
import { SelectedGameThumbnail } from "../components/SelectedGame/SelectedGameThumbnail";
import { SelectedGameReviews } from "../components/SelectedGame/SelectedGameReviews";

import "../components/SelectedGame/SelectedGame.css";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { SelectedGameBesOption } from "../components/SelectedGame/SelectedGameBesOption";
import { useEffect, useState } from "react";
import axios from "axios";

export const SelectedGame = ({deal}) => {
    const [options, setOptions] = useState([])
    const [info, setInfo] = useState()
    const [optionLoading, setOptionLoading] = useState(false)

    useEffect(()=> {
        getOptions();
    })

    const stores = [
        {
            storeID: "1",
            storeName: "Steam",
            images: "/img/stores/logos/0.png",
        },
        {
            storeID: "2",
            storeName: "GamersGate",
            images: "/img/stores/logos/1.png",
        },
        {
            storeID: "3",
            storeName: "GreenManGaming",
            images: "/img/stores/logos/2.png"
        },
        {
            storeID: "7",
            storeName: "GOG",
            images: "/img/stores/logos/6.png",
        },
        {
            storeID: "8",
            storeName: "Origin",
            images: "/img/stores/logos/7.png",
        },
        {
            storeID: "11",
            storeName: "Humble Store",
            images:"/img/stores/logos/10.png",
        },
        {  
            storeID: "13",
            storeName: "Uplay",
            images:"/img/stores/logos/12.png",
        },
        {  
            storeID: "15",
            storeName: "Fanatical",
            images:"/img/stores/logos/14.png",
        },        
        {  
            storeID: "21",
            storeName: "WinGameStore",
            images:"/img/stores/logos/20.png",
        },
        {  
            storeID: "23",
            storeName: "GameBillet",
            images:"/img/stores/logos/22.png",
        },
        {  
            storeID: "24",
            storeName: "Voidu",
            images:"/img/stores/logos/23.png",
        },
        {  
            storeID: "25",
            storeName: "Epic Games Store",
            images:"/img/stores/logos/24.png",
        },
        {  
            storeID: "27",
            storeName: "Gamesplanet",
            images:"/img/stores/logos/26.png",
        },
        {  
            storeID: "28",
            storeName: "Gamesload",
            images:"/img/stores/logos/27.png",
        },
        {  
            storeID: "29",
            storeName: "2Game",
            images:"/img/stores/logos/28.png",
        },
        {  
            storeID: "30",
            storeName: "IndieGala",
            images:"/img/stores/logos/29.png",
        },
        {  
            storeID: "31",
            storeName: "Blizzard Shop",
            images:"/img/stores/logos/30.png",
        },
        {  
            storeID: "33",
            storeName: "DLGamer",
            images:"/img/stores/logos/32.png",
        },
        {  
            storeID: "34",
            storeName: "Noctre",
            images:"/img/stores/logos/33.png",
        },
        {  
            storeID: "35",
            storeName: "DreamGame",
            images:"/img/stores/logos/34.png",
    },
    ]

    const getOptions = async () => {
        try {
            const res = await axios.get(`https://www.cheapshark.com/api/1.0/games?id=${deal.gameID}`)
            const resData = res.data;
            setOptions(resData.deals)
            setInfo(resData.info);
            setOptionLoading(true)
        } catch (err) {
            alert(err.message)
        }
    }

    return (
        <Stack className="body-page">
        <div className="widthForSearch">
        <SearchBar/>
        </div>
        <SelectedGameThumbnail
        header={info?.title}
        thumbnail={info?.thumb} 
        />
            <div className="row">
            <div className="col">
                {optionLoading && options.map((option) => {
                        /* find the store by store id in the store array */ 
                        const store =  stores.find((store) => {
                            return store.storeID === option.storeID
                        })
                        
                        /* retrive the image from the store - find methods */
                        return <SelectedGameBesOption
                        key={option.storeID}
                        price={option.price}
                        subTitle={store.storeName}
                        image={store?.images}
                        title={info.title}
                        />}
                )}
            </div>
            <div className="col"><SelectedGameReviews/></div>
            </div>      
        </Stack>
    );
    };

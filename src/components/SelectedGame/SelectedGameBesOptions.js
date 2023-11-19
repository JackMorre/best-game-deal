import { SelectedGameBesOption } from "./SelectedGameBesOption";

export const SelectedGameBestOptions = () => {
    const store = [
        {
            storeID: "1",
            storeName: "Steam",
            isActive: 1,
            images: "/img/stores/logos/0.png",
        },
        {
            storeID: "2",
            storeName: "GamersGate",
            isActive: 1,
            images: "/img/stores/logos/1.png",
        },
        {
            storeID: "3",
            storeName: "GreenManGaming",
            isActive: 1,
            images: "/img/stores/logos/2.png"
        },
        {
            storeID: "7",
            storeName: "GOG",
            isActive: 1,
            images: "/img/stores/logos/6.png",
        },
        {
            storeID: "8",
            storeName: "Origin",
            isActive: 1,
            images: "/img/stores/logos/7.png",
        },
        {
            storeID: "11",
            storeName: "Humble Store",
            isActive: 1,
            images:"/img/stores/logos/10.png",
        },
        {  
            storeID: "13",
            storeName: "Uplay",
            isActive: 1,
            images:"/img/stores/logos/12.png",
        },
        {  
            storeID: "15",
            storeName: "Fanatical",
            isActive: 1,
            images:"/img/stores/logos/14.png",
        },        
        {  
            storeID: "21",
            storeName: "WinGameStore",
            isActive: 1,
            images:"/img/stores/logos/20.png",
        },
        {  
            storeID: "23",
            storeName: "GameBillet",
            isActive: 1,
            images:"/img/stores/logos/22.png",
        },
        {  
            storeID: "24",
            storeName: "Voidu",
            isActive: 1,
            images:"/img/stores/logos/23.png",
        },
        {  
            storeID: "25",
            storeName: "Epic Games Store",
            isActive: 1,
            images:"/img/stores/logos/24.png",
        },
        {  
            storeID: "27",
            storeName: "Gamesplanet",
            isActive: 1,
            images:"/img/stores/logos/26.png",
        },
        {  
            storeID: "28",
            storeName: "Gamesload",
            isActive: 1,
            images:"/img/stores/logos/27.png",
        },
        {  
            storeID: "29",
            storeName: "2Game",
            isActive: 1,
            images:"/img/stores/logos/28.png",
        },
        {  
            storeID: "30",
            storeName: "IndieGala",
            isActive: 1,
            images:"/img/stores/logos/29.png",
        },
        {  
            storeID: "31",
            storeName: "Blizzard Shop",
            isActive: 1,
            images:"/img/stores/logos/30.png",
        },
        {  
            storeID: "33",
            storeName: "DLGamer",
            isActive: 1,
            images:"/img/stores/logos/32.png",
        },
        {  
            storeID: "34",
            storeName: "Noctre",
            isActive: 1,
            images:"/img/stores/logos/33.png",
        },
        {  
            storeID: "35",
            storeName: "DreamGame",
            isActive: 1,
            images:"/img/stores/logos/34.png",
    },
    ]
    return (
        <div >
            {store.map((store) => {
                    return <SelectedGameBesOption key={store.storeID} store={store}/>
                })}          
        </div>
    );
};
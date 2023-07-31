let playerObjects=[false,false,false];

export function getPlayerObject(){
    return playerObjects;
}
export function updatePlayerObject(newList){
    playerObjects=newList;
}
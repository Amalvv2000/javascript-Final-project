let cards=[
    {
        image:"https://comicvine.gamespot.com/a/uploads/square_small/2/26503/685922-tom_jerry.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://comicvine.gamespot.com/a/uploads/square_small/2/26503/685922-tom_jerry.jpg",
        value:1,
        // amal
        status:"closed"
    },
    {
        image:"https://assets.mycast.io/actor_images/actor-ben-10-198489_large.jpg?1618152869",
        value:2,
        status:"closed"},
    {
        image:"https://assets.mycast.io/actor_images/actor-ben-10-198489_large.jpg?1618152869",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/e4/a8/cd/e4a8cd6f68ac016b6433ca826885f19a.jpg",
        value:3,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/e4/a8/cd/e4a8cd6f68ac016b6433ca826885f19a.jpg",
        value:3,
        // amal
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BYjcwNWE3ZWQtMGFkYS00MjVlLTk3ZWUtNzE4ZjgzZGYxZjBkXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://m.media-amazon.com/images/M/MV5BYjcwNWE3ZWQtMGFkYS00MjVlLTk3ZWUtNzE4ZjgzZGYxZjBkXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/515aTtsVJlL._SX360_BO1,204,203,200_.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/I/515aTtsVJlL._SX360_BO1,204,203,200_.jpg",
        value:5,
        // amal
        status:"closed"
    }

]


let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
    // amal
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

// amal
    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){
// amal
    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            val1=null;
            val2=null;
            cardCount=1;

        }
        else{

            alert("..GAME OVER..");
            location.reload();

        }

        
    }

    displayCards(cards);

}
// amal
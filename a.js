var game_board= [[0,0,0],
                  [0,0,0],
                  [0,0,0]
                  ];
var p1=2,p2=5,player=2,c=1,sc1=0,sc2=0,l=0,endGame=0,cnt=0,
playH=[[1,2,3],[4,5,6],[7,8,9]],playV=[[1,4,7],[2,5,8],[3,6,9]],playDiag1=[[1,5,9]],playDiag2=[[3,5,7]];
const a=document.querySelectorAll(".a");
let p1i="photos/p1.png",p2i="photos/p2.png";
var vsComputer=1;
let multi=document.getElementsByClassName("b"),lbl1=document.getElementById("p1"),lbl2=document.getElementById("p2"),lbl3=document.getElementById("outcome");
multi[0].addEventListener("click",function(){vsComputer=0;document.getElementById("second").style.display="block";
document.getElementById("first").style.display="none"});
multi[1].addEventListener("click",function(){vsComputer=1;document.getElementById("second").style.display="block";
document.getElementById("first").style.display="none"});
var newGame=document.getElementById("ng");
newGame.addEventListener("click",function(){NewGame(a);});
if (!vsComputer) {
  for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click",function(){
    c%2==0?BoardSetter(a[i].value,p2,a,i,p2i):BoardSetter(a[i].value,p1,a,i,p1i);
    c++;
  });
}
}
//vs Computer
if (vsComputer) {
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click",function(){
    if (c%2!=0) {
      BoardSetter(a[i].value,p1,a,i,p1i);
      c++;
      setTimeout(Play,2000);
      c++;
     
    }
}); 
}
}
//functions
function BoardSetter(n,p,a,i,img) {
  n==1?game_board[0][0]=p:p=p;
  n==2?game_board[0][1]=p:p=p;
  n==3?game_board[0][2]=p:p=p;
  n==4?game_board[1][0]=p:p=p;
  n==5?game_board[1][1]=p:p=p;
  n==6?game_board[1][2]=p:p=p;
  n==7?game_board[2][0]=p:p=p;
  n==8?game_board[2][1]=p:p=p;
  n==9?game_board[2][2]=p:p=p;
  GamePlayer(a,i,img);
}
function GamePlayer(a,i,img) {
  a[i].innerHTML="<img src="+img+" alt="+"a"+">"
  a[i].disabled=true;
  Refferre(game_board);
  cnt++;
  console.log(cnt);
  if(cnt==9){console.log("Game draw");endGame=1;}
}
//function for calculating the winner
function Row(board) {
  let sum=0,rows=[];
  for (let i = 0; i < 3; i++) {
    for (let ii = 0; ii < 3; ii++) {
      sum+=board[i][ii];
    }
    rows.push(sum);
    sum=0;
  }
  return rows;
}
function Column(board) {
  let sum=0,columns=[]
  for (let i = 0; i < 3; i++) {
    for (let ii = 0; ii < 3; ii++) {
      sum+=board[ii][i];
    }
    columns.push(sum);
    sum=0;
  }
  return columns;
}
function Diagonals(board) {
  let sum=0,pDiag=[0,1,2],nDiag=[[0][2],[1][1],[2][0]],diagonals=[];
  for (let i = 0; i < 3; i++) {
    sum+=board[pDiag[i]][pDiag[i]];
  }
  diagonals.push(sum);
  sum=0;
  sum+=board[0][2];
  sum+=board[1][1];
  sum+=board[2][0];
  diagonals.push(sum);
  return diagonals;
}
function Refferre(board) {
let sum=0;
let rows=Row(board);
let columns=Column(board);
let diagonals=Diagonals(board);
  for (let i of rows) {
    if (i==6 || i==15) {
      if (i==6) {
        console.log("Player 1 Won");
        endGame=1;
        GameWon(a);
        sc1++;
        lbl1.innerHTML=sc1;
        
      }
      if (i==15) {
        console.log("Player 2 Won");
        endGame=1;
        GameWon(a);
        sc2++;
        lbl2.innerHTML=sc2;
        
      }
    }}
  for (let i of columns) {
    if (i==6 || i==15) {
      if (i==6) {
        console.log("Player 1 Won");
        endGame=1;
        GameWon(a);
        sc1++;
        lbl1.innerHTML=sc1;
      }
      if (i==15) {
        console.log("Player 2 Won");
        endGame=1;
        GameWon(a);
        sc2++;
        lbl2.innerHTML=sc2;
      }
    }}
  for (let i of diagonals) {
    if (i==6 || i==15) {
      if (i==6) {
        console.log("Player 1 Won");
        endGame=1;
        GameWon(a);
        sc1++;
        lbl1.innerHTML=sc1;
      }
      if (i==15) {
        console.log("Player 2 Won");
        endGame=1;
        GameWon(a);
        sc2++;
        lbl2.innerHTML=sc2;
      }
    }} }
function GameWon(buttons) {
  for (let a of buttons) {
    a.disabled=true;
  }
  
}
function NewGame(buttons) {
game_board= [[0,0,0],
                  [0,0,0],
                  [0,0,0]
                  ];
  cnt=0;
  endGame=0;
  p1=2,p2=5,player=2,c=1;
  for (let a of buttons) {
    a.innerHTML="";
    a.disabled=false;
  }
}

//VS Computer
function Computer(s) {
if(!endGame){
  Legal(s)
  Legal(s)
  Legal(s)
  Legal(s)
  Legal(s)
  Legal(s)
  Legal(s)
  Legal(s)
  BoardSetter(s[l],p2,a,s[l]-1,p2i)
  l=0;
} 
}
function Dec(n) {
let play=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
let rows=Row(game_board);
let columns=Column(game_board);
let diagonals=Diagonals(game_board);
let c=0;
let played=0;
for (let i of rows) {
    if (i==n) {
      if(c==0){
        Computer(play[0]);
        played=1;
        return played;
      }else if(c==1){
        Computer(play[1]);
        played=1;
        return played;
      }else if(c==2){
        Computer(play[2]);
        played=1;
        return played;
      }  
    }
  c++;
}
  c=0;

for (let i of columns) {
    if (i==n) {
      if(c==0){
        Computer(play[3]);
        played=1;
        return played;
      }else if(c==1){
        Computer(play[4]);
        played=1;
        return played;
      }else if(c==2){
        Computer(play[5]);
        played=1;
        return played;
      }  
    }
  c++;
}
  c=0;
  for (let i of diagonals) {
    if (i==n) {
      if(c==0){
        Computer(play[6]);
        played=1;
        return played;
      }else if(c==1){
        Computer(play[7]);
        played=1;
        return played;
      } 
    }
  c++;
}
  c=0;
return played;
}
function Legal(s) {


  
  if(a[(s[l]-1)].disabled==true){
  l++;
  }
}
function Play() {
  let playOr=[5,1,4,8,9,7,3,6,2];
  let q;
  q=Dec(10);
  q=Dec(4);
  !q?Computer(playOr):console.log("Dec used");
}
const msg_user = document.getElementById('message_user');
const msg_client = document.getElementById('message_client');

const btn_send = document.getElementById('envoyer');
const btn_emoji = document.getElementById('btn_emoji');

const chat_list = document.getElementById('chat_list');



const emojis = ["👍","👌","👏","🙏","🆗","🙂","😀","😃","😉","😊","😋","😌","😏","😐","😑","😒","😓","😂","🤣","😅","😆","😜","😹","🚶","👫","👬","👭","😙","😘","🏠","👆","🖕","👋","👎","👈","👉"];


btn_send.onclick = function() {

    const li = document.createElement('li');

    if (msg_user.value != "" && msg_client.value !=""){
        alert("Veuillez entrer un message à la fois ! ");


    }if (msg_user.value == "" && msg_client.value == ""){
        alert("Veuillez entrer un message ! ");

    }else if (msg_user.value != ""){
        const br = document.createElement('br');
        li.appendChild(document.createTextNode("Vous : "));
        li.appendChild(br);
        li.appendChild(document.createTextNode(msg_user.value));
        chat_list.appendChild(li);

    }else{
        const br = document.createElement('br');
        li.appendChild(document.createTextNode("Client : "));
        li.appendChild(br);
        li.appendChild(document.createTextNode(msg_client.value));
        chat_list.appendChild(li);    
    }
}
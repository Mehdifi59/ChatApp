const msg_user = document.getElementById('message_user');
const msg_client = document.getElementById('message_client');

const btn_send = document.getElementById('envoyer');
const btn_emoji = document.getElementById('btn_emoji');

const chat_list = document.getElementById('chat_list');

const emojispan = document.getElementById('emojispan');


const emojis = ["👍","👌","👏","🙏","🆗","🙂","😀","😃","😉","😊","😋","😌","😏","😐","😑","😒","😓","😂","🤣","😅","😆","😜","😹","🚶","👫","👬","👭","😙","😘","🏠","👆","🖕","👋","👎","👈","👉"];

const span = document.createElement('span');
emojis.forEach((emoji) => {
    const btn_for_emoji = document.createElement('button');
    btn_for_emoji.textContent = emoji;
    span.appendChild(btn_for_emoji);
    emojispan.appendChild(span);
    
    btn_for_emoji.addEventListener('click', function(e) {
        e.preventDefault();
        const active_input = document.activeElement;
        msg_user.value += emoji;
        console.log(active_input)
    })

})



btn_send.onclick = function() {
    const date = new Date();
    const li = document.createElement('li');

    if (msg_user.value != "" && msg_client.value !=""){
        alert("Veuillez entrer un message à la fois ! ");
        return

    }if (msg_user.value == "" && msg_client.value == ""){
        alert("Veuillez entrer un message ! ");
        return
        
    }else if (msg_user.value != ""){
        li.appendChild(document.createTextNode("Vous : "));
        li.appendChild(document.createTextNode(msg_user.value));
        li.appendChild(document.createElement('br'));
        li.appendChild(document.createTextNode(date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds()));
        chat_list.appendChild(li);
        
    }else{
        li.appendChild(document.createTextNode("Client : "));
        li.appendChild(document.createTextNode(msg_client.value));
        li.appendChild(document.createElement('br'));
        li.appendChild(document.createTextNode(date.getHours() + ':' +  date.getMinutes() + ':' + date.getSeconds()));
        chat_list.appendChild(li);    
    }

    msg_user.value = "";
    msg_client.value = "";
}


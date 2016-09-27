
    var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open('POST', 'https://mandrillapp.com/api/1.0/messages/send.json');
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) alert('Mail sended!')
            else if(xmlhttp.status == 500) alert('Check apikey')
            else alert('Request error');
        }
    }




    function sendMail(sub,text){
        xmlhttp.send(JSON.stringify({'key': 'zqvNnJE4ZMQLGZxyFO8gfQ',
            'message': {
                'from_email': 'girst_mc@mail.ru',
                'to': [{'email': 'girst_mc@mail.ru', 'type': 'to'}],
                'autotext': 'true',
                'subject': sub,
                'html': text
            }}))};

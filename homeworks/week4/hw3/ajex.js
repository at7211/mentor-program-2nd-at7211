document.addEventListener('DOMContentLoaded', () => {

    //連線要帶的資料
    let id = "mtqjxh47u9hxaeilikwhwwzy11u4mk";
    let game = "League%20of%20Legends";
    let limit = 20;
    let url = "https://api.twitch.tv/kraken/streams/?client_id=" + id + '&game=' + game + '&limit' + limit;

    //連線
    let request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => {
        //成功取得資料
        if (request.status >= 200 && request.status < 400) {
            let stream_data = JSON.parse(request.responseText).streams;

            //取的資料後的動作
            for (let i = 0; i < stream_data.length; i++) {
                //產生 live stream 的元素
                let stream_div = document.createElement('div');
                stream_div.setAttribute('class', 'stream');

                //live stream 內的 html
                let stream_html = `
                               <a href="${stream_data[i].channel.url}" target="_blank">
                                <div class="preview">
                                    <img src="${stream_data[i].preview.medium}" />
                                </div>
                                <div class= "description">
                                    <div class="logo">
                                        <img src="${stream_data[i].channel.logo}" />
                                    </div>
                                <div class="title">
                                    <div class="status">${stream_data[i].channel.status}</div>
                                    <div class="name">${stream_data[i].channel.display_name}</div>
                                </div>
                                </div>
                             </div>
                            </a>
                             `

                let stream_container = document.querySelector('.stream_container');
                stream_container.appendChild(stream_div).innerHTML = stream_html;

            }
        } else {
            document.querySelector('.stream_container').innerText = 'error'

        }
    }
    request.onerror = () => {
        document.querySelector('.stream_container').innerText = 'error'
    };


    request.send();
})
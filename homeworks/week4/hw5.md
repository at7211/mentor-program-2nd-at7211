## 什麼是 DOM？

DOM 的全名為 Document Object Model，由瀏覽器提供，以『結構樹』的方式呈現資料結構，並使開發者可以存取、更動網頁任一節點的架構、內容、屬性、樣式等。
因此是JS與html之間的橋樑。


## 什麼是 Ajax？

ajax全稱Asynchronous JavaScript and XML（異步的JavaScript與XML），是網頁無需刷新頁面、使用js與伺服器進行資料交換的一種技術。

此技術常用於少部分資料作更動，讓使用者能繼續流暢的瀏覽網頁，增進使用者體驗。


## HTTP method 有哪幾個？有什麼不一樣？
- `OPTIONS` ：用來得到指定資源的相關資訊（伺服器版本之類的）。
- `GET` ：請求一個指定的資源，通常只用於取得資料。
- `HEAD`  ：等同於 GET ，但只取得資料的 head。
- `POST` ：發送一份帶有指定資源的請求，通常會改變伺服器的狀態。
- `PUT` ：用來新增或更新指定的資源。
- `DELETE` ：用來刪除指定的資源。
- `TRACE` ：可以用來追蹤指定資源收到請求時的請求內容。
- `CONNECT` ：用來與指定資源建立連線。

method是HTTP協定中定義一組指令可以針對網頁執行特定操作。每個method都有不同的語意造成不同的功能。



## GET 跟 POST 有哪些區別，可以試著舉幾個例子嗎？

get:用於請求伺服器發送某個資源。
post：新增一項資料。（如果存在會新增一個新的）。

但最顯著的差別在於get在傳送資料給sever時會將輸入的資料顯示在網址列，反之 post 則不會，因此多數的登入系統因都採用post method提高安全性。


## 什麼是 RESTful API？
RESTful API是一種設計風格，這種風格使API設計具有整體一致性，易於維護、擴展。並讓人（串接 API 或使用 API 的人）可以很快速的了解你的 API。 

## JSON 是什麼？
一種呈現js物件的資料格式，閱讀易理解，常用於 Ajax 的資料交換格式。

##JSONP 是什麼？
JSONP (JSON with Padding）是解決跨網域限制的方法之一，利用script標籤不受同源政策的限制，可以跨網域的特性，從別的網域取得資料。

## 要如何存取跨網域的 API？

有兩種方式，一種為 JSONP，一種為 CORS。

前者如上述，後者為一份瀏覽器技術的規範，透過添加額外的 HTTP header 使網站取得存取其他網域伺服器特定資源的權限。

當請求不同網域的資源時，會建立一個跨來源 HTTP 請求（cross-origin HTTP request）。所以想跨網域存取的話，Server 必須在 Response 的 Header 裡面加上`Access-Control-Allow-Origin`。當瀏覽器收到 Response 後，若檢查到裡面有包含發起 Request 的 Origin 的話，就會允許通過，讓程式順利接收到 Response。

用比喻來說伺服器就像建立一個通關密語（`Access-Control-Allow-Origin`），唯有知曉通關密語的人才得以擁有權限允許通過（Requset有對應的Origin）

目前主流已少用使用 JSONP，主要原因是即是建立起 CORS。另外CORS可以支援其他的 HTTP請求（JSONP只能使用 GET method）


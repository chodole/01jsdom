export class PageIndex {
    execute(date){
        let $content = document.querySelector("#content");

        let tag = "";

        tag += 
        `
        <style>
            #content-index{
                margin: 0 auto;
            }
        </style>
        `;

        tag+=
        `
        <table id="content-index">
            <tr>
                <td><h1>메인화면</h1></td>
            </tr>
        </table>
        `;

        $content.innerHTML=tag;
    }
}
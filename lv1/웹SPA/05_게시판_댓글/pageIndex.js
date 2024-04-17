export class PageIndex {

    execute(data) {
        let $content = document.querySelector("#content");

        let tag = "";

        tag += `
            <style>
                #content-index {
                    margin: 0 auto;
                }
            </style>
        `;

        tag += `
            <table id="content-index">
                <tr>
                    <td><h1>홈페이지 메인 화면</h1></td>
                </tr>
            </table>
            
        `;

        $content.innerHTML = tag;
    }

}
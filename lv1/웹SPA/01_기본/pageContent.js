

export class PageContent{
    excute(){

        let $content = document.querySelector("#content");
        let tag = "";
        tag += 
        `
            <table>
                <tr>
                    <td><h1>메인 페이지</h1></td>
                </tr>
            </table>
        `;

        $content.innerHTML = tag;
    }
}
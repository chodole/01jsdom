export class PageFooter {

    execute(data) {
        let $footer = document.querySelector("#footer");

        let tag = "";
        tag += 
        `
        <style>
            /* line */
            .line {
                background-color: #CCCCCC;
                border: 0;
                height: 1px;
                margin: 50px 0px;
            }
            /* footer */
            #footer {
                margin: 0 auto;
            }
        </style>
        `;

        tag += 
        `
        <hr class="line">

        <!-- footer -->
        <table id="footer">
            <tr>
                <td><img src="./img/footer.png"></td>
            </tr>
        </table> 
        `;

        $footer.innerHTML = tag;
    }
    
}
import React, { useEffect } from "react";

declare global {
    interface Window {
        $crisp: [];
        CRISP_WEBSITE_ID: string;
    }
}

function Crisp() {
    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "39061251-c690-45cf-b9e8-6edb123ffadb";
        (() => {
            const d: any = document;
            const s: any = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("body")[0].appendChild(s);
        })();
    });


    return null;
}
export default Crisp
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import csvReadWrite from './csvReadWrite';
const FormData = require('form-data');

class util {

    public async getAllLinksTitleCSV(baseURL:string){   
       
        type output = {
            url: string;
            title: string;
        };
        
        const titlesoutput: output[] = [];

        // Getting cookie and session ID for auth
        await browser.pause(5000)
        const testCookie = await browser.getCookies();        
        const sessionID = await testCookie[0].value;
        const cookieID = await testCookie[1].value;

        /*  1) Fetch the all the links
            2) Capture the href attribute
            3) Convert it into absolute URL
            4) Filter the results with empty, #, null etc
            5) Fetch the body URL and capture the title 
        */
         await $$('a').forEach(async (link) => {
            await link.getAttribute('href').then(async (href) => {
                try {
                        let url: string | URL = href
                        const specialChars = /#/;
                        
                        if(!specialChars.test(href)){
                                if(url) {
                                    url = new URL(href,baseURL).toString();
                                     try {                                    
                                        let response = await fetch(url,{method:'get',headers:{'cookie':'googtrans=/en/en; remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d='+cookieID+'; vetology_platform_session='+sessionID}});
                                        const body = await response.text();
                                        var $ = await cheerio.load(body)
                                        var titlevalue = await $("title").text();
                                        await titlesoutput.push({ url: url, title: titlevalue})
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }    
                        }  
                } catch (error) {
                    console.log(error)
                }
            })  
        })

        //Write URL, title to CSV output
        const header = [
            { id: 'url', title: 'URL' },
            { id: 'title', title: 'Title' },
        ]
        await csvReadWrite.writeDatatoCSV('./output', 'titleoutput.csv',header,titlesoutput);
    }
}

export default new util();
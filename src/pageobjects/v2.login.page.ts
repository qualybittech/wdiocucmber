class v2LoginPage{

    public async v2AppLaunch(url:string){
        return await browser.url(url)
    }

    public get emailID(){
        return $('[name="user_name"]')
    }

    public get password(){
        return $('//input[@class="form-control password"]') 
    }

    public get loginbutton(){
        return $('//input[@value="Log In"]')
    }

    public get loginHeader(){
        return $('//span[contains(text(),"Bharath")]')
    }

    public async v2Login(v2User : string, v2Password : string){
        await this.emailID.setValue(v2User);
        await this.password.setValue(v2Password);
        await this.loginbutton.click();
    }  
}

export default new v2LoginPage();
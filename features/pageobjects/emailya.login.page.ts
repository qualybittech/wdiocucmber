class emailyaLoginPage{

    public async emailyaAppLaunch(url:string){
        return await browser.url(url)
    }

    public get emailID(){
        return $('[name="email"]')
    }

    public get password(){
        return $('[name="password"]') 
    }

    public get loginbutton(){
        return $('//button[contains(text(),"Login")]')
    }

    public get loginHeader(){
        return $('//h1[contains(text(),"Login")]')
    }

    public async emailyaLogin(emailyaUser : string, emailyaPassword : string){
        await this.emailID.setValue(emailyaUser);
        await this.password.setValue(emailyaPassword);
        await this.loginbutton.click();
    }  
}

export default new emailyaLoginPage();
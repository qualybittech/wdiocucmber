class v2HomePage{

    public get createCase(){
        return $('//img[@src="/assets/images/unavailable-white-blue.jpg"]')
    }

    public get uploadFileLink(){
        return $('//a[@class="docs_uploader_alternate vetology_pd"]')
    }

    public get profileName(){
        return $('//span[@class="hidden-xs"]')
    }

    public get logoutLink(){
        return $('//a[normalize-space()="Sign out"]')
    }

    public async navigateToCreateCase(){
        await this.createCase.click();
        await browser.switchWindow("New case - Upload your images");
    }  

    public async uploadFiles(fileInputPath:string){
        await this.uploadFileLink.click();
        const remoteFilePath = await browser.uploadFile(fileInputPath);
        $('//input[@type="file"]').setValue(remoteFilePath);
    }

    public async logoutV2(){
        await browser.switchToWindow("Cases")
        await this.profileName.click();
        await this.logoutLink.click();
    }
}

export default new v2HomePage();
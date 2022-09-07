class dashboard{

    public get dashboardHeading(){
        return $('//h1[contains(text(),"Hello")]')
    }

    public get availbleCredit(){
        return $('div.flex.items-center.gap-3.justify-end > h1')
    }
}
export default new dashboard();
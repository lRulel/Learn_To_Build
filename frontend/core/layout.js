const Layout = {
    layouts: {
        "/" : {
            header: "",
            footer: "",
        },
    },

    async load() {
        const path = window.location.pathname;
        const layout = this.layouts[path];

        if(layout) {
            if(layout.header) {
                await loader.require(layout.header, "#header");
            }
            if(layout.footer) {
                await loader.require(layout.footer, "#footer");
            }
        } else {
            await loader.require("","#header");
        }
    }
}
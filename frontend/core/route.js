const Router = {
    routes: {
        "/" : {
            html: "",
            css: [],
            js: [],
            auth: false,
        }
    },

    async start() {
        const path = window.location.pathname;
        const route = this.routes[path];

        if(!route) {
            await loader.require("page/error/404.html","#app");
            return;
        }

        if(route.auth) {
            const success = await Auth.check();

            if(!success) {
                localStorage.removeItem('token');
                window.location.replace('/');
                return;
            }
        }

        await loader.require(route.html, "#app");

        if(route.css) {
            route.css.forEach((css)=>{
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = loader.url(css);
                document.head.appendChild(link);
            });
        }

        if(route.js) {
            route.js.forEach((js)=>{
                const script = document.createElement("script");
                script.src = loader.url(js);
                document.body.appendChild(script);
            });
        }
    }
}
const loader = {
    url(path) {
        if(path.startsWith("http://")||path.startsWith("https://")) {
            return path;
        }

        return Config.ROOT + path;
    },

    async require(path, target = "#app") {
        const response = await fetch(this.url(path));
        if(!response.ok){
            throw new Error("Cannot Load: " + path);
        }

        const html = await response.text();
        const element = document.querySelector(target);

        if(!element){
            throw new Error(`Target '${target}' not found.`);
        }

        element.innerHTML = html;
    }
}
const App = {
    async start() {
        await Layout.load();
        await Router.start();
    }
};

App.start();
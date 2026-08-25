const Auth = {
    headers() {
        return {
            'Content-Type':'application/json',
            'Authorization':localStorage.getItem('token'),
        };
    },

    async check() {
        const response = await fetch(Config.API + "/api/auth_check",{
            method: 'POST',
            headers: this.headers(),
        });

        const result = await response.json();
        return result.success;
    }
}
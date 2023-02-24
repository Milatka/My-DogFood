class Api {
    constructor(token) {
        this.path = "https://api.react-learning.ru";
        this.group = "group-8";
        this.token = token;
    }
    signUp(body) {
        body.group = this.group;
        return fetch(`${this.path}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    signIn(body){
        return fetch(`${this.path}/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
    }
    getProducts() {
        return fetch(`${this.path}/products`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getProduct(id) {
        return fetch(`${this.path}/products/${id}`, {
            headers: {
                "authorization": `Bearer ${this.token}`
            }
        })
    }
    getUserInfo() {
        return fetch (`${this.path}/v2/${this.group}/users/me`, {
            headers: {
                "authorization": `Bearer ${this.token}`
                }
            })
    }
    setLike(isLike, id) {
        return fetch(`${this.path}/products/likes/${id}`, {
            method: isLike ? "DELETE" : "PUT", 
            headers:{"authorization": `Bearer ${this.token}`}
        })
    }
    }
export {Api};
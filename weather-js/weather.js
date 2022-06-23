class Weather {
    constructor(city, country) {
        this.apiKey = "8d77807beda0272a2d873f6183bb7f22"
        this.city = city
        this.country = country
    }


    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&${this.country}&appid=${this.apiKey}`)

        const responseData = await response.json()

        return responseData
    }

    // Change location
    changeLocation(city, country) {
        this.city = city
        this.country= country
    }

    
}
const { createApp } = Vue;

createApp({
    data() {
        return {
            red: 128,
            green: 128,
            blue: 128
        };
    },
    computed: {
        rgbColor() {
            return `rgb(${this.red}, ${this.green}, ${this.blue})`;
        },
        hexColor() {
            return `#${(this.red << 16 | this.green << 8 | this.blue).toString(16).padStart(6, "0").toUpperCase()}`;
        }
    },
    methods: {
        async fetchRandomColor() {
            try {
                const response = await fetch("https://dummy-apis.netlify.app/api/color");
                if (!response.ok) throw new Error("Ошибка загрузки цвета");
                
                const data = await response.json();
                this.red = data.rgb.r;
                this.green = data.rgb.g;
                this.blue = data.rgb.b;
            } catch (error) {
                alert("Не удалось загрузить случайный цвет.");
                console.error(error);
            }
        }
    },
    mounted() {
        document.body.style.backgroundColor = this.rgbColor;
    },
    watch: {
        rgbColor(newColor) {
            document.body.style.backgroundColor = newColor;
        }
    }
}).mount("#app");

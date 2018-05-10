export class Color {
    constructor(
        public hue: number,
        public saturation: number,
        public lightness: number,
    ) {}

    public getColor() {
        return `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
    }
}
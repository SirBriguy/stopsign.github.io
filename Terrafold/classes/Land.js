function Land(totalLand) {
    this.land = totalLand;
    this.water = 0;
    this.soil = 0;
    this.transferred = 0;

    this.tick = function(amount) {
        this.water += amount;
        this.turnLandToSoil();
    };

    this.turnLandToSoil = function() {
        this.convertedLand = this.water / 1000;
        if(this.land < this.convertedLand) {
            this.convertedLand = this.land;
        }
        this.land -= this.convertedLand;
        this.soil += this.convertedLand;
        this.water -= this.convertedLand;
    };

    this.transferWater = function() {
        this.transferred = this.water / 1000;
        this.water -= this.transferred;
        return this.transferred;
    };
}